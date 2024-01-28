<template>
  <v-card variant="outlined" class="mb-3">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider></v-divider>
    <v-card-text><slot></slot></v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
