<template>
  <div id="container" style="background: #000;">
    <div class="frame">
      <div class="title">
        <h1>防沉迷系统</h1>
      </div>
      <div class="con">
        <div class="limit">根据国家相关规定，请完成实名认证；未成年玩家将受到以下游戏健康限制：</div>
        <p>1.某些游戏时间段将受到限制</p>
        <p>2.游戏充值金额将受到限制 &nbsp;&nbsp;&nbsp; <a @click="$router.push('/prevent-detail')" >查看详情&gt</a></p>
        <form action="">
          <input type="text" placeholder="请输入真实姓名" ref="name">
          <input type="text" placeholder="请输入身份证号" ref="IDNumber">
          <div class="submitPre" @click="submit">提交</div>
        </form>
      </div>
    </div>
    <div class="toast" v-show="toastShow">
      {{toastText}}
    </div>
  </div>
</template>

<script>
export default {
  name: "prevent",
  data() {
    return {
      toastShow: false,
      toastText: ''
    }
  },
  created() {
  },
  methods:{
    submit(){
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
@import "../style/login.css";
.submitPre{
  display: block;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 5px;
  margin: 0.2rem auto;
  border: none;
  background-color: #ddd;
  color: #fff;
}
</style>
