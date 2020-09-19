<template>
  <div id="container">
    <div class="main">
      <!--        <jsp:include page="left.html"></jsp:include>-->
      <div id="content2">
        <div class="top">
          <h1>客服</h1>
        </div>
        <ul class="item">
          <li @click="$router.push('/unresolvedPro')">
            <p>未解决</p>
            <div class="go"><a href=""><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/problemSolved')">
            <p>已解决</p>
            <div class="go"><a href=""><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/questions')">
            <p>提问</p>
            <div class="go"><a href=""><img src="../imgs/go.png" alt=""></a></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "service",
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
@import "../style/user.css";
</style>
