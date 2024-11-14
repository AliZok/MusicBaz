<!-- layouts/default.vue -->
<template>
  <div class="DefaultLayout">
    <HeaderMain />

    <NuxtPage />

  </div>
</template>



<script setup>

import HeaderMain from '@/components/HeaderMain'
import { onMounted, watch, ref } from 'vue';

const Route = useRoute()
const Router = useRouter()

onMounted(() => {
  Router.push('/dance-baby-radio')
})
</script>
