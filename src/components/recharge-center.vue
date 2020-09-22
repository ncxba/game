<template>
  <div id="container">
    <div class="center">
      <h2>充值中心</h2>
      <img src="../imgs/close.png" alt="" class="recharge-close" width="">
      <div class="recharge">
        <div class="term">
          <p>充值金额：</p>
          <p>￥{{money}}</p>
        </div>
        <div class="term">
          <p>代金券：</p>
          <div class="right" id="coupon" @click="vouchere"><!--@click="vouchere"-->
            0张可以用 &nbsp;&nbsp; <img src="../imgs/go.png" alt="" class="cash-click">
          </div>
        </div>
        <div class="term">
          <p>支付方式：</p>
          <div class="right" style=" line-height: 22px;" id="payType" @click="thewayrr">
            <img  :src="huim.img" alt="" style="width: 0.3rem"> &nbsp;&nbsp; {{huim.text}} &nbsp;&nbsp;
            <img
              src="../imgs/go.png" alt="" class="pay-click">
          </div>
        </div>
        <hr>
        <div class="term">
          <p>优惠金额：</p>
          <p id="discount">无</p>
        </div>
        <div class="term">
          <p>您只需支付：</p>
          <p id="amount">￥{{Payment}}</p>
        </div>
        <div  id="goPay" @click="rechargeS">充值</div>
      </div>

      <div class="cover" :style="{ display: item }" ><!--:style="{ display: dodelq }"-->
        <div class="cash" :style="{ display: dodela }">
          <h2>请选择代金券</h2>
          <img src="../imgs/close.png" @click="kou" alt="" class="cash-close">
          <div class="empty" >
            <img src="../imgs/wuneirong.png" alt="">
            <p>暂无可用代金券</p>
          </div>
          <ul class="coupon">

          </ul>
        </div>

        <div class="pay-method" :style="{ display: dodelq }">
          <h2>请选择充值方式</h2>
          <img src="../imgs/close.png" alt="" class="pay-close"  @click="kou">
          <ul class="pay">
            <li >
              <div class="left"><img src="../imgs/zhifubao.png" alt="">支付宝支付</div>
              <input name="paytype" type="radio" value="1" data-index="1"   checked @click="rooe($event)">
            </li>
            <li >
              <div class="left"><img src="../imgs/weiixn.png" alt="">微信支付</div>
              <input name="paytype" type="radio" value="2" data-index="2"  @click="rooe($event)">
            </li>
            <li >
              <div class="left"><img src="../imgs/fantuan.png" alt="">平台币</div>
              <input name="paytype" type="radio" value="3" data-index="3"  @click="rooe($event)">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "recharge-center",
  data() {
  return {
    bulletFrame:true,
    item:"none",
     dodelq:"none",
     dodela:"none",
    huim:{
      img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADyElEQVRoQ+1ZXVIaQRD+epaKlaqEJScINwg5QfQG5ASa5wTFE6gnACF5jpwgegLJCSQnEE7grlplxVro1MwisL8zy66oKeZ1e7v76//pIbzwQy9cf6wBPLUHs3mgc/Pp0RW2yMXXNwNTOXoA36+3wZMmQDVTpsXQ8QAk2vhW7qXxSwbQ4gpK7vnqFQ+rywN49hb2yYkDEg9AKm+5FyCqFmPNvFySQcQD6LonALbzii34/x4a9k6YZxTAj9saJuOLgoUXw05YH8MJHgXQddsA9vJJ5BFA0ouL5yAfT/X3ERr24SKfKICO0wdR3nIZEYSuy7kBMP/GbmVzDcDAkmsPxBqpkBBi7INEeqv3SkPsvx4GlOjeBGI3XsFJDYRWoocLAQA0wRoA49IoAsBkjqKJHFdkFYw/BQEwSIFouVtXIWm24jwQ26gWPCP6aLztB3PADTSgGDfqG11hAGIYmcRVIk33ug7wLy2PwgBoJWkIvPK7wHhsOjw+EwDRqbLjXBqN7s8DAH1Go3w681GW6Tc3AMYZQKcgGgaStHVXRcmrglUjqoK5Fj8Q8giNSvCSZBo++aoQ/4G3UY80p7RQV1dS2X1ZJmgdIBtMX7Bbno/ZCvj9pXFKLecBqby9OUs6dd28/TATarpFkJVmMXQkgyzWX84D7MKzq0p5NcuMDwBKmGm4D6YBLKtntBZRHrq+Mrb+cgBwjIbdhGmdftCGeQiiE3iveqlhp7x5UwfxNNTITgWUPYTElkrWjnMFokoma82JfSOYHN9Q85wJ/5MZgGw4pdsaMDk3kR+lYReitGkUUuGf/fK6My0A79XnzAAaNiFLnQ4oEaO8CpnrFkj0IrNSakW7q8K6r6sSHfKm5lI/DaGuMwBoXnm07uARRKkesXzXkZu+aRHgPmAdZQISI1e3lfDbvvKC11e1XHdksxuXdwKzzszyiCymIBNeiEPdDjRJrA4A8LBM8puOHImTNnY9CKsdsbrpjpXZAVEbXvk4aQ8aB0IPQFpovLEVKIeL91tBTmKSSjoe/zQa1Ba1Y5zAso5Nkl8PwM9+B0I0jd2sFJ9sg2JCRheCwULQx0S0sVc+Wz6EApaZNigWfSyOEPLCzlyB4Nq07BX7luA3RhlevXB4PdJuNJOZsxBHmuJ/uJ2W9ihmwZvFsnrahHt4wguNLJl/ZfPS13296AIo5FS8UYsbDJPfyPzmdQqQP4c82Uno6lN90l8p/Zm9CbB8pVyxN9gFVOVppzU2/TPrg+WVR3jZkTqb/9KaY4iTOYBsKqyMeg1gZaZOEPQPFJkOT1bX6oYAAAAASUVORK5CYII=",
      text:"支付宝支付"
    },
    money:0,
    Payment:0


  }
  },
  created() {
    /*this.money = this.$route.params.uid;
    console.log(this.money)*/
    console.log(window.location.hash.split("=")[1])
    this.money = window.location.hash.split("=")[1]
    this.Payment =  window.location.hash.split("=")[1]
  },
  methods: {
    thewayrr(){
      this.item = "block"
      this.dodelq = "block"
    },
    kou(){
      this.item = "none"
       this.dodelq = "none"
       this.dodela = "none"
    },
    vouchere(){
      this.item = "block"
      this.dodela = "block"
    },
    rooe(e){
      console.log(e)
      this.huim={ img: e.currentTarget.previousElementSibling.children[0].src, text:e.currentTarget.previousElementSibling.textContent }
      console.log(this.huim)
      this.item = "none"

    },
    rechargeS(){
      this.$axios.get("/sdk/api/pay",{
        params:{
          couponid: couponid, payid: '${payinfo.id}', payType: payType, sid: '${sid}'
        }
      }).then(res=>{

      })
    }
  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
#goPay{
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 5px;
  margin: 0.2rem auto;
  background-color: #ffc837;
  font-size: 0.3rem;
  border: none;
}
</style>
