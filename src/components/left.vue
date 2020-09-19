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
  <div style="width: 100%;height: 100%;"><!-- height: 100%;-->

      <div id="container" style=" width: auto;float: left;z-index: 99999;position: fixed;top: 0;left: 0;"><!--height: 100%;position: fixed;top: 0;left: 0;-->
        <div id="nav">
          <a href="javascript:;" class="nav " v-for="(i,index) in tabs" :key="index"
             :class="purr1 == index ? 'active' : ''" :data-index="index" @click="addClassName(index,$event)">
            <router-link :to="i.url"  :replace="true">
              <img class="hunfd" :src="i.url===$route.path?tabs[index].active : tabs[index].img">
              <p class="haom">{{ i.text }}</p>
            </router-link>
          </a>
        </div>
      </div>
    <keep-alive>
      <router-view style="padding-left: 13vmin"></router-view>
    </keep-alive>


  </div>


</template>

<script>
export default {
  name: "left",
  props: ['tabName'],
  data() {
    return {
      purr1: 0,
      thatnum: 0,
      tabs: [
        {text: "账号", url: '/user', img: require("../imgs/nav1.png"), active: require('../imgs/nav1.png')},
        {text: "福利", url: '/welfare', img: require("../imgs/nav2.png"), active: require('../imgs/nav2.png')},
        {text: "客服", url: '/message', img: require("../imgs/nav3.png"), active: require('../imgs/nav3.png')},
        {text: "消息", url: '/service', img: require("../imgs/nav4.png"), active: require('../imgs/nav4.png')}
      ],
      true:true
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
</style>
