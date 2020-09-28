<template>
  <!--<div id="container">
    <div class="main">-->
  <div id="content" style="background-color: #FFFFFF;">
    <div id="content2" class="cain">
      <div class="top">
        <div class="back" @click="bano"><img src="../imgs/back.png" alt=""></div>
        <h1>验证原手机</h1>
      </div>

    </div>
    <div class="koop">
      <!--<div class="now">&#45;&#45;%>
          <p>当前账户的安全级别为：<span style="color: red">低</span></p>
         <p>建议您绑定手机号，绑定后可以通过手机找回密码</p>
    </div>-->
      <form class="bind">
        <div class="row">
          <input type="number" id="phone" value="${userinfo.phone}" placeholder="请输入原手机号" ref="user">
          <!--readonly="readonly"-->
        </div>
        <div class="row">
          <input id="smscode" type="number" placeholder="请输入验证码" class="fill-code" ref="verification">
          <div class="code" id="oldcode" @click="oldcode()">{{ yanzhengma }}</div>
        </div>
        <div id="button" class="button" @click="button">下一步</div>
      </form>
    </div>
    <div class="toast" v-show="toastShow">
      {{ toastText }}
    </div>
  </div>
  <!--</div>
</div>-->
</template>

<script>
import Util from "../assets/js/util";

export default {
  name: "bind",
  data() {
    return {
      toastShow: false,
      toastText: '',
      yanzhengma: "获取验证码"
    }
  },
  created() {
  },
  methods: {
    button() {
      let phone = this.$refs.user.value
      let code = this.$refs.verification.value
      let num = Number(phone)
      if (phone === "") {
        this.toast("手机号码不能为空!")
      } else if (phone.length !== 11) {
        this.toast("请输入11位手机号码!")
      } else if (!/^1[34578]\d{9}$/.test(num)) {
        this.toast("请输入有效的手机号码!")

      } else if (code === "undefined" || code === null || code === "") {
        console.log("请输入验证码!")
        this.toast("请输入验证码!")
      } else {
        this.$axios.get("/sdk/api/bindphone", {
          params: {
            s: 1, phone: phone, smscode: smscode, sid: '${sid}'
          }
        }).then(res => {

        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    oldcode() {
      let phone = this.$refs.user.value
      let num = Number(phone)
      if (phone === "") {
        this.toast("手机号码不能为空!")
      } else if (phone.length !== 11) {
        this.toast("请输入11位手机号码!")
      } else if (!/^1[34578]\d{9}$/.test(num)) {
        this.toast("请输入有效的手机号码!")
      } else {
        this.$axios.get("/sdk/api/smscode", {
          params: {
            phone: phone, sid: '${sid}'
          }
        }).then(res => {
          this.toast("发送成功!")
        }).catch(function (error) {
          this.toast(error)
        })
        this.btnBool = true;
        let i = 60;
        let timer = setInterval(() => {
          this.yanzhengma = i + '秒后重新发送';
          i--;
          if (i < 0) {
            this.btnBool = false;
            this.yanzhengma = '获取验证码';
            clearInterval(timer);
          }
        }, 1000);
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
    bano(){
      history.back()
      Util.$emit('user',"user")
    },
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
@import "../style/user.css";

.button {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 5px;
  margin: 0.2rem auto;
  background: #ffcc00;
  color: #fff;
  font-size: 0.3rem;
  border: none;
}
.cain {
  background-color: #FFFFFF !important;
  height: auto !important;
  width: 100%;
}
.koop {
  overflow-y: hidden;
  overflow-x: hidden;
  /*height: 100%;*/
  padding: 0 0.2rem;
}
.lisr{
  width: 60vmax !important;
}
@media screen and (orientation: portrait) {

  .lisr{
    width: 63.5vmax !important;
  }
}
</style>
