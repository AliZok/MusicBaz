<template>
  <div class="relative">
     <button class="mb-10" @click='postData("http://localhost:4000/api/auth/request-otp",{email:"ali.zokaei.1367@gmail.com"})'>insertData</button>
    <div class="mb-10">
      <button @click="createUser()">create one user</button>
    </div>
    <div class="mb-10">
      <button @click="getUsers()">get all users</button>
    </div>
    <div class="back-img"
                :style="`background-image: url(${'images/background-dance-1.jpg'})`">
  </div>
  </div>
 
  
</template>

<script setup>
import { useAPI } from "@/composables/useAPI"

definePageMeta({
  layout: "SimpleLayout"
})

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

<style scoped>
 .back-img {
            position: absolute;
            background-position: center;
            background-size: cover;
            width: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            filter: blur(5px);
            z-index: 0;
        }
</style>