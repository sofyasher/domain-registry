<template>
  <InfoCard v-if="keySet" title="Key Set:">
    <div class="d-flex">
      Handle:
      <div>
        {{ keySet.handle }}
      </div>
    </div>
    <div class="d-flex">
      Registrar:
      <div>
        {{ keySet.registrar }}
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
        {{ keySet.dns_keys }}
      </div>
    </div>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { KeySetTo } from "@/shared/models/domain-to";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";

defineProps({
  keySet: Object as PropType<KeySetTo>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
