<template>
  <div>
    <div class="table">
      <el-table
        :data="directionList"
        stripe
        style="width: 100%">
          <el-table-column
            prop="trainDirectionName"
            label="培养方向"
            width="">
          </el-table-column>
          <el-table-column
            prop="trainDirectionContent"
            label="方向介绍"
            width="">
          </el-table-column>
          <el-table-column
            prop="updateTime"
            label="更新时间"
            width="">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="editDirection(scope.$index, scope.row)">修改</el-button>
              <el-button
              size="mini"
              @click="deDirection(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button class="m30" type="primary" @click="addDirection">增加培养方向</el-button>
  </div>
</template>

<script>
import { getEducateDirection, insertEducateDirection } from '@/api/educateDirection'
export default {
  data() {
    return {
      directionList: [],
    }
  },
  mounted() {
    this.getDirection();

  },
  methods: {
    getDirection() {
      getEducateDirection().then(res => {
        this.directionList = res.data;
        console.log(this.directionList, 'this.directionList');
      })
    },
    addDirection() {
      this.$router.push({path: '/educateDirection/editDirection'})
    }
  }
}
</script>

<style>
.table{
    margin: 10px 10px;
}
.m30{
  margin: 30px;
}
</style>
