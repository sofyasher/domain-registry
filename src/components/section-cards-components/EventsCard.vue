<template>
  <InfoCard v-if="events" title="Events:">
    <div class="d-md-flex events-card-row">
      <InfoRow>
        <template v-slot:label>Create date:</template>
        <template v-slot:info>
          {{ dateTimeToLocaleString(events.registered.timestamp) }}
        </template>
      </InfoRow>
      <InfoRow>
        <template v-slot:label>Registrar:</template>
        <template v-slot:info>
          <span class="highlighted-blue">
            {{ events.registered.registrar_handle }}
          </span>
        </template>
      </InfoRow>
    </div>
    <div class="d-md-flex events-card-row">
      <InfoRow>
        <template v-slot:label>Update date:</template>
        <template v-if="events.updated" v-slot:info>
          {{ dateTimeToLocaleString(events.updated.timestamp) }}
        </template>
      </InfoRow>
      <InfoRow v-if="events.updated">
        <template v-slot:label>Registrar:</template>
        <template v-slot:info>
          <span class="highlighted-blue">
            {{ events.updated.registrar_handle }}
          </span>
        </template>
      </InfoRow>
    </div>

    <div class="d-md-flex events-card-row">
      <InfoRow>
        <template v-slot:label>Transfer date:</template>
        <template v-if="events.transferred" v-slot:info>
          {{ dateTimeToLocaleString(events.transferred.timestamp) }}
        </template>
      </InfoRow>
      <InfoRow v-if="events.transferred">
        <template v-slot:label>Registrar:</template>
        <template v-slot:info>
          <span class="highlighted-blue">
            {{ events.transferred.registrar_handle }}
          </span>
        </template>
      </InfoRow>
    </div>

    <div class="d-md-flex events-card-row">
      <InfoRow>
        <template v-slot:label>Delete date:</template>
        <template v-if="events.unregistered" v-slot:info>
          {{ dateTimeToLocaleString(events.unregistered.timestamp) }}
        </template>
      </InfoRow>
      <InfoRow v-if="events.unregistered">
        <template v-slot:label>Registrar:</template>
        <template v-slot:info>
          <span class="highlighted-blue">
            {{ events.unregistered.registrar_handle }}
          </span>
        </template>
      </InfoRow>
    </div>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { EventsVM } from "@/shared/models/domain-vm";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import InfoRow from "@/components/InfoRow.vue";
import { dateTimeToLocaleString } from "@/shared/utils/utils";

defineProps({
  events: Object as PropType<EventsVM>,
});
</script>

<style scoped lang="scss">
.events-card-row {
  gap: 70px;
}
</style>
