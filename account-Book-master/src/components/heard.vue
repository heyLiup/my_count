<template>
  <div class = "heard_part">
    <span @click="fun_back">&lt</span>
  </div>
</template>
<script>
  export default {
    data(){
      return{}
    },
    methods:{
      fun_back(){
        this.$router.back(-1);
      }
    }
  }
</script>
<style>
  .heard_part{position:absolute;left:0;top:0;height:1.4rem;width:100%;background-color:skyblue}
  .heard_part span{color:white;font-size:1.4rem;line-height:1.4rem;float:left;margin-left:.3rem;}
</style>
