<template>
  <primitive :object="meshWithMaterial" @click="$emit('clicked')" />
</template>

<script setup lang="ts">
import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";

defineEmits(["clicked"]);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });

const meshWithMaterial = new Mesh(geometry, material);
</script>
