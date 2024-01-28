<template>
  <InfoCard v-if="nsSet" title="NSSet:">
    <InfoRow>
      <template v-slot:label>Handle:</template>
      <template v-slot:info>
        <span class="highlighted-blue">
          {{ nsSet.handle }}
        </span>
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>Registrar:</template>
      <template v-slot:info>
        <span class="highlighted-blue">
          {{ nsSet.registrar }}
        </span>
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>DNS:</template>
      <template v-slot:info>
        <div v-for="dns in nsSet.dns" v-bind:key="dns.ip_address">
          {{ dns.name }} ({{ dns.ip_address }})
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
