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
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addTrainProgram } from '@/api/educatePlan'

export default {
  data() {
    return {
      form: {
        gradId: 2013,
        trainGoal: '一、专业培养目标和培养要求',
        trainGoalIntroduce: '11',
        trainSpecial: '二、专业培养特色',
        trainSpecialIntroduce: '22',
        mainCourse: '三、主干学科与核心课程',
        mainCourseIntroduce: '33',
        educationalSystem: '四、修业年限',
        educationalSystemDetail: '44',
        creditRequirment: '五、毕业学分标准',
        creditRequirementIntroduce: '55',
        conferDegree: '六、学位授予',
        creditRequirementIntroduce: '66'
      },
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!');
      this.form.updateTime = this.getNowDate().currentdate;
      console.log(JSON.stringify(this.form), 'form')
      addTrainProgram(JSON.stringify(this.form)).then(res => {
        console.log(res, "addTrainProgram的res")
      })
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
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

