const state = {
    todos: [{
        id: 1,
        title: "todo item 1",
        completed: true
    },
    {
        id: 2,
        title: "todo item 2",
        completed: true
    },
    {
        id: 3,
        title: "todo item 3",
        completed: false
    }]
};

const getters = {
    // 2.过滤出completed为true的todo并展示
    completedTodos: state => {
        return state.todos.filter(todo => todo.completed);
    },
    // 3.计算出completed为true的todo的个数
    // 以getters为参数，可以获取到getters中定义的方法
    completedTodosCount: (state, getters) => {
        return getters.completedTodos.length;
    },
    // 4.根据传入的id值展示出对应的todo
    // 根据外部传参决定数据状态
    // 第一个参数state，第二个参数为外部传入的id
    // find():返回通过测试（函数内判断）的数组的第一个元素的值。
    getTodosById: state => id => {
        return state.todos.find(todo => todo.id === id);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
};

const actions = {
    async fetchTodos({commit}) {
        const response = await axios
            .get('http://jsonplaceholder.typicode.com/todos');
        console.log(response);
        commit('setTodos', response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
