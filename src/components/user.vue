<template>
  <div id="container">
    <div class="main">
      <!--        <jsp:include page="left.html"/>-->
      <div id="content">
        <div class="user">
          <img src="../imgs/tx.png" alt="">
          <div class="message">
            <div class="name">toor</div>
            <p>专用饭团：<span>${userinfo.ubalance}</span> 元</p>
          </div>
        </div>
        <ul class="mine">
          <li>
            <a @click="$router.push('/recharge')">
              <img src="../imgs/mine1.png" alt="">
              <p>充值</p>
            </a>
          </li>
          <li @click="$router.push('/cash-coupon')">
            <a>
              <img src="../imgs/mine2.png" alt="">
              <p>代金券</p>
            </a>
          </li>
          <li @click="$router.push('/recharge')">
            <a>
              <img src="../imgs/mine3.png" alt="">
              <p>VIP特权</p>
            </a>
          </li>
        </ul>
        <ul class="item">
          <li  @click="$router.push('/take-note')">
            <p>订单记录</p>
            <div class="go"><a ><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/change-password')">
            <p>修改密码</p>
            <div class="go"><a ><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/bind')">
            <p>换绑手机</p>
            <div class="go"><a><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/prevent')">
            <p>防沉迷系统</p>
            <div class="go"><a><img src="../imgs/go.png" alt=""></a></div>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
 import Left from "./left";
export default {
name: "user",
   components: {Left},
  data(){
  return{}
  },
  methods:{
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
.active{
  color:#108b70;
}
</style>
