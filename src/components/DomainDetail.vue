<template>
  <div v-if="domainData" class="pa-10">
    {{ domainData.fqdn }}
    <v-switch label="Verbose view" v-model="isVerboseViewOn"></v-switch>
    <v-row>
      <v-col>
        <AuthInfoCard :expires-at="domainData.expires_at"></AuthInfoCard>
        <EventsCard :events="domainData.events"></EventsCard>
        <StateFlagsCard
          :is-verbose-view-on="isVerboseViewOn"
          :state-flags="domainData.state_flags"
        ></StateFlagsCard
      ></v-col>
      <v-col>
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
import { DomainTo } from "@/shared/models/domain-to";
import { getDomainDetail } from "@/shared/requests/get-domain-detail";
import EventsCard from "@/components/EventsCard.vue";
import KeySetCard from "@/components/KeySetCard.vue";
import NSSetCard from "@/components/NSSetCard.vue";
import ContactCard from "@/components/ContactCard.vue";
import StateFlagsCard from "@/components/StateFlagsCard.vue";
import AuthInfoCard from "@/components/AuthInfoCard.vue";
import AdministrativeContactsCard from "@/components/AdministrativeContactsCard.vue";

const domainData = ref<DomainTo | null>(null);
const isVerboseViewOn = ref<boolean>(false);

onMounted(() => {
  getDomainDetail().then(({ data }) => {
    domainData.value = data;
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
