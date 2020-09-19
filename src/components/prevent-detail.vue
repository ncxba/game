<template>
  <div id="container" style="background: #000;">
    <div class="frame">
      <div class="title">
        <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
        <h1>详情</h1>
      </div>
      <div class="con">
        <div class="limit">未成年玩家将受到以下游戏健康限制：</div>
        <div class="type">游戏时段时长</div>
        <p><span>●</span>每日20:00至次日8:00将被限制登录</p>
        <p><span>●</span>法定节假日每日累计游戏时间不得超过3小时</p>
        <p><span>●</span>其他时间每日累计游戏时间不得超过1.5小时</p>

        <div class="type">游戏充值</div>
        <p><span>●</span>8周岁以下用户将不提供游戏付费服务</p>
        <p><span>●</span>8周岁以上未满16周岁用户，单次充值不得超过50元人民币；每月累计充值不得超过200元人民币</p>
        <p><span>●</span>16周岁以上未满18周岁用户，单次充值不得超过100元人民币；每月累计充值不得超过400元人民币</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "prevent-detail",
  data() {
    return {

    }
  },
  created() {
  },
  methods:{

  }
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/login.css";
</style>
