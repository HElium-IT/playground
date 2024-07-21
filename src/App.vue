<template>
  <v-container>
    <v-row>
      <v-col class="pa-1">
        <Header />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-1" no-gutters cols="1">
        <Toolbar />
      </v-col>
      <v-col class="pa-1" cols="11">
        <Grid />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, provide } from "vue";
import Header from "./components/Header.vue";
import Toolbar from "./components/Toolbar.vue";
import Grid from "./components/Grid.vue";

const gridObjects = reactive([]);
provide("gridObjects", gridObjects);
</script>
