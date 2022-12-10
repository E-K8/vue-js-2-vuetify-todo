import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'open your eyes', done: false },
      { id: 2, title: 'yawn', done: false },
      { id: 3, title: 'stretch', done: false },
    ],
  },
  getters: {},
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },
  },
  actions: {},
  getters: {},
});
