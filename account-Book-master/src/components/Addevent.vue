<template>
  <div class="add_event">
    <div class="add_head">
      <img src="../assets/image/back.png" @click="back()" alt="">
      <p>添加类型</p>
      <span @click="add(addItem)">完成</span>
      <hr>
    </div>

    <label for="add">类型</label>
    <input type="text" id="add" @keyup.enter="add(addItem)" @focus="show()" v-model="addItem">
    <span class="tip" v-show="flag">不能为空</span>
    <br>
    <img class="cal" src="../assets/image/cal.png" alt="">



  </div>
</template>

<script>
import client from '../assets/clientStorage.js'

export default {
  data(){
    return{
      addItems:[],
      addItem:"",
      flag:false
    }
  },
  methods:{
    add(addItem){
      var datas=client.fetch("datas");
      var item={sort:addItem,imgSrc:'../assets/image/star.png'};


      // this.addItems=client.fetch('addItem');
      // client.save(this.addItems,'addItems');

      if(!this.addItem){
        this.flag=true;
        return;
      }
       datas.push(item);

       client.save(datas,'datas');
      // this.addItems.push(this.addItem);
    this.back();
    },
    back(){

      this.$router.push({path:'/Category'});
    },
    show(flag){
                this.flag=false;

    }
  }
}
</script>

<style>
  .add_event{
    position: relative;
    /* margin-top: 40%; */
  }
 /* .add_head{
   background-color: #f6feff;
 } */
  .add_event hr{
   position: absolute;
   top:5%;
   left: 5%;
  }
  .add_head img{
    width: 60px;
    height: 60px;
   display: inline-block;
    position: absolute;
    left: 0;top:-30px;
  }

  .add_event p{
     text-shadow: 1px 1px 2px #ccc ;
     color:dimgray;
     display: inline-block;
     position: absolute;
     left: 35%;top:-30px;
    /* font-size: 0.7rem; */

  }
  .add_event div span{
    color: #bcd8fc;
    position: absolute;
     right:8%;top:-20px;
  }
 .tip{
    color: red;
    font-size:0.4rem;
    position:absolute;
    left:63%;
    top:83%;
  }

  .add_event input{
    width: 400px;
    height: 50px;
    /* border:1px solid black; */
    border-radius: 9px;
    text-indent: 0.5em;
    margin-top: 30%;
  }
  .cal{
    width: 200%;
    height: 160%;
    margin-left: -50%;
  }
</style>

