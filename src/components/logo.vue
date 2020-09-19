<template>
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
        <a @click="verification()">验证码登录</a>
        <!--<span>|</span>
        <a href="">快速注册</a>-->
      </div>
    </div>
    <div class="toast" v-show="toastShow">
      {{toastText}}
    </div>
  </div>
</template>

<script>
export default {
  name: "logo",
  data() {
    return {
      jiu: false,
      text: "手机号码不能为空",
      toastShow: false,
      toastText: ''
    }
  },
  created() {
  },
  methods: {
    enterA() {
      console.log(this.$refs.userphone1.value)
      let phone = this.$refs.userphone1.value
      let code = this.$refs.userpass.value
      let num = Number(phone)
      if (phone === "") {
        this.toast("手机号码不能为空!")
      }else if (phone.length !== 11) {
        this.toast("请输入11位手机号码!")
      }
      else if (!/^1[34578]\d{9}$/.test(num)) {
        this.toast("请输入有效的手机号码!")
      } else if (code === "") {
        this.toast("密码不能为空!")
      } else {
        this.$axios.get("/sdk/api/login", {
          params: {
            phone: phone, code: code
          }
        }).then(res => {
          this.$router.push({name: 'subaccount'});
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
    verification() {
      this.$router.push({name: 'login_phone'});

    }
  }
}
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
</style>
