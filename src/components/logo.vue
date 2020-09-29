<template>
  <div class="hjim">

    <div id="container" style="position: relative">
      <div class="login">
        <!--<img src="./static/imgs/login_logo.png" src="" alt="" class="logo">-->
        <img src="../imgs/login_logo.png" class="logo" alt="">
        <form class="box" id="login">
          <h2>账号密码登录 <span style="color:#9e9e9e;">（无需注册）</span></h2>
          <div class="row">
            <input type="text" id="phone" placeholder="请输入手机号" ref="userphone1">
          </div>
          <div class="row">
            <input type="password" id="password" placeholder="请输入密码" ref="userpass">
          </div>
          <div class="button" @click="enterA()">进入游戏</div>
          <!--            <div class="tip">收不到短信 <a href="">点击获取语音验证码</a></div>-->
        </form>
        <div class="fun">
          <!--<a href="/sdk/login.html?imei=${sid}">验证码登录</a>-->
          <a ><router-link :replace="true" to="/login_phone">验证码登录</router-link></a><!--@click="verification()"-->

          <!--<span>|</span>
          <a href="">快速注册</a>-->
        </div>
      </div>
      <div class="toast" v-show="toastShow">
        {{ toastText }}
      </div>
    </div>
<!--    <div class="non" v-show="gui">
      <login_ph></login_ph>
    </div>-->
  </div>
</template>

<script>
import login_ph from "./login_phone";
import Util from "../assets/js/util";
 //import {userLogin} from "../api/axios-api";
 import {userInfo} from "../api/axios-api";

export default {
  name: "logo",
  components: {
    "login_ph": login_ph
  },
  data() {
    return {
      true:true,
      jiu: false,
      text: "手机号码不能为空",
      toastShow: false,
      toastText: '',
      gui: false,
      user:{}
    }
  },
  created() {
  },
  methods: {
    async enterA() {/*async*/

      console.log(this.$refs.userphone1.value)
      let username = this.$refs.userphone1.value
      let password = this.$refs.userpass.value
      let num = Number(username)
      if (username === "") {
        this.toast("手机号码不能为空!")
      } else if (username.length !== 11) {
        this.toast("请输入11位手机号码!")
      } else if (!/^1[34578]\d{9}$/.test(num)) {
        this.toast("请输入有效的手机号码!")
      } else if (password === "") {
        this.toast("密码不能为空!")
      } else {
        /*let params = {
          username: username, password: password, pid:4,gameid:100001
        }
        let res = await userInfo(params);
        console.log(res);*/

        this.$axios({
          url:"http://192.168.1.29:8080/api/h5/index",
          method:'get',
            params:{username: username, password: password, pid:4,gameid:100001,imei:1,apikey:1,sign:1},
           // data:{phone: phone, code: code,pid:"4",gameid:"100001"},

        }).then(function (res) {
          console.log(res)
           Util.$emit('demo',"demo")
          Util.$emit("user",res)
        })
/*args*/


      }


    },
    toast(e) {
      let self = this
      self.toastText = e
      self.toastShow = true
      setTimeout(function () {
        self.toastShow = false
      }, 1500)
    },
    verification() {
      // this.gui = true
       this.$router.push({name: 'login_phone'});

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

#container {
  width: 65vmax !important;
  height: 75vmin !important;/*42vmax*/
}
.hjim{
  width: 100%;
  height: 100%;
}
.non {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media screen and (orientation: portrait) {
  #container {
    width: 141%;
    height: 85%;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-transform: rotate(90deg) translate(0,-100vmin);
    transform: rotate(90deg) translate(0,-75vmin);
  }
  html{
    font-size:55.2px !important;
  }
}
</style>
