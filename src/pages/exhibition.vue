<template>
  <div class="webSite">
    <headerBar :select=type></headerBar>
    <div class="content-box">
      <contentBar :contentTitle=contentTitle></contentBar>
      <div class="text-center">
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
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import headerBar from './../components/headerBar'
import contentBar from './../components/contentBar'
import bottomBar from './../components/bottomBar'

export default {
  name: 'exhibition',
  data () {
    return {
      type:'exhibition',//展示
      contentTitle:{
        title:'展示',
        des:[
          '这里是一个别具一格的悼念场所，像一个富有格调酒店或一个充满情感的会所，',
          '与大家印象里的阴森恐怖、嘈杂纷扰相去甚远，治丧配套、生活配套、休闲配套一应俱全，',
          '这里是一个让告别变得美丽的空间，',
          '更生者安慰，给逝者荣光。'
        ]
      },
      lists:[{
        pic:require('../assets/imgs/index/4.jpg'),
        name:'的公司sf大股东'
      },{
        pic:require('../assets/imgs/index/8.jpg'),
        name:'的公司大fgf股东'
      },{
        pic:require('../assets/imgs/index/6.jpg'),
        name:'公司大股东公司大股东'
      },{
        pic:require('../assets/imgs/index/7.jpg'),
        name:'www的公司大股东'
      },{
        pic:require('../assets/imgs/index/5.jpg'),
        name:'eee的公司大股东'
      }]
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
</style>
