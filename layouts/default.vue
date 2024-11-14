<!-- layouts/default.vue -->
<template>
  <div class="DefaultLayout">
    <!-- <Test :fuckImage="'@/assets/images/BABAK.jpg'"/> -->
    <HeaderMain />
    <!-- <Component :is="PlayerMain">
    </Component> -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>



<script setup>

import PlayerMain from '@/components/PlayerMain'
import HeaderMain from '@/components/HeaderMain'
import Test from '@/components/test'
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
