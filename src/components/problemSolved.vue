<template>
  <div id="container">
    <div class="main">
      <div  id="content2">
        <div class="top">
          <div class="back" onclick="history.back()"><img src="../imgs/back.png" alt=""></div>
          <h1>已解决</h1>
          <div class="wen"><!--<img src="../imgs/wenhao-2.png" alt="">--></div>
        </div>

      </div>
      <div class="midi">
        <div class="Text-list">
          <div class="Text-time">
            <div class="unsolved wenh">问题</div>
            <div class="unsolved">提问时间</div>
            <div class="unsolved">反馈时间</div>
          </div>
        </div>
        <div class="AskQuestions">
          <ul class="questions_ul">
            <li class="questions_li">
              <div class="text">提问时间提问时间提问时间提问时间提问时间提问时间提问时间提问时间提问时间提问时间</div>
              <div class="ti-time">2020-9-18/17:17:57</div>
              <div class="ti-time">2020-9-18/17:17:57</div>
            </li>
            <li class="questions_li">
              <div class="text">提问时间提问时间提问时间提问时间提问时间提问时间提问时间提问时间提问时间提问时间</div>
              <div class="ti-time">2020-9-18/17:17:57</div>
              <div class="ti-time">2020-9-18/17:17:57</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "problemSolved"
}
</script>

<style scoped>
@import "../style/base.css";
@import "../style/user.css";
@import "../style/login.css";
#content2{
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.midi{
  padding: 0 0.2rem;
  padding-top: 0.9rem;
}
.Text-list{
  height: 0.8rem;
  border-bottom: 1px solid #e8e8e8;
}
.Text-time{
  float: right;
  display: flex;
  width: 100%;
}
.unsolved{
  width: 3rem;
  text-align: center;
  line-height: 0.8rem;
  color: #000000;
  font-size: 13px;
}
.wenh{
  width: 50%;
}
.AskQuestions{
  padding-top: 1px;
}
.AskQuestions .questions_ul{
  width: 100%;
}
.AskQuestions .questions_ul .questions_li{
   height: 0.8rem;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
}
.text, .ti-time{
  line-height: 0.8rem;
  text-align: left;
  width: 50%;
  font-size: 13px;
  color: #666666;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.ti-time{
  width: 25% !important;
  text-align: center !important;
}
</style>
