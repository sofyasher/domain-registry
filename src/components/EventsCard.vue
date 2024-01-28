<template>
  <InfoCard v-if="events" title="Events:">
    <div class="d-flex">
      Create date:
      <div>
        {{ events.registered.timestamp }}
        Registrar:
        {{ events.registered.registrar_handle }}
      </div>
    </div>
    <div class="d-flex">
      Update date:
      <div v-if="events.updated">
        {{ events.updated.timestamp }} Registrar:
        {{ events.updated.registrar_handle }}
      </div>
    </div>
    <v-row class="d-flex justify-space-between">
      <v-col v-if="events.transferred?.timestamp"> Transfer date: </v-col>
      <v-col v-if="events.transferred">
        {{ events.transferred.timestamp }} Registrar:
        {{ events.transferred.registrar_handle }}
      </v-col>
    </v-row>
    <div class="d-flex justify-space-between">
      Delete date:
      <div v-if="events.unregistered">
        {{ events.unregistered.timestamp }} Registrar:
        {{ events.unregistered.registrar_handle }}
      </div>
    </div>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { EventsTo } from "@/shared/models/domain-to";
import InfoCard from "@/components/InfoCard.vue";

defineProps({
  events: Object as PropType<EventsTo>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
