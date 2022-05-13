//改文件用于创建vuex中最核心的store
//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
import axios from 'axios'
import { nanoid } from "nanoid";
Vue.use(Vuex)
//求和功能相关的配置
const countOptions = {
    namespaced: true,

    actions: {
        jia: function (context, value) {
            // console.log('action中的+', context, value)
            context.commit('JIA', value)
        },
        jian: function (context, value) {
            // console.log('action中的+', context, value)
            context.commit('JIAN', value)
        },
        jiaOdd: function (context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait: function (context, value) {
            setTimeout(() => {

                context.commit('JIA', value)
            }, 500);
        },
    },
    mutations: {
        JIA(state, value) {
            // console.log('mutations中的+', state, value)
            state.sum += value
        },
        JIAN(state, value) {
            // console.log('mutations中的+', state, value)
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '法律',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}
//人员管理功能相关的配置
const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王！')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' },
            { id: '002', name: '张四' },
            { id: '003', name: '张午' },
        ],
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}
//创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }

})
/* //创建store
const store = new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
})
//暴露(导出)store
export default store */