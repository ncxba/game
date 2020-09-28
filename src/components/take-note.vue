<template>
<!--  <div id="container">
    <div class="main">-->
  <div id="content" style="background-color: #FFFFFF;">
      <div id="content2">
        <div class="top">
          <div class="back"   @click="bano"><img src="../imgs/back.png" alt=""></div>
          <ul class="note">
            <li class="" id="recharge" :class="coor == 1 ? 'active' : ''" data-index="1" @click="haos($event)">充值记录</li>
            <li id="consume" :class="coor == 2 ? 'active' : ''" data-index="2" @click="haos($event)">消费记录</li>
          </ul>
        </div>
        <div class="empty" style="display: none">
          <img src="../imgs/wuneirong.png" alt="">
          <p>暂无数据</p>
        </div>
        <div class="rechargeRecord w1" :class="coor == 1 ? 'arrc' : ''" data-index="1">
          <table id="tb_recharge">
            <tr>
              <td>充值时间</td>
              <td>充值金额</td>
            </tr>
            <input type="text" hidden name="rp"  value="1" id="rp" ref="rp"/>

          </table>
          <div class="loading">据加载中，请稍等...</div>
          <div class="loading_finished" style="display: none">数据加载完毕...</div>
        </div>
        <div class="consumeRecord w1" :class="coor == 2 ? 'arrc' : ''" data-index="1">
          <table id="tb_consumeRecord">
            <tr>
              <td>消费时间</td>
              <td>消费金额</td>
            </tr>
            <input type="text" hidden name="cp" value="1" id="cp" ref="cp"/>
          </table>
          <div class="loading">据加载中，请稍等...</div>
          <div class="loading_finished" style="display: none">数据加载完毕...</div>
        </div>
      </div>
  </div>
      <!--</div>
  </div>-->
</template>

<script>
import Util from "../assets/js/util";

export default {
  name: "take-note",
  data() {
    return {
      coor:1
    }
  },
  created() {
    this.RequestData()
  },
  methods: {
    haos(e) {
      let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
      this.coor = thisCurr;
    },
    RequestData(){
      let rq = this.$refs.rq.value
      this.$axios.get("/sdk/api/takenote",{
        params:{p:rq}
      }).then(res=>{

      }).catch(function (error) {

      })

      let cq = this.$refs.cq.value
      this.$axios.get("/sdk/api/takenote",{
        params:{p:cq}
      }).then(res=>{

      }).catch(function (error) {

      })
    },
    bano(){
      history.back()
      Util.$emit('user',"user")
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
.w1{
  display: none;
}
.arrc{
  display: block !important;
}
.lisr {
  width: 60vmax !important;
}

@media screen and (orientation: portrait) {

  .lisr {
    width: 63.5vmax !important;
  }
}
</style>
