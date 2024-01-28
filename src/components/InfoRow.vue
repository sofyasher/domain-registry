<template>
  <div class="d-md-flex justify-space-between align-center info-row">
    <div>
      <strong>
        <slot name="label"></slot>
      </strong>
    </div>
    <div>
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.info-row {
  width: 100%;
  max-width: 500px;
}
</style>
