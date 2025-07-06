<template>
  hello login
  <button @click="insertData()" class="pt-10">insertData</button>
</template>

<script setup>
import { useAPI } from "@/composables/useAPI"
const {
  getData,
  postData,
  updateData,
  deleteData,
  getDataServerSide,
  loadingGetApi,
  loadingPostApi,
  loadingDeleteApi
} = useAPI()

onMounted(async () => {
  postData("http://localhost:4000/api/auth/request-otp",{email:"ali.zokaei.1367@gmail.com"})
})
</script>