<!-- layouts/default.vue -->
<template>
  <div class="DefaultLayout">
    <!-- <Test :fuckImage="'@/assets/images/BABAK.jpg'"/> -->
    <HeaderMain />
    <Component :is="PlayerMain">
    </Component>
  </div>
</template>

<script setup>
import PlayerMain from '@/components/PlayerMain'
import HeaderMain from '@/components/HeaderMain'
import Test from '@/components/test'

</script>

