<template>
  <div>
    <el-table
      :data="jobList"
      stripe
      style="width: 100%">
      <el-table-column
        prop="jobName"
        label="岗位名称"
        width="">
      </el-table-column>
      <el-table-column
        prop="jobContent"
        label="工作内容"
        width="">
      </el-table-column>
      <el-table-column
        prop="jobRequire"
        label="岗位要求"
        width="">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editJob(scope.$index, scope.row)">修改</el-button>
          <el-button
            size="mini"
            @click="delJob(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="m30" type="primary" @click="addJob()">增加岗位</el-button>
  </div>
</template>

<script>
import { queryJob, deleteJob } from '@/api/viewJob'
export default {
  data() {
    return {
      jobList: [],
      liuchengId: ''
    }
  },
  created() {
    this.liuchengId = this.$route.query.liuchengId;
    this.findJob();
  },
  mounted() {
    // this.getDirection();
  },
  methods: {
    // 查该流程下岗位
    findJob() {
      queryJob(this.liuchengId).then(res => {
        this.jobList = res.data;
        console.log(res.data, 'res')
      })
    },
    addJob() {
      this.$router.push({path: '/viewJob/manageJob'})
    },
    editJob(index,row) {
      console.log(row)
      this.$router.push({path: '/viewJob/manageJob', query: {liuchengId: this.liuchengId, jobId: this.jobId, jobItem: row}});
    },
    delJob(index, row) {
      let keyId = row.keyId;
      console.log(keyId, "删除id")
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteJob(keyId).then(res => {
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
    }
  }
}
</script>

<style>
</style>
