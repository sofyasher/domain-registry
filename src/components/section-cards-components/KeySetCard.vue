<template>
  <InfoCard v-if="keySet" title="Key Set:">
    <InfoRow>
      <template v-slot:label>Handle:</template>
      <template v-slot:info>
        {{ keySet.handle }}
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>Registrar:</template>
      <template v-slot:info>
        {{ keySet.registrar }}
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>DNS keys:</template>
      <template v-slot:info>
        <div
          v-for="key in keySet.dns_keys"
          v-bind:key="key"
          class="key-set-dns"
        >
          {{ key }}
        </div>
      </template>
    </InfoRow>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { KeySetVM } from "@/shared/models/domain-vm";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import InfoRow from "@/components/InfoRow.vue";

defineProps({
  keySet: Object as PropType<KeySetVM>,
});
</script>

<style scoped lang="scss">
.key-set-dns {
  word-break: break-all;
}
</style>
