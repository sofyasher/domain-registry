<template>
  <v-card v-if="stateFlags" variant="outlined">
    <v-card-title>State flags</v-card-title>
    <v-card-text>
      <div v-for="flag in stateFlags.flags" v-bind:key="flag.name">
        {{ flag.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { StateFlagsTo } from "@/shared/models/domain-to";

defineProps({
  isVerboseViewOn: Boolean,
  stateFlags: Object as PropType<StateFlagsTo>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
