<!-- layouts/default.vue -->
<template>
  <div class="DefaultLayout">
    <HeaderMain />
    <Component :is="PlayerMain">
    </Component>
  </div>
</template>

<script setup>
import PlayerMain from '@/components/PlayerMain'
import HeaderMain from '@/components/HeaderMain'

const router = useRouter()
const route = useRoute()
console.log('baaaaaaaaaaaaaaa',route)

router.push('/play')
</script>

