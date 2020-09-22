<template>
  <div id="container">
    <div class="main">
      <!--        <jsp:include page="left.html"></jsp:include>-->
      <div id="content2" class="cain">
        <ul class="welfare-head" >
          <li :class="purr == 1 ? 'active' : ''" data-index="1" @click="haos($event)">卡券</li>
          <li :class="purr == 2 ? 'active' : ''" data-index="2" @click="haos($event)">福利</li>
          <li :class="purr == 3 ? 'active' : ''" data-index="3" @click="haos($event)">礼包</li>
        </ul>

      </div>
      <div class="koop">
        <div class="welfare ":class="purr == 1 ? 'active' : ''" data-index="1">
          <div class="receive-code">
            <input type="text" placeholder="请输入代金券领取码">
            <div class="lingqu">领取</div>
          </div>
          <ul class="coupon">
            <li>
              <div class="info1">
                <p class="price">￥58</p>
                <div class="detail">
                  <p class="name">满98元可用</p>
                  <p class="date">2020.06.01-2020.06.12</p>
                  <div class="tag">单游券</div>
                </div>
                <div class="receive">领取</div>
              </div>
              <div class="info2">
                <p>该代金券仅限本游戏使用</p>
                <a href="">详情</a>
              </div>
            </li>
            <li>
              <div class="info1">
                <p class="price">￥58</p>
                <div class="detail">
                  <p class="name">满98元可用</p>
                  <p class="date">2020.06.01-2020.06.12</p>
                  <div class="tag">单游券</div>
                </div>
                <div class="receive">领取</div>
              </div>
              <div class="info2">
                <p>该代金券仅限本游戏使用</p>
                <a href="">详情</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="welfare" :class="purr == 2 ? 'active' : ''" data-index="2">
          <ul class="gift">
            <li>
              <div class="message">
                <h2>累充10000元礼包</h2>
                <p>充即送：传世战刃*1，高级特荣精华*5，超级转身丹*1，超级轮回丹*1</p>
              </div>
              <div class="apply">申请</div>
            </li>
            <li>
              <div class="message">
                <h2>累充8000元礼包</h2>
                <p>充即送：传世战刃*1，高级特荣精华*3，超级转身丹*1，超级轮回丹*1</p>
              </div>
              <div class="apply">申请</div>
            </li>
            <li>
              <div class="message">
                <h2>累充500元礼包</h2>
                <p>充即送：超级转身丹*3，超级轮回丹*3</p>
              </div>
              <div class="apply">申请</div>
            </li>
          </ul>
        </div>
        <div class="welfare" :class="purr == 3 ? 'active' : ''" data-index="3">
          <ul class="gift">
            <li>
              <div class="message">
                <h2>新手礼包</h2>
                <p>龙珠结晶*1，魂珠结晶*1...</p>
              </div>
              <div class="apply">领取</div>
            </li>
            <li>
              <div class="message">
                <h2>独家礼包</h2>
                <p>神羽*30，宝藏秘钥*5...</p>
              </div>
              <div class="apply">领取</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "welfare",
  data() {
  return {
    purr:1
  }
  },
  created() {

  },
  methods: {
    haos(e) {
      let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
      this.purr = thisCurr;
    },
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
.lingqu{
  float: right;
  width: 1.6rem;
  text-align: center;
  line-height: 0.8rem;
  background: #9e9e9e;
  border-radius: 5px;
  color: #fff;
  border: none;

}

.cain{
  background-color: #FFFFFF !important;
  height: auto !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.koop{
  padding: 0 0.2rem;
  height: 100%;
  overflow: auto;
}
.main{
  padding-top: 1rem;
}


</style>
