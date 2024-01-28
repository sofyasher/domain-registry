<template>
  <InfoCard v-if="stateFlags" title="State flags">
    <div v-for="flag in stateFlags.flags" v-bind:key="flag.name">
      <CheckIcon v-if="flag.active"></CheckIcon>
      <CloseIcon v-if="!flag.active"></CloseIcon> {{ flag.description }}
    </div>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { StateFlagsTo } from "@/shared/models/domain-to";
import InfoCard from "@/components/InfoCard.vue";
import CheckIcon from "@/components/icons-components/CheckIcon.vue";
import CloseIcon from "@/components/icons-components/CloseIcon.vue";

defineProps({
  isVerboseViewOn: Boolean,
  stateFlags: Object as PropType<StateFlagsTo>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
