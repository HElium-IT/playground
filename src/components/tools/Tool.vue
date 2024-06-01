<template>
    <v-btn :icon="icon" @click="$emit('toggled')" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    icon: String,
    name: String,
    selected: Boolean,
});

</script>