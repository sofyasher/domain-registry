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
    <div v-for="contact in contacts" v-bind:key="contact.name" class="d-flex">
      {{ contact.name }}:
      <div>
        {{ contact.handle }}
      </div>
    </div>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ContactVM } from "@/shared/models/domain-vm";
import ContactCard from "@/components/section-cards-components/ContactCard.vue";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";

defineProps({
  isVerboseViewOn: Boolean,
  contacts: Object as PropType<ContactVM[]>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
