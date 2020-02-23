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
        <el-button type="primary" @click="onSubmit">新增</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addTrainProgram } from '@/api/educatePlan'
import global from '../../config/gradeList.js'

export default {
  data() {
    return {
      form: {
        gradeId: '',
        grade: '',
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
        conferDegreeIntroduce: '66'
      },
      gradeIdList: global.gradeList,
    }
  },
  methods: {
    onSubmit() {
      this.gradeIdList.forEach(item => {
        if(item.grade == this.form.grade){
          this.form.gradeId = item.keyId;
        }
      })
      addTrainProgram(JSON.stringify(this.form)).then(res => {
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
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

