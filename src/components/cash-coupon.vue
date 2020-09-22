<template>
  <div id="container">
    <div class="main">
      <!--        <jsp:include page="left.html"></jsp:include>-->

      <div id="content2">
        <div class="top">
          <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
          <h1>我的代金券</h1>
        </div>
        <ul class="welfare-head">
          <li :class="curr == 1 ? 'active' : ''" data-index="1" @click="hao($event)">未使用</li>
          <li :class="curr == 2 ? 'active' : ''" data-index="2" @click="hao($event)">已使用</li>
          <li :class="curr == 3 ? 'active' : ''" data-index="3" @click="hao($event)">已过期</li>
        </ul>
        <div class="empty" :class="curr == 1 ? 'display' : ''" data-index="1">
          <img src="../imgs/wuneirong.png" alt="">
          <p>暂无未使用代金券</p>
        </div>

        <div class="empty" :class="curr == 2 ? 'display' : ''" data-index="2">
          <img src="../imgs/wuneirong.png" alt="">
          <p>暂无已使用代金券</p>
        </div>

        <div class="empty" :class="curr == 3 ? 'display' : ''" data-index="3">
          <img src="../imgs/wuneirong.png" alt="">
          <p>暂无已过期代金券</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cash-coupon",
  data() {
    return {
      curr:1
    }
  },
  created() {
  },
  methods:{
    hao(e) {
      let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
      this.curr = thisCurr;
    },
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
@import "../style/user.css";
.empty{
  display: none;
}
.display{
  display: block !important;
}
.empty img{
  width: 44%;
}
.empty p {
  text-align: center;
  margin-top: 0.2rem;
  font-size: 0.24rem;
}
</style>
