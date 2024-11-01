<template>
    <div class="range-slider">
        <div ref="slider_thumb_ref" class="range-slider_thumb">{{ myValue }}</div>
        <div class="range-slider_line">
            <div ref="slider_line_ref" class="range-slider_line-fill"></div>
        </div>
        <input ref="slider_input_ref" v-model="myValue" id="slider_input" class="range-slider_input" type="range"
            min="0" max="100">
    </div>
</template>

<script setup>
const slider_input_ref = ref(null)
const slider_thumb_ref = ref(null)
const slider_line_ref = ref(null)
const myValue = ref(0)

onMounted(() => {

    function showSliderValue() {
        const bulletPosition = (myValue.value / slider_input_ref.value.max),
            space = slider_input_ref.value.offsetWidth - slider_thumb_ref.value.offsetWidth;

        slider_thumb_ref.value.style.left = (bulletPosition * space) + 'px';
        slider_line_ref.value.style.width = myValue.value + '%';
    }

    showSliderValue();
    window.addEventListener("resize", showSliderValue);
    slider_input_ref.value.addEventListener('input', showSliderValue, false);
})

</script>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    background-color: #f4f4f4;
    font-family: "Roboto", sans-serif;
}

.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.range-slider {
    position: relative;
    width: 80vmin;
    height: 20vmin;
}

.range-slider_input {
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: 3;
    transform: translateY(-50%);
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    opacity: 0;
    margin: 0;
}

.range-slider_input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 50%;
    opacity: 0;
}

.range-slider_input::-moz-range-thumb {
    width: 14vmin;
    height: 14vmin;
    cursor: pointer;
    border-radius: 50%;
    opacity: 0;
}

.range-slider_thumb {
    width: 30px;
    height: 25px;
    border: 0.6vmin solid #303030;
    /* border-radius: 50%; */
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    color: #303030;
    z-index: 2;
}

.range-slider_line {
    height: 20px;
    width: 100%;
    background-color: #e1e1e1;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    position: absolute;
    z-index: 1;
}

.range-slider_line-fill {
    position: absolute;
    height: 20px;
    width: 0;
    background-color: #303030;
}
</style>