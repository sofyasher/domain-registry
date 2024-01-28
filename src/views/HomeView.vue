<template>
  <v-app>
    <div class="home">
      <ToolbarWithSidenav>
        <DomainDetail />
      </ToolbarWithSidenav>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DomainDetail from "@/pages/DomainDetail.vue";
import ToolbarWithSidenav from "@/components/layout/ToolbarWithSidenav.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    ToolbarWithSidenav,
    DomainDetail,
  },
});
</script>
