<script setup>
import storeSimple from "@/store/storeSimple"
import DarkBackground from "@/components/DarkBackground"
import { ref, onMounted } from 'vue';

const randomNumber = ref(0)

function getRandomNumber() {
    randomNumber.value = Math.floor(Math.random() * storeSimple.musicList.length);
}

const myMusic = ref(null);
const currentTime = ref(0);
const duration = ref(0);
const isPlaying = ref(false);


const playAudio = async () => {
    await myMusic.value.load();
    try {
        seekAudio()
        await myMusic.value.play();
        isPlaying.value = true
    } catch (error) {
        console.error("Error playing audio:", error);
    }
};

const pauseAudio = async () => {
    seekAudio()
    await myMusic.value.pause();
    isPlaying.value = false
    if(duration.value==currentTime.value){
        playNextMusic()
    }
};

const playMusic = async () => {

    if (isPlaying.value) {
        pauseAudio();
    } else {
        await playAudio();
    }

}

const playNextMusic = async () => {
    alert("fuck")
    pauseAudio();
    let lastNumber = randomNumber.value
    getRandomNumber()
    if (lastNumber != randomNumber.value) {

        pauseAudio();
        goToStart()
        await playAudio();
    } else {
        playNextMusic()
    }
}

const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

const updateRange = () => {
    currentTime.value = myMusic.value.currentTime;
};

const seekAudio = () => {
    myMusic.value.currentTime = currentTime.value;
};

const goToStart = () => {
    duration.value = 0
    myMusic.value.currentTime = 0
    currentTime.value = 0
}
const activeGenre = (item) => {
    item.active = !item.active
    openGenres.value = false
    openGenres.value = true
}
const openGenres = ref(false)

onMounted(() => {
    myMusic.value.load();
    myMusic.value.addEventListener('loadedmetadata', () => {
        duration.value = myMusic.value.duration;
    });



    setTimeout(() => {
        getRandomNumber()
    }, 200);

});

