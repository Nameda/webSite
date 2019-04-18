<template>
  <div id="app">
    <router-view/>
    <slideBar></slideBar>
  </div>
</template>

<script>
import slideBar from './components/slideBar'

export default {
  name: 'App',
  components:{
      slideBar
  }
}
</script>

<style>
@import './assets/css/style.css';
body{
  /* background: #ada; */
}
</style>
