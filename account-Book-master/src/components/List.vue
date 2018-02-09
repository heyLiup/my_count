<template>
    <div class="list">
        <img src="../assets/image/back.png" @click="listDel" alt="">
        <p>{{ListItem.sign}}</p>
        <img class="img" :src="imgSrc" alt=""/>
        <span @click="listAdd">完成</span>
        <ul class="ListAdd">
            <li><label for="remark"> 款项：</label><input type="text" id="remark" v-model="ListItem.remark"></li>
            <li class="money">
                <label for="cost"> 金额：</label><input type="number" id="cost" @keyup.enter="test(ListItem.cost)" @focus="show()" v-model="ListItem.cost">
                <span v-show="flag">不能为空</span>
            </li>
        </ul>
        <foot-nav></foot-nav>
    </div>
</template>

<script>
import client from '../assets/clientStorage.js'
import footNav from './footnav.vue'
export default {
  name:'List',
  components:{footNav},
  data(){
      return{
        flag:false,
        ListItem:{remark:'',cost:'',sign:''},
        sum:[],
        imgSrc:""

      };
  },
created:function(){
    this.ListItem.sign=client.fetch("sign").sort;
    //console.log(this.ListItem.sign);
    this.imgSrc=client.fetch("sign").imgSrc;
    this.sum=client.fetch('items');
},

  methods:{

        listAdd(ListItem){
            var date=new Date().toLocaleDateString();
            console.log(date);
           this.sum=client.fetch('items');
            if(!this.ListItem.cost){
                 this.flag=true;
                return;
            }
            this.ListItem.date=date;
            this.sum.push(this.ListItem);
            // console.log(this.sum);
            client.save(this.sum,"items");
           const router=this.$router;

        this.listDel();
        },
        listDel(){
            this.ListItem.remark='',
            this.ListItem.cost=''  ,
             this.$router.push({path:'/Category'});
        },
        test(data){
            this.listAdd(data);
        },
        show(flag){
                this.flag=false;

        }
      },


}
</script>
<style>
    .list{
        position:relative;
    }
    img:nth-child(1){
        width: 60px;
        height: 60px;
        display: inline-block;
        position: absolute;
        left: 0;top:-30px;
    }
    .img{
        width: 200px;
        height: 200px;
        margin-top: 10%;
        margin-bottom: 10%;
    }
    .list>span{
        color: #bcd8fc;
        position: absolute;
        right:20px;top:-20px;
    }
    .ListAdd{
        list-style:none;
        display: flex;
        /* width:600PX; */
        align-items:center;
        flex-flow:column nowrap;
        justify-content: center;

    }
    .ListAdd label{
        height: 10px;
    }
    .ListAdd li{
        margin:20px 0;

    }
    .ListAdd input{
        /* margin-top: 10%; */
        width: 400px;
        height: 50px;
        border:1px solid grey;
        /* box-shadow: 1px 1px; */
        border-radius: 9px;
        text-indent: 0.5em;

    }

    .money{
        position: relative;
    }
    .money span{
        position: absolute;
        right: 10px;top:0px;
        color:red;

    }
</style>



