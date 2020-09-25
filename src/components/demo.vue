<template>
  <div>

    <div id="container">
      <div class="main">
        <div id="content2" class="cain">
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
            <div class="Features-por" @click="trdgg(1)"><!--登录-->
              <router-link to="/logo" :replace="true"  >登录</router-link></div>
            <div class="Features-por">支付</div>
            <div class="Features-por">注销</div>
          </div>
          <div class="characterA">
            <p>退出游戏</p>
          </div>
        </div>

      </div>
    </div>
    <div class="fuchuan" v-show="true1">
      <div class="gui">
        <div class="fuchuan-loi">
          <!--<logo ref="logo"></logo>
          <router-view/>-->
          <keep-alive>
            <router-view ref="logo" ></router-view>
          </keep-alive>
        </div>
      </div>

    </div>
    <float-icons padding="10 10 60 10" class="icons-warp" v-show="piao">
      <div class="float-icon-item"@click="iconsb">
        <img src="../imgs/tx.png" alt=""  />
      </div>
    </float-icons>

    <div class="fuchuan bou"  style="" v-show="huns"><!--position: relative;-->
      <div class="hunghg">
        <left></left>

      </div>
      <div class="roof" @click="getswitch"></div>

    </div>
  </div>
</template>

<script>
import logo from "./logo"
import FloatIcons from './icons'
import Left from "./left";
import User from "./user";
import Util from "../assets/js/util";

export default {
  name: "demo",
  props: ['tabName'],
  thatnum: 0,
  components: {
    "logo": logo,
    'float-icons': FloatIcons,
    'left':Left,
    'user':User
  },
  data() {
    return {
      abc: "none",
      true1: false,
      true: true,
      piao:false,
      huns:false,
      yunff:true
    }
  },

  created() {
    this.thatnum = this.tabName
  },
  mounted() {
    Util.$on("demo",(domo)=>{
      console.log(domo)
      this.true1 = false
      this.piao = true
    })
  },
  methods: {
    trdgg(index) {
       console.log(index)
       this.thatnum = index;
      this.abc = "block  !important"
      this.true1 = true
       // this.piao = true
    },
    iconsb(){
      this.huns = true
      this.piao = false
    },
    getswitch(){
      this.huns = false
      this.piao = true
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
@import "../style/user.css";

.cain {
  background-color: #4b4690 !important;
  height: auto !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.main {
  background-color: #FFFFFF;
  padding-top: 0.75rem;
  position: relative;
}

.top h2 {
  color: #FFFFFF;
  font-size: 0.26rem;
  text-align: left;
  font-weight: 500;
}

.koop {
  overflow: auto;
  height: 100%;
  padding: 0.2rem;
}

.character, .characterA {
  width: 100%;
  height: 0.7rem;
  background-color: #e8e8e8;
  border-radius: 5px;
}

.character p, .Features-por, .characterA p {
  text-align: center;
  color: #1a1a1a;
  font-size: 0.26rem;
  line-height: 0.7rem;
}

.ceshi {
  width: 100%;
  padding-top: 0.1rem;
}

.ceshi p {
  font-size: 0.26rem;
  color: #a3a1a1;
}

.Features {
  width: 96.5%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 15%;
}

.Features-por {
  width: 32%;
  border-radius: 5px;
  background-color: #d5d7d7;
}

.characterA {
  position: absolute;
  bottom: 2%;
  width: 96.5%;
}

.fuchuan {
  background-color: #1a1a1a7a;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gui {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.fuchuan-loi {
  width: 65%;
  height: 75%;
  margin: 0 auto;
  background-color: #FFFFFF;
  border-radius: 6px;
  overflow: hidden;
}
.icons-warp {
  border-radius: 25px;}
.float-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50px;
  height: 50px;}
img {
  width: 35px;
  height: 35px;
}
.hunghg{
  width: 60%;
  height: 100%;
  background-color: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;

}
.roof{
  flex: 1;
}
.bou{
  display: flex;
}
@media screen and (orientation: portrait) {
  .fuchuan-loi {
    width: 75%;
    height: 65%;
    margin: 0 auto;
    background-color: #FFFFFF;
    border-radius: 6px;
    overflow: hidden;
  }
  .icons-warp{
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-transform: rotate(90deg) translate(0,-100vmin);
    transform: rotate(90deg) translate(0);
  }
  .bou{
    display: block;
  }
  .hunghg{
    width: 100%;
    height: 63.5%;
    /*height: 56.5%;*/
  }
  .roof{
    height: 36.5%;
  }
}

</style>
