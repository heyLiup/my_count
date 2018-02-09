<template>
  <div class="login_part">
    <heard></heard>
    <div class="login_part">
      <section class="login_username">
        <label>用户名</label>
        <input type="text" placeholder="请输入用户名" v-model="username"/>
      </section>
      <section class="login_password">
        <label>密码</label>
        <input type="password" placeholder="请输入密码" v-model="password"/>
      </section>
      <section class="login_btn">
      <button @click="fun_login">登陆</button>
      </section>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { Message } from 'element-ui';
  import heard from './heard.vue'

  export default {
    components:{heard},
    data(){
      return{
        username:"",
        password:""
      }
    },
    created(){
      console.log(324);
    },
    methods:{
      async fun_login(){
        let dataPart = {userName:this.username,password:this.password}
        let res = await axios.post('http://localhost:3000/users/signin',dataPart);
        if(res.data.statu==200){
					this.$message({
						message: res.data.msg,
						type: 'success'
					});
					localStorage.setItem('islogin', res.data.statu);
          localStorage.setItem('user', res.data.data.userName);
          localStorage.setItem('type', res.data.data.type);
          this.$router.push({path:'/'});
				}else{
					this.$message({
						message: res.data.msg,
						type: 'warning'
					});
				}
      }
    }
  }
</script>

<style>
.login_part{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column nowrap;
  height:100%;
}
.login_part label{
  width:2rem;
  display:inline-block;
}
.login_part input{
  outline:none;
}
.login_part section{
  margin-top:.3rem;
}
.login_btn{

}
</style>
