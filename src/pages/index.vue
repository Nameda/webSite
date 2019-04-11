<template>
  <div class="hello">
    <headerBar></headerBar>

  </div>
</template>

<script>
import headerBar from './../components/headerBar'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
