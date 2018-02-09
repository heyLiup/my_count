var key="userKey";
var client={
	save:function(item,newkey){
		key=newkey?newkey:key;
		// console.log(key)
		window.localStorage.setItem(key,JSON.stringify(item));
	},
	fetch:function(newkey){
		key=newkey?newkey:key;
		//console.log(key);
		return JSON.parse(window.localStorage.getItem(key)||'[]')
	},
	clear:function(){
		window.localStorage.clear();
	},
	remove:function(newkey){
		window.localStorage.removeItem(newkey);
	}
}
// const LocalEvent = function(item){     // 定义一个本地存储的构造函数
// 	this.fetch = function () {        // 拿数据
// 	  return JSON.parse(localStorage.getItem(item));
// 	}
// 	this.save = function (obj) {       // 存数据
// 	  localStorage.setItem(item,JSON.stringify(obj));
// 	}
// 	this.clear = function () {       // 删数据
// 	  localStorage.removeItem(item);
// 	}
//   }
//   const local = new LocalEvent('lx_notepad'); // 创建一个本地存储的事例
//   const state = local.fetch() || {
// 	event: [],
// 	count: 0
//   }
//   const mutations = {
// 	ADDEVENT(states,obj){          // ADDEVENT，添加新的事件，并存储到localStorage里
// 	  states.count++;
// 	  obj.items.id = states.count;
// 	  states.event.unshift(obj.items);
// 	  local.save(states);
// 	}
//   }
export default client;