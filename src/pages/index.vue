<template>
  <div class="webSite">
    <headerBar></headerBar>
    <!-- <test></test> -->
  </div>
</template>

<script>
import headerBar from './../components/headerBar'
import test from './../components/test'

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      headerBar,
      test
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
