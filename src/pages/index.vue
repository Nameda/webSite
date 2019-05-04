<template>
  <div class="webSite">
    <headerBar></headerBar>
    <div class="content-box">
     <div class="text-center stop-main distance-top">
       <div class="container">
          <h2 class="shop-title">公 司 简 介</h2>
          <!-- <div class="shops container-fluid">
            <div class="row">
              <div class="shop col-md-6" v-for="(item,index) in shops" :key="index">
                <img :src="item.pic">
                <div class="shop-name">
                  <span>{{item.name}}</span>
                  <p class="enter">进入<span></span></p>
                </div>
              </div>
            </div>
          </div> -->
          <div class="shop-intro">
            <p v-for="(item,index) in intros" :key='index'>{{item}}</p>
          </div>
          <!-- <div class="movings">
            <div class="moving-head">
              <h2 class="moving-title">感动瞬间</h2>
              <p v-for="(item,index) in movingIntro" :key="index">{{item}}</p>
            </div>
            <div class="container-fluid">
              <div class="news-box-main row">
                <div class="moving col-md-4" v-for="(item,index) in movings" :key="index">
                  <img :src="item.pic" class="news-img">
                  <div class="news-intro">
                    <span></span>
                    {{item.name}}
                  </div>
                </div>
              </div>
              <div class="more">
                更多<span></span>
              </div>
            </div>
          </div> -->
       </div>
       <div class="container">
          <h2 class="shop-title">殡  葬  全  程  一  条  龙  服  务</h2>
          <div class="shop-intro">
            <p style="color:#1296db">
              殡葬服务包括: 遗体接运-清洗更衣-寿衣全套-遗体冷藏-整容化妆-遗像制作-骨灰盒-鲜花、花圈制作-告别会-定时火化-民俗用品全套-专业殡仪师全程服务
            </p>
            <p style="font-weight:bold">
              <span style="color:#ee5e7b">家属需准备:</span> 逝者死亡证明、逝者身份证、经办人身份证
            </p>
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
     shops:[{
       pic:require('../assets/imgs/index/1.jpg'),
       name:'渝中区菜园坝安乐堂'
     },{
       pic:require('../assets/imgs/index/2.jpg'),
       name:'沙坪坝区新桥安乐堂'
     }],
     intros:[
       '昆明金铂利殡仪有限公司是按国家相关规定注册成立专业从事殡葬系列服务的综合性服务机构。',
       '我公司主要是集太平间建设与管理、临终咨询、治丧协调、灵堂、悼念厅全案设计布置、殡仪服务全程策划执行、殡葬用品生产批发配送、出殡及各项礼仪、火化办理、政策咨询、墓位销售为一体的专业殡葬综合服务公司。'
     ],
     movingIntro:[
       '安乐堂走进每个逝者的人生，根据逝者的职业、遗愿、喜好或家属需要传递的情感',
       '打造惊喜服务，让逝者及家庭圆梦，创造了无数的感动瞬间。'
     ],
     movings:[{
        pic:require('../assets/imgs/index/4.jpg'),
        name:'渝中区菜园坝安乐堂'
      },{
        pic:require('../assets/imgs/index/2.jpg'),
        name:'沙坪坝区新桥安乐堂'
      },{
        pic:require('../assets/imgs/index/3.jpg'),
        name:'沙坪坝区新桥安乐堂'
      }

     ]
    }
  },
  components:{
      headerBar,
      bottomBar
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
    .shops{
        .shop{
          &:hover{
            cursor: pointer;
            opacity: 0.8;
          }
          img{
            width:100%;
          }
          .shop-name{
            display: inline-block;
            width: 100%;
            height: 85px;
            line-height: 85px;
            color: #656565;
            font-size: 1.35em;
            background: #fff;
            position: relative;
            .enter{
              position: absolute;
              display: inline-block;
              line-height: 85px;
              font-size: 0.8em;
              right: 7%;
              span{
                display: inline-block;
                width: 8px;
                height: 8px;
                border-bottom: 1px solid #c7c7c7;
                border-right: 1px solid #c7c7c7;
                transform: rotate(-45deg);
                position: relative;
                left: 5px;
                top: -1.5px;
              }
            }
          }
        }
    }
    .shop-intro{
      margin-bottom:40px;
      p{
        font-size: 1.1em;
        line-height: 1.8em;
        color: #656565;
      }
    }
    .movings{
      .moving-head{
        font-size: 1.1em;
        line-height: 1.8em;
        color: #656565;
        margin: 0 0 20px 0;
      }
      .news-box-main{
        color: #656565;
        .moving{
          &:hover{
            cursor: pointer;
            opacity: 0.8;
          }
          .news-img{
            width: 100%;
            padding: 5px;
            background: #fff;
            margin: 0;
            display: inline-block;
          }
          .news-intro{
            color: #656565;
            font-size: 1.2em;
            width: 100%;
            padding: 0 10px;
            text-align: left;
            margin: 20px 0 0 0;
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
      .more{
        cursor: pointer;
        display: inline-block;
        margin: 40px 0;
        font-size: 1.5em;
        width: 240px;
        height: 55px;
        line-height: 55px;
        background: #eee;
        color: #656565 !important;
        span{
          display: inline-block;
          width: 10px;
          height: 10px;
          border-bottom: 1px solid #c7c7c7;
          border-right: 1px solid #c7c7c7;
          transform: rotate(-45deg);
          position: relative;
          top: -2px;
          left: 20px;
        }
      }
    }
  }
}
  
</style>
