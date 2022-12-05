<template>
  <div class="home">
    <v-list flat>
      <v-list-item>
        <template v-slot:default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>My first todo</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
