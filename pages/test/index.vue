<template>
  hello login
  <button @click="postData()" class="pt-10">postData</button>
</template>

<script setup>
import storeSimple from "@/store/storeSimple"
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
const jsonList = ref({})
const jsonifyList = (List)=>{
  List.map((item, index) => {
    jsonList.value[index] = item
  })

  console.log("fffffffffffddddddddddu",jsonList.value)
}

async function postData() {
  jsonifyList(storeSimple.musicList)
  
  const objectToInsert = { musics: jsonList.value }
  const { data, error } = await supabase.from('save-json').insert([objectToInsert])

  if (error) {
    console.error('Insert Error:', error)
  } else {
    console.log('Insert SuccessMusiiiiiics:', data)
  }
}


// async function postData() {
//   jsonifyList(storeSimple.musicList)
  
//   const objectToInsert = { id: "888" }
//   const { data, error } = await supabase.from('live-music').insert([objectToInsert])

//   if (error) {
//     console.error('Insert Error:', error)
//   } else {
//     console.log('Insert Success:', data)
//   }
// }


onMounted(async () => {
  try {
    const { data, error: fetchError } = await supabase
      .from('live-music') // Replace 'users' with your table name
      .select('*')
    if (fetchError) throw fetchError
    users.value = data
    console.log('fffffffffffff', users.value)
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
})
</script>