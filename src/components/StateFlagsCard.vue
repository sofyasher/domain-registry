<template>
  <InfoCard v-if="stateFlags" title="State flags">
    <div v-for="flag in stateFlags.flags" v-bind:key="flag.name">
      {{ flag.description }}
    </div>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { StateFlagsTo } from "@/shared/models/domain-to";
import InfoCard from "@/components/InfoCard.vue";

defineProps({
  isVerboseViewOn: Boolean,
  stateFlags: Object as PropType<StateFlagsTo>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
