<template>
  <div class="slideBar" v-show="isShow">
      <div class="fullHour">
          <div class="num">0871-65342054</div>
          <div class="txt"><span></span>24小时服务热线</div>
      </div>
      <!-- <div class="zixun"  @click="showWx()">
          <div><span></span>在线咨询</div>
      </div> -->
      <wxPop :isShow="isShowWxPop" @showWx="showWx"></wxPop>
  </div>
</template>

<script>
import wxPop from './wxPop'

export default {
  name: 'slideBar',
  data () {
    return {
      isShow:false,
      isShowWxPop:false
    }
  },
  mounted(){   

    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    showWx(){
      this.isShowWxPop = !this.isShowWxPop;
    },
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var logoHeight = document.querySelector('.menu-logo').clientHeight;
      if (scrollTop > logoHeight && document.body.clientWidth > 768) {
        this.isShow = true
      } else {
        this.isShow = false
      }
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
.slideBar{
    position: fixed;
    top: 50%;
    right: 0;
    color:#fff;
    z-index:10;
    .fullHour{
        margin: 20px 0;
        width: 60px;
        height: 170px;
        background: #267c8b;
        position: relative;
        &:hover{
            opacity: 0.7;
        }
        .num{
            height: 100%;
            text-align: center;
            vertical-align: middle;
            float: left;            
            width:30px;
            line-height: 30px;
            -webkit-writing-mode: vertical-rl;
            writing-mode: vertical-rl;
            font-size: 20px;
        }
        .txt{
            height: 100%;
            text-align: center;
            line-height: 30px;
            width:30px;
            float: right;
            -webkit-writing-mode: vertical-rl;
            writing-mode: vertical-rl;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                background: url('../assets/imgs/index/phone-icon.png') no-repeat;
                background-size: 100%;
                margin-bottom: 5px;
            }
        }
    }
    .zixun{
        width:60px;
        height: 130px;
        background: #a59053;
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
        letter-spacing: 2px;
        span{
            display: inline-block;
            width: 25px;
            height: 25px;
            background: url('../assets/imgs/index/zixun-icon.png') no-repeat;
            background-size: 100%;
            margin-bottom: 5px;
        }
        &:hover{
            opacity: 0.7;
        }
    }
}
</style>
