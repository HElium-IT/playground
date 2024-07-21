<template>
  <Tool
    icon="mdi-plus"
    name="Add Cube"
    :selected="addCube.selected"
    @toggled="addCube.toggled"
  />
</template>

<script setup lang="ts">
import { inject, reactive } from "vue";
import Tool from "./Tool.vue";
import Cube from "../objects/Cube.vue";

const gridObjects = inject("gridObjects");

const addCube = reactive({
  selected: false,
  toggled() {
    addCube.selected = true;
    console.log("Add Cube");
    setTimeout(() => {
      addCube.selected = false;
    }, 500);
    gridObjects.push({ component: Cube });
  },
});
</script>
