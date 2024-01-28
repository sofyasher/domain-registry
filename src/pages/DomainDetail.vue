<template>
  <div v-if="domainData" class="pa-10">
    {{ domainData.fqdn }}
    <v-switch label="Verbose view" v-model="isVerboseViewOn"></v-switch>
    <v-row>
      <v-col sm="8">
        <AuthInfoCard
          :expires-at="domainData.expires_at.toLocaleString()"
          :secret-password="SECRET_PASSWORD"
        ></AuthInfoCard>
        <EventsCard :events="domainData.events"></EventsCard>
        <StateFlagsCard
          :is-verbose-view-on="isVerboseViewOn"
          :state-flags="domainData.state_flags"
        ></StateFlagsCard
      ></v-col>
      <v-col sm="4">
        <ContactCard title="Owner:" :contact="domainData.owner"></ContactCard>
        <AdministrativeContactsCard
          :is-verbose-view-on="isVerboseViewOn"
          :contacts="domainData.administrative_contacts"
        ></AdministrativeContactsCard>
        <KeySetCard :key-set="domainData.keyset"></KeySetCard>
        <NSSetCard :ns-set="domainData.nsset"></NSSetCard>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { DomainVM } from "@/shared/models/domain-vm";
import { getDomainDetail } from "@/shared/requests/get-domain-detail";
import EventsCard from "@/components/section-cards-components/EventsCard.vue";
import KeySetCard from "@/components/section-cards-components/KeySetCard.vue";
import NSSetCard from "@/components/section-cards-components/NSSetCard.vue";
import ContactCard from "@/components/section-cards-components/ContactCard.vue";
import StateFlagsCard from "@/components/section-cards-components/StateFlagsCard.vue";
import AuthInfoCard from "@/components/section-cards-components/AuthInfoCard.vue";
import AdministrativeContactsCard from "@/components/section-cards-components/AdministrativeContactsCard.vue";
import { DomainMapper } from "@/shared/mappers/domain-mapper";
import { SECRET_PASSWORD } from "@/shared/constants";

const domainData = ref<DomainVM | null>(null);
const isVerboseViewOn = ref<boolean>(false);

onMounted(() => {
  getDomainDetail().then(({ data }) => {
    domainData.value = DomainMapper.fromToToModel(data);
  });
});
</script>

<style scoped lang="scss"></style>
