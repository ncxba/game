<template>
  <div id="container">
    <div class="main">
      <!--        <jsp:include page="left.html"></jsp:include>-->
      <div id="content2"  class="cain">
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

        <div class="Customer-service">
          <div class="phone">
            <img src="../imgs/lianxidhua.png" class="phone-img" alt="">
            <p>020-28187567</p>
          </div>
          <div class="WeChat">
            <div class="WeChatpPublic">
              <img src="../imgs/weixing.png" alt="" class="phone-img">
              <p>公众号：liuyigame</p>
              <img src="../imgs/xiaoxi.png" alt="" class="phone-img1xx">
            </div>
            <div class="WeChatpPublic">
              <img src="../imgs/qq2.png" alt="" class="phone-img">
              <p>QQ：800179461</p>
              <img src="../imgs/xiaoxi.png" alt="" class="phone-img1xx">
            </div>
          </div>
        </div>
        <div class="qq-wanjiaqun">
          <div class="jiar">玩家QQ群</div>
        </div>

        <div class="time">
          <div class="time-li">
            <img src="../imgs/naozh.png" alt="" class="naoz">
            <h2>客服工作日:09:00--18:00 20:00--23:00</h2>
          </div>
          <div class="time-li">
            <h2>在线时间节假日:10:30--22:30 </h2>
          </div>
        </div>

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
.cain{
  background-color: #efe3c5 !important;
  height: auto !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.main{
  background-color: #efeff4;
  padding-top: 0.84rem;
}
.koop{
  padding: 0 0.2rem;

}
.top{
  padding: 0.25rem 0;
}
.top h2{
  color: #fe932a;
  font-family: "思源黑体 CN";
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  line-height: 0.31rem;
}
.Customer-service{
  height:  3.5rem ;
  background-color: #FFFFFF;
  margin-top: 0.8rem;
  padding-top: 1.15rem;
}
.time{
  height: 1.5rem;
  width: 90%;
  margin: -5.1rem auto 0;
  box-shadow: 1px 1px 5px 3px #888888;
  background-color: #FFFFFF;
  padding: 0.2rem;
}
.time-li{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.47rem;
}
.naoz{
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.11rem;
}
.time-li h2{
  color: #1a1a1a;
  font-size: 0.26rem;
  font-family: "思源黑体 CN";
  font-weight: 500;
}
.qq-wanjiaqun{
  width: 100%;
  height: 0.8rem;
  background-color: #efe3c5;
  margin-top: 0.2rem;
  padding-top: 0.1rem;
  padding-bottom: 0.05rem;
}
.jiar{
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  padding-left: 0.2rem;
  line-height: 0.6rem;
  color: #1a1a1a;
  font-size: 0.27rem;

}
.Customer-service .phone{
  width: 5.3rem;
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  background-color: #efe3c5;
  margin: 0 auto 0.15rem;
  align-items: center;
  padding: 0 1.2rem;
}
.phone-img{
  width: 0.5rem;
  height: 0.5rem;
}
.Customer-service .phone p{
  color: #ff8d1b;
  font-size: 0.28rem;
  line-height: 0.7rem;
}
.WeChat{
  width: 4.1rem;
  margin: 0 auto;
}
.WeChatpPublic{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.WeChatpPublic p{
  font-size: 0.28rem;
  line-height: 0.6rem;
  color: #010101;
}
.phone-img1xx{
  width: 0.45rem;
  height: 0.45rem;
}
</style>
