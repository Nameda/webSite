<template>
  <div class="header">
    <div class="menu-ban-main">
      <div class="menu-logo">
        <div class="menu-logo-box">
          <a href="javascrpt:;" class="f-left">
            <img src="./../assets/imgs/index/logo.png">
          </a>
          <a class="back-home" href="http://cq.fsygroup.com/home">首页</a>
          <div class="f-right menu-fc">
            <a href="javascrpt:;" style="float: left; opacity: 1;" class=""><img src="./../assets/imgs/index/24hours.jpg"></a>
            <a class="callme" href="javascrpt:;" style="margin-left: 10px; opacity: 1;"><img src="./../assets/imgs/index/zxzx.jpg"></a>
          </div>
        </div>
      </div>
      <div class="menu-banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../assets/imgs/index/banner1.jpg"/></div>
              <div class="swiper-slide"><img src="../assets/imgs/index/banner2.jpg"/></div>
              <div class="swiper-slide"><img src="../assets/imgs/index/banner3.jpg"/></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          
          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'headerBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      scrollbar: '.swiper-scrollbar',
    })        
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu-ban-main{
  position: relative;
  overflow: hidden;
  // height: 200px;
  .menu-logo{
    width: 100%;
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    height: 85px;
    line-height: 85px;
    background: rgba(255,255,255,0.7);
    -webkit-background: rgba(255,255,255,0.7);
    .menu-logo-box{
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  .menu-banner{
    .swiper-container {
        width: 100%;
        img{
          width:100%;
        }
    }
  }
}
</style>
