<template>
  <div class="header">
    <div class="menu-ban-main">
      <div class="menu-logo">
        <div class="menu-logo-box">
        <router-link class="f-left" to="/">
            <img src="./../assets/imgs/index/logo.png" height="62" width="243">
            </router-link>
          <router-link class="back-home" to="/"><span class="name">首页</span></router-link>
          <!--定义侧边栏容器-->
          <div class="col-menu-box" v-if="isShowColMenu">
            <div class="col-menu-icon" @click="openColMenu"></div>
            <div class="nav" :class="isShowNav?'on-show':''">
              <span class="close" @click="openColMenu"></span>
              <ul>
                <li v-for="(item,index) in menuList" :class="select==item.type?'menu-select':''" :key="index" @click="goOther(item.link)">
                  <a href="javascript:;" >·&nbsp;&nbsp;{{item.text}}<p></p></a>                  
                </li>
              </ul>
            </div>
          </div>
          <div class="f-right menu-fc" v-else>
            <div class="right1">
              <p><i></i>24小时服务专线</p>
              <p>0871-65342054</p>
            </div>
            <!-- <div class="right2" @click="showWx()">
              <i></i>
              在线咨询
            </div> -->
            <!-- <a href="javascrpt:;" style="float: left; opacity: 1;" class=""><img src="./../assets/imgs/index/24hours.jpg"></a>
            <a class="callme" href="javascrpt:;" style="margin-left: 10px; opacity: 1;"><img src="./../assets/imgs/index/zxzx.jpg"></a> -->
          </div>
          
        </div>
      </div>
      <div class="menu-banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="./../assets/imgs/index/1.jpg"/></div>
              <div class="swiper-slide"><img src="./../assets/imgs/index/2.jpg"/></div>
              <div class="swiper-slide"><img src="./../assets/imgs/index/3.jpg"/></div>
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
      <wxPop :isShow="isShow" @showWx="showWx"></wxPop>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import wxPop from './wxPop'

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
      menuFixed:false,
      isShow:false,
      isShowColMenu:false,
      isShowNav:false
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      loop: true,
      autoplay: true,
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
    })        

    window.addEventListener('scroll', this.handleScroll);
    //获取屏幕宽度
    console.log()
    if(document.body.clientWidth < 768 ){
      this.isShowColMenu = true;
    }
  },
  methods: {
    goOther(link){
      this.$router.push({path:link})
    },
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var menuHeight = document.querySelector('#menu-box').clientHeight;
      var bannerHeight = document.querySelector('.menu-banner').clientHeight;
      if (scrollTop > bannerHeight-menuHeight && !this.isShowColMenu) {
        this.menuFixed = true
      } else {
        this.menuFixed = false
      }
    },
    showWx(){
      this.isShow = !this.isShow;
    },
    //展示侧边栏
    openColMenu(){
      this.isShowNav = !this.isShowNav;
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  components:{
    wxPop
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
      a{
        color:#656565;
        img{
          height:62px;
          width:243px;
        }
      }
      .back-home{
        line-height: 2em;
        .name{
          font-size: 1.2em;
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
          cursor: pointer;
          &:hover{
            opacity: 0.8;
          }
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
          cursor: pointer;
          &:hover{
            opacity: 0.8;
          }
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
      //侧边栏
      .col-menu-box{
        float: right;
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 5;
        .col-menu-icon{
          display: inline-block;
          width: 65px;
          height: 65px;
          cursor: pointer;
          background: url('../assets/imgs/index/menu.png') no-repeat;
          background-size: 100% 100%;
        }
        .nav{
          width: 300px;
          background: rgba(15,109,126,0.9);
          color: #fff;
          z-index: 999;
          position: absolute;
          top: 0px;
          left: 65px;
          transition: all 0.5s ease;
          padding: 65px 30px 0 30px;
          &.on-show{
            left:-235px;
          }
          .close{
            width: 50px;
            height: 50px;
            display: inline-block;
            position: absolute;
            top: 5px;
            right: 0;
            background: url('../assets/imgs/index/close.png') no-repeat;
            background-size: 60%;
            background-position: 10px 10px;
            opacity: 1 !important;
          }
          li{
            line-height: 50px;
            font-size: 1.1em;
            color: #fff;
            a{
              color: #fff;
            }
            &.menu-select{
              a{
                color: #979256;
                text-decoration: none;
              }
            }
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
    z-index: 5;
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
  @media screen and (max-width: 768px){
    .menu-logo-box{
      a {
        width: 50%;
        img{
          width: 100% !important;
        }
      }
      .back-home{
        margin-left:0;
        line-height: 65px !important;
      }
    } 
    .menu-logo{
      height: 65px;
      line-height: 65px;
      position: fixed !important;
    }
    .menu-box {
        height: 100px;
        position: relative;
        background: transparent;
        .menu-box-inside{
          width:100%;
          .menu-list{
            margin:0;
            li{
              float: left !important;
              text-align: center !important;
              width: 33.3% !important;
              height: 50px !important;
              line-height: 50px !important;
              border: none !important;
              background: #287b8b !important;
              font-size: 1.2em !important;
              a{
                p{
                  top: -4px;
                }
              }
            }
          }
        }
    }
  }
}
</style>
