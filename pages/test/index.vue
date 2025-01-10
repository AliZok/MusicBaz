<template>
  hello login
  <button @click="postData()" class="pt-10">postData</button>
  <button @click="updateLiveMusic(objectToInsertLive)" class="pt-10">post muuuuusic</button>
</template>

<script setup>
import storeSimple from "@/store/storeSimple"
import { useSupabase } from '~/composables/useSupabase'
import { useAPI } from '~/composables/useAPI'
import { useMusicAPI } from '~/composables/useMusicAPI'

const { supabase } = useSupabase()
const { getLiveMusic } = useMusicAPI()

// const { getData } = useAPI()
// const { data, pending, error } = await getData('https://jsonplaceholder.typicode.com/posts')


// const fuckComp = computed(()=>{
//   return data.value
// })



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

// async function updateLiveMusic() {

//   const objectToInsert = {
//     title: 'Evolution',
//     artist: 'Interplay Records',
//     cover: 'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
//     audio: 'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/03) Interplay Records - Evolution (Interplay 51).mp3',
//     genre: 'electronic trance',
//     duration: '3:40',
//     star: 4,
//     finishAt: '',
//   }

//   const { data, error } = await supabase.from('live-music').update(objectToInsert).eq('id', 1);

//   if (error) {
//     console.error('Insert Error:', error);
//   } else {
//     console.log('Insert Success:', data);
//   }

// }

const objectToInsertLive = ref({
  title: 'Evolution',
  artist: 'Interplay Records',
  cover: 'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
  audio: 'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/03) Interplay Records - Evolution (Interplay 51).mp3',
  genre: 'electronic trance',
  duration: '3:40',
  star: 4,
  finishAt: '',
})



onMounted(async () => {
  getMusicList()
  getLiveMusic(1)
})
</script>