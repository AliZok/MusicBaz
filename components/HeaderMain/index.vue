<script setup>

</script>
<template>
    <div class="HeaderMain">
        <div class="inner-header">
            <div class="my-brand auto-shadow">

                <!-- <div class="font-days">DANCE<small>-</small>BABY<small>-</small>RADIO
                    <small>.com</small>
                </div> -->
                <div  class="font-days">
                    DANCE BABY RADIO
                </div>
                <span class="com"></span>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
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