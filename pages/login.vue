<template>
  hello login
  <button @click="postData()" class="pt-10">postData</button>
</template>

<script setup>

import { useAPI } from '~/composables/useAPI'
// const { getData } = useAPI()
// const { data, pending, error } = await getData('https://jsonplaceholder.typicode.com/posts')


// const fuckComp = computed(()=>{
//   return data.value
// })

import { useSupabase } from '~/composables/useSupabase'
const { supabase } = useSupabase()
const users = ref(null)
const loading = ref(true)
const error = ref(null)


async function postData() {
  const objectToInsert = { id: "888" }
  const { data, error } = await supabase
    .from('live-music')
    .insert([objectToInsert])  // Use an array even for a single object

  if (error) {
    console.error('Insert Error:', error)  // Log any insert errors
  } else {
    console.log('Insert Success:', data)  // Log success with returned data
  }
}


onMounted(async () => {
  try {
    const { data, error: fetchError } = await supabase
      .from('live-music') // Replace 'users' with your table name
      .select('*')
    if (fetchError) throw fetchError
    users.value = data
    console.log('fffffffffffff',users.value)
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
})
</script>