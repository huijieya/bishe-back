<template>
  <div class="direction_form">
    <el-form label-position="right" label-width="120px" :model="directionForm">
      <el-form-item label="培养方向名称">
        <el-input v-model="directionForm.trainDirectionName"></el-input>
      </el-form-item>
      <el-form-item label="培养方向简介">
        <el-input v-model="directionForm.trainDirectionContent"></el-input>
      </el-form-item>
      <el-form-item label="certificate">
        <el-input v-model="directionForm.certificate"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { insertEducateDirection } from '@/api/educateDirection'
export default {
  data() {
    return {
      directionForm: {
        trainDirectionName: '',
        trainDirectionContent: '',
        certificate: ''
      }
    }
  },
  created() {},
  methods: {
    onSubmit() {
      insertEducateDirection(JSON.stringify(this.directionForm)).then(res => {
        this.$message({
          message: '新增培养方向成功',
          type: 'success'
        });
        this.$router.go(-1);
      })

    },
    onCancel() {
      this.$message({
        message: '已取消',
        type: 'warning'
      })
      this.$router.go(-1);
    }
  }
}
</script>

<style>
.direction_form {
  padding: 50px;
  width: 600px;
}
</style>
