<template>
  <div style="width: 100vw; height: 100vh">
    <BaklavaEditor :view-model="baklava" />
  </div>
</template>

<script setup lang="ts">
import { BaklavaEditor, useBaklava } from "@baklavajs/renderer-vue";
import "@baklavajs/themes/dist/syrup-dark.css";
import MyNode from "./nodes/MyNode";

const baklava = useBaklava();
baklava.editor.registerNodeType(MyNode);
</script>
