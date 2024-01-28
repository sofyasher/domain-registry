<template>
  <InfoCard v-if="contact" :title="title">
    <div class="d-flex">
      Handle:
      <div>
        {{ contact.handle }}
      </div>
    </div>
    <div class="d-flex">
      <VisibleEyeIcon v-if="contact.publish.organization"></VisibleEyeIcon>
      <HiddenEyeIcon v-else></HiddenEyeIcon>
      Organization:
      <div>{{ contact.organization }}</div>
    </div>
    <!--      <v-row class="d-flex justify-space-between">-->
    <!--        <v-col v-if="events.transferred?.timestamp"> Transfer date: </v-col>-->
    <!--        <v-col v-if="events.transferred">-->
    <!--          {{ events.transferred.timestamp }} Registrar:-->
    <!--          {{ events.transferred.registrar_handle }}-->
    <!--        </v-col>-->
    <!--      </v-row>-->
    <div class="d-flex justify-space-between">
      <VisibleEyeIcon v-if="contact.publish.name"></VisibleEyeIcon>
      <HiddenEyeIcon v-else></HiddenEyeIcon>
      Name:
      <div>
        {{ contact.name }}
      </div>
    </div>
  </InfoCard>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ContactVM } from "@/shared/models/domain-vm";
import InfoCard from "@/components/section-cards-components/InfoCard.vue";
import VisibleEyeIcon from "@/components/icons-components/VisibleEyeIcon.vue";
import HiddenEyeIcon from "@/components/icons-components/HiddenEyeIcon.vue";

defineProps({
  title: String,
  contact: Object as PropType<ContactVM>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
