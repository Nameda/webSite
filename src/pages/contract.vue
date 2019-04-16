<template>
  <div class="webSite">
    <headerBar :select=type></headerBar>
    <div class="content-box">
      <contentBar :contentTitle=contentTitle></contentBar>
      <div class="text-center scenery">
        <div class="intro-text">
          <img src="" alt="">
          <div class="intro-text-box">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from './../components/headerBar'
import contentBar from './../components/contentBar'

export default {
  name: 'contract',
  data () {
    return {
      type:'contract',//生前契约
      contentTitle:{
        title:'生前契约',
        des:[
          '这里是一个别具一格的悼念场所，像一个富有格调酒店或一个充满情感的会所，',
          '与大家印象里的阴森恐怖、嘈杂纷扰相去甚远，治丧配套、生活配套、休闲配套一应俱全，',
          '这里是一个让告别变得美丽的空间，',
          '更生者安慰，给逝者荣光。'
        ]
      }
    }
  },
  components:{
      headerBar,
      contentBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .content-box{
    border-bottom: 1px solid #cfcfcf;
  }
</style>
