<template>
  <!--<div id="container" style="width: 100%;">
    <div class="main">-->
  <div id="content" style="background-color: #FFFFFF;" >
      <div id="content2" class="cain">
        <div class="top">
          <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
          <h1>消息</h1>
        </div>
      </div>
    <div class="koop">
      <div class="empty">
        <img src="../imgs/wuneirong.png" alt="">
        <p>暂时没有消息</p>
      </div>
    </div>
  </div>
    <!--</div>
  </div>-->
</template>

<script>
export default {
  name: "message",
  data() {
    return {

    }
  },
  created() {
  },
  methods:{

  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
@import "../style/user.css";
.cain {
  background-color: #FFFFFF !important;
  height: auto !important;
  width: 100%;
}
.koop {
  overflow-y: auto;
  overflow-x: hidden;
  height: auto !important;
  padding: 0 0.2rem;
}
.lisr{
  width: 60vmax !important;
}
@media screen and (orientation: portrait) {

  .lisr{
    width: 63.5vmax !important;
  }
}
</style>
