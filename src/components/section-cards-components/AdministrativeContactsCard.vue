<template v-if="contacts">
  <template v-if="isVerboseViewOn">
    <ContactCard
      v-for="contact in contacts"
      v-bind:key="contact.name"
      title="Administrative contact:"
      :contact="contact"
    ></ContactCard>
  </template>
  <InfoCard v-else title="Administrative contacts:">
    <InfoRow v-for="contact in contacts" v-bind:key="contact.name">
      <template v-slot:label>{{ contact.name }}:</template>
      <template v-slot:info>
        <span class="highlighted-blue">{{ contact.handle }}</span>
      </template>
    </InfoRow>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ContactVM } from "@/shared/models/domain-vm";
import ContactCard from "@/components/section-cards-components/ContactCard.vue";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import InfoRow from "@/components/InfoRow.vue";

defineProps({
  isVerboseViewOn: Boolean,
  contacts: Object as PropType<ContactVM[]>,
});
</script>

<style scoped lang="scss"></style>
