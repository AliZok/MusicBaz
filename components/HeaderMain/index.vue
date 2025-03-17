<script setup>

</script>
<template>
    <div class="HeaderMain">
        <div class="inner-header">
            <div class="my-brand auto-shadow mb-2">
                <h1 class="font-days home-link-title">
                    DANCE BABY RADIO
                </h1>
                <span class="com"></span>
            </div>
            <div class="">
                <div class="tape-wrapper ">
                    <img class="visual" src="/public/test-pics/radio-playing-2.webp" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.home-link-title {
    font-size: 22px;
}

.tape-wrapper {
    width: 61px;
    height: 38px;
    overflow: hidden;
    border-radius: 0px;

    .visual {
        width: 116%;
        height: 126%;
        transform: translate(-6px, -7px);
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

    animation: mymove 5s;
    animation-iteration-count: infinite;
}

.my-brand {
    font-size: 18px;
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