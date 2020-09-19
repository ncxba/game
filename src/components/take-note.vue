<template>
  <div id="container">
    <div class="main">
      <!--<jsp:include page="left.html"></jsp:include>-->
      <div id="content2">
        <div class="top">
          <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
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
            <!--<c:forEach items="${pagelist.content}" var="var" varStatus="s">
              <tr>
                <td><fmt:formatDate value="${var.createtime}" pattern="MM月dd日 HH:mm"/></td>
                <td>${var.amount}元</td>
              </tr>
            </c:forEach>-->
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
            <!--<c:forEach items="${pagelist.content}" var="var" varStatus="s">
              <tr>
                <td><fmt:formatDate value="${var.createtime}" pattern="MM月dd日 HH:mm"/></td>
                <td>${var.amount}元</td>
              </tr>
            </c:forEach>-->
          </table>
          <div class="loading">据加载中，请稍等...</div>
          <div class="loading_finished" style="display: none">数据加载完毕...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
</style>
