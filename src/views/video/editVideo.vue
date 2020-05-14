<template>
  <div class="direction_form">
    <el-form label-position="right" label-width="120px" :model="videoForm">
      <el-form-item label="视频地址">
        <el-input v-model="videoForm.videoUrl"></el-input>
      </el-form-item>
      <el-form-item label="视频名称">
        <el-input v-model="videoForm.fileName"></el-input>
      </el-form-item>
      <el-form-item label="上传者">
        <el-input v-model="videoForm.fileOperate"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- 区别新增和修改  -->
        <el-button v-show="!isEdit" type="primary" @click="addVideo()">新增</el-button>
        <el-button v-show="isEdit" type="primary" @click="editVideo()">修改</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updateVideo, insertVideo } from '@/api/video'
export default {
  data() {
    return {
      videoForm: {
        videoUrl: '',
        fileName: '',
        fileOperate: ''
      },
      isEdit: false,
      id: '',
    }
  },
  created() {
    if (this.$route.query.videoDetail) { // 带Id为修改，否则是新增
      this.isEdit = true;
      this.videoForm = this.$route.query.videoDetail;
      this.id = this.videoForm.id;
      console.log(this.videoForm, 'this.videoForm');
    }
  },
  methods: {
    addVideo() {
      insertVideo(this.videoForm.videoUrl, this.videoForm.fileName, this.videoForm.fileOperate).then(res => {
        this.$message({
          message: '新增培养方向成功',
          type: 'success'
        });
        this.$router.go(-1);
      })
    },
    editVideo() {
      updateVideo(this.id, this.videoForm.videoUrl, this.videoForm.fileName, this.videoForm.fileOperate).then(res => {
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
