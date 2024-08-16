<!-- layouts/default.vue -->
<template>
  <div class="DefaultLayout">
    <Component :is="PlayerMain">
    </Component>
  </div>
</template>

<script setup>
import PlayerMain from '@/components/PlayerMain'
</script>
