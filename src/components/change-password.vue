<template>

  <!--  <div id="container">
      <div class="main">-->
  <div id="content" style="background-color: #FFFFFF;">
    <div id="content2">
      <div class="top">
        <div class="back" @click="bano"><img src="../imgs/back.png" alt=""></div>
        <h1>修改密码</h1>
      </div>
      <p style="color: #ddd;letter-spacing: 1px;margin: 0.2rem 0">您正在修改 <span
        style="color: #ffcc00;font-weight: bold"></span> 的密码</p>
      <input id="token" type="text" style="display:none" value="${token}">
      <form class="change">
        <input id="opw" type="text" placeholder="请输入原密码" ref="oldPassword" v-show="hiddens" >

        <input id="npw" type="text" placeholder="请输入新的密码" ref="NewPassword">
        <input id="cpw" type="text" placeholder="请确认新的密码" ref="confirmPassword">
        <div class="button" @click="confirm">确认</div>
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
  name: "change-password",
  data() {
    return {
      toastShow: false,
      toastText: '',
      hiddens:true
    }
  },
  created() {
    let _this = this
    this.$axios({
      url:"http://192.168.1.29:8080/api/h5/index",
      method:'get',
      params:{pid:8,gameid:100001},
    }).then(function (res) {
      console.log(res)
      if (res.data.passwordExist === 0){
        _this.hiddens = false
      } else {
        _this.hiddens = true
      }
    })
    // this.passwordS("ere")
    // console.log(this.$route.query)

  },
  methods: {

    confirm() {
      let old = this.$refs.oldPassword.value
      console.log(old)
      let New = this.$refs.NewPassword.value
      let confirm = this.$refs.confirmPassword.value
      if (New === '') {
        this.toast("密码不能为空")
      } else if (confirm === '') {
        this.toast("确认密码不能为空")
      } else if (New !== confirm) {
        this.toast("两次密码不相同,请重新输入!")
      } else {
        let _this = this
        this.$axios({
          url:"http://192.168.1.29:8080/api/h5/index",
          method:'get',
          params:{newPassword:New,pid:9,gameid:100001,},
        }).then(function (res) {
          console.log(res)

        }).catch(function (error) {

        })
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
      // Util.$emit('user',"user")
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";

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
  /*max-width: 150px;*/
}

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
</style>
