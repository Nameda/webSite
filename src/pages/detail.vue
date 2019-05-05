<template>
  <div class="webSite">
    <headerBar></headerBar>
    <div class="content-box">
     <div class="text-center stop-main distance-top">
       <div class="container">
          <h2 class="shop-title">{{detailLists[id].title}}</h2>
          <div class="shop-intro">
            <p v-for="(item,index) in detailLists[id].intros" :key='index'>{{item}}</p>
          </div>
            <div class="exhibition-box-main row">
                <div class="moving col-md-4" v-for="(item,index) in lists" :key="index">
                    <img :src="item.pic" class="exhibition-img">
                    <div class="exhibition-intro">
                        {{item.name}}
                    </div>
                </div>
            </div>
       </div>
     </div>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import headerBar from './../components/headerBar'
import bottomBar from './../components/bottomBar'

export default {
  name: 'Index',
  data () {
    return {
        id:0,
        detailLists:[
            {
                title:'第一个',
                intros:['告别，不是生命的终结，而是生命最美的绽放',
                '亦生命最宝贵的传承',
                '一场追忆，一曲华彩，一生记忆'],
                des:'昆明金铂利殡仪有限公司'
            },
            {
                title:'第2个',
                intros:['告别，不是生命的终结，而是生命最美的绽放',
                '亦生命最宝贵的传承',
                '一场追忆，一曲华彩，一生记忆'],
                des:'昆明金铂利殡仪有限公司'
            },
            {
                title:'第3个',
                intros:['告别，不是生命的终结，而是生命最美的绽放',
                '亦生命最宝贵的传承',
                '一场追忆，一曲华彩，一生记忆'],
                des:'昆明金铂利殡仪有限公司'
            },
            {
                title:'第4个',
                intros:['告别，不是生命的终结，而是生命最美的绽放',
                '亦生命最宝贵的传承',
                '一场追忆，一曲华彩，一生记忆'],
                des:'昆明金铂利殡仪有限公司'
            },
            {
                title:'第5个',
                intros:['告别，不是生命的终结，而是生命最美的绽放',
                '亦生命最宝贵的传承',
                '一场追忆，一曲华彩，一生记忆'],
                des:'昆明金铂利殡仪有限公司'
            }
        ],
        lists:[{
            pic:require('../assets/imgs/index/4.jpg'),
            name:'金铂利详情'
        },{
            pic:require('../assets/imgs/index/8.jpg'),
            name:'金铂利详情'
        },{
            pic:require('../assets/imgs/index/6.jpg'),
            name:'金铂利详情'
        },{
            pic:require('../assets/imgs/index/7.jpg'),
            name:'金铂利详情'
        },{
            pic:require('../assets/imgs/index/5.jpg'),
            name:'金铂利详情'
        }]
    }
  },
  components:{
      headerBar,
      bottomBar
  },
  mounted(){
      this.id = this.$route.query.id;
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.webSite{
  .content-box{
    border-bottom: 1px solid #cfcfcf;
  }
  .stop-main{
    background: url('../assets/imgs/index/hw-bg.jpg');
    position: relative;
    overflow: hidden;
    .shop-title{
      margin: 0;
      padding: 50px 0;
      color: #656565;
    }
    .shop-intro{
      margin-bottom:40px;
      p{
        font-size: 1.1em;
        line-height: 1.8em;
        color: #656565;
      }
    }
   .exhibition-box-main{
      color: #656565;
      .moving{
        &:hover{
          cursor: pointer;
          opacity: 0.8;
        }
        .exhibition-img{
          width: 100%;
          padding: 5px;
          background: #fff;
          margin: 0;
          display: inline-block;
        }
        .exhibition-intro{
          color: #656565;
          font-size: 1.2em;
          font-weight: bold;
          width: 100%;
          padding: 0 10px;
          text-align: center;
          margin: 5px 0 20px 0;
          span{
            display: inline-block;
            width: 12px;
            height: 12px;
            border-bottom: 1px solid #c7c7c7;
            border-right: 1px solid #c7c7c7;
            transform: rotate(-45deg);
            margin: 0 20px 0 0;
            position: relative;
            top: 1px;
          }
        }
      }
    }
  }
}
  
</style>
