<template>
  <div class="components-container">
    <div class="editor-container">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="课程体系名称">
          <el-input v-model="formInline.name" placeholder="例：一六级课程体系"></el-input>
        </el-form-item>
        <el-form-item label="课程体系类别">
          <el-select v-model="formInline.courseType" placeholder="分类标准">
            <el-option label="学期" value="学期"></el-option>
            <el-option label="培养方向" value="培养方向"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button v-show="!isEdit" type="primary" @click="addCourse()">新增</el-button>
          <el-button v-show="isEdit" type="primary" @click="editCourse()">修改</el-button>
          <el-button @click="onCancel()">取消</el-button>
        </el-form-item>
      </el-form>

      <!-- 使用组件 -->
      <json-editor ref="jsonEditor" v-model="value" />

    </div>
  </div>
</template>

<script>
// 拿到Index页面传来的key,初始化时执行查询
import JsonEditor from '@/components/JsonEditor'
import { updateById, insertCourseSystem } from '@/api/courseSystem'

export default {
  name: 'JsonEditorDemo',
  components: { JsonEditor },
  data() {
    return {
      value: {},
      formInline: {
        name: '',
        courseType: '',
      },
      keyId: '',
      isEdit: false,
      demo: {
        "name": "一六级课程体系",
        "children": [
          {
            "name": "企业信息化模块",
            "children": [
              {
                "name": "知识管理"
              },
              {
                "name": "企业信息系统及应用 "
              }
            ]
          },
          {
            "name": "信息系统开发模块",
            "children": [
              {
                "name": "Web 客户端开发技术"
              },
              {
                "name": "Java Web 系统开发技术"
              }
            ]
          },
          {
            "name": "财经大数据分析模块",
            "children": [
              {
                "name": "数据科学导论"
              }
            ]
          }
        ]
      }
    }
  },
  created() {
    if (this.$route.query.courseDetail) { // 带Id为修改，否则是新增
      this.isEdit = true;
      let temp = this.$route.query.courseDetail;
      console.log(temp, 'courseDetail');
      this.value = temp.courseSystemJson;
      this.formInline.name = temp.courseSystemName;
      this.formInline.courseType = temp.courseType;
      this.keyId = temp.keyId;
    }else {
      this.value = this.demo;
    }
  },
  methods: {
    sendValue() {
      var temp = this.$refs.jsonEditor.getValue();
      console.log(temp, '子组件value')
    },
    addCourse() {
      insertCourseSystem(this.formInline.name, this.formInline.courseType, this.value).then(res => {
        this.$message({
          message: '新增课程体系成功',
          type: 'success'
        });
        this.$router.go(-1);
      })
    },
    editCourse() {
      // var temp = this.$refs.jsonEditor.getValue();
      updateById(this.keyId, this.formInline.name, this.formInline.courseType, this.value).then(res => {
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

<style scoped>
.editor-container{
  position: relative;
  height: 100%;
      margin: 30px 50px;
}
.add_btn{
  margin-bottom: 15px;
  margin-left: 30px;
}
</style>

