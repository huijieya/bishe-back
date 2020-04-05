<template>
  <div>
    <div class="table">
      <el-table
        :data="directionList"
        stripe
        style="width: 100%">
        <el-table-column
          label="图片">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.picture"
              fit="fill"></el-image>
          </template>
        </el-table-column>
        <el-table-column
          prop="trainDirectionName"
          label="培养方向"
          width="">
        </el-table-column>
        <el-table-column
          prop="trainDirectionContent"
          label="方向介绍"
          width="">
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="更新时间"
          width="">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="editDirection(scope.$index, scope.row)">修改</el-button>
            <el-button
              size="mini"
              @click="deleteDirection(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button class="m30" type="primary" @click="addDirection">增加培养方向</el-button>
  </div>
</template>

<script>
import { getEducateDirection, insertEducateDirection, deleteEducateDirection } from '@/api/educateDirection'
export default {
  data() {
    return {
      directionList: [],
      imgUrl: 'http://120.26.179.168:8080/b39b235ea5084e8e9904d6b3c07f0300.jpg'
    }
  },
  mounted() {
    this.getDirection();

  },
  methods: {
    getDirection() {
      getEducateDirection().then(res => {
        this.directionList = res.data;
        console.log(this.directionList, 'this.directionList');
      })
    },
    addDirection() {
      this.$router.push({path: '/educateDirection/editDirection'})
    },
    editDirection(index,row) {
      this.$router.push({path: '/educateDirection/editDirection', query: {keyId: row.keyId}});
    },
    deleteDirection(index, row) {
      console.log(index, "index")
      console.log(row, "row")

      let keyId = row.keyId;
      console.log(keyId, "删除id")
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteEducateDirection(keyId).then(res => {
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
.table{
    margin: 10px 10px;
}
.m30{
  margin: 30px;
}
</style>
