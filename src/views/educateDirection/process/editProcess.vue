<template>
  <div class="direction_form">
    <el-form label-position="right" label-width="120px" :model="processForm">
      <el-form-item label="开发流程-阶段名：">
        <el-input v-model="processForm.flowName"></el-input>
      </el-form-item>
      <el-form-item label="该阶段内容：">
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="processForm.flowIntro"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- 区别新增和修改  -->
        <el-button v-show="!isEdit" type="primary" @click="addDirection()">新增</el-button>
        <el-button v-show="isEdit" type="primary" @click="editProcess()">修改</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 需要培养方向id
// 增加输入小贴士
import { insertProcess, alterProcess, getProcessById } from '@/api/process'
export default {
  data() {
    return {
      processForm: {
        flowName: '',
        keyId: '',
        flowIntro: '',
      },
      isEdit: false,
      directionId: ''
    }
  },
  created() {
    if (this.$route.query.keyId) { // 带Id为修改，否则是新增
      this.isEdit = true;
      this.processForm['flowName'] = this.$route.query.keyId;
      this.findProcessById(this.processForm['flowName']);
    }
    this.directionId = this.$route.query.directionId;
  },
  methods: {
    addDirection() {
      insertEducateDirection(JSON.stringify(this.processForm)).then(res => {
        this.$message({
          message: '新增培养方向成功',
          type: 'success'
        });
        this.$router.go(-1);
      })
    },
    editProcess() {
      alterProcess(this.directionId, JSON.stringify(this.processForm)).then(res => {
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
    findProcessById(id) {
      getProcessById(id).then(res => {
        let temp = res.data;
        this.processForm['flowName'] = temp.flowName;
        this.processForm['flowIntro'] = temp.flowIntro;
      })
    },
    handleAvatarSuccess(res, file) {
      this.processForm.picture = res.data;
      console.log(res, 'imageUrl');
      console.log(file, 'file');

    },
  }
}
</script>

<style>
.direction_form {
  padding: 50px;
  width: 600px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
