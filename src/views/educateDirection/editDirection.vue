<template>
  <div class="direction_form">
    <el-form label-position="right" label-width="120px" :model="directionForm">
      <el-form-item label="培养方向图片">
        <el-upload
          class="avatar-uploader"
          action="http://120.26.179.168:8080//file/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess">
          <img v-if="directionForm.picture" :src="directionForm.picture" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="培养方向名称">
        <el-input v-model="directionForm.trainDirectionName"></el-input>
      </el-form-item>
      <el-form-item label="培养方向简介">
        <el-input v-model="directionForm.trainDirectionContent"></el-input>
      </el-form-item>
      <!-- <el-form-item label="相关职业证书">
        <el-input v-model="directionForm.certificate"></el-input>
      </el-form-item> -->
      <el-form-item>
        <!-- 区别新增和修改  -->
        <el-button v-show="!isEdit" type="primary" @click="addDirection()">新增</el-button>
        <el-button v-show="isEdit" type="primary" @click="editDirection()">修改</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 修改差一个根据id查培养方向接口
// 删除不管用
import { insertEducateDirection, alterEducateDirection, getDirectionById } from '@/api/educateDirection'
export default {
  data() {
    return {
      directionForm: {
        picture: '',
        trainDirectionName: '',
        trainDirectionContent: '',
        // certificate: ''
      },
      isEdit: false,
      imageUrl: '',
    }
  },
  created() {
    if (this.$route.query.keyId) { // 带Id为修改，否则是新增
      this.isEdit = true;
      this.keyId = this.$route.query.keyId;
      console.log(this.keyId, 'this.keyId');
      this.findPlanById(this.keyId);
    }
  },
  methods: {
    addDirection() {
      insertEducateDirection(JSON.stringify(this.directionForm)).then(res => {
        this.$message({
          message: '新增培养方向成功',
          type: 'success'
        });
        this.$router.go(-1);
      })
    },
    editDirection() {
      alterEducateDirection(this.keyId, JSON.stringify(this.directionForm)).then(res => {
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
    findPlanById(id) {
      getDirectionById(id).then(res => {
        let temp = res.data;
        this.directionForm['picture'] = temp.picture;
        this.directionForm['trainDirectionName'] = temp.trainDirectionName;
        this.directionForm['trainDirectionContent'] = temp.trainDirectionContent;
        // this.directionForm['certificate'] = temp.certificate;
      })
    },
    handleAvatarSuccess(res, file) {
      this.directionForm.picture = res.data;
      console.log(res, 'imageUrl');
      console.log(file, 'file');

    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
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
