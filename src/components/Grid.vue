<template>

    <v-card title="Canvas">
        <v-card-text style="height: 70vh">
            <TresCanvas clear-color="#82DBC5" >
                <TresPerspectiveCamera :position="[5, 5, 5]" />
                <CameraControls
                v-bind="controlsState"
                make-default
                :mouse-buttons="{ left: BaseCameraControls.ACTION.DOLLY }"
                :touches="{ one: BaseCameraControls.ACTION.TOUCH_TRUCK }"
                />
                <TresGridHelper :position="[0, -1, 0]" />
                <Box :scale="2">
                <TresMeshToonMaterial color="orange" />
                </Box>
                <TresAmbientLight />
                <TresDirectionalLight :position="[0, 2, 4]" />
            </TresCanvas>
        </v-card-text>
    </v-card>

</template>

<script setup lang="ts">

import { reactive } from 'vue';
import { TresCanvas } from '@tresjs/core'
import { CameraControls, BaseCameraControls } from '@tresjs/cientos'

const controlsState = reactive({
  minDistance: 0,
  maxDistance: 100,
})

</script>