export const todo = {
    namespaced: true,
    state: function() {
        return { 
           todos: [
            {id: 1, title:'할일 1', done: true},
            {id: 2, title:'할일 2', done: false},
            {id: 3, title:'할일 3', done: false},
           ]
        }
      },
      getters: {
        todosCount(state) {
          return state.todos.length
        },
        doneTodosCount(state) {
          return state.todos.filter((todo) => todo.done).length
        },
        notDoneTodosCount(state) {
          return state.todos.filter((todo) => !todo.done).length
        },
      },
      mutations: {
        add(state, item) {
          state.todos.push(item)
        },
        remove(state, id) {
          state.todos = state.todos.filter((todo) => todo.id !== id)
        },
        doneYN(state, doneState) {
          state.todos.filter((todo) => todo.id === doneState.id)[0].done = doneState.done
        }
      },
      actions: {
        add({commit}, item) {
          commit('add', item)
        }
        },
}