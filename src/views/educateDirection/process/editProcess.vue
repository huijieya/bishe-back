<template>
  <div class="process_form">
    <el-form label-position="right" label-width="120px" :model="processForm">
      <el-form-item label="开发流程名：">
        <el-input v-model="processForm.flowName"></el-input>
      </el-form-item>
      <el-form-item label="该流程内容：">
        <div class="row">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="processForm.flowIntro"></el-input>
          <el-button type="text" @click="dialogFormVisible = true">帮助</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <!-- 区别新增和修改  -->
        <el-button v-show="!isEdit" type="primary" @click="addProcess()">新增</el-button>
        <el-button v-show="isEdit" type="primary" @click="editProcess()">修改</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>

    <!-- 帮助 -->
    <el-dialog width="850px" title="流程信息填写格式" :visible.sync="dialogFormVisible">
      <h3>填写格式如下图，需注意的是：若开发流程内容需分条展示，则每一条结束后应加“#”结尾</h3>
      <img class="tishi" src="../../../assets/流程输入.png" alt="">
      <h3>呈现效果如下图所示：</h3>
      <img class="tishi" src="../../../assets/流程截图.png" alt="">
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
        flowIntro: '',
        trainDirectionId: '',
        keyId: '',

      },
      isEdit: false,
      directionId: '',
      dialogFormVisible: false,
    }
  },
  created() {
    if (this.$route.query.keyId) { // 带Id为修改，否则是新增
      this.isEdit = true;
      this.processForm['keyId'] = this.$route.query.keyId;
      this.findProcessById(this.processForm['keyId']);
    }
    this.directionId = this.$route.query.directionId;
    console.log(this.directionId, 'directionId');
  },
  methods: {
    addProcess() { // 新增传trainDirectionId
      this.processForm['trainDirectionId'] = this.directionId;
      insertProcess(this.directionId, JSON.stringify(this.processForm)).then(res => {
        this.$message({
          message: '新增培养方向成功',
          type: 'success'
        });
        this.$router.go(-1);
      })
    },
    editProcess() { // 修改传流程Id
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
  }
}
</script>

<style>
.process_form {
  padding: 50px;
  width: 600px;
}
.tishi {
  width: 600px;
  height: 250px;
  border: 1px solid #ccc;
}
</style>
