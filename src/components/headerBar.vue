<template>
  <div class="header">
    <div class="menu-ban-main">
      <div class="menu-logo">
        <div class="menu-logo-box">
          <!-- <a href="javascrpt:;" class="f-left">
            <img src="./../assets/imgs/index/logo.png">
          </a> -->
          <router-link class="back-home" to="/"><span class="name">金铂利</span></router-link>
          <div class="f-right menu-fc">
            <div class="right1">
              <p><i></i>24小时服务专线</p>
              <p>028-89898989</p>
            </div>
            <div class="right2">
              <i></i>
              在线咨询
            </div>
            <!-- <a href="javascrpt:;" style="float: left; opacity: 1;" class=""><img src="./../assets/imgs/index/24hours.jpg"></a>
            <a class="callme" href="javascrpt:;" style="margin-left: 10px; opacity: 1;"><img src="./../assets/imgs/index/zxzx.jpg"></a> -->
          </div>
        </div>
      </div>
      <div class="menu-banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555408851847&di=1dd16fac92c619f31c956157ca590669&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F15%2F20130115190821_hYhzW.jpeg"/></div>
              <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555408851846&di=7c4af93c5256c11e526ee94efa2e268e&imgtype=0&src=http%3A%2F%2Fp3.so.qhmsg.com%2Ft01214e95af3a46efb8.png"/></div>
              <!-- <div class="swiper-slide"><img src="../assets/imgs/index/banner3.jpg"/></div> -->
          </div>
          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </div>
      </div>
      <div class="menu-box" id="menu-box" :class="menuFixed == true ? 'isFixed' :''">
        <div class="menu-box-inside clearfix">
          <ul class="menu-list">
            <li v-for="(item,index) in menuList" :class="select==item.type?'menu-select':''" :key="index" @click="goOther(item.link)">
              <a href="javascript:;" >·&nbsp;&nbsp;{{item.text}}<p></p></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'headerBar',
  props:{
    select:{
      type:String
    }
  },
  data () {
    return {
      menuList:[
        {text:'服务项目',type:"serviceItem",link:'/serviceItem'},
        {text:'服务流程',type:"serviceProcess",link:'/serviceProcess'},
        {text:'展示',type:"exhibition",link:'/exhibition'},
        {text:'生前契约',type:"contract",link:'/contract'}],
      menuFixed:false
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      loop: true,
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
    })        

    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    goOther(link){
      this.$router.push({path:link})
    },
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var menuHeight = document.querySelector('#menu-box').clientHeight;
      var bannerHeight = document.querySelector('.menu-banner').clientHeight;
      if (scrollTop > bannerHeight-menuHeight) {
        this.menuFixed = true
      } else {
        this.menuFixed = false
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
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
      .back-home{
        line-height: 2em;
        .name{
          font-size: 1.5em;
        }
      }
      .f-right{
        color: #fff;
        font-size: 16px;
        text-align: center;
        line-height: 20px;
        display:table-cell;
        vertical-align: middle;
        .right1{
          float: left;
          width: 240px;
          height: 85px;
          background: #267c8b;
          margin-right: 20px;
          line-height: 30px;
          p:nth-of-type(1){
            padding-top: 13px;
            i{
              display: inline-block;
              width: 24px;
              height: 24px;
              background: url('../assets/imgs/index/phone-icon.png') no-repeat;
              background-size: 100%;
              position: relative;
              top: 4px;
              right: 8px;
            }
          }
        }
        .right2{
          float: right;
          width: 240px;
          height: 85px;
          background: #a59053;
          line-height: 85px;
          i{
            display: inline-block;
            width: 30px;
            height: 30px;
            background: url('../assets/imgs/index/zixun-icon.png') no-repeat;
            background-size: 100%;
            position: relative;
            top: 10px;
          }
        }
      }
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
  .menu-box{
    width:100%;
    z-index: 9;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 85px;
    background: rgba(24,125,138,0.9);
    &.isFixed{
      position:fixed;
      background-color:#Fff;
      top:0;
      z-index:999;
      background: rgba(24,125,138,0.9);

    }
    .menu-box-inside{
      width: 1045px;
      margin: 0 auto;
      .menu-list{
        width: 100%;
        float: left;
        padding: 0;
        margin: 29px 0;
        li{
          width: 14.2857%;
          height: 27px;
          line-height: 27px;
          border-left: 1px solid #005e6a;
          float: left;
          text-align: center;
          color: #fff !important;
          font-size: 1.1em;
          padding: 0;
          margin: 0;
          a{
            transition: color 200ms ease;
            color: #fff;
            &:hover{
              color: #979256;
              p{
                display: block !important;
              }
            }
            p{
              display: none;
              width: 100%;
              height: 3px;
              position: relative;
              top: 26px;
              background: #979256;
            }
          }
          &.menu-select{
            a{
              color: #979256;
              text-decoration: none;
              p{
                display: block !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
