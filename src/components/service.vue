<template>
  <!--<div id="container" style="width: 100%;">
    <div class="main">-->
  <div id="content">


    <div id="content2" class="cain">
      <div class="top">
        <h2>客服中心</h2>
      </div>

    </div>
    <div class="koop">
      <!--<ul class="item">
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
      </ul>-->


      <div class="Customer-service" style="position: relative;">
        <div class="time" style="position: absolute; top: -16%;left: 5%;">
          <div class="time-li">
            <img src="../imgs/naozh.png" alt="" class="naoz">
            <h2>客服在线时间:09:00--18:00 20:00--23:00</h2>
          </div>
          <div class="WeChat">
            <div class="WeChatpPublic" style=" margin-right: 0.3rem;">
              <img src="../imgs/weixing.png" alt="" class="phone-img">
              <p>公众号：liuyigame</p>
            </div>
            <div class="WeChatpPublic">
              <img src="../imgs/qq2.png" alt="" class="phone-img">
              <p>QQ：800179461</p>
            </div>
          </div>
          <div class="phone">
            <img src="../imgs/lianxidhua.png" class="phone-img" alt="">
            <p>020-28187567</p>
          </div>
        </div>
        <div class="Ask-questions">
          <div class="advisory" @click="$router.push('/questions')">提问咨询</div>
          <div class="advisory" @click="$router.push('/myconsultation')">我的咨询</div>
        </div>
      </div>
      <div class="qq-wanjiaqun">
        <div class="jiar"><i></i>常见问题</div>
        <ul class="item lpo">
          <li @click="$router.push('/advisoryDetail')">
            <p>游戏充值不到账怎么办？</p>
            <div class="go"><a href=""><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/advisoryDetail5')">
            <p>账号忘记了怎么办？</p>
            <div class="go"><a href=""><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/advisoryDetail1')">
            <p>账号被盗了怎么办？</p>
            <div class="go"><a href=""><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/advisoryDetail2')">
            <p>我密码忘记了怎么办？</p>
            <div class="go"><a href=""><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/advisoryDetail3')">
            <p>我如何知道我的充值问题是否处理完了呢？</p>
            <div class="go"><a href=""><img src="../imgs/go.png" alt=""></a></div>
          </li>
          <li @click="$router.push('/advisoryDetail4')">
            <p>如何查询我的订单</p>
            <div class="go"><a href=""><img src="../imgs/go.png" alt=""></a></div>
          </li>
        </ul>
      </div>


    </div>
  </div>
  <!--</div>
</div>-->
</template>

<script>
export default {
  name: "service",
  data() {
    return {}
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";

.cain {
  background-color: #efe3c5 !important;
  height: auto !important;
  width: 100%;
  /*position: fixed;
  top: 0;
  left: 0;
  width: 100%;*/
}

.main {
  background-color: #efeff4;
  /*padding-top: 0.84rem;*/
}

.koop {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}

.top {
  padding: 0.25rem 0;
}

.top h2 {
  color: #fe932a;
  font-family: "思源黑体 CN";
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  line-height: 0.31rem;
}

.Customer-service {
  height: 3.1rem;
  background-color: #FFFFFF;
  margin-top: 0.8rem;
  padding-top: 2.25rem;
  width: 100%;
}

.time {
  height: 2.4rem;
  width: 90%;
  margin: 0 auto;
  box-shadow: 1px 1px 5px 3px #888888;
  background-color: #FFFFFF;
  padding: 0.25rem;
}

.time-li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.47rem;
  margin-bottom: 0.08rem;
}

.naoz {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.11rem;
}

.time-li h2 {
  color: #1a1a1a;
  font-size: 0.28rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 500;
}

.qq-wanjiaqun {
  width: 100%;
  height: 0.8rem;
  background-color: #efe3c5;
  margin-top: 0.2rem;
  padding-top: 0.1rem;
  padding-bottom: 0.05rem;
}

.jiar {
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  padding-left: 0.2rem;
  line-height: 0.6rem;
  color: #1a1a1a;
  font-size: 0.27rem;

}

.phone {
  width: 5.3rem;
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  background-color: #efe3c5;
  margin: 0.1rem auto 0.15rem;
  align-items: center;
  padding: 0 1.2rem;
}

.phone-img {
  width: 0.45rem;
  height: 0.45rem;
  margin-right: 0.1rem;
}

.phone p {
  color: #ff8d1b;
  font-size: 0.32rem;
  line-height: 0.7rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.WeChat {
  width: 7.1rem;
  margin: 0 auto;
  display: flex;
  /*justify-content: space-evenly;*/
}

.WeChatpPublic {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.WeChatpPublic p {
  font-size: 0.26rem;
  line-height: 0.6rem;
  color: #010101;
}

.phone-img1xx {
  width: 0.45rem;
  height: 0.45rem;
}

.jiar {
  display: flex;
  align-items: center;
}

.jiar i {
  display: inline-block;
  width: 0.055rem;
  height: 0.38rem;
  font-size: 0;
  background: #ff8d1b;
  margin-right: 0.173333rem;
  border-radius: 5.333333rem;
  vertical-align: middle;
}

.Ask-questions {
  width: 100%;
  display: flex;
  padding: 0 0.6rem;
}

.advisory {
  /*border: 1px solid #ffcc00;*/
  border-radius: 3px;
  padding: 0.1rem;
  /*color: #3a3735;*/
  font-size: 0.28rem;
  width: 2rem;
  text-align: center;
  /*box-shadow: 1px 0px 4px 1px #ffcc00;*/
  background: #efe3c5;
  color: #fe932a;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.advisory:last-child {
  margin-left: 1rem;
}

.lpo {
  padding-bottom: 0.8rem;
  background-color: #FFFFFF;
}
</style>
