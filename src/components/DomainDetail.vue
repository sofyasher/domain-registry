<template>
  <div v-if="domainData" class="hello">
    <EventsCard :events="domainData.events"></EventsCard>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { DomainTo } from "@/shared/models/domain-to";
import { getDomainDetail } from "@/shared/requests/get-domain-detail";
import EventsCard from "@/components/EventsCard.vue";

const domainData = ref<DomainTo | null>(null);

onMounted(() => {
  getDomainDetail().then(({ data }) => {
    domainData.value = data;
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
