<template>
  <div class="home">
    <v-toolbar dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Ferda</v-toolbar-title>

      <v-spacer></v-spacer>

      <!--      <v-btn> jjjj </v-btn>-->
    </v-toolbar>
    <DomainDetail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DomainDetail from "@/components/DomainDetail.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    DomainDetail,
  },
});
</script>
