<template>
  <div>
    <el-row :gutter="12" v-for="(item, index) in directionList" :key=index>
      <el-col class="m15" :span="4">
        <el-card class="plain center" shadow="hover">
          <span class="pointer" @click="queryProcess(item.keyId)">{{ item.trainDirectionName }}</span>
        </el-card>
      </el-col>
    </el-row>

    <el-table
      :data="process"
      stripe
      style="width: 100%">
      <el-table-column
        prop="flowName"
        label="开发流程"
        width="">
      </el-table-column>
      <el-table-column
        prop="flowIntro"
        label="流程介绍"
        width="">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="viewJob(scope.$index, scope.row)">下设岗位</el-button>
          <el-button
            size="mini"
            @click="editProcess(scope.$index, scope.row)">修改</el-button>
          <el-button
            size="mini"
            @click="deleteProcess(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="m30" type="primary" @click="addProcess()">增加开发流程</el-button>
  </div>
</template>

<script>
import { getEducateDirection } from '@/api/educateDirection'
import { getProcess, deleteProcess } from '@/api/process'
export default {
  data() {
    return {
      directionList: [],
      process: [],
      firstDirectionId: '',
      nowDirectionId: ''
    }
  },
  mounted() {
    this.getDirection();
  },
  methods: {
    // 查该方向下培养流程
    queryProcess(keyId) {
      this.nowDirectionId = keyId;
      console.log(this.nowDirectionId, 'nowDirectionId');
      getProcess(keyId).then(res => {
        this.process = res.data.flowInfo;
        console.log(this.process, 'process')
      })
    },
    // 查所有培养方向+初始化
    getDirection() {
      getEducateDirection().then(res => {
        this.directionList = res.data;
        this.firstDirectionId = this.directionList[0].keyId;
        this.nowDirectionId = this.firstDirectionId;
        getProcess(this.firstDirectionId).then(res => {
          this.process = res.data.flowInfo;
        })
      })
    },
    addProcess() {
      this.$router.push({path: '/direction/editProcess', query: {directionId: this.nowDirectionId}})
    },
    editProcess(index,row) {
      this.$router.push({path: '/direction/editProcess', query: {keyId: row.keyId, directionId: this.nowDirectionId}});
    },
    deleteProcess(index, row) {
      let keyId = row.keyId;
      console.log(keyId, "删除id")
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteProcess(keyId).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getDirection();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    viewJob(index, row) {
      this.$router.push({path: '/direction/viewJob', query: {liuchengId: row.keyId}})
    }
  }
}
</script>

<style>
.el-row::after, .el-row::before {
    display: none;
}
</style>
