<template>
  hello login
</template>

<script setup lang="ts">

import { useAPI } from '~/composables/useAPI'
const { fetchData } = useAPI()
const { data, pending, error } = await fetchData('https://jsonplaceholder.typicode.com/posts')

console.log("ffffffffffffukc", data.value)


onMounted(async () => {
  // postApi().then(() => {
  //   alert("alizoka is here")
  // })
});
</script>