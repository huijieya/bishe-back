<template>
  <div class="app-container">
    <el-form ref="formData" :model="formData" label-width="120px">
      <el-form-item label="版本">
        <el-select v-model="formData.version" placeholder="请选择版本">
          <el-option label="2015版" value="2015版"></el-option>
          <el-option label="2017版" value="2017版"></el-option>
          <el-option label="2019版" value="2019版"></el-option>
          <el-option label="2020版" value="2020版"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="适用年级">
        <el-checkbox-group v-model="formData.grade">
          <el-checkbox v-for="grade in gradeList" :label="grade" :key="grade">{{grade}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="标题一">
        <el-input v-model="formData.trainGoal" />
      </el-form-item>
      <el-form-item label="标题一内容">
        <el-input v-model="formData.trainGoalIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item label="标题二">
        <el-input v-model="formData.trainSpecial" />
      </el-form-item>
      <el-form-item label="标题二内容">
        <el-input v-model="formData.trainSpecialIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item label="标题三">
        <el-input v-model="formData.mainCourse" />
      </el-form-item>
      <el-form-item label="标题三内容">
        <el-input v-model="formData.mainCourseIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item label="标题四">
        <el-input v-model="formData.educationalSystem" />
      </el-form-item>
      <el-form-item label="标题四内容">
        <el-input v-model="formData.educationalSystemDetail" type="textarea" />
      </el-form-item>
      <el-form-item label="标题五">
        <el-input v-model="formData.creditRequirment" />
      </el-form-item>
      <el-form-item label="标题五内容">
        <el-input v-model="formData.creditRequirementIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item label="标题六">
        <el-input v-model="formData.conferDegree" />
      </el-form-item>
      <el-form-item label="标题六内容">
        <el-input v-model="formData.conferDegreeIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { alterTrainProgram, findTrainProgramById } from '@/api/educatePlan'
import global from '../../config/gradeList.js'


export default {
  data() {
    return {
      formData: {
        gradeId: '',
        grade: [],
        version: '',
        trainGoal: '',
        trainGoalIntroduce: '',
        trainSpecial: '',
        trainSpecialIntroduce: '',
        mainCourse: '',
        mainCourseIntroduce: '',
        educationalSystem: '',
        educationalSystemDetail: '',
        creditRequirment: '',
        creditRequirementIntroduce: '',
        conferDegree: '',
        conferDegreeIntroduce: ''
      },
      keyId: '',
      gradeIdList: global.gradeList,
      gradeList: ['2016','2017', '2018', '2019', '2020']
    }
  },
  created() {
    this.keyId = this.$route.query.keyId;
    this.findPlanById();
  },
  methods: {
    onSubmit() { // 存入时转成字符串
      this.formData.grade = this.formData.grade.toString();
      console.log(this.formData, 'formData')
      alterTrainProgram(this.keyId, JSON.stringify(this.formData)).then(res => {
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
    findPlanById() { // 取出时转数组
      findTrainProgramById(this.keyId).then(res => {
        this.formData = res.data;
        this.formData.grade = this.formData.grade.split(',')
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

