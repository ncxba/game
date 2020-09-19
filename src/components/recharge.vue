<template>
  <div id="container">
    <div class="main">
      <!--        <jsp:include page="left.html"></jsp:include>-->
      <div id="content2">
        <div class="top">
          <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
          <h1>充值</h1>
          <div class="wen"><img src="../imgs/wenhao-2.png" alt=""></div>
        </div>
        <div class="select">
          <p>请选择充值金额：</p>
          <ul class="money">
            <li :class="curr == 1 ? 'coin' : ''" data-index="1" @click="hao($event)">
              <h3 id="11.4">11.4元</h3>
              <p>30元</p>
            </li>
            <li :class="curr == 2 ? 'coin' : ''" data-index="2" @click="hao($event)">
              <h3 id="19">19元</h3>
              <p>50元</p>
            </li>
            <li :class="curr == 3 ? 'coin' : ''" data-index="3" @click="hao($event)">
              <h3 id="38">38元</h3>
              <p>100元</p>
            </li>
            <li :class="curr == 4 ? 'coin' : ''" data-index="4" @click="hao($event)">
              <h3 id="190">190元</h3>
              <p>500元</p>
            </li>
          </ul>
        </div>
        <input type="text" class="other" @input="inputFun" placeholder="请输入其他金额">
        <div class="select">
          <p>请选择充值方式：</p>
          <ul class="mean">
            <li  :class="purr == 1 ? 'payType' : ''" data-index="1" @click="haos($event)">
              <img src="../imgs/zhifubao.png" alt="">
              <p id="1">支付宝</p>
            </li>
            <li :class="purr == 2 ? 'payType' : ''" data-index="2" @click="haos($event)">
              <img src="../imgs/weiixn.png" alt="">
              <p id="2">微信支付</p>
            </li>
          </ul>
          <p>到账专用饭团：<span style="color: red; font-size: 0.3rem;">500个饭团</span></p>
        </div>
        <div class="pay" @click="confirm($event)" v-model="textl" :title="text">确认支付：￥{{text}}</div>
        <div class="paytype" hidden></div>
      </div>
    </div>
    <div class="toast" v-show="toastShow">
      {{toastText}}
    </div>
  </div>
</template>

<script>
export default {
name: "recharge",
  data() {
  return {
    curr:2,
    text:"19",
    purr:1,
    toastShow: false,
    toastText: '',
    textl:""

  }
  },
  created() {

  },
  methods: {
    hao(e) {
      console.log(e.currentTarget.firstElementChild.id)
      this.text = e.currentTarget.firstElementChild.id
      this.textl = e.currentTarget.firstElementChild.id
      let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
      this.curr = thisCurr;
    },
    inputFun(e){
      let num = Number(e)
      this.text = e.target.value;
      this.textl = e.target.value
    },
    toast (e) {
      let self = this
      self.toastText = e
      self.toastShow = true
      setTimeout(function(){
        self.toastShow = false
      }, 1500)
    },
    confirm(e){
      console.log(e.currentTarget.title)
      this.toast("正在支付中......")
    },
    haos(e) {
      let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
      this.purr = thisCurr;
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
.toast{
  position: fixed;
  z-index: 2000;
  left: 50%;
  top:45%;
  transition:all .5s;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  border-radius: 5px;
  color:#FFF;
  background: rgba(17, 17, 17, 0.7);
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  max-width: 150px;
}
</style>
