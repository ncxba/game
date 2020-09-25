<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app, body, html{
  height: 100%;
  font-size: 50px
}
body{
  margin: 0;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 !important;
  padding: 0;
}
/*@media screen and (orientation: portrait) {

  html{
    width : 100%;
    height : 100%;
  }
  body{
    width : 100%;
    height : 100%;
  }

}
@media screen and (orientation: landscape) {

  html{
    width : 100%;
    height : 100%;
  }
  body{
    width : 100%;
    height : 100%;
  }
  #container{
    width : 100%;
    height : 100%;
  }
}*/
@media screen and (orientation: portrait) {
  html{
    width : 100vmin;
    height : 100vmax;
  }
  body{
    width : 100vmin;
    height : 100vmax;
  }
  #container{
    width : 100vmax;
    height : 100vmin;
    transform-origin: top left;
    transform: rotate(90deg) translate(0,-100vmin);
  }
}
@media screen and (orientation: landscape) {
  html{
    width : 100vmax;
    height : 100vmin;
  }
  body{
    width : 100vmax;
    height : 100vmin;
  }
  #container{
    width : 100vmax;
    height : 100vmin;
  }
}

@media (min-width: 320px) {
  html{
    font-size:42.667px !important;
  }
}
@media (min-width: 360px) {
  html{
    font-size:48px !important;
  }
}
@media (min-width: 375px) {
  html{
    font-size:50px !important;
  }
}
@media (min-width: 414px) {
  html{
    font-size:55.2px !important;
  }
}

/*
.fuchuan-loi {
    width: 75%;
    height: 65%;
    margin: 0 auto;
    background-color: #FFFFFF;
    border-radius: 6px;
    overflow: hidden;
}
*/
</style>
