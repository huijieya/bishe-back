<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="年级">
        <el-select v-model="form.grade" placeholder="请选择年级">
          <el-option label="2016" value="2016"></el-option>
          <el-option label="2017" value="2017"></el-option>
          <el-option label="2018" value="2018"></el-option>
          <el-option label="2019" value="2019"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题一">
        <el-input v-model="form.trainGoal" />
      </el-form-item>
      <el-form-item label="标题一内容">
        <el-input v-model="form.trainGoalIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item label="标题二">
        <el-input v-model="form.trainSpecial" />
      </el-form-item>
      <el-form-item label="标题二内容">
        <el-input v-model="form.trainSpecialIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item label="标题三">
        <el-input v-model="form.mainCourse" />
      </el-form-item>
      <el-form-item label="标题三内容">
        <el-input v-model="form.mainCourseIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item label="标题四">
        <el-input v-model="form.educationalSystem" />
      </el-form-item>
      <el-form-item label="标题四内容">
        <el-input v-model="form.educationalSystemDetail" type="textarea" />
      </el-form-item>
      <el-form-item label="标题五">
        <el-input v-model="form.creditRequirment" />
      </el-form-item>
      <el-form-item label="标题五内容">
        <el-input v-model="form.creditRequirementIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item label="标题六">
        <el-input v-model="form.conferDegree" />
      </el-form-item>
      <el-form-item label="标题六内容">
        <el-input v-model="form.conferDegreeIntroduce" type="textarea" />
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
      form: {
        gradeId: '',
        grade: '',
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
    }
  },
  created() {
    this.keyId = this.$route.query.keyId;
    console.log(this.keyId, 'this.keyId');
    this.findPlanById();
  },
  methods: {
    onSubmit() {
      console.log(this.gradeIdList)
      this.gradeIdList.forEach(item => {
        if(item.grade == this.form.grade){
          this.form.gradeId = item.keyId;
        }
      })
      alterTrainProgram(this.keyId, JSON.stringify(this.form)).then(res => {
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
    findPlanById() {
      findTrainProgramById(this.keyId).then(res => {
        var data = res.data;
        this.form.keyId = data.keyId;
        this.form.gradeId = data.gradeId;
        this.form.grade = data.grade;
        this.form.trainGoal = data.trainGoal;
        this.form.trainGoalIntroduce = data.trainGoalIntroduce;

        this.form.trainSpecial = data.trainSpecial;
        this.form.trainSpecialIntroduce = data.trainSpecialIntroduce;
        this.form.mainCourse = data.mainCourse;
        this.form.mainCourseIntroduce = data.mainCourseIntroduce;

        this.form.educationalSystem = data.educationalSystem;
        this.form.educationalSystemDetail = data.educationalSystemDetail;
        this.form.creditRequirment = data.creditRequirment;
        this.form.creditRequirementIntroduce = data.creditRequirementIntroduce;
        this.form.conferDegree = data.conferDegree;
        this.form.conferDegreeIntroduce = data.conferDegreeIntroduce;
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

