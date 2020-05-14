<template>
  <div class="json_box">

    <json-viewer
      :value="treedata"
      :expand-depth=5
      copyable
      boxed
      sort></json-viewer>
  </div>
</template>

<script>
import JsonViewer from 'vue-json-viewer';
export default {
  data() {
    return {
      treedata:[{
        name: '本科发展方向',
        children: [
          {
            name: '深造学习',
            children: [
              {
                name: '研究生',
                children: [
                  {
                    name: '国内读研',
                    children: [
                      {
                        name:'考研方向',
                        children: [
                          {
                            name: '管理科学与工程'
                          },
                          {
                            name: '工商管理'
                          },
                          {
                            name: '公共管理'
                          },
                          {
                            name: '情报学'
                          }
                        ]
                      },
                      {
                        name:'能力要求',
                      }
                    ]
                  },
                  {
                    name: '国外读研',
                    children: [
                      {
                        name: '申请流程'
                      },
                      {
                        name: '能力要求'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '直接就业',
            children: [
              {
                name: '就业方向',
                children: [
                  {
                    name: '企业信息化方向'
                  },
                  {
                    name: '信息系统开发方向'
                  },
                  {
                    name: '财经大数据分析方向'
                  }
                ]
              },
              {
                name: '职业资格认证'
              }
            ]
          }
        ]
      }],
    }
  },
  created(){
    // this.toString();
  },
  methods: {
    toString(){
      this.treedata = JSON.stringify(this.treedata);
      console.log(this.treedata)
    }
  }
}
</script>

<style>
.json_box{
  width: 1000px;
  margin: auto;
  margin-top: 35px;
}
</style>
