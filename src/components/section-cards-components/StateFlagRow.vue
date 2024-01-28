<template>
  <template v-if="flag">
    <CheckIcon v-if="flag.active"></CheckIcon>
    <CloseIcon v-else></CloseIcon>
    <span class="flag" :class="{ inactive: !flag.active }">
      {{ flag.description }}
    </span>
  </template>
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref } from "vue";
import { StateFlagsVM, StateFlagVM } from "@/shared/models/domain-vm";
import CheckIcon from "@/components/icons-components/CheckIcon.vue";
import CloseIcon from "@/components/icons-components/CloseIcon.vue";

const props = defineProps({
  flagKey: String,
  stateFlags: Object as PropType<StateFlagsVM>,
});

const flag = ref<StateFlagVM | undefined>(undefined);

onMounted(() => {
  flag.value = props?.stateFlags?.flags.find(
    (flag) => flag.name === props.flagKey
  );
});
</script>

<style scoped lang="scss">
.flag {
  color: green;

  &.inactive {
    color: red;
  }
}
</style>
