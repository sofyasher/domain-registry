<template>
  <InfoCard v-if="stateFlags" title="State flags">
    <template v-if="isVerboseViewOn">
      <v-row>
        <v-col
          v-for="(group, index) in groups"
          v-bind:key="'flag-group-' + index"
        >
          <div v-for="flagKey in group" v-bind:key="flagKey">
            <template v-if="getFlagStateByKey(flagKey)">
              <CheckIcon v-if="getFlagStateByKey(flagKey)!.active"></CheckIcon>
              <CloseIcon v-else></CloseIcon>
              <span
                class="flag"
                :class="{'inactive':!getFlagStateByKey(flagKey)!.active}"
              >
                {{ getFlagStateByKey(flagKey).description }}
              </span>
            </template>
          </div>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <div v-for="flag in activeFlags" v-bind:key="flag.name">
        <CheckIcon></CheckIcon>
        <span class="flag">
          {{ flag.description }}
        </span>
      </div>
    </template>
  </InfoCard>
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref } from "vue";
import { StateFlagsTo, StateFlagTo } from "@/shared/models/domain-to";
import InfoCard from "@/components/InfoCard.vue";
import CheckIcon from "@/components/icons-components/CheckIcon.vue";
import CloseIcon from "@/components/icons-components/CloseIcon.vue";

const props = defineProps({
  isVerboseViewOn: Boolean,
  stateFlags: Object as PropType<StateFlagsTo>,
});

const groups = ref<string[][] | undefined>([[]]);
const activeFlags = ref<StateFlagTo[]>([]);

onMounted(() => {
  groups.value = props.stateFlags?.groups;

  const lastGroup = props.stateFlags?.flags
    .map((flag) => flag.name)
    .filter(
      (flagKey) =>
        !groups.value?.some((group) => group.some((key) => flagKey === key))
    );

  if (lastGroup && lastGroup.length > 0) {
    groups.value?.push(lastGroup);
  }

  activeFlags.value =
    props.stateFlags?.flags.filter((flag) => flag.active) ?? [];
});

const getFlagStateByKey = (key: string): StateFlagTo | undefined => {
  return props?.stateFlags?.flags.find((flag) => flag.name === key);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flag {
  color: green;

  &.inactive {
    color: red;
  }
}
</style>
