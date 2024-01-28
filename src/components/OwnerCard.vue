<template>
  <v-card v-if="owner" variant="outlined">
    <v-card-item>
      <v-card-title>Owner:</v-card-title>
    </v-card-item>
    <v-card-text>
      <div class="d-flex">
        Handle:
        <div>
          {{ owner.handle }}
        </div>
      </div>
      <div class="d-flex">
        Organization:
        <div>
          {{ owner.organization }}
        </div>
      </div>
      <!--      <v-row class="d-flex justify-space-between">-->
      <!--        <v-col v-if="events.transferred?.timestamp"> Transfer date: </v-col>-->
      <!--        <v-col v-if="events.transferred">-->
      <!--          {{ events.transferred.timestamp }} Registrar:-->
      <!--          {{ events.transferred.registrar_handle }}-->
      <!--        </v-col>-->
      <!--      </v-row>-->
      <div class="d-flex justify-space-between">
        Name:
        <div>
          {{ owner.name }}
        </div>
      </div>
    </v-card-text></v-card
  >
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { OwnerTo } from "@/shared/models/domain-to";

defineProps({
  owner: Object as PropType<OwnerTo>,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
