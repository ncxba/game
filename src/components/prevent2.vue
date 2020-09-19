<template>
  <div id="container">
    <div class="main">
      <!--        <jsp:include page="left.html"></jsp:include>-->

      <div id="content2">
        <div class="top">
          <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
          <h1>防沉迷系统</h1>
        </div>
        <div class="prevent2">

          <div class="limit">根据国家相关规定，请完成实名认证；未成年玩家将受到以下游戏健康限制：</div>
          <p>1.某些游戏时间段将受到限制</p>
          <p>2.游戏充值金额将受到限制 &nbsp;&nbsp;&nbsp; <a  @click="$router.push('/prevent-detail')">查看详情&gt</a></p>
          <form action="">
            <input type="text" placeholder="请输入真实姓名" ref="name">
            <input type="text" placeholder="请输入身份证号" ref="IDNumber">
            <div class="submit-pre2" @click="submitPre">提交</div>
          </form>

          <p>用户姓名：张**</p>
          <p>身份证号：14425563******34</p>
          <p>已成年：是</p>
          <p>游戏限制：无</p>
          <form action="">
            <div class="submit-pre2">修改实名信息</div>
          </form>
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
  name: "prevent2",
  data() {
    return {
      toastShow: false,
      toastText: ''
    }
  },
  created() {
  },
  methods:{
    submitPre(){
      let namex = this.$refs.name.value
      let IDNumberx = this.$refs.IDNumber.value
      if (namex === '') {
        this.toast("姓名不能为空!")
        return
      } else if (IDNumberx === '') {
        this.toast("身份证号不能为空!")
        return
      }
      this.$axios.get("/sdk/api/login", {
        params: {
          phone: namex, code: IDNumberx
        }
      }).then(res => {

      })
    },
    toast (e) {
      let self = this
      self.toastText = e
      self.toastShow = true
      setTimeout(function(){
        self.toastShow = false
      }, 1500)
    },
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
@import "../style/login.css";
.submit-pre2{
  display: block;
  width: 100%;
  height: 0.8rem;
  text-align: center;
  border-radius: 5px;
  margin: 0.2rem auto;
  border: none;
  background: #ddd;
  color: #fff;
  font-size: 0.3rem;
  line-height: 0.8rem;
}
</style>
