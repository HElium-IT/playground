<template>
  <TresOrbitControls v-if="renderer" :args="[camera, renderer?.domElement]" />
</template>

<script setup lang="ts">
import { extend, useTresContext } from "@tresjs/core";
import { OrbitControls } from "three/addons";

extend({ OrbitControls });

const { camera, renderer } = useTresContext();
</script>
