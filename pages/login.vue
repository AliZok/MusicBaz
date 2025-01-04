<template>
  hello login
  <div>
    {{ fuckComp }}
  </div>
</template>

<script setup>

import { useAPI } from '~/composables/useAPI'
const { getData } = useAPI()
const { data, pending, error } = await getData('https://jsonplaceholder.typicode.com/posts')


const fuckComp = computed(()=>{
  return data.value
})

watch(()=> data.value, ()=>{
  alert("hell")
})

onMounted(async () => {
  // postApi().then(() => {
  //   alert("alizoka is here")
  // })
  
data.value = []

});
</script>