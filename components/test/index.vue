<script setup>
import {ref} from 'vue'

const fuckProps = defineProps({
    fuckImage:{
        type:String,
    }
})
</script>
<template>
    <div>
        this is fuckin test
        <NuxtImg :src="fuckImage" />
    </div>
</template>
