<template>
  <div>
      <transition name='slide-left'>
          <keep-alive>
              <router-view class="router-view"></router-view>
          </keep-alive>
      </transition>
    <calendar></calendar>

    <div class="class_login">
      <div v-if="!user">你还没登陆呢，去<router-link :to='{name:"Login"}'>登陆</router-link></div>
      <div v-else>
        欢迎亲爱的{{user}}
        <p @click="fun_exit">退出登陆</p>
      </div>

    </div>

    <foot-nav></foot-nav>
   </div>

</template>




<script>
    import footNav from './footnav.vue'
    import '../assets/js/jquery-1.8.3.min.js'
    import axios from 'axios'
    // import '../assets/js/calendar.js'
    import calendar from './calendar.vue'
    import client from '../assets/clientStorage.js'

    export default {
       components:{footNav,calendar},
       computed:{
         user(){
           return document.cookie.split('=')[1]
         }
        },
        created(){
            client.save(true,"isis")
            console.log(this.user);
        },
        methods:{
          async fun_exit(){
            let res = await axios.get('http://localhost:3000/users/signout')
            console.log(res);
          }
        }

    }
</script>

<style>
    .router-view{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter-active,.slide-left-leave-active{
        transition: transform .5s;
        transform-origin:left;
        transform: translate(30px,0);

    }
    .slide-left-enter,.slide-left-leave-active{
        transform:scale(0,1);
         transform: translate(30px,0);
    }

    a{text-decoration:none;}a:link,a:visited{text-decoration: none;}
    div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{padding:0; margin:0;}
    h1,h2,h3,h4,h5,h6{font-size:inherit; font-weight:normal;}
    address,cite,code,em,th,i{font-weight:normal; font-style:normal;}
    .clearfix{*zoom:1;}
    .clearfix:after{display:block; overflow:hidden; clear:both; height:0; visibility:hidden; content:"";}
    .clear{ clear: both;}
    /* float */
    .left{
        float:left;
    }
    .right{
        float:right;
    }
    .account-box{
        background:#fff;
        padding: 0 35px 25px 25px;
    }
    .account-title{
        border-bottom: 2px solid #bcd8fc;

        height: 50px;
        line-height: 50px;
        font-size: 16px;
        margin-bottom: 10px;
    }
    .f-btn-fhby{height: 30px;line-height: 30px;color: #bcd8fc;border: 1px solid #bcd8fc;font-size: 0.3rem;display: block;width: 90px;text-align: center;border-radius: 4px;margin-top: 10px;margin-left: 20px;margin-bottom: 20px;}
    .f-btn-jian{height: 30px;line-height: 30px; border: 1px solid #ccc;border-right: 0px;margin-top:10px;text-align: center;width: 20px;background: #ececec;color: #666;border-radius: 4px;position: relative;left: 2px;}
    .f-btn-jia{height: 30px;line-height: 30px;border: 1px solid #ccc;border-left: 0px;margin-top:10px;text-align: center;width: 20px;background: #ececec;color: #666;border-radius: 4px;position: relative;left: -2px;}
    .f-riqi{width: 150px;padding: 0 10px; background: #fff;color: #666;font-size: 14px;border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;text-align: center;height: 30px;line-height: 30px;margin-top: 10px;display: block;}
    .f-rili-table tbody td{background: #fff;position: relative;}
    .f-rili-table tbody tr{border-bottom: 1px dashed #ccc;}
    .f-rili-table .f-today{background-color: #faf1de;}
    .f-rili-table .f-on{background-color: pink;border-radius:15px;  color: #fff;}
    .f-number{cursor: pointer;}
    .f-rili-table{width: 100%;}
    .f-rili-th{float: left;width: 14.25%;text-align: center;line-height: 46px;height: 46px; margin-bottom: 20px; background-color: #bcd8fc;color: #333;}
    .f-td{border-bottom: 1px dashed #ccc;float: left;width: 14.25%;text-align: center;height:60px;line-height: 60px;position: relative;}
    .f-yuan{position: absolute;width: 20px;height: 20px;top: 13px;left: 50%;margin-left: 10px; visibility: hidden; background: url(../assets/image/yuan.png) no-repeat center;}
    .f-table-msg{position: absolute;z-index: 2;top: 34px;left:50%;margin-left: -120px; width: 280px;background: url(../assets/image/bg-msg.png) no-repeat bottom;line-height: 55px;height: 46px;text-align: center;display: none;color: #666;}


    .class_login{margin-top:1rem}
    .class_login p{font-size:.5rem;margin-top:.3rem}

</style>


