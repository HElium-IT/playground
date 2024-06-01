<script setup lang="ts">
import Header from './components/Header.vue'
import Toolbar from './components/Toolbar.vue'
import Grid from './components/Grid.vue'

</script>

<template>
  <v-container>
    <v-row >
      <v-col class="pa-1">
        <Header />
      </v-col>
    </v-row>
    <v-row align="stretch">
      <v-col class="pa-1" no-gutters cols="1" >
        <Toolbar/>
      </v-col>
      <v-col class="pa-1"  style="height: max-content;">
        <Grid/>
      </v-col>
    </v-row>

  </v-container>
</template>

