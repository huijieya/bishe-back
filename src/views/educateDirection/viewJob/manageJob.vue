<template>
  <div class="process_form">
    <el-form label-position="right" label-width="120px" :model="jobItem">
      <el-form-item label="岗位名称">
        <el-input v-model="jobItem.flowName"></el-input>
      </el-form-item>
      <el-form-item label="工作内容">
        <div class="row">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="jobItem.jobContent"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="岗位要求">
        <div class="row">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="jobItem.jobRequire"></el-input>
        </div>
      </el-form-item>
      <el-form-item>
        <!-- 区别新增和修改  -->
        <el-button v-show="!isEdit" type="primary" @click="insertJob()">新增</el-button>
        <el-button v-show="isEdit" type="primary" @click="editJob()">修改</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 需要培养方向id
// 增加输入小贴士
import { alterJob, addJob } from '@/api/viewJob'
export default {
  data() {
    return {
      jobItem: {
        jobName: '',
        jobContent: '',
        jobRequire: '',
      },
      isEdit: false,
      liuchengId: '',
      jobId: '',
    }
  },
  created() {
    if (this.$route.query.jobId) { // 带job为修改，否则是新增
      this.isEdit = true;
      this.jobId = this.$route.query.jobId;
      this.liuchengId = this.$route.query.liuchengId;
      this.jobItem['jobName'] = this.$route.query.row.jobName; //
    }
  },
  methods: {
    insertJob() {
      addJob(JSON.stringify(this.jobItem)).then(res => {
        this.$message({
          message: '新增岗位成功',
          type: 'success'
        });
        this.$router.go(-1);
      })
    },
    editJob() {
      alterJob(this.liuchengId, this.jobId, JSON.stringify(this.jobItem)).then(res => {
        this.$message({
          message: '更新成功',
          type: 'success'
        });
      })
      this.$router.go(-1);
    },
    onCancel() {
      this.$message({
        message: '已取消',
        type: 'warning'
      })
      this.$router.go(-1);
    },
  }
}
</script>

<style>
.process_form {
  padding: 50px;
  width: 600px;
}
.tishi {
  width: 600px;
  height: 250px;
  border: 1px solid #ccc;
}
</style>
