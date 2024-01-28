<template>
  <v-card v-if="expiresAt" variant="outlined">
    <v-card-title>State flags</v-card-title>
    <v-card-text>
      <div>Expires at: {{ expiresAt }}</div></v-card-text
    ></v-card
  >
</template>

<script lang="ts" setup>
defineProps({
  expiresAt: String,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
