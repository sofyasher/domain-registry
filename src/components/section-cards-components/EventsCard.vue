<template>
  <InfoCard v-if="events" title="Events:">
    <InfoRow>
      <template v-slot:label>Create date:</template>
      <template v-slot:info>
        {{ events.registered.timestamp.toLocaleString() }}
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>Registrar:</template>
      <template v-slot:info>{{ events.registered.registrar_handle }}</template>
    </InfoRow>

    <InfoRow>
      <template v-slot:label>Update date:</template>
      <template v-if="events.updated" v-slot:info>
        {{ events.updated.timestamp.toLocaleString() }}
        <strong>Registrar:</strong>
        {{ events.updated.registrar_handle }}
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>Transfer date:</template>
      <template v-if="events.transferred" v-slot:info>
        {{ events.transferred.timestamp.toLocaleString() }}
        <strong>Registrar:</strong>
        {{ events.transferred.registrar_handle }}
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>Delete date:</template>
      <template v-if="events.unregistered" v-slot:info>
        {{ events.unregistered.timestamp.toLocaleString() }}
        <strong>Registrar:</strong>
        {{ events.unregistered.registrar_handle }}
      </template>
    </InfoRow>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { EventsVM } from "@/shared/models/domain-vm";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import InfoRow from "@/components/InfoRow.vue";

defineProps({
  events: Object as PropType<EventsVM>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
