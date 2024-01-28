<template>
  <div class="d-flex justify-space-between info-row">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info-row {
  max-width: 500px;
}
</style>
