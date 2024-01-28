<template>
  <ToolBar></ToolBar>
  <v-row>
    <v-col sm="0" md="2"><SideNav></SideNav></v-col>
    <v-col sm="12" md="10"><slot></slot></v-col>
  </v-row>
</template>

<script lang="ts" setup>
import ToolBar from "@/components/layout/ToolBar.vue";
import SideNav from "@/components/layout/SideNav.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
