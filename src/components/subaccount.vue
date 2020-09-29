<template>
  <div id="container">
    <div style="width: 100%;height: 100%;">

      <div class="login" v-show="porbox">
        <img src="../imgs/login_logo.png" alt="" class="logo">
        <form class="box">
          <h2>子账号登录</h2>
          <div class="row">
            <input type="text" id="token" value="" hidden>
            <input type="text" id="phone" placeholder="请选择子帐号" ref="phoneX" @click="select" :value="tests">
            <div class="account" style="height: auto;" v-show="tesa">
              <ul>
                <li :title="item.account" v-for="(item, index) in nolist" :key="index" @click="shutdown($event)">{{ item.account }}</li>
              </ul>
            </div>
          </div>
          <div class="login-btn">
            <div class="btn" @click="game" :title="gotoken" style="float: left;">进入游戏</div>
            <div class="reg" @click="registered" style="float: right;">子账号注册</div>
          </div>
        </form>
        <div class="fun">
          注意:单款游戏最多可以有10个子账号.
        </div>
      </div>

      <div class="register" v-show="porcox">
        <img src="../imgs/login_logo.png" alt="" class="logo">
        <form class="box">
          <h2>子账号注册</h2>
          <div class="row">
            <input type="text" id="account" placeholder="请输入子帐号" ref="account" autocomplete="off" disableautocomplete>
          </div>
          <div class="login-btn">
            <div class="back" @click="returna" style="float: left;">返回</div>
            <div class="reg-account" @click="determine($event)" :id="goid" :title="goneme"  style="float: right;"><div :id="gotoken"></div>确定</div>
          </div>
        </form>
        <div class="fun">
          <a @click="logoAx">账号密码登录</a>
        </div>
      </div>
      <div class="toast" v-show="toastShow">
        {{ toastText }}
      </div>
    </div>
  </div>
</template>

<script>
import Util from "../assets/js/util";

export default {
  name: "subaccount",
  data() {
    return {
      tesa: true,
      test: "",
      tests: "",
      porbox: true,
      porcox: false,
      toastShow: false,
      toastText: '',
      goid:0,
      goneme:"",
      gotoken:"",
      nolist:[],
      phone12:""
    }
  },
  watch:{
  },
  mounted() {


  },
  created() {
    console.log(this.$route.query)
    this.goid = this.$route.query.regtime
    this.goneme = this.$route.query.username
    this.gotoken = this.$route.query.token
    this.phone12 = this.$route.query.phone
    let _this = this
    this.$axios({
      url:"http://192.168.1.29:8080/api/h5/index",
      method:'get',
      params:{pid:13,gameid:100001,phone:this.$route.query.phone},
    }).then(function (res) {
      console.log(res)
      _this.nolist = res.data.data.sub_user

    })
  },
  methods: {
    select() {
      this.tesa = true
    },
    shutdown(e) {
      console.log(e.currentTarget.title)
      this.tests = e.currentTarget.title
      this.tesa = false
    },
    registered() {
      this.porbox = false
      this.porcox = true
    },
    returna() {
      this.porbox = true
      this.porcox = false
    },
    determine(e) {
      console.log(e.currentTarget.id)
      console.log(e.currentTarget.title)
      // console.log( e.currentTarget.firstElementChild)
      console.log( e.currentTarget.firstElementChild.id)
      let phone = this.$refs.account.value
      this.$axios({
        url:"http://192.168.1.29:8080/api/h5/index",
        method:'get',
        params:{account: phone, pid:7,gameid:100001,imei:'imei',regtime:e.currentTarget.id,username:e.currentTarget.title,token:e.currentTarget.firstElementChild.id},
      }).then(function (res) {
        console.log(res)

      })
      /*if (typeof phone == "undefined" || phone == null || phone == "") {
        this.toast("请输入有效账号!")
      } else {

      }*/

    },
    toast(e) {
      let self = this
      self.toastText = e
      self.toastShow = true
      setTimeout(function () {
        self.toastShow = false
      }, 1500)
    },
    game(e) {
      let phoneX = this.$refs.phoneX.value
      this.$axios({
        url:"http://192.168.1.29:8080/api/h5/index",
        method:'get',
        params:{account: phoneX, pid:14,gameid:100001,phone:e.currentTarget.title},
      }).then(function (res) {
        console.log(res)
        Util.$emit('demo',"demo")
        Util.$emit("user",res+e.currentTarget.title)

      })
    },
    /*inputFun(e){
      console.log(e.target.value)
      if (e.target.value === '') {
        this.tesa = false
      }

    },*/
    logoAx() {
      this.$router.replace({path: '/logo', query: {}});
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";

.toast {
  position: fixed;
  z-index: 2000;
  left: 50%;
  top: 45%;
  transition: all .5s;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  border-radius: 5px;
  color: #FFF;
  background: rgba(17, 17, 17, 0.7);
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  max-width: 150px;
}

#container,.login, .register {
  width: 65vmax !important;
  height: 75vmin !important; /*42vmax*/
}

.non {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.login,.register{
  box-shadow: none;
}

/**/
@media screen and (orientation: portrait) {
  #container {
    width: 141%;
    height: 85%;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-transform: rotate(90deg) translate(0, -100vmin);
    transform: rotate(90deg) translate(0, -75vmin);
  }
}
</style>
