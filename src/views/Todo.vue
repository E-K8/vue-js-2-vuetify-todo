<template>
  <div class="home">
    <field-add-task />

    <list-tasks v-if="$store.state.tasks.length" />

    <div v-else class="no-tasks">
      <v-icon size="100" color="green darken-2">mdi-check</v-icon>
      <div class="text-h5 teal--text">ALL DONE</div>
    </div>
  </div>
</template>

<script>
import FieldAddTaskVue from '@/components/Todo/FieldAddTask.vue';
import ListTasksVue from '@/components/Todo/ListTasks.vue';

export default {
  name: 'Home',
  components: {
    'field-add-task': FieldAddTaskVue,
    'list-tasks': ListTasksVue,
  },
};
</script>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>
