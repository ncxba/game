<template>
  <div>


<div id="container">
  <div class="main">
    <div id="content2"  class="cain">
      <div class="top">
        <h2>QuYouSDK_Demo</h2>
      </div>

    </div>
    <div class="koop">
      <div class="character">
        <p>提交角色信息</p>
      </div>
      <div class="ceshi">
        <p>测试demo</p>
      </div>
      <div class="Features">
        <div class="Features-por" @click="trdgg(2)" >登录<!--<router-link to="/logo" :replace="true"  >登录</router-link>--></div>
        <div class="Features-por">支付</div>
        <div class="Features-por">注销</div>
      </div>
      <div class="characterA">
        <p>退出游戏</p>
      </div>
    </div>

  </div>
</div>
  <div class="fuchuan" v-show="true1" >
    <div class="gui">
      <div class="fuchuan-loi">
        <logo></logo>
        <!--<keep-alive>
          <router-view></router-view>
        </keep-alive>-->
      </div>
    </div>

  </div>
  </div>
</template>

<script>
import logo from "./logo"
import login_phone from "./login_phone"
export default {
  name: "demo",
  props: ['tabName'],
  thatnum: 0,
  data() {
    return {
      abc:"none",
      true1:false,
      true:true
    }
  },
  components:{
    "logo":logo,
    "login_phone":login_phone
  },
  created() {
    this.thatnum = this.tabName
  },
  mounted() {

  },
  methods:{
    trdgg(index){
      console.log(index)
      this.thatnum = index;
      this.abc = "block  !important"
      this.true1 = true
    },

  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
@import "../style/user.css";
.cain{
  background-color: #4b4690 !important;
  height: auto !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.main{
  background-color: #FFFFFF;
  padding-top: 0.75rem;
  position: relative;
}
.top h2{
  color: #FFFFFF;
  font-size: 0.26rem;
  text-align: left;
  font-weight: 500;
}
.koop{
  overflow: auto;
  height: 100%;
  padding: 0.2rem;
}
.character, .characterA{
  width: 100%;
  height: 0.7rem;
  background-color: #e8e8e8;
  border-radius: 5px;
}
.character p, .Features-por, .characterA p{
  text-align: center;
  color: #1a1a1a;
  font-size: 0.26rem;
  line-height: 0.7rem;
}
.ceshi{
  width: 100%;
  padding-top: 0.1rem;
}
.ceshi p{
  font-size: 0.26rem;
  color: #a3a1a1;
}
.Features{
  width: 96.5%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 15%;
}
.Features-por{
  width: 32%;
  border-radius: 5px;
  background-color: #d5d7d7;
}
.characterA{
  position: absolute;
  bottom: 2%;
  width: 96.5%;
}
.fuchuan{
  background-color: #1a1a1a7a;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.gui{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.fuchuan-loi{
  width: 65%;
  height: 75%;
  margin: 0 auto;
  background-color: #FFFFFF;
  border-radius: 6px;
  overflow: hidden;
}

</style>
