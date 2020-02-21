<template>
  <div>
    <el-button class="addbtn" type="primary" @click="addPlan">增加培养方案</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="一、专业培养目标和培养要求">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="二、专业培养特色">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="三、主干课程">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="四、学制">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="五、毕业学分要求">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="六、学位授予">
              <span>{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="年级"
        prop="grade">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { addTrainProgram, findTrainProgramByGrade } from '@/api/educatePlan'
export default {
  data() {
    return {
      tableData: [{
        grade: '一六级',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }]
    }
  },
  methods: {
    addPlan() {
      findTrainProgramByGrade(16).then(res => {
        console.log(res, 'res')
      })
    }
  }
  }
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  /* width: 90px; */
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.addbtn{
  margin: 50px;
  float: right;
}
</style>
