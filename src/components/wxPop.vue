<template>
    <!-- 微信二维码 -->
    <div class="ewm" v-show="isShow" @click="showWx()">
        <div>
            <img src="http://cq.fsygroup.com/app/public/images/ewm.jpg" alt="">
            <p>微信扫描二维码或微信添加17784080685<br>进入人工服务<br>客服专员张兆蓉为您服务</p>
        </div>
    </div>
</template>

<script>
 export default {
  name: 'wxPop',
  props:['isShow'],
  data () {
    return {
    }
  },
  mounted(){
   
  },
  methods: {
    showWx(){
      this.$emit('showWx')
    }
  },
 
}
</script>

<style lang="scss" scoped>
.ewm{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    z-index: 99999;
    text-align: center;
    overflow: hidden;
    div{
      width: 600px;
      margin: 15% auto;
      img{
        width: 300px;
        margin-bottom: 30px;
      }
      p{
        color: #fff;
        font-size: 20px;
        line-height: 1.8em;
      };
    }
}
</style>
