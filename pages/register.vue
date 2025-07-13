<template>
  <div class="register relative min-h-[100vh] w-full">
    <div class="back-img" :style="`background-image: url(${'images/background-dance-1.jpg'})`"></div>
    <div class="z-10 absolute h-full w-full">
      <div class="relative h-full w-full">
        <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div class="inputs-login-wrap">
            <Form @submit="createUser" :validation-schema="schema">
              <div class="my-input">
                <div class="farsi">
                  ایمیل
                </div>
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

function createUser(data) {
  alert("fuck this system")
  console.log(data)

  // const firstUser = {
  //   username: "FREEMANZOK",
  //   email: "ali.zokaei.1367@gmail.com",
  //   password: "this is a pass",
  //   mobile: "09124888723",
  // }
  // postData("http://localhost:4000/api/auth/register", firstUser)
}

function getUsers() {

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
  z-index: 0;
}
</style>