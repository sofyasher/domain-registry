<template>
  <InfoCard v-if="nsSet" title="Key Set:">
    <InfoRow>
      <template v-slot:label>Handle:</template>
      <template v-slot:info>
        {{ nsSet.handle }}
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>Registrar:</template>
      <template v-slot:info>
        {{ nsSet.registrar }}
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>DNS keys:</template>
      <template v-slot:info>
        <div v-for="dns in nsSet.dns" v-bind:key="dns.ip_address">
          {{ dns.name }}
        </div>
      </template>
    </InfoRow>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { NSSetVM } from "@/shared/models/domain-vm";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import InfoRow from "@/components/InfoRow.vue";

defineProps({
  nsSet: Object as PropType<NSSetVM>,
});
</script>

<style scoped lang="scss"></style>
