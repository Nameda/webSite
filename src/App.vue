<template>
  <div id="app">
    <router-view/>
    <slideBar></slideBar>
    <botContact></botContact>
  </div>
</template>

<script>
import slideBar from './components/slideBar'
import botContact from './components/botContact'

export default {
  name: 'App',
  components:{
      slideBar,
      botContact
  },
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style>
@import './assets/css/style.css';
body{
  /* background: #ada; */
}
</style>
