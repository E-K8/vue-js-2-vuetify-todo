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
    snackbar: {
      show: true,
    },
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
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      console.log(task);

      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {},
  getters: {},
});
