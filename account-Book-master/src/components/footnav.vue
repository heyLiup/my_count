<template>
    <div class="footnav-containner">
        <ul class="bottom-nav">
            <router-link tag="li" :to='{name:"Home"}'><img src="../assets/image/home.png" alt=""><span>主页</span></router-link>
            <router-link tag="li" :to='{name:"Category"}'><img src="../assets/image/calendar.png" alt=""><span>记账</span></router-link>
           <router-link tag="li" :to='{name:"Detail",params:{ty:ty}}'><img src="../assets/image/detail.png" alt=""><span>账单</span></router-link>
        </ul>
     </div>
</template>
<script>


export default {
    data(){
        return{
            ty:''
        }
    },
  created(){


          var ty=new Date().toLocaleDateString();
        //   console.log(ty);
          this.ty=ty;

  }
}
</script>


<style>
    *{padding: 0;margin: 0; font-size:0.5rem; }
    body{
        padding-bottom: 0.5rem;
    }
    .head_nav{

         /* background-color: #f6feff; */
    }
    .bottom-nav{
        position: fixed;
        bottom: 0;
        justify-content: space-around;
        z-index: 100;
        width: 100%;
        height: 10%;
        background-color: #f6feff;
    }
    .bottom-nav>li{
        margin:3% 11%;
        justify-content: space-between;
    }.bottom-nav>li:active{
        background: #000;
    }
    .bottom-nav>li>img{
        width:75px;
        height:75px;
        position: relative;
        margin-top:-2px;
    }
    .bottom-nav>li:nth-child(3)>img{
        width: 65px;
        height: 65px;
    }
    .bottom-nav>li>span{
        color: #b8b2b3;
        position: absolute;
        bottom: 0px;
        font-size:0.4rem;
    }
    li{
        list-style: none;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-grow: 1;


    }
    p{
        color:dimgray;
        font-size: 0.7rem;
        font-family: "黑体";
    }

</style>
