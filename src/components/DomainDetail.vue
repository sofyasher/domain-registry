<template>
  <div v-if="domainData" class="hello">
    {{ domainData.fqdn }}
    <v-row>
      <v-col>
        <AuthInfoCard :expires-at="domainData.expires_at"></AuthInfoCard>
        <EventsCard :events="domainData.events"></EventsCard>
        <StateFlagsCard :state-flags="domainData.state_flags"></StateFlagsCard
      ></v-col>
      <v-col>
        <OwnerCard :owner="domainData.owner"></OwnerCard>
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
import OwnerCard from "@/components/OwnerCard.vue";
import StateFlagsCard from "@/components/StateFlagsCard.vue";
import AuthInfoCard from "@/components/AuthInfoCard.vue";

const domainData = ref<DomainTo | null>(null);

onMounted(() => {
  getDomainDetail().then(({ data }) => {
    domainData.value = data;
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
