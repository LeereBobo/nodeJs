const state = {
    count: 5
};

const getters = {
    // 1.count被调用时+1
    count: state => {
        return state.count;
    }
};

const mutations = {
    incrementCount(state) {
        state.count++;
    },
    decrementCount(state, payload) {
        state.count -= payload.amount;
    }
};

const actions = {
    /* incrementCountAsync(context){
        setTimeout(() => {
          context.commit('incrementCount');
        },2000);
    } */

    // 上方的context可以解构为commit
    incrementCountAsync({commit}) {
        setTimeout(() => {
            commit('incrementCount');
        }, 2000);
    },
    decrementCountAsync({commit}, payload) {
        setTimeout(() => {
            commit('decrementCount', payload);
        }, 3000);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};





