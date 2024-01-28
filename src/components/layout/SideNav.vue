<template>
  <div class="sidenav">
    <div class="sidenav-title">APPLICATIONS</div>
    <div class="sidenav-items">
      <div
        v-for="(item, index) in items"
        v-bind:key="'sidenav-item-' + index"
        class="d-flex sidenav-item"
        :class="{ active: item.isActive }"
      >
        <v-icon size="large">{{ item.icon }}</v-icon>
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items: { label: string; icon: string; isActive: boolean }[] = [
  { label: "Registry", icon: "mdi-earth", isActive: true },
];
</script>

<style scoped lang="scss">
.sidenav {
  padding: 20px 0;
  border-right: solid 1px #999999;
  height: 100%;
}

.sidenav-title {
  padding: 0 10px 10px 10px;
  border-bottom: solid 1px #999999;
}

.sidenav-item {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 30px;

  &.active {
    background-color: yellow;
  }
}
</style>
