<script setup>
import { ref, computed } from 'vue';
// const imageSrc = require('@/assets/images/BABAK.jpg');

const fuckProps = defineProps({
  fuckImage: {
    type: String,
  }
})

const inputValue = ref('');

const onInputChange = (event) => {
  const rawValue = event.target.value;
  const digitsOnly = rawValue.replace(/\D/g, '');
  // const formattedValue = formatNumber(digitsOnly);
  const formattedValue = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
    digitsOnly,
  );
  inputValue.value = formattedValue;
};

const formatNumber = (value) => {
  return Number(value).toLocaleString('en-US');
};



console.log(
  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
    1524555444,
  ),
);

</script>
<template>
  <div>
    this is fuckin test
    <NuxtImg :src="fuckImage" />
    <img :src="fuckImage" alt="">
    <div>
      <input type="tel" v-model="inputValue" @input="onInputChange" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
