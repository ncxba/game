<template>
  <!--<div id="container" style="width: 100%;">
    <div class="main">-->
  <div id="content" style="position: relative;">
    <div class="user">
      <img src="../imgs/tx.png" alt="">
      <div class="message">
        <div class="name">toor</div>
        <p>专用饭团：<span>1 </span> 元</p>
      </div>
    </div>
    <ul class="mine">
      <li>
        <a @click="recharged($event)" id="recharge"><!--@click="$router.push('/recharge')@click="recharged""-->
          <!--<router-link to="/recharge">-->
            <img src="../imgs/mine1.png" alt="">
            <p>充值</p>
          <!--</router-link>-->
        </a>
      </li>
      <li>
        <a @click="recharged($event)" id="cash-coupon"><!--@click="$router.push('/cash-coupon')"-->
          <!--<router-link to="/cash-coupon">-->
            <img src="../imgs/mine2.png" alt="">
            <p>代金券</p>
         <!-- </router-link>-->
        </a>
      </li>
      <li>
        <a>
          <img src="../imgs/mine3.png" alt="">
          <p>VIP特权</p>
        </a>
      </li>
    </ul>
    <ul class="item">
      <li @click="recharged($event)" id="take-note">
        <p>订单记录</p>
        <div class="go"><a><img src="../imgs/go.png" alt=""></a></div>
      </li>
      <li   @click="change($event)" id="change-password">
        <p>修改密码</p>
        <div class="go"><a><img src="../imgs/go.png" alt=""></a></div>
      </li>
      <li  @click="recharged($event)" id="bind">
        <p>换绑手机</p>
        <div class="go"><a><img src="../imgs/go.png" alt=""></a></div>
      </li>
      <li @click="recharged($event)" id="prevent">
        <p>防沉迷系统</p>
        <div class="go"><a><img src="../imgs/go.png" alt=""></a></div>
      </li>
    </ul>
    <keep-alive>
      <router-view style="position: absolute;top: 0;left: 0; width: 100%;" :ref="moop"  :style="{display:abc}"></router-view><!--ref="recharge"v-show="bop" -->
    </keep-alive>
  </div>
  <!--</div>
</div>-->

</template>

<script>
import Left from "./left";
import Util from "../assets/js/util";

export default {
  name: "user",
  components: {Left},
  data() {
    return {
      bop: false,
      abc: "none",
      moop:""
    }
  },
  mounted() {
    Util.$on('user', (test) => {
      console.log(test);
      this.abc = 'none !important';
    })
  },
  methods: {
    recharged(e) {
      console.log(e)
      console.log(e.currentTarget.id)
      this.moop = e.currentTarget.id
      this.$router.push({path: '/'+e.currentTarget.id, query: {}, name: e.currentTarget.id});
      this.bop = true
      this.abc = "block !important"

    },
    change(e){
      console.log(e.currentTarget.id)
      this.moop = e.currentTarget.id
      this.$router.push({path: '/change-password', query: {id:"121"}, name: 'change-password'});
      this.abc = "block !important"
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";

/*.active{
  color:#108b70;
}*/
@media screen and (orientation: portrait) {

}
</style>
