<template>
  <div>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="courseSystemName"
        label="课程体系">
      </el-table-column>
      <el-table-column
        prop="courseType"
        label="类别">
      </el-table-column>
      <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="toEdit(scope.$index, scope.row)">修改</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-button class="addbtn" type="primary" @click="toAdd()">增加课程体系</el-button>
  </div>
</template>

<script>
import { getList, deleteCourseSystem } from '@/api/courseSystem'
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.findCourse();
  },
  methods: {
    findCourse() {
      getList().then(res => {
        this.tableData = res.data;
      })
    },
    toEdit(index, row) {
      console.log(row);
      this.$router.push({path: '/courseSystem/editCourse', query:{courseDetail: row}});
    },
    toAdd() {
      this.$router.push({path: '/courseSystem/editCourse'});
    },
    handleDelete(index, row) {
      let keyId = row.keyId;
      console.log(keyId, "删除id")
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteCourseSystem(keyId).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.findCourse();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
};
</script>
<style>
</style>
