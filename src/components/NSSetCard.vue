<template>
  <InfoCard v-if="nsSet" title="Key Set:">
    <div class="d-flex">
      Handle:
      <div>
        {{ nsSet.handle }}
      </div>
    </div>
    <div class="d-flex">
      Registrar:
      <div>
        {{ nsSet.registrar }}
      </div>
    </div>
    <!--      <v-row class="d-flex justify-space-between">-->
    <!--        <v-col v-if="events.transferred?.timestamp"> Transfer date: </v-col>-->
    <!--        <v-col v-if="events.transferred">-->
    <!--          {{ events.transferred.timestamp }} Registrar:-->
    <!--          {{ events.transferred.registrar_handle }}-->
    <!--        </v-col>-->
    <!--      </v-row>-->
    <div class="d-flex justify-space-between">
      DNS keys:
      <div>
        {{ nsSet.dns }}
      </div>
    </div>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { NSSetTo } from "@/shared/models/domain-to";
import InfoCard from "@/components/InfoCard.vue";

defineProps({
  nsSet: Object as PropType<NSSetTo>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
