import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Category from '@/components/Category'
import Detail from '@/components/Detail'
import Addevent from '@/components/Addevent'
import Chart from '@/components/Chart'
import Login from '@/components/Login'
import Regist from '@/components/Regist'



Vue.use(Router)
var addItem="";

export default new Router({
  mode:'history',
  routes: [
    //  {
    //    path: '/Home',
    //    name: 'Home',
    //    component: Home
    // },{
    //     path:'/Category',
    //    name:'Category',
    //    component:Category,
    //    children:[
    //      {path:'/Category/List',name:'List',component:List},
    //      {path:'/Category/Addevent',name:'Addevent',component:Addevent}
    //    ]
    // },{
    //     path:'/Detail',
    //     name:'Detail',
    //     component:Detail,
    //     children:[
    //       {path:'/Detail/Chart',name:'Chart',component:Chart}
    //     ]
    //   }


    {
       path: '/',
       name: 'Home',
       component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
   },{
    path: '/regist',
    name: 'Regist',
    component: Regist
 },{
       path:'/List',
       name:'List',
       component:List
    }, {
       path:'/Category',
       name:'Category',
       component:Category,
       beforeEnter:(to,from,next)=>{

         next(vm=>{
          vm.$http.get('url').then((res)=>{

          })
         })
       }
    }, {
      path:'/Detail/:ty',
      name:'Detail',
      component:Detail,
      beforeEach :(to,from,next)=>{
        window.location.reload();
      }
    }, {
      path:'/Addevent',
      name:'Addevent',
      component:Addevent
    }, {
      path:'/Chart',
      name:'Chart',
      component:Chart
    }

  ]
})
