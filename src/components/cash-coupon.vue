<template>
  <!--<div id="container">
    <div class="main">-->
  <div id="content" style="background-color: #FFFFFF;">
    <div id="content2" class="cain">
      <div class="top">
        <div class="back" @click="bano"><img src="../imgs/back.png" alt=""></div><!--onclick="history.back()"-->
        <h1>我的代金券</h1>
      </div>


    </div>
    <div class="koop">
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
  <!--</div>
</div>-->
</template>

<script>
import Util from "../assets/js/util";

export default {
  name: "cash-coupon",
  data() {
    return {
      curr: 1
    }
  },
  created() {
  },
  methods: {
    hao(e) {
      let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
      this.curr = thisCurr;
    },
    bano() {
      history.back()
      Util.$emit('user', "user")
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
@import "../style/user.css";

.empty {
  display: none;
}

.display {
  display: block !important;
}

.empty img {
  width: 44%;
}

.empty p {
  text-align: center;
  margin-top: 0.2rem;
  font-size: 0.24rem;
}
.cain {
  background-color: #FFFFFF !important;
  height: auto !important;
  /*width: 100%;*/
  position: fixed;
  width: 52vmax;
}
.koop {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: 0 0.2rem;
  padding-top: 6vmax;
}
.lisr {
  width: 60vmax !important;
}

@media screen and (orientation: portrait) {

  .lisr {
    width: 63.5vmax !important;
  }
}
</style>
