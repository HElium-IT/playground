<template>
    <v-card>
        <v-toolbar color="transparent">
            <template v-slot:prepend>
            <v-btn icon="$menu"></v-btn>
            </template>

            <v-toolbar-title class="text-h6 titlebar" :text="title"></v-toolbar-title>

        </v-toolbar>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Playground')
</script>

<style scoped>
.titlebar {
    -webkit-user-select: none;
    user-select: none;
    -webkit-app-region: drag;
}
</style>
