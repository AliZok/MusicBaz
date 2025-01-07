<template>
  hello login
  <button @click="postData()" class="pt-10">postData</button>
  <button @click="updateLiveMusic()" class="pt-10">post muuuuusic</button>
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

const jsonifyList = (List) => {
  List.map((item, index) => {
    jsonList.value[index] = item
  })
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

const getMusicList = async () => {
  const { data, error } = await supabase.from('save-json').select('*')

  if (error) {
    console.error('gettttt Error:', error)
  } else {
    console.log('gettttttt SuccessMusiiiiiics:', data)
  }
}

async function updateLiveMusic() {

  const objectToInsert = {
    title: 'Evolution',
    artist: 'Interplay Records',
    cover: 'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
    audio: 'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/03) Interplay Records - Evolution (Interplay 51).mp3',
    genre: 'electronic trance',
    duration: '3:40',
    star: 4,
  }

  const { data, error } = await supabase
    .from('live-music')
    .update(objectToInsert)
    .eq('id', 1);

  if (error) {
    console.error('Insert Error:', error);
  } else {
    console.log('Insert Success:', data);
  }

}


async function getRecordById(id) {

  const { data, error } = await supabase
    .from('live-music') // specify your table name here
    .select('*') // select all fields; you can specify the fields you need
    .eq('id', id) // Filter by the 'id' field
    .single(); // Only fetch a single record

  if (error) {
    console.error('Fetch Error:', error);
    return null; // Return a fallback value or handle the error
  }

  console.log("11111111111111111",data);
}


onMounted(async () => {
  getMusicList()
  getRecordById(1)
})
</script>