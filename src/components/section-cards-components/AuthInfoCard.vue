<template>
  <InfoCard v-if="expiresAt" title="State flags">
    <InfoRow>
      <template v-slot:label>Expires at:</template>
      <template v-slot:info>{{ expiresAt }}</template>
    </InfoRow>
  </InfoCard>
</template>

<script lang="ts" setup>
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import InfoRow from "@/components/InfoRow.vue";

defineProps({
  expiresAt: String,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
