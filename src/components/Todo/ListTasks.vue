<template>
  <v-list class="pt-0" flat>
    <task v-for="task in $store.state.tasks" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
import TaskVue from '@/components/Todo/Task.vue';

export default {
  components: {
    task: TaskVue,
  },
};
</script>

<style></style>
