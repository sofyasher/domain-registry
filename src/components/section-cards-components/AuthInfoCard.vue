<template>
  <InfoCard v-if="expiresAt" title="State flags">
    <div>Expires at: {{ expiresAt }}</div>
  </InfoCard>
</template>

<script lang="ts" setup>
import InfoCard from "@/components/section-cards-components/InfoCard.vue";

defineProps({
  expiresAt: String,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
