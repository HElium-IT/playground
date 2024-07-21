<template>
  <v-card title="Canvas">
    <v-card-text style="height: 70vh">
      <TresCanvas clear-color="#82DBC5">
        <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
        <!-- <TresMesh>
          <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
          <TresMeshBasicMaterial color="orange" />
        </TresMesh> -->
        <TresGridHelper :position="[0, 0, 0]" />
        <TresAmbientLight :intensity="1" />
        <OrbitControls />
        <template v-for="object in gridObjects">
          <component :is="object.component" />
        </template>
      </TresCanvas>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { inject, reactive } from "vue";
import { TresCanvas } from "@tresjs/core";
import OrbitControls from "./OrbitControls.vue";

const gridObjects = inject("gridObjects");
</script>
