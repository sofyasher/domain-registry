<template>
  <InfoCard v-if="stateFlags" title="State flags">
    <template v-if="isVerboseViewOn">
      <v-row>
        <v-col
          v-for="(group, index) in groups"
          v-bind:key="'flag-group-' + index"
        >
          <div v-for="flagKey in group" v-bind:key="flagKey">
            <StateFlagRow
              :flag-key="flagKey"
              :state-flags="stateFlags"
            ></StateFlagRow>
          </div>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <div v-for="flag in activeFlags" v-bind:key="flag.name">
        <CheckIcon></CheckIcon>
        <span class="state-flag">
          {{ flag.description }}
        </span>
      </div>
    </template>
  </InfoCard>
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref } from "vue";
import { StateFlagsVM, StateFlagVM } from "@/shared/models/domain-vm";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import CheckIcon from "@/components/icons-components/CheckIcon.vue";
import StateFlagRow from "@/components/section-cards-components/StateFlagRow.vue";

const props = defineProps({
  isVerboseViewOn: Boolean,
  stateFlags: Object as PropType<StateFlagsVM>,
});

const groups = ref<string[][]>([[]]);
const activeFlags = ref<StateFlagVM[]>([]);

onMounted(() => {
  groups.value = props.stateFlags?.groups ?? [[]];

  activeFlags.value =
    props.stateFlags?.flags.filter((flag) => flag.active) ?? [];

  // 1. finds keys that are not contained in received groups,
  // 2. puts them into a separate array
  const lastGroup = props.stateFlags?.flags
    .map((flag) => flag.name)
    .filter(
      (flagKey) =>
        !groups.value.some((group) => group.some((key) => flagKey === key))
    );

  // 3. creates a new group with the keys from 2.
  if (lastGroup && lastGroup.length > 0) {
    groups.value.push(lastGroup);
  }
});
</script>

<style scoped lang="scss"></style>
