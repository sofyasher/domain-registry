<template>
  <v-toolbar dark>
    <v-app-bar-nav-icon color="primary"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ APP_NAME }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn>
      <v-icon size="x-large">mdi-account-circle</v-icon>
      {{ USER_NAME }}
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts" setup>
import { APP_NAME, USER_NAME } from "@/shared/constants";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
