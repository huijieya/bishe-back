<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="fileName"
        label="视频名称"
        width="">
      </el-table-column>
      <el-table-column
        prop="fileOperate"
        label="上传者"
        width="">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="上传时间"
        width="">
      </el-table-column>
      <el-table-column
        prop="videoUrl"
        label="视频地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editVideos(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="m30" type="primary" @click="addVideo">上传导学视频</el-button>
  </div>
</template>

<script>
import { videoList, deleteVideo } from '@/api/video'

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
  this.findVideo();
  },
  methods: {
    findVideo() {
      videoList().then(res => {
        this.tableData = res.data;
      })
    },
    addVideo() {
      this.$router.push({path: '/video/editVideo'})
    },
    editVideos(index,row) {
      console.log(row, 'row')
      this.$router.push({path: '/video/editVideo', query: {videoDetail: row}});
    },
    handleDelete(index, row) {
      let id = row.id;
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteVideo(id).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.findVideo();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>
<style lang="scss">

</style>
