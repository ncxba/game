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
        <div class="MsoNormal">
          <h2>游戏充值不到账怎么办？</h2>
        </div>
        <div class="problems-details">
          <p>请先不要着急哦~首先查询是否成功扣款呢~</p>
          <p> 如成功扣款请提供充值记录历史购买截图或订单号打电话联系客服（也可以在线咨询留言）</p>
          <p>注：反馈的时候请说明充值时间，充值金额，是否参与了活动，参与活动的内容，方便核实补发对应的活动奖励哦~</p>
          <p>还请各位玩家如实反馈您的问题噢，如发现虚假反馈，官方必将严肃处理的！</p>
          <p>自助服务更方便更快捷，直接到达技术欧巴手中，随时查看处理信息，保证账号安全！</p>
          <span>2020-09-20 17:26:36</span>
        </div>
      </div>
      <div class="Does-it-help">
        <div class="Does-it-help-fp">
          <i></i>
          <span>是否有帮助</span>
          <i></i>
        </div>
        <div class="zan-cai">
          <div class="zan-Yes">
            <img src="../imgs/dianz2.png" class="zanY" alt="">有帮助
          </div>
          <div class="zan-no">
            <img src="../imgs/dianz2.png" class="zanY zanN" alt="">没帮助
          </div>
        </div>
        <div class="Thank-you">
          <span>感谢您的反馈</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "advisoryDetail"
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
  width: 100%;
}

.main {
  background-color: #f3f5f7;
  padding-top: 0.84rem;
}

.koop, .Does-it-help {
  padding: 0.3rem 0.25rem 0.35rem;
  background-color: #FFFFFF;
  margin-bottom: 0.17rem;
}
.MsoNormal{
  padding: 0 0.01rem;
}
.MsoNormal h2{
  color: #2b364d;
  font-weight: bold;
  font-size: 0.3rem;
}
.problems-details{
  display: block;
  padding-top: 0.2rem;
}
.problems-details p{
  color: #7f8591;
  font-size: 0.26rem;
  line-height: 0.3rem;
  margin-bottom: 0.3rem;
}
.problems-details span{
  display: block;
  color: #7f8591;
  font-size: 0.26rem;
  text-align: right;
}
.Does-it-help-fp, .zan-cai{
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
.zan-Yes, .zan-no{
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
.zanY{
  width: 0.23rem;
  height: 0.23rem;
  margin-right: 0.1rem;
}
.zanN{
  transform:rotate(180deg);
  -ms-transform:rotate(180deg); 	/* IE 9 */
  -moz-transform:rotate(180deg); 	/* Firefox */
  -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
  -o-transform:rotate(180deg);
}
.Thank-you{
  color: #2b364d;
  text-align: center;
  margin: 0.2rem auto;
  width: 80%;
}
.Thank-you span{
  color: #7f8591;
  font-size: 0.26rem;
}
</style>
