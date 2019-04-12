<template>
  <div class="webSite">
    <headerBar :select=type></headerBar>
  </div>
</template>

<script>
import headerBar from './../components/headerBar'
import test from './../components/test'

export default {
  name: 'Theme',
  data () {
    return {
      type:'themes',//环境服务
    }
  },
  components:{
      headerBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
