<script setup>
import storeSimple from "@/store/storeSimple"

const isPlaying = computed(() => storeSimple.value.isPlaying)

</script>
<template>
    <div class="HeaderMain">
        <div class="inner-header">
            <div class="auto-shadow my-brand mb-2 flex hello">
                <h1 class="font-days home-link-title">
                    <NuxtLink to="/">DANCE BABY RADIO</NuxtLink>
                </h1>

                <div v-if="isPlaying" class="tape-wrapper">
                    <img class="visual" src="/public/test-pics/radio-playing-2.webp" alt="">
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss">
.home-link-title {
    font-size: 27px;
    display: inline-block;
    margin-right: 17px;

    @media only screen and (max-width: 768px) {
        // font-size: 19px;

    }
}

.tape-wrapper {
    display: inline-block;
    width: 44px;
    height: 25px;
    overflow: hidden;
    border-radius: 0px;
    opacity: 0.6;
    border-radius: 4px;

    .visual {
        width: 117%;
        height: 126%;
        transform: translate(-5px, -7px);

    }
}

.HeaderMain {
    position: absolute;
    z-index: 100;
    padding-top: 10px;
    padding-left: 10px;
}

.com {
    font-size: 10px;
}

.auto-shadow {

    // animation: mymove 5s;
    // animation-iteration-count: infinite;
}

.my-brand {
    font-size: 18px;

    a {
        text-decoration: none;
        color: #7edee3;
        color: #94d4e3;
    }
}


@keyframes mymove {
    0% {
        text-shadow: 5px 1px 8px #ccfbf700;
    }

    50% {
        text-shadow: 5px 1px 10px #ccfbf7a8;
    }

    100% {
        text-shadow: 5px 1px 8px #ccfbf700;
    }
}
</style>