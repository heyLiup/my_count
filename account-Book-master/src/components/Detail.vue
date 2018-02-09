<template>
    <div class="detail">

        <p>账单</p> <span>{{date}}</span>
        <hr>
        <span>类别</span>
        <span>￥</span>
        <span>备注</span>
        <ul class='big_menu' v-for='(item,index) in newDate'>
            <li>
                <span v-text='item.sign'></span>
            </li>
            <li>
                <input v-model='item.cost' readonly='true'>元</input>
            </li>
            <li>
                <input v-model='item.remark' readonly='true'></input>
                <div v-if="!item.isShow">
                   <img src="../assets/image/edit.png" alt="" @click="changeListItem(index)">
                    <img src="../assets/image/delete.png" alt="" @click="delListItem(index)">
                </div>
                <div v-else>
                    <img src="../assets/image/true.png" alt="" @click="overListItem(index)">
                    <img src="../assets/image/false.png" alt="" @click="cancelListItem(index)">
                </div>
            </li>
        </ul>
        <p class="total">总消费：{{total}}</p>
        <foot-nav></foot-nav>
    </div>


</template>

<script>
    import footNav from './footnav.vue'
    import client from '../assets/clientStorage.js'
    export default {
    components:{footNav},
    data(){
        return{
            items:[],
            total:0,
            date:'',
            newDate:[],
            //   isShow:false
        }
    },

    created:function(){
            var isis=client.fetch('isis');
            //判断第一次刷新，解决样式冲突
            if(isis){
                client.save(false,"isis");
                window.location.reload();
            }
            this.items=client.fetch('items');
            if(this.$route.params.ty){
                this.date=this.$route.params.ty;
            }
            this.filterDate();
            this.calcSum();

            // console.log(this.$route.params.ty)
        //   console.log(this.items);
    },
    computed:{
        uls:function(){
            return document.querySelectorAll('ul');
        }
    },
    methods:{
        // {"remark":"2345","cost":"2345","sign":"日用","date":"2017/10/8"}
        filterDate(){
            var that=this;
            var newT=this.date.replace(/-/g,'/');
            this.items.forEach(function(v,i){
               var  vdate=that.date.replace(/-/g,'/');
                   console.log(v.date);
                //   console.log(formatDate(vdate,, 'yyyy-MM-dd'));
                if(vdate==v.date){
                    console.log(v);
                    that.newDate.push(v);
                }

            })
        },
        calcSum:function(){
            let that=this;
            this.total=0;
            this.newDate.forEach(function(v,i){
                console.log(v);
                v.isShow=false;
                console.log(that.items);
                that.total+=parseInt(v.cost);
            });
         client.save(that.items,'items')
        },
        changeListItem:function(index){
    //将所有ul里面的input变为不可用
            // for(var j=0;j<this.uls.length;j++){
            //      for(var i=0;i<this.uls[j].querySelectorAll('input').length;i++){
            //         this.uls[j].querySelectorAll('input')[i].setAttribute('readonly',"true")
            //     }
            // }dex
            this.items[index].isShow=true;
                console.log(this.uls[index].className+=' active');
                for(var i=0;i<this.uls[index].querySelectorAll('input').length;i++){
                    this.uls[index].querySelectorAll('input')[i].removeAttribute('readonly')
                }
        },
        delListItem:function(index){
            this.items.splice(index,1);
            client.save(this.items,'items');
            this.items=client.fetch('items');
            this.calcSum();
        },
        overListItem:function(index){
            this.items[index].isShow=false;
            console.log(document.querySelectorAll('ul')[index].setAttribute('class','big_menu'));
            for(var i=0;i<this.uls[index].querySelectorAll('input').length;i++){
                this.uls[index].querySelectorAll('input')[i].setAttribute('readonly',"true")
            }
            client.save(this.items,'items');
        this.items=client.fetch('items');
            this.calcSum();


        },
        cancelListItem:function(index){
        this.items[index].isShow=false;
            for(var i=0;i<this.uls[index].querySelectorAll('input').length;i++){
                this.uls[index].querySelectorAll('input')[i].setAttribute('readonly',"true")
            }
            console.log(document.querySelectorAll('ul')[index].setAttribute('class','big_menu'));

        }

    }
    }
</script>
<style>
    .detail{
        width: 100%;

    }

    .detail hr{
       margin:5% auto 5% auto;
       /* background: #bcd8fc; */
    }
    .detail>span{

        margin:5% 12%;
    }

    .big_menu{
        list-style: none;
        justify-content: space-between;
        position: relative;
        display: flex;

    }
    .big_menu>li{
        display: inline-block;
        height: 150px;
        line-height: 200px;
        /* margin-left:10%; */
    }
  .big_menu input{
        text-align: right;
        width: 130px;
        border: none;
    }
    .big_menu.active input{
        border:1px solid grey;
    }
    .big_menu>li:nth-child(3){
        align-items: flex-start;
        margin-top: -4%;
    }
    .big_menu>li div{
        display: inline-block;
         margin-left:30px;
    }
    .big_menu>li div .btn_d{
        border: none;
        font-size: 0.4rem;
    }
    .big_menu img{
        width:40px;
        height:40px;

    }
     input{
    width: 400px;
    height: 50px;
    border:1px solid grey;
    border-radius: 9px;
    text-indent: 0.5em;
    margin-top: 30%;
  }
  .total{
      position: absolute;
      bottom: 20%;
      right: 10%;
      color: grey;
  }
</style>

