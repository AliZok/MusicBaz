<template>
  <div class="login relative min-h-[100vh] w-full">
    <div class="back-img" :style="`background-image: url(${'images/background-dance-1.jpg'})`"></div>

    <!-- <button class="mb-10"
      @click='postData("http://localhost:4000/api/auth/request-otp", { email: "ali.zokaei.1367@gmail.com" })'>insertData</button>
    <div class="mb-10">
      <button @click="createUser()">create one user</button>
    </div>
    <div class="mb-10">
      <button @click="getUsers()">get all users</button>
    </div> -->
    <div class="z-10 absolute h-full w-full">
      <div class="relative h-full w-full">
        <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div class="inputs-login-wrap">
            <Form @submit="submit" :validation-schema="schema">
              <div class="my-input">
                <Field name="email" />
                <ErrorMessage name="email" />
              </div>
              <div class="my-input">
                <Field name="password" type="password" />
                <ErrorMessage name="password" />
              </div>

              <button>Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<script setup>
import { useAPI } from "@/composables/useAPI"
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
  layout: "simple"
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

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

function createUser() {
  alert("fuck this system")
  const firstUser = {
    username: "FREEMANZOK",
    email: "ali.zokaei.1367@gmail.com",
    password: "this is a pass",
    mobile: "09124888723",
  }
  postData("https://backend-dance-baby-radio.onrender.com/api/auth/register", firstUser)
}

function getUsers() {

  getData("https://backend-dance-baby-radio.onrender.com/api/users")
}

onMounted(async () => {
  getUsers()
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
  z-index: 0;
}
</style>