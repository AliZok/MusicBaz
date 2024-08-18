<script setup>
import storeSimple from "@/store/storeSimple"
import DarkBackground from "@/components/DarkBackground"
import { ref, onMounted, watch } from 'vue';

const myMusic = ref(null);
const currentTime = ref(0);
const duration = ref(0);
const isPlaying = ref(false);
const randomNumber = ref(0)
const pureList = ref([])
const genres = ref([])
const isLoading = ref(true)



function pureMyList() {
    pureList.value = []
    genres.value.forEach(genre => {
        if (genre.active) {
            let pureListTemprary = []
            pureListTemprary = storeSimple.musicList.filter(item => item.genre.includes(genre.genre))
            pureList.value= [...pureList.value,...pureListTemprary]
        }
    });
}

watch(() => genres.value, (newStore) => {
    pureMyList()
}, { deep: true })


function getRandomNumber() {
    randomNumber.value = Math.floor(Math.random() * pureList.value.length);
}



const playAudio = async () => {
    await myMusic.value.load();
    isLoading.value = false
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
};

const playMusic = async () => {

    if (isPlaying.value) {
        pauseAudio();
    } else {
        await playAudio();
    }

}

const playNextMusic = async () => {
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
    localStorage.setItem('myGenres', JSON.stringify(genres.value))
}

const openGenres = ref(false)

onMounted(() => {
    let lastGenres = localStorage.getItem('myGenres')
    if(!!lastGenres){
        genres.value = JSON.parse(lastGenres)
    }else{
        genres.value = storeSimple.genres
    }

    pureMyList()
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
            <div class="back-img" :style="`background-image: url(${pureList[randomNumber]?.cover})`"></div>
            <div class="back-dark"></div>
            <div class="player-box">
                <div class="box-wrapper curve">
                    <div @click="playMusic()" class="cover-music ">
                        <img class="curve " :class="{ 'shine-me': isPlaying }"
                            :src="pureList[randomNumber]?.cover" alt="">
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
                    <div class="d-flex justify-space-between text-10 fs-9">
                        <div class="text-left pl-1 pt-2 fs-12 titles">
                            <div>{{ pureList[randomNumber]?.title }}</div>
                            <div>{{ pureList[randomNumber]?.artist }}</div>
                        </div>
                        <span class="">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
                    </div>
                    <audio ref="myMusic" class="my-music d-none" @timeupdate="updateRange" @ended="playNextMusic()">
                        <source :src="pureList[randomNumber]?.audio" type="audio/mpeg">
                    </audio>

                </div>
            </div>

            <div @click.stop="playNextMusic()" class="next-button-box">
                <div class="inner">
                    <div class="play-shape">
                        <div class='button-icon smaller'></div>
                    </div>
                    <div class="play-shape">
                        <div class='button-icon smaller'></div>
                    </div>
                </div>
            </div>


            <div @mouseover="openGenres = true" @mouseleave="openGenres = false" class="genre-button-box px-1 py-1">
                <div class="inner fs-10">
                    <span class="text-genre">GENRE</span>
                    <div class="position-relative h-0">
                        <div class="genre-list" @mouseover="openGenres = true" @mouseleave="openGenres = false"
                            :class="{ 'd-none': !openGenres }">
                            <div v-for="(genreEl, index) in genres" :key="index" class="genre-element py-2">
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
        width: 400px;
        min-height: 460px;
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
            padding: 16px 32px;
            box-sizing: border-box;
            text-align: center;
        }

        .cover-music {
            position: relative;
            display: inline-block;
            min-height: 400px;
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
        // background: #52dcff;
        background: #58d1ef;
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

.titles{
    color: #23c1d2;
}
.genre-list {
    position: absolute;
    left: 0px;
    bottom: 10px;
    padding: 10px 13px;
    background: rgba(16, 25, 26, 0.593);
    border-radius: 12px;
    min-width: 200px;
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
    border-width: 19px 0 19px 28px;
    margin-left: 6px;

    &.paused {
        border-style: double;
        border-width: 0px 0 0px 12px;
        margin-left: 0px;

    }

    &:hover {
        opacity: 1;
    }

    &.smaller {
        border-width: 8px 0 8px 12px;
        margin-left: 3px;
    }
}
</style>
