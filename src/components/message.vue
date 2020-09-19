<template>
  <div id="container">
    <div class="main">
      <!--        <jsp:include page="left.html"></jsp:include>-->

      <div id="content2">
        <div class="top">
          <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
          <h1>消息</h1>
        </div>
        <div class="empty">
          <img src="../imgs/wuneirong.png" alt="">
          <p>暂时没有消息</p>
        </div>
      </div>
    </div>
  </div>
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
</style>
