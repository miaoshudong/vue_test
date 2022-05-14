//改文件专门用一般创建整个引用的路由器
import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' },


        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true },
                    /*  beforeEnter: (to, from, next) => {
                         console.log('@', to, 'asd a', from, next);
                         console.log(localStorage.getItem('school'));
                         if (to.meta.isAuth) {
                             if (localStorage.getItem('school') === 'atguigu') {
                                 next()
                             } else {
                                 alert('学校名不对，无权限')
                             }
                         } else {
                             next()
                         }
                     } */

                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            // props第一种写法 该对象中的所有key-value都会以props的形式传给Detail组件
                            // props: { a: 1, b: 'hello', }
                            // props第二种写法 值为布尔值，若布尔值为真，就会吧该路由组件收到的params参数，以props的形式传给detail组件
                            // props: true,
                            // props第三种写法 ,值为函数
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title }
                            }


                        }
                    ]
                },
            ]
        },

    ]
})

//全局前置路由守卫
// router.beforeEach((to, from, next) => {
//     console.log('@', to, 'asd a', from, next);
//     console.log(localStorage.getItem('school'));
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('学校名不对，无权限')
//         }
//     } else {
//         next()
//     }
// })
// router.afterEach((to, from) => {
//     console.log('@', to, 'asd a', from);
//     document.title = to.meta.title

// })
export default router 