<template>
    <div class="bot-contact">
        <p><i></i>24小时服务专线</p>
        <a href="tel:0871-65342054">0871-65342054</a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.bot-contact{
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 12%;
    background: #267c8b;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    p:nth-of-type(1){
        padding-top: 12px;
        i{
            display: inline-block;
            width: 24px;
            height: 24px;
            background: url('../assets/imgs/index/phone-icon.png') no-repeat;
            background-size: 100%;
            position: relative;
            top: 4px;
            right: 8px;
        }
    }
    a{
        color:#fff;
    }
}
@media screen and (max-width: 768px){
    .bot-contact {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 9;
        width: 100%;
        height: 80px;
    }
}
</style>

