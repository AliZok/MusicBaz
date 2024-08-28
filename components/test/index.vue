<script setup>
import { ref } from 'vue'
// const imageSrc = require('@/assets/images/BABAK.jpg');

const fuckProps = defineProps({
    fuckImage: {
        type: String,
    }
})

const isDropped = ref(false)
const dropIt = ()=>{
    isDropped.value = !isDropped.value;
}
</script>
<template>
    <div>
        this is fuckin test
        <NuxtImg :src="fuckImage" />
        <img :src="fuckImage" alt="">
        <button @click="dropIt">Pet Options</button>
        {{ isDropped }}
        <transition name="slide">
            <ul class="list" v-if="isDropped">
                <li>Dog</li>
                <li>Cat</li>
                <li>Bunny</li>
                <li>Parrot</li>
                <li>Fish</li>
            </ul>
        </transition>
    </div>
</template>

<style lang="scss" scoped>

html{ display: grid; height: 100% }
body{
  margin: auto;
  background: linear-gradient(#5e2973, #692424);
}
button{
  padding: 20px 60px;
  border: solid thin darken(#b50064, 10%);
  background: #b50064;
  color: #eee;
  &:focus{
    outline: solid thin lighten(#b50064, 20%);
  }
}
.list{
  position: absolute;
  width: 204px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transform-origin: top;
  transition: transform .4s ease-in-out;
  overflow: hidden;
  li{
    padding: 10px;
    background: white;
    border-bottom: solid thin #eee;
    border-left: solid medium #cbc;
  }
}
.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}

</style>
