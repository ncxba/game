<template>
  <div id="container" style="position: relative">

    <div class="login">
      <img src="../imgs/login_logo.png" alt="" class="logo">
      <form class="box">
        <h2>账号密码登录 <span style="color:#9e9e9e;">（无需注册）</span></h2>
        <div class="row">
          <input type="text" id="phone" placeholder="请输入手机号" value="" ref="userphone1">
        </div>
        <div class="row">
          <input type="text" id="code" placeholder="输入短信验证码" class="fill-code" value="" ref="code">
          <div class="code" @click="code()">{{yanzhengma}}</div>
        </div>
        <div class="button" @click="enterb()">进入游戏</div>
      </form>
      <div class="fun">
      <!--  <a @click="verification()" >账号密码登录</a>--><!--onclick="history.back()"-->
        <a ><router-link :replace="true" to="/logo">账号密码登录</router-link></a>
      </div>
    </div>
    <div class="toast" v-show="toastShow">
      {{toastText}}
    </div>
    <!--<div class="non" v-show="gui">
      <logo></logo>
    </div>-->
  </div>

</template>

<script>
import logo from "./logo"

export default {
  name: "login_phone",
  data() {
    return {
      yanzhengma:"获取验证码",
      btnBool:true,
      jiu: false,
      text: "手机号码不能为空",
      toastShow: false,
      toastText: '',
      gui:false,
      piao:false
    }
  },
  components:{
    "logo":logo,
  },
  created() {
  },
  methods: {
    enterb() {
      this.piao = true
        // this.$router.push({name: '/subaccount'});
      // this.$router.push({path:'/subaccount',query: {}});
      this.$router.replace({path:'/subaccount',query: {}});
      console.log(this.$refs.userphone1.value)
      let username = this.$refs.userphone1.value
      let code = this.$refs.code.value
      let num = Number(username)
      if (username === "") {
        this.toast("手机号码不能为空!")
      } else if (username.length !== 11) {
        this.toast("请输入11位手机号码!")
      } else if (!/^1[34578]\d{9}$/.test(num)) {
        this.toast("请输入有效的手机号码!")

      }
     else if (code === "undefined" || code === null || code === "") {
        console.log("请输入验证码!")
        this.toast("请输入验证码!")
      }

     else{
        this.$axios({
          url:"http://192.168.1.6:8080/api/h5/index",
          method:'get',
          params:{username: username, code: code, pid:4,gameid:100001,imei:1,apikey:1,sign:1},
        }).then(function (res) {
          console.log(res)
        })
      }

    },
    toast (e) {
      let self = this
      self.toastText = e
      self.toastShow = true
      setTimeout(function(){
        self.toastShow = false
      }, 1500)
    },
    code(){
      let phone = this.$refs.userphone1.value
      let num = Number(phone)
      if (phone === "") {
        this.toast("手机号码不能为空!")
      }else if (phone.length !== 11) {
        this.toast("请输入11位手机号码!")
      }
      else if (!/^1[34578]\d{9}$/.test(num)) {
        this.toast("请输入有效的手机号码!")
      } else {
        this.$axios({
          url:"http://192.168.1.6:8080/api/h5/index",
          method:'get',
          params:{username: phone,  pid:6,gameid:100001,imei:1,apikey:1,sign:1},
        }).then(function (res) {
          console.log(res)
        })
        this.btnBool = true;
        let i = 60;
        let timer = setInterval(() => {
          this.yanzhengma =  i + '秒后重新发送';
          i--;
          if (i < 0) {
            this.btnBool = false;
            this.yanzhengma = '获取验证码';
            clearInterval(timer);
          }
        }, 1000);
      }

    },
    verification() {
       this.$router.push({name: 'logo'});
      console.log(122)
      //this.gui = true
    }
  }
}
/*
* 17:12:33.492: [game] git -c credential.helper= -c core.quotepath=false -c log.showSignature=false push --progress --porcelain origin refs/heads/master:master
* */
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
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
#container {
  width: 65vmax !important;
  height: 75vmin !important;/*42vmax*/
}
.non{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/**/
@media screen and (orientation: portrait) {
  #container {
    width: 141%;
    height: 85%;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-transform: rotate(90deg) translate(0,-100vmin);
    transform: rotate(90deg) translate(0,-75vmin);
  }
}
</style>
