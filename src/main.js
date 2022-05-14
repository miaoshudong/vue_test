//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index'
//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)
//核心：解决代码冗余
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
	return originalReplace.call(this, location).catch(err => err)
}
//
//创建vm
new Vue({
	el: '#app',
	render: h => h(App),
	router: router,
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})
// console.log(vm)