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

onMounted(() => {
  // Router.push('/dance-baby-radio')
})
</script>
