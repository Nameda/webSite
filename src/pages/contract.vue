<template>
  <div class="webSite">
    <headerBar :select=type></headerBar>
    <div class="content-box">
      <contentBar :contentTitle=contentTitle></contentBar>
      <div class="what-contract">
        <div class="contract-text">
          <h3><span></span>什么是“生前契约”？</h3>
          <p>生前契约是指生前就事后殡葬服务如何办理，而与殡仪服务公司订立合约。<br>服务内容包括:临终关怀、遗体接运、遗体沐浴更衣、殡葬用品、告别仪式、火化、24小时殡仪服务。</p>
        </div>
      </div>
      <div class="slogan">
        <p>专业服务团队包揽一切繁杂礼俗</p>
        <p>安心托付  专业服务 家属省心省事</p>
      </div>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import headerBar from './../components/headerBar'
import contentBar from './../components/contentBar'
import bottomBar from './../components/bottomBar'

export default {
  name: 'contract',
  data () {
    return {
      type:'contract',//生前契约
      contentTitle:{
        title:'生前契约',
        des:[
          '不因亲人离世而无措',
          '不因慌乱而盲目',
          '不因悲伤而失虑',
          '......',
          '生前咨询与托付   身后无忧'
        ]
      }
    }
  },
  components:{
      headerBar,
      contentBar,
      bottomBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .content-box{
    border-bottom: 1px solid #cfcfcf;
    .what-contract{
      max-width: 1024px;
      margin:0 auto;
      background: #f7f4ed;
      margin-bottom: 50px;
      padding: 40px;
      .contract-text{
        margin: 20px 0 30px 0;
        h3{
          color: #0f6d7e;
          font-size: 1.5em;
          padding-bottom: 20px;
          border-bottom: 1px solid #cfcfcf;
          span{
            display: inline-block;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: #0f6d7e;
            margin-right: 10px;
          }
        }
        p{
          color: #666;
          font-size: 1em;
          line-height: 1.5em;
          margin: 20px 0 30px 30px;
        }
      }
    }
    .slogan{
      letter-spacing: 0.2em;
      color: #656565;
      text-align: center;
      font-size: 2em;
      font-weight: bold;
      padding:0 40px;
      margin-bottom: 50px;
      p{
        padding-bottom: 20px;
      }
    }
  }
</style>
