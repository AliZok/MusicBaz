<!-- layouts/default.vue -->
<template>
  <div class="DefaultLayout">
    <!-- <HeaderMain /> -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>



<script setup>

import HeaderMain from '@/components/HeaderMain'
import { onMounted, watch,ref } from 'vue';

const Route = useRoute()
const Router = useRouter()


const myRoute = ref("/")
watch(() => Route.path, (newValue) => {
 

})

onMounted(() => {
  // Router.push('/dance-baby') 

})
</script>
