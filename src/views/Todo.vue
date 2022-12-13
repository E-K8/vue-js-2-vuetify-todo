<template>
  <div class="home">
    <field-add-task />

    <list-tasks v-if="$store.state.tasks.length" />

    <no-tasks v-else />
  </div>
</template>

<script>
import FieldAddTaskVue from '@/components/Todo/FieldAddTask.vue';
import ListTasksVue from '@/components/Todo/ListTasks.vue';
import NoTasksVue from '@/components/Todo/NoTasks.vue';

export default {
  name: 'Home',
  components: {
    'field-add-task': FieldAddTaskVue,
    'list-tasks': ListTasksVue,
    'no-tasks': NoTasksVue,
  },
};
</script>
