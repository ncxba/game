<template>
  <div id="container">
    <div class="main">
      <div id="content2" class="cain">
        <div class="top">
          <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
          <h1>问题列表</h1>
        </div>
      </div>
      <div class="koop">
        <div class="koop-po">


          <div class="MsoNormal">
            <h2>游戏充值不到账怎么办？</h2>
          </div>
          <div class="problems-details">
            <p>为什么成功扣款请提供充值记录历史购买截图联系客服哦！为什么成功扣款请提供充值记录历史购买截图联系客服哦！</p>
            <span>2020-09-20 15:55:36</span>
          </div>
          <div class="Reply">
            <div class="Reply-advisory">客服[回复]：请先不要着急哦~首先查询是否成功扣款呢~，如成功扣款请提供充值记录历史购买截图或订单号打电话联系客服（也可以在线咨询留言）</div>
            <span>2020-09-20 15:55:36</span>
          </div>
          <!--分割线-->
          <div class="Does-it-help">
            <div class="Does-it-help-fp">
              <i></i>
              <span>是否有帮助</span>
              <i></i>
            </div>
            <div class="zan-cai">
              <div class="zan-Yes" :class="purr == 1 ? 'active1' : ''" data-index="1" @click="haos($event)">
                <img src="../imgs/dianz2.png" v-if="purr == 0 || purr == 2" class="zanY" alt="">
                <img src="../imgs/dianz1.png" v-if="purr == 1" class="zanY" alt="">有帮助
              </div>
              <div class="zan-no" :class="purr == 2 ? 'active1' : ''" data-index="2" @click="haos($event)">
                <img src="../imgs/dianz2.png" v-if="purr == 0 || purr == 1" class="zanY zanN" alt="">
                <img src="../imgs/dianz1.png" v-if="purr == 2" class="zanY zanN" alt="">没帮助
              </div>
            </div>
            <div class="Thank-you">
              <span>感谢您的反馈</span>
            </div>
          </div>
        </div>
      </div>
      <!--分割线-->
    </div>
    <div class="toast" v-show="toastShow">
      {{ toastText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "questionDetails",
  data() {
    return {
      purr: 0,
      toastShow: false,
      toastText: ''
    }
  },
  created() {

  },
  methods: {
    haos(e) {
      let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
      this.purr = thisCurr;
      console.log(this.purr)
      if (this.purr === "1") {
        console.log(9898);
        this.toast("您的支持是我们前进的动力,么么哒~")
      } else if (this.purr === "2") {
        console.log(434)
        this.toast("很遗憾没有帮到您，您还可以到客服专区打客服电话解决~")
      }
    },
    toast(e) {
      let self = this
      self.toastText = e
      self.toastShow = true
      setTimeout(function () {
        self.toastShow = false
      }, 3000)
    },
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
@import "../style/login.css";
.cain {
  background-color: #FFFFFF !important;
  height: auto !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.main {
  background-color: #f3f5f7;
  padding-top: 0.8rem;
}

.koop {
  height: 100%;
}
.koop-po {
  overflow: auto;
  height: 100%;
}

.Does-it-help {
  padding: 0.3rem 0.25rem 0.35rem;
  margin-bottom: 0.17rem;
}

.Does-it-help {
  background-color: #FFFFFF;
  margin-top: 0.2rem;
}

.MsoNormal {
  /*padding: 0 0.01rem;*/
  background-color: #FFFFFF;
  padding: 0.3rem 0.25rem 0.1rem;
}

.MsoNormal h2 {
  color: #2b364d;
  font-weight: bold;
  font-size: 0.3rem;
}

.problems-details, .Reply {
  display: block;
  padding: 0.2rem 0.4rem 0.1rem;
  border-bottom: 1px solid #d0d2d4;
  background-color: #FFFFFF;
}

.problems-details p {
  color: #7f8591;
  font-size: 0.26rem;
  line-height: 0.4rem;
  margin-bottom: 0.3rem;
}

.problems-details span {
  display: block;
  color: #7f8591;
  font-size: 0.26rem;
  text-align: right;
}

.Does-it-help-fp, .zan-cai {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.Does-it-help-fp i {
  display: inline-block;
  background: #e5ecf1;
  width: 28%;
  height: 1px;
}

.Does-it-help-fp span {
  font-size: 0.26rem;
  color: #7f8591;
}

.zan-Yes, .zan-no {
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.09rem 0.2rem;
  border: 1px solid #7f8591;
  border-radius: 30px;
  color: #7f8591;
  font-size: 0.26rem;
  margin: 0.28rem;
}

.zanY {
  width: 0.23rem;
  height: 0.23rem;
  margin-right: 0.1rem;
}

.zanN {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg);
}

.Thank-you {
  color: #2b364d;
  text-align: center;
  margin: 0.2rem auto;
  width: 80%;
}

.Thank-you span {
  color: #7f8591;
  font-size: 0.26rem;
}

.Reply {
  border-bottom: 1px solid #FFFFFF;
  background-color: #FFFFFF;
}

.Reply-advisory, .Reply span {
  color: #fe932a !important;
  font-size: 0.26rem;
  line-height: 0.4rem;
}

.Reply span {
  display: block;
  text-align: right;
}

.active1 {
  border: 1px solid #fc6466;
  color: #fc6466;
}

.toast {
  width: auto !important;
  max-width: 360px !important;
}
</style>
