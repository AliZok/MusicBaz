<!-- layouts/default.vue -->
<template>
  <div class="test-layout">
    kir
    <!-- <Test></Test> -->
  </div>
</template>



<script setup>
import storeSimple from "@/store/storeSimple"

console.log("storeSimple:",storeSimple.musicList[0].audio)

const Route = useRoute()
const Router = useRouter()

</script>
