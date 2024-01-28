<template>
  <div class="user-info-wrapper">
    <v-card
      class="mx-auto"
      max-width="300"
      :title="USER_NAME"
      :subtitle="USER_ROLE"
      prepend-icon="mdi-account"
    >
      <v-card-text> <v-icon icon="mdi-logout"></v-icon> Log out </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { USER_NAME, USER_ROLE } from "@/shared/constants";
</script>

<style scoped lang="scss">
.user-info-wrapper {
  position: absolute;
  top: 54px;
  right: 20px;
  width: 300px;
  height: 100px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  background-color: #ffffff;
}
</style>
