<template>
  <InfoCard v-if="contact" :title="title">
    <InfoRow>
      <template v-slot:label>Handle:</template>
      <template v-slot:info>{{ contact.handle }}</template>
    </InfoRow>
    <div class="d-flex">
      <VisibleEyeIcon v-if="contact.publish.organization"></VisibleEyeIcon>
      <HiddenEyeIcon v-else></HiddenEyeIcon>
      <InfoRow>
        <template v-slot:label>Organization:</template>
        <template v-slot:info>{{ contact.organization }}</template>
      </InfoRow>
    </div>
    <div class="d-flex">
      <VisibleEyeIcon v-if="contact.publish.name"></VisibleEyeIcon>
      <HiddenEyeIcon v-else></HiddenEyeIcon>
      <InfoRow>
        <template v-slot:label>Name:</template>
        <template v-slot:info>{{ contact.name }}</template>
      </InfoRow>
    </div>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ContactVM } from "@/shared/models/domain-vm";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import VisibleEyeIcon from "@/components/icons-components/VisibleEyeIcon.vue";
import HiddenEyeIcon from "@/components/icons-components/HiddenEyeIcon.vue";
import InfoRow from "@/components/InfoRow.vue";

defineProps({
  title: String,
  contact: Object as PropType<ContactVM>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
