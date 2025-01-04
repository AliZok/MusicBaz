<template>
  hello login
  <div>
    {{ fuckComp }}
  </div>
</template>

<script setup>

import { useAPI } from '~/composables/useAPI'
// const { getData } = useAPI()
// const { data, pending, error } = await getData('https://jsonplaceholder.typicode.com/posts')


// const fuckComp = computed(()=>{
//   return data.value
// })

import { onMounted, ref } from 'vue'
import { useSupabase } from '~/composables/useSupabase'
const { supabase } = useSupabase()
const users = ref(null)
const loading = ref(true)
const error = ref(null)


onMounted(async () => {
  try {
    const { data, error: fetchError } = await supabase
      .from('live-music') // Replace 'users' with your table name
      .select('*')
    if (fetchError) throw fetchError
    users.value = data
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
})
</script>