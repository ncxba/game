<template>
  <!--<ul id="nav">
    <li class="active">
      <a @click="clickItem('/user')" :class="{active: $route.path==='/user'}">
        <img src="../imgs/nav1.png" alt="">
        <p>账号</p>
      </a>
    </li>
    <li>
      <a @click="clickItem('/welfare')" :class="{active: $route.path==='/welfare'}">
        <img src="../imgs/nav2.png" alt="">
        <p>福利</p>
      </a>
    </li>
    <li>
      <a @click="clickItem('/message')" :class="{active: $route.path==='/message'}">
        <img src="../imgs/nav3.png" alt="">
        <p>消息</p>
      </a>
    </li>
    <li>
      <a @click="clickItem('/service')" :class="{active: $route.path==='/service'}">
        <img src="../imgs/nav4.png" alt="">
        <p>客服</p>
      </a>
    </li>
  </ul>-->

  <div id="container" style="" class="lisr"><!-- width: 63.5vmax;"-->
    <div class="main">

      <ul id="nav">
        <li v-for="(i,index) in tabs" :key="index"
            :class="purr1 == index ? 'active' : ''" :data-index="index" @click="addClassName(index,$event)">
          <a href="javascript:;" >
            <img class="hunfd" :src="i.url===$route.path?tabs[index].active : tabs[index].img">
            <p class="haom">{{ i.text }}</p>
          </a>
        </li>

      </ul>
      <user class="gf" :class="purr == 0 ? 'active' : ''" data-index="1"></user>
      <welfare class="gf" :class="purr == 1 ? 'active' : ''" data-index="2"></welfare>
      <service class="gf" :class="purr == 2 ? 'active' : ''" data-index="3"></service>
      <message class="gf" :class="purr == 3 ? 'active' : ''" data-index="4"></message>
    </div>
  </div>


</template>

<script>
import User from "./user";
import Welfare from "./welfare";
import Service from "./service";
import Message from "./message";

export default {
  name: "left",
  components: {User, Welfare, Service, Message},
  props: ['tabName'],
  data() {
    return {
      purr1: 0,
      thatnum: 0,
      tabs: [
        {text: "账号", url: '/user', img: require("../imgs/nav1.png"), active: require('../imgs/nav1.png')},
        {text: "福利", url: '/welfare', img: require("../imgs/nav2.png"), active: require('../imgs/nav2.png')},
        {text: "客服", url: '/service', img: require("../imgs/nav3.png"), active: require('../imgs/nav3.png')},
        {text: "消息", url: '/message', img: require("../imgs/nav4.png"), active: require('../imgs/nav4.png')}
      ],
      true: true,
      purr: 0
    }
  },
  mounted() {
    this.thatnum = this.tabName
  },
  methods: {
    addClassName: function (index, e) {
      console.log(index)
      this.thatnum = index;
      let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
      this.purr1 = thisCurr;
      this.purr = thisCurr
    }
  }
}

</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
@import "../style/user.css";

body {
  margin: 0;
}


.haom {
  line-height: 0.3rem;
}

.hunfd {
  display: block;
  width: 0.5rem;
  margin: 0 auto;
}

.active p {
  color: #000;
  font-weight: bold;
}

.gf {
  display: none;
}

.active {
  display: block !important;
}
.lisr{
  width: 60vmax !important;
}
@media screen and (orientation: portrait) {
  /*.lisr{
    position: fixed;top: 0;left: 0;
  }*/

  .lisr{
    width: 63.5vmax !important;
  }
}
</style>
