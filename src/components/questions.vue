<template>
<div id="container">
  <div class="main">
    <div id="content2">
      <div class="top">
        <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
        <h1>提问</h1>
        <div class="wen"><!--<img src="../imgs/wenhao-2.png" alt="">--></div>
      </div>
      <div class="row">
        <input type="text" id="phone" placeholder="请输入您的问题" ref="userphone1">
      </div>
      <div class="row" style="position: relative">
        <input type="text" id="phonee" placeholder="请选择游戏类型"  ref="phoneX" @click="select" :value="tests" >
        <img src="../imgs/sanjiaoxing.png" class="row-img" alt="">
        <div class="account" v-show="tesa">
          <ul>
            <li v-model="tests" :title="test" @click="shutdown($event)">{{ test }}</li>
          </ul>
        </div>
      </div>
      <div class="content">
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入您的问题/建议" ref="textarea"></textarea>
      </div>
      <div class="login-btn">
        <div class="btn" style="float: left;">取消</div>
        <div class="reg" style="float: right;" @click="letsgo">确定</div>
      </div>
    </div>

  </div>
  <div class="toast" v-show="toastShow">
    {{toastText}}
  </div>
</div>
</template>

<script>
export default {
name: "questions",
  data() {
    return {
      tesa: false,
      test: "test",
      tests: "",
      toastShow: false,
      toastText: ''
    }
  },
  created() {

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
    toast (e) {
      let self = this
      self.toastText = e
      self.toastShow = true
      setTimeout(function(){
        self.toastShow = false
      }, 1500)
    },
    letsgo(){
      let phone = this.$refs.userphone1.value
      let code = this.$refs.phoneX.value
      let textarea = this.$refs.textarea.value
      if (code === "") {
        this.toast("请输入选择的游戏类型")
      } else  if (textarea === "") {
        this.toast("请输入您的问题或建议!")
      }
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
@import "../style/login.css";
.row{
  width: 100%;
  height: 0.8rem;
  margin: 0.2rem auto;
  position: relative;
}
 .row>input{
  width: 100%;
  height: 100%;
  padding: 0 0.2rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(232, 232, 232, 0.62);
}
 .content{
   width: 100%;
   height: 3rem;
 }
.content>textarea{
  width: 100%;
  height: 100%;
  padding:  0.2rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(232, 232, 232, 0.62);
  resize : none;
  font-size: 13px;
  font-family: sans-serif;
}
.login-btn{
  display: flex;
  width:100%;
}

.reg, .btn {
  width: 35%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 5px;
  margin: 0.2rem auto;
  background-color: #ddd;
  font-size: 0.3rem;
  color: #fff;
}
.reg {
  background-color: #ffc837;
}
.row-img{
  position: absolute;
  top: 0.3rem;
  right: 0.25rem;
  width: 0.26rem;
  height: 0.2rem;
}
</style>
