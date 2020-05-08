<template>
  <div class="guide_box">
    <p class="title">第一步：登录图灵机器人管理后台</p>
    <img src="../../assets/图灵1.png" alt="">
    <p class="title">第二步：管理咨询系统机器人</p>
    <img src="../../assets/图灵2.png" alt="">
    <p class="title">第三步：熟悉后台管理面板</p>
    <img src="../../assets/图灵3.png" alt="">
    <p class="title">第四步：了解语料库如何管理</p>
    <img src="../../assets/图灵4.png" alt="">
    <div class="mima">
      <div class="row">
        <span class="text">点击查看帐号密码：</span>
        <el-input placeholder="" v-model="password" show-password></el-input>
      </div>
      <p><a class="link" href="http://www.tuling123.com/sso-web/index.html?ReturnURL=http%3A%2F%2Fwww.tuling123.com%2Fmember%2Frobot%2Findex.jhtml" target="_blank">跳转至图灵后台</a></p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '13287747794 / bnttuling111',
    }
  }
}
</script>

<style lang="scss">
.guide_box{
  padding-bottom: 100px;
  img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    margin: auto;
  }
  .title{
    font-size: 1.17em;
    font-weight: bold;
    margin-left: 50px;
    margin-top: 35px;
  }
  .mima{
    margin: auto;
    width: 430px;
    padding-top: 35px;
    .text{
      width: 242px;
      margin: auto;
    }
    .link{
      color: blue;
    }
    p{
      text-align: center;
      margin-top: 50px;
    }
  }
}
</style>
