<template>
  <div class="serviceItem">
    <headerBar :select=type></headerBar>
    <div class="content-box">
      <contentBar :contentTitle=contentTitle></contentBar>
      <div class="service-items container">
        <div class="row">
          <div class="service col-md-6" v-for="(list,index) in lists" :key="index">
            <span class="rd">{{index+1}}</span>
            <div class="intro">{{list}}</div>
          </div>
        </div>
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
  name: 'serviceItem',
  data () {
    return {
      type:'serviceItem',//服务项目
      contentTitle:{
        title:'服务项目',
        des:[
          '真心托付  真诚服务'
        ]
      },
      lists:[
        '专业人士上门清洗穿衣，遗体接运，遗体冷藏，遗体整容化妆。',
        '遗体告别，灵堂布置，会场租用，司仪主持，鲜花布置，守灵室租用。',
        '代理定时火化，接送骨灰，车辆租用。',
        '殡葬用品:各种档次骨灰盒，高中低档寿衣、寿被等，整套香烛纸钱、鞭炮、遗像制作、鲜花制作、花圈、民俗用品(黑伞、红布、孝套、小白花、糖、红线、红布条、米茶等)。下葬用品(狮子、花瓶、风水罐、香炉、石灰等)',
        '师父择日、超度、念经、选墓、下葬服务。'
      ]
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
    .row{
      .service{
        width: 49%;
        float: left;
        height: 100px;
        margin-bottom: 50px;
        color: #656565;
        vertical-align: middle;
        .rd{
          width: 100px;
          height: 100px;
          float: left;
          line-height: 100px;
          text-align: center;
          font-size: 4em;
          background: #267c8b;
          color: #fff;
          margin-right: 20px;
        }
        .intro{
          display: table-cell;
          height: 100px;
          font-size: 1.3em;
          line-height: 1.5em;
          vertical-align: middle;
        }
      }
    }
   
  }
  @media screen and (max-width: 768px){
    .service{
        width:100% !important;
        height:auto !important;
        .rd{
          width: 80px !important;
          height: 80px !important;
          line-height: 80px !important;   
          font-size: 3em !important;                 
        }
        .intro{
          font-size: 1.0em !important;
          line-height: 1.3em !important;
          vertical-align: top !important;
          .title{
            font-weight: bold;
            font-size: 1.3em !important;
            line-height: 1.4em !important;
          }
        }
    }
   }
</style>
