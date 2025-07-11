<template>
  <div class="mb-10">
    hello world
  </div>
  <button class="mb-10" @click='postData("http://localhost:4000/api/auth/request-otp",{email:"ali.zokaei.1367@gmail.com"})'>insertData</button>
  <div class="mb-10">
    <button @click="createUser()">create one user</button>
  </div>
    <div class="mb-10">
    <button @click="getUsers()">get all users</button>
  </div>
  
  
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

function createUser(){
  alert("fuck this system")
  const firstUser = {
    username:"FREEMANZOK",
    email:"ali.zokaei.1367@gmail.com",
    password:"this is a pass",
    mobile:"09124888723",
  }
  postData("http://localhost:4000/api/auth/register",firstUser)
}

function getUsers(){

  getData("http://localhost:4000/api/users")
}

onMounted(async () => {
  
})
</script>