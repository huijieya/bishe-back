<template>
  <div>
    <el-button class="addbtn" type="primary" @click="addPlan">增加培养方案</el-button>
    <el-table
      :data="planData"
      border
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-collapse accordion>
            <el-collapse-item :title="props.row.trainGoal" >
              <div>{{ props.row.trainGoalIntroduce }}</div>
            </el-collapse-item>
            <el-collapse-item :title="props.row.trainSpecial">
              <div>{{ props.row.trainSpecialIntroduce }}</div>
            </el-collapse-item>
            <el-collapse-item :title="props.row.mainCourse">
              <div>{{ props.row.mainCourseIntroduce }}</div>
            </el-collapse-item>
            <el-collapse-item :title="props.row.educationalSystem">
              <div>{{ props.row.educationalSystemDetail }}</div>
            </el-collapse-item>
            <el-collapse-item :title="props.row.creditRequirment">
              <div>{{ props.row.creditRequirementIntroduce }}</div>
            </el-collapse-item>
            <el-collapse-item :title="props.row.conferDegree">
              <div>{{ props.row.creditRequirementIntroduce }}</div>
            </el-collapse-item>
          </el-collapse>
        </template>
      </el-table-column>
      <el-table-column
        label="版本"
        prop="grade">
      </el-table-column>
      <el-table-column
        label="更新时间"
        prop="updateTime">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { initTrainProgram, deleteTrainProgram } from '@/api/educatePlan'
export default {
  data() {
    return {
      planData: []
    }
  },
  mounted() {
    this.getPlan();
  },
  methods: {
    getPlan() {
      initTrainProgram().then(res => {
        this.planData = res.data;
      })
    },
    addPlan() {
      this.$router.push({path: '/educatePlan/addEducatePlan'});
    },
    handleEdit(index,row) {
      this.$router.push({path: '/educatePlan/editEducatePlan', query: {keyId: row.keyId}});
    },
    handleDelete(index, row) {
      var keyId = row.keyId;
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteTrainProgram(keyId).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getPlan();
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  /* width: 90px; */
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.addbtn{
  margin: 50px;
  float: right;
}
</style>
