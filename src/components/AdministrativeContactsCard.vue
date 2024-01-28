<template v-if="contacts">
  <template v-if="isVerboseViewOn">
    <ContactCard
      v-for="contact in contacts"
      v-bind:key="contact.name"
      title="Administrative contact:"
      :contact="contact"
    ></ContactCard>
  </template>
  <template v-if="!isVerboseViewOn">
    <v-card variant="outlined">
      <v-card-item>
        <v-card-title>Administrative contacts:</v-card-title>
      </v-card-item>
      <v-card-text>
        <div
          v-for="contact in contacts"
          v-bind:key="contact.name"
          class="d-flex"
        >
          {{ contact.name }}:
          <div>
            {{ contact.handle }}
          </div>
        </div>
      </v-card-text></v-card
    >
  </template>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ContactTo } from "@/shared/models/domain-to";
import ContactCard from "@/components/ContactCard.vue";

defineProps({
  isVerboseViewOn: Boolean,
  contacts: Object as PropType<ContactTo[]>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
