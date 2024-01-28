<template>
  <div class="position-relative">
    <v-toolbar dark>
      <v-app-bar-nav-icon color="primary"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ APP_NAME }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="userInfoShown = !userInfoShown">
        <v-icon size="x-large">mdi-account-circle</v-icon>
        {{ USER_NAME }}
      </v-btn>
    </v-toolbar>
    <template v-if="userInfoShown">
      <user-info></user-info>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { APP_NAME, USER_NAME } from "@/shared/constants";
import { ref } from "vue";
import UserInfo from "@/components/User-Info.vue";

const userInfoShown = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>
