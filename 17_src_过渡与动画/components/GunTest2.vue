<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group name="hello2" appear>
          <h1 v-show="!isShow" key="1" >你好啊!</h1>
          <h1 v-show="isShow" key="2" >尚硅谷!</h1>
        
    </transition-group>
  </div>
</template>

<script>
export default {
  name:'GunTest2',
  data(){
    return{
      isShow:true,
    }
  }
}
</script>

<style scope>
  h1{
    background-color: orange;
  }

  .hello2-enter,.hello2-leave-to{
    transform: translateX(-100%);
  }
  .hello2-enter-to,.hello2-leave{
  transform: translateX(0);
  }
  .hello2-enter-active,.hello2-leave-active{
    transition: 0.1s linear;

  }
  
 

  
</style>