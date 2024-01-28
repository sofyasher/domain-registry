<template>
  <InfoCard v-if="expiresAt" title="State flags">
    <InfoRow>
      <template v-slot:label>AuthInfo:</template>
      <template v-slot:info>
        <v-btn
          color="blue"
          v-if="!isPasswordShown"
          @click="isPasswordShown = true"
        >
          SHOW
        </v-btn>
        <template v-else>{{ secretPassword }}</template>
      </template>
    </InfoRow>
    <InfoRow>
      <template v-slot:label>Expires at:</template>
      <template v-slot:info>{{ expiresAt }}</template>
    </InfoRow>
  </InfoCard>
</template>

<script lang="ts" setup>
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import InfoRow from "@/components/InfoRow.vue";
import { ref } from "vue";

defineProps({
  expiresAt: String,
  secretPassword: String,
});

const isPasswordShown = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>
