//改文件用于创建vuex中最核心的store
//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//准备actions--用于相应组件中的动作
const actions = {
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

    }

}
//准备mutations--用于操作数据(state)
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的+', state, value)
        state.sum += value
    },
    JIAN(state, value) {
        // console.log('mutations中的+', state, value)
        state.sum -= value
    },

}
//准备state--用于存储数据
const state = {
    sum: 0,
}
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}



//创建并暴露store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters: getters,
})
/* //创建store
const store = new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
})
//暴露(导出)store
export default store */