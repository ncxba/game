<template>
  <div id="container">
    <div class="main">
      <div id="content2" class="cain">
        <div class="top">
          <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
          <h1>我的咨询</h1>
        </div>
      </div>
      <div class="koop">
        <div class="advisory-list">
          <ul class="advisory-list-ul ">
            <li class="advisory-list-li" @click="$router.push('/questionDetails')">
              <div class="advisory-list-por">
                <div class="advisory-time">
                  9/21 14:21
                </div>
                <h2 class="ad-title">游戏充值不到账怎么办？</h2>
                <p>为什么成功扣款请提供充值记录历史购买截图联系客服哦！为什么成功扣款请提供充值记录历史购买截图联系客服哦！</p>
                <span>[未回复]</span>
              </div>
            </li>
            <li class="advisory-list-li" @click="$router.push('/questionDetails')">
              <div class="advisory-list-por">
                <div class="advisory-time">
                  9/20 16:21
                </div>
                <h2 class="ad-title">我密码忘记了怎么办？</h2>
                <p>我密码忘记了怎么办？</p>
                <span class="hui">[ 已回复 ] : 您只需要在问题反馈页面选择对应的选项，填写账号信息、游戏角色信息、充值信息等完整信息后进行申诉就可以了，</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "myconsultation"
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
@import "../style/login.css";

.cain {
  background-color: #FFFFFF !important;
  height: auto !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.main {
  background-color: #f5f6f7;
  padding-top: 0.84rem;
}

.koop {
  padding: 0 0.2rem;
  overflow: auto;
  height: 100%;
}

.advisory-list {
  width: 100%;
}

.advisory-list-ul {
  display: block;
}

.advisory-list-li {
  padding: 0.2rem 0.15rem;
  border-bottom: 1px solid #e8e8e8;
}

.advisory-list-por {
  background-color: #FFFFFF;
  padding: 0.21rem 0.3rem;
  position: relative;
}

.advisory-time {
  position: absolute;
  right: 0.21rem;
  top: 0.21rem;
  color: #a9a9a9;
  font-size: 0.26rem;
}

.ad-title {
  font-weight: 500;
  font-size: 0.30rem;
  color: #1a1a1a;
  line-height: 0.32rem;
  margin-bottom: 0.21rem;
}

.advisory-list-por p, .advisory-list-por span {
  color: #9e9e9e;
  font-size: 0.24rem;
  line-height: 0.26rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%
}

.advisory-list-por span {
  padding-top: 0.2rem;
  display: block;
  color: #ffc837;
}

.hui {
  color: #fe932a !important;
}
</style>
