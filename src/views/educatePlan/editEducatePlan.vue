<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
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
        <el-input v-model="form.creditRequirementIntroduce" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { alterTrainProgram, findTrainProgramByGrade } from '@/api/educatePlan'

export default {
  data() {
    return {
      form: {},
      grade: '',
    }
  },
  created() {
    this.grade = this.$route.query.grade;
    console.log(this.grade, 'this.grade');
    this.findPlanByGrade();
  },
  methods: {
    onSubmit() {
      this.$message('submit!(接口未测试)');
      this.form.updateTime = this.getNowDate().currentdate;
      console.log(JSON.stringify(this.form), 'form')
      // alterTrainProgram(JSON.stringify(this.form)).then(res => {
      //   console.log(res, "alterTrainProgram的res")
      // })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
      this.$router.go(-1);
    },
    getNowDate() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + day
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
      return {
        currentdate: currentdate
      }
    },
    findPlanByGrade() {
      findTrainProgramByGrade(2016).then(res => {
        var data = res.data;
        console.log(data, 'findTrainProgramByGrade返回值')
        this.form = data;
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

