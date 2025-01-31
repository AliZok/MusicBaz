<template>



  <div class="pt-8">
    <button @click="postData()" class="pt-10">postData</button>
    <button @click="updateLiveMusic(objectToInsertLive)" class="pt-10">post muuuuusic</button>

    <div @click="updateList()">fuuuuuuuuuuuuuuuuuuuck</div>
    <div>
      <h1>Set Future Time Alert</h1>
      <input v-model="inputTime" placeholder="Enter time (HH:MM:SS)" />
      <button @click="setFutureTime">Set Alert</button>
      <p v-if="futureTimeString">Alert set for: {{ futureTimeString }}</p>
    </div>
  </div>
</template>

<script setup>
import storeSimple from "@/store/storeSimple"
import { useSupabase } from '~/composables/useSupabase'
import { useAPI } from '~/composables/useAPI'
import { useMusicAPI } from '~/composables/useMusicAPI'

const { supabase } = useSupabase()
const { getLiveMusic, updateLiveMusic } = useMusicAPI()

// const { getData } = useAPI()
// const { data, pending, error } = await getData('https://jsonplaceholder.typicode.com/posts')


// const fuckComp = computed(()=>{
//   return data.value
// })

definePageMeta({
  layout:"test"
})

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

async function updateList(params) {
  jsonifyList(storeSimple.musicList)
  const objectToInsert = { musics: jsonList.value }

  const { data, error } = await supabase.from('save-json').update(objectToInsert).eq('id', 1);
  if (error) {
    console.error('update lisssssst Error:', error)
  } else {
    console.log('update lisssssst  SuccessMusiiiiiics:', data)
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

const objectToInsertLive = ref({})
objectToInsertLive.value = storeSimple.musicList[0]

const inputTime = ref('');
const futureTimeString = ref('');
let intervalId = null;

const setFutureTime = () => {
  const timeParts = inputTime.value.split(':');
  if (timeParts.length !== 3) {
    alert('Please enter a valid time in HH:MM:SS format.');
    return;
  }

  const [hours, minutes, seconds] = timeParts.map(Number);
  const now = new Date();
  const futureDate = new Date(now.getTime() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));

  futureTimeString.value = futureDate.toUTCString();
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    const currentTime = new Date();

    if (currentTime.getTime() >= futureDate.getTime()) {
      alert(`The time is now ${currentTime.toUTCString()} UTC!`);
      clearInterval(intervalId);
    }
  }, 1000);
};


onMounted(async () => {
  getMusicList()
  getLiveMusic(1)

  if (intervalId) {
    clearInterval(intervalId);
  }
})
</script>