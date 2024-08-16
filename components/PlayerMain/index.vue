<script setup>
import storeSimple from "@/store/storeSimple"
import DarkBackground from "@/components/DarkBackground"
</script>
<template>
    <div class="PlayerMain">
        <div class="main-container">
            <div class="back-img">

            </div>
        </div>
    </div>
</template>
<style lang="scss">
.PlayerMain{
    height: 100vh;
    .main-container {
        height: 100%;
        width: 100%;
    position: relative;

    .back-img {
        position: absolute;
        background-position: center;
        background-size: cover;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("https://vmusic.ir/wp-content/uploads/2023/05/Oneheart-searching-for-you-2023.jpg")
    }
}
}

</style>
