<template>
  <!--  <div id="container">
      <div class="main">-->
  <div id="content" style="background-color: #FFFFFF;">
    <div id="content2">
      <div class="top">
        <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
        <h1>绑定新手机</h1>
      </div>
      <form class="bind">
        <div class="row">
          <input type="number" id="newphone" placeholder="请输入新的手机号" ref="user">
        </div>
        <div class="row">
          <input id="smscode" type="number" placeholder="请输入验证码" class="fill-code" ref="verification">
          <div class="code" id="newcode" @click="oldcode()">{{ yanzhengma }}</div>
        </div>
        <div id="button" class="button" @click="button">确认</div>
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
export default {
  name: "bind2",
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
      console.log(121)
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
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
@import "../style/login.css";

.button {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-top-left-radius: 5px !important;
  border-top-right-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
  margin: 0.2rem auto;
  background: rgb(255, 204, 0) !important;
  color: #fff;
  font-size: 0.3rem;
  border: none;
}
</style>
