<template>
  <div class="text-center hall-title">
    <h2>{{contentTitle.title}}</h2>
    <span></span>
    <p v-for="(item,index) in contentTitle.des" :key='index'>{{item}}</p>
  </div>
</template>

<script>
export default {
  name: 'contentBar',
  props:{
    contentTitle:{
        type:Object
    }
  },
  data () {
    return {
      menuList:[
        {text:'环境服务',type:"scenery",link:'/'},
        {text:'案例展示',type:"themes",link:'/theme'},
        {text:'服务流程',type:"rocess",link:'/'},
        {text:'客户评价',type:"reviews",link:'/'},
        {text:'费用咨询',type:"cost",link:'/'},
        {text:'生前契约',type:"contract",link:'/'},
        {text:'加入我们',type:"join",link:'/'}]
    }
  },
  mounted(){
        
  },
  methods: {
    
  }
}
</script>
<style scoped lang="scss">
    .hall-title{
        width: 100%;
        margin: 50px 0;
    }
</style>