</script>
<template>
    <div class="PlayerMain">
        <div class="main-container">
            <div class="back-img" :style="`background-image: url(${storeSimple.musicList[randomNumber]?.cover})`"></div>
            <div class="back-dark"></div>
            <div class="player-box">
                <div class="box-wrapper curve">
                    <div @click="playMusic()" class="cover-music ">
                        <img class="curve " :class="{ 'shine-me': isPlaying }"
                            :src="storeSimple.musicList[randomNumber]?.cover" alt="">
                        <div :class="{ 'opacity-0': isPlaying }" @click.stop="playMusic()" class="play-button-box">
                            <div class="inner">
                                <div class="play-shape">
                                    <!-- <div class="triangle"></div> -->
                                    <div class='button-icon' :class="{ 'paused': isPlaying }"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <input v-model="currentTime" :max="duration" @input="seekAudio" type="range" class="slider"
                        id="myRange">
                    <div class="text-right text-10 fs-9">
                        <span class="">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
                    </div>
                    <audio ref="myMusic" class="my-music d-none" @timeupdate="updateRange"  @ended="playNextMusic()" >
                        <source :src="storeSimple.musicList[randomNumber]?.audio" type="audio/mpeg">
                    </audio>

                </div>
            </div>

            <div @click.stop="playNextMusic()" class="next-button-box">
                <div class="inner">
                    <div class="play-shape">
                        <div class='button-icon'></div>
                    </div>
                    <div class="play-shape">
                        <div class='button-icon'></div>
                    </div>
                </div>
            </div>


            <div @mouseover="openGenres = true" @mouseleave="openGenres = false" class="genre-button-box px-1 py-1">
                <div class="inner fs-10">
                    <span class="text-genre">GENRE</span>
                    <div class="position-relative h-0">
                        <div class="genre-list" @mouseover="openGenres = true" @mouseleave="openGenres = false"
                            :class="{ 'd-none': !openGenres }">
                            <div v-for="(genreEl, index) in storeSimple.genres" :key="index" class="genre-element pb-2">
                                <div class="d-flex fs-13" :class="{ 'opacity-05': !genreEl.active }"
                                    @click="activeGenre(genreEl)">
                                    <div>
                                        {{ genreEl.genre }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.PlayerMain {
    height: 100vh;

    .box-wrapper {
        width: 100%;
        text-align: center;
        max-width: 400px;
        padding: 10px;
        box-shadow: 0 0 30px #111a1e;
        display: inline-block;
        background: rgb(218 239 255 / 15%);
    }

    .shine-me {
        box-shadow: 0 0 9px 2px #84f3ff29;
    }

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
            filter: blur(5px);
            z-index: 0;
        }

        .back-dark {
            position: absolute;
            background: rgba(36, 36, 36, 0.89);
            width: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 2;
        }

        .player-box {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 5;
            padding: 16px;
            box-sizing: border-box;
            text-align: center;
        }

        .cover-music {
            position: relative;
            display: inline-block;

            width: 100%;

            img {
                // max-width: 400px;
                width: 100%;
            }

            .play-button-box {
                width: 200px;
                height: 200px;
                background-color: rgba(16, 25, 26, 0.593);
                position: absolute;
                bottom: 50%;
                transform: translate(-50%, 50%);
                left: 50%;
                border-radius: 50%;
                opacity: 0.4;
                cursor: pointer;

                &:hover {
                    opacity: 1;
                }

                .inner {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                }

                .triangle {
                    width: 0px;
                    height: 0px;
                    margin-left: 5px;
                    border-style: solid;
                    border-width: 0 10px 15px 10px;
                    border-color: transparent transparent #7fc1d5 transparent;
                    transform: rotate(90deg);
                }

            }


        }
    }

    .next-button-box {
        width: 50px;
        height: 50px;
        background-color: rgba(16, 25, 26, 0.593);
        position: absolute;
        bottom: 20px;
        right: 20px;
        border-radius: 50%;
        opacity: 0.4;
        cursor: pointer;
        z-index: 20;

        &:hover {
            opacity: 1;
        }

        .inner {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

        }

        .triangle {
            width: 0px;
            height: 0px;
            margin-left: 5px;
            border-style: solid;
            border-width: 0 10px 15px 10px;
            border-color: transparent transparent #7fc1d5 transparent;
            transform: rotate(90deg);
        }

    }

    .genre-button-box {
        width: 50px;
        height: 50px;
        background-color: rgba(16, 25, 26, 0.593);
        position: absolute;
        bottom: 20px;
        left: 20px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 20;

        .text-genre {
            opacity: 0.4;
        }

        &:hover {
            .text-genre {
                opacity: 1;
            }
        }

        .inner {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

        }

    }


    .slidecontainer {
        width: 100%;
    }

    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: #52dcff;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider:hover {
        opacity: 1;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #4e4e4e;
        cursor: pointer;
    }

    // .slider::-webkit-slider-thumb {
    //     -webkit-appearance: none;
    //     appearance: none;
    //     width: 25px;
    //     height: 25px;
    //     border-radius: 50%;
    //     background: #4e4e4e;
    //     cursor: pointer;
    // }

}

.genre-list {
    position: absolute;
    left: 0px;
    bottom: 10px;
    padding: 10px 13px;
    background: #1d1d1dad;
    border-radius: 12px;
}

@media only screen and (max-width: 768px) {
    .player-box {
        width: 100%;
    }

    .cover-music {
        width: 100%;
    }
}



.button-icon {
    box-sizing: border-box;
    width: 0;
    height: 15px;

    border-color: transparent transparent transparent #52dcff;
    transition: 100ms all ease;
    cursor: pointer;
    opacity: 0.7;
    // play state
    border-style: solid;
    border-width: 8px 0 8px 12px;
    margin-left: 3px;

    &.paused {
        border-style: double;
        border-width: 0px 0 0px 12px;
        margin-left: 0px;

    }

    &:hover {
        opacity: 1;
    }
}
</style>
