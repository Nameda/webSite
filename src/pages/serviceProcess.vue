<template>
  <div class="webSite">
    <headerBar :select=type></headerBar>
    <div class="content-box">
      <contentBar :contentTitle=contentTitle></contentBar>
      <div class="service-items container">
        <div class="row">
          <div class="service col-md-6" v-for="(list,index) in lists" :key="index">
            <span class="rd">{{index+1}}</span>
            <div class="intro"><p class="title">{{list.title}}</p><p v-html="list.des"></p></div>
          </div>
        </div>
        
      </div>
      <div class="mark-txt">殡  葬  全  程  一  条  龙  服  务</div>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import headerBar from './../components/headerBar'
import contentBar from './../components/contentBar'
import bottomBar from './../components/bottomBar'

export default {
  name: 'serviceProcess',
  data () {
    return {
      type:'serviceProcess',//服务流程
      contentTitle:{
        title:'服务流程',
        des:[
          '亲人离世不再茫然失措，我们为您服务，解决一切难题。'
        ]
      },
      lists:[{
        'title':'事前咨询: ',
        'des':'亲人逝世后致电<span class="call">1828766089</span>，详细了解治丧流程及费用。'
      },{
        'title':'遗体接运：',
        'des':'专业车辆及工作人员上门办理遗体接运服务。'
      },{
        'title':'遗体清洗更衣、化妆：',
        'des':'待工作人员将遗体接到遗体间，专业殡仪师为遗体提供净身、更衣、整容化妆等服务。'
      },{
        'title':'选择丧葬用品：',
        'des':'家属为逝者选择不同档次的寿盒、寿衣、及各种所需用品。'
      },{
        'title':'洽谈方案：',
        'des':'工作人员为家属详细介绍告别厅布置，告别仪式,丧葬用品等丧礼所需项目及相关消费价格，让家属在公开透明的价格体系下选择治丧服务方案。'
      },{
        'title':'告别仪式：',
        'des':'司仪做好告别会前的相关筹备，并为逝者打造一场优质的人生告别会。'
      },{
        'title':'陪同火化：',
        'des':'专业的殡仪师全程陪同家属到殡仪馆进行火化。'
      },{
        'title':'后期服务：',
        'des':'殡仪师为家属提供后期的扶丧，头七的专业指导。及墓地销售服务。'
      }
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
          background: #f7f7f7;
          margin-right: 20px;
        }
        .intro{
          display: table-cell;
          height: 100px;
          font-size: 1.3em;
          line-height: 1.5em;
          vertical-align: middle;
          .title{
            font-size: 1.4em;
            line-height: 1.8em;
          }
        }
      }
    }
    .mark-txt{
      color: #656565;
      text-align: center;
      font-size: 4em;
      font-weight: bold;
      margin-bottom: 50px;
    }
  }
</style>
