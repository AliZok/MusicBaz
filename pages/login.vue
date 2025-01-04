<template>
  hello login
</template>

<script setup lang="ts">

// import { supabase } from '@/plugins/supabase';

const loading = ref(true);


const { data, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})

console.log("dataaaaaaaaaaaa",data.value)


onMounted(async () => {

});
</script>