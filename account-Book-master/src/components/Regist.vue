<template>
  <div class="regist_part">
    <section class="regist_username">
      <label>用户名</label>
      <input type="text" placeholder="请输入用户名" v-model="username"/>
    </section>
    <section class="regist_password">
      <label>密码</label>
      <input type="password" placeholder="请输入密码" v-model="password"/>
    </section>
    <section class="regist_password">
      <label>确认密码</label>
      <input type="password" placeholder="请再次输入密码" v-model="repassword"/>
    </section>
    <section class="regist_btn">
     <button @click="fun_regist">注册</button>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    data(){
      return{
        username:"",
        password:"",
        repassword:""
      }
    },
    created(){
    },
    methods:{
      async fun_regist(){
        let dataPart = {userName:this.username,password:this.password,repassword:this.repassword}
        let res = await axios.post('http://localhost:3000/users/signup',dataPart);
        if(res.status == 200){
          // alert(66);
        }
      }
    }
  }
</script>

<style>
.regist_part{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column nowrap;
  height:100%;
}
.regist_part label{
  width:2rem;
  display:inline-block;
}
.regist_part input{
  outline:none;
}
.regist_part section{
  margin-top:.3rem;
}
.regist_btn{

}
</style>
