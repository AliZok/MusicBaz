<script setup>
import storeSimple from "@/store/storeSimple"
// import { useGlobalStore } from  "@/store/myPinia";
import playListLive from "@/store/playListLive"

const { getLiveMusic } = useMusicAPI()
const { createFinishTime, getUTCnewFormat, createDateFromTime } = useGlobalFunctions()


// createDateFromTime("00:10:10")

const myMusic = ref(null);
const myMusicSupport = ref(null);
const originAudio = ref(false)
const currentTime = ref(0);
const duration = ref(0);
const coverMusic = ref('')
const randomNumber = ref(0)
const randomNumberSupport = ref(0)
const pureList = ref([])
const genres = ref([])
const isLoading = ref(true)
const notShowing = ref(true)
const letsGoModal = ref(true)
const videoElement = ref(null)


createFinishTime("00:10:10")
getUTCnewFormat()

function pureMyList() {
    pureList.value = []
    genres.value.forEach(genre => {
        if (genre.active) {
            let pureListTemprary = []
            pureListTemprary = storeSimple.value.musicList.filter(item => item.genre.includes(genre.genre))
            pureList.value = [...pureList.value, ...pureListTemprary]

        }
    });
}

watch(() => genres.value, (newStore) => {
    pureMyList()
}, { deep: true })

function getRandomNumber() {
    let lenghtMusics = pureList.value.length
    randomNumber.value = Math.floor(Math.random() * lenghtMusics) + 1;
    coverMusic.value = pureList.value[randomNumber.value]?.cover
}

function getRandomNumberSupport() {
    let lenghtMusics = pureList.value.length
    randomNumberSupport.value = Math.floor(Math.random() * lenghtMusics) + 1;
}


const playAudio = async () => {
    console.log("qqqqqqqqqqqqqqqqqqqqqqqq", myMusicSupport.value)
    // if ('mediaSession' in navigator) {
    //     navigator.mediaSession.metadata = new MediaMetadata({
    //         title: pureList.value[randomNumber.value]?.title,
    //         artist: pureList.value[randomNumber.value]?.artist,
    //         artwork: [
    //             { src: coverMusic.value ? coverMusic.value : 'images/background-dance-1.jpg', sizes: '512x512', type: 'image/jpeg' }
    //         ]
    //     });

    //     navigator.mediaSession.setActionHandler('play', () => {
    //         playBetter()

    //         storeSimple.value.isPlaying = true;
    //         updateMediaSession('playing');
    //     });

    //     navigator.mediaSession.setActionHandler('pause', () => {
    //         myMusic.value.pause();
    //         myMusicSupport.value.pause();
    //         storeSimple.value.isPlaying = false;
    //         updateMediaSession('paused');
    //     });

    //     navigator.mediaSession.setActionHandler('seekbackward', () => {
    //         nextOrRepeat()
    //     });

    //     navigator.mediaSession.setActionHandler('seekforward', () => {
    //         nextOrRepeat()
    //     });
    // }

    try {
        myMusic.value.load()
        myMusicSupport.value.load()
        playBetter()
    } catch (error) {
        nextOrRepeat()
    }

    await videoElement.value.load()
    const playPromise = videoElement.value.play()
};
async function playBetter() {
    if (originAudio.value) {
        console.log("runnig support")

        try {
            seekAudio();

            await Promise.race([
                myMusicSupport.value.play()
                .then(() => {
                    isLoading.value = false;
                    storeSimple.value.isPlaying = true;
                    updateMediaSession('playing');
                })
                .catch(error => {
                    console.error('Playback failed:', error);
                    isLoading.value = false;
                }),
                new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(new Error("Audio loading timed out after 11 seconds"));
                    }, 10000);
                })
            ]);

            // myMusicSupport.value.play()
            //     .then(() => {
            //         isLoading.value = false;
            //         storeSimple.value.isPlaying = true;
            //         updateMediaSession('playing');
            //     })
            //     .catch(error => {
            //         console.error('Playback failed:', error);
            //         isLoading.value = false;
            //     });

        } catch (error) {
            console.error('Error in playBetter:', error);
            isLoading.value = false;
            alert('Playback error occurred. Please try again.');
        }

    } else {
        console.log("running origin")
        try {

            // myMusic.value.load();
            seekAudio();



            await Promise.race([
                myMusic.value.play()
                .then(() => {
                    isLoading.value = false;
                    storeSimple.value.isPlaying = true;
                    updateMediaSession('playing');
                })
                .catch(error => {
                    console.error('Playback failed:', error);
                    isLoading.value = false;
                }),
                new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(new Error("Audio loading timed out after 11 seconds"));
                    }, 10000);
                })
            ]);



            // myMusic.value.play()
            //     .then(() => {
            //         isLoading.value = false;
            //         storeSimple.value.isPlaying = true;
            //         updateMediaSession('playing');
            //     })
            //     .catch(error => {
            //         console.error('Playback failed:', error);
            //         isLoading.value = false;
            //     });

        } catch (error) {
            console.error('Error in playBetter:', error);
            isLoading.value = false;
            alert('Playback error occurred. Please try again.');
        }
    }

}


// async function playBetter() {
//     if (!originAudio.value) {
//         alert("koskesh")
//         try {
//             await Promise.race([
//                 myMusic.value.play(),
//                 new Promise((_, reject) => {
//                     setTimeout(() => {
//                         reject(new Error("Audio loading timed out after 11 seconds"));
//                     }, 11000);
//                 })
//             ]);
//             originAudio.value = true;
//         } catch (error) {
//             console.error("Error playing myMusic:", error);
//             // Handle the error (e.g., show a message to the user)
//         }
//     } else {
//         alert("madar jende")
//         myMusicSupport.value.load();
//         try {
//             await Promise.race([
//                 myMusicSupport.value.play(),
//                 new Promise((_, reject) => {
//                     setTimeout(() => {
//                         reject(new Error("Audio loading timed out after 11 seconds"));
//                     }, 11000);
//                 })
//             ]);
//             originAudio.value = false;
//         } catch (error) {
//             console.error("Error playing myMusicSupport:", error);
//             // Handle the error (e.g., show a message to the user)
//         }
//     }
// }

function updateMediaSession(state) {
    if (state === 'playing') {
        navigator.mediaSession.playbackState = 'playing';
    } else {
        navigator.mediaSession.playbackState = 'paused';
    }
}

const pauseAudio = async () => {
    seekAudio()
    originAudio.value ? await myMusicSupport.value.pause() : await myMusic.value.pause();


    storeSimple.value.isPlaying = false
    updateMediaSession('paused');
    videoElement.value.pause();
};

const playMusic = async () => {
    letsGoModal.value = false
    if (storeSimple.value.isPlaying) {
        pauseAudio();
    } else {
        playAudio();

    }

}

const isEmpty = ref(false)
const isRepeat = ref(false)

const nextOrRepeat = () => {
    if (isRepeat.value) {

        goToStart()
        playAudio();
    } else {
        playNextMusic()
    }
}

const playNextMusic = async () => {
    isLoading.value = true
    isEmpty.value = true
    pauseAudio();

    getRandomNumber()
    originAudio.value = !originAudio.value

    // if (originAudio.value) {
    //     myMusic.value.play()
    //     originAudio.value = false
    // } else {
    //     myMusicSupport.value.play()
    //     originAudio.value = true
    // }


    isEmpty.value = false
    // if (lastNumber != randomNumber.value) {
    //     goToStart()
    //     playAudio();

    // } else {
    //     playNextMusic()

    // }

    goToStart()
    playAudio()
    setupVideo()

}

const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

const updateRange = () => {
    currentTime.value = myMusic.value.currentTime;
};

const updateRangeSupport = () => {
    currentTime.value = myMusicSupport.value.currentTime;
};

const seekAudio = () => {
    myMusic.value.currentTime = currentTime.value;
    myMusicSupport.value.currentTime = currentTime.value;
};

const goToStart = () => {
    duration.value = 0
    myMusic.value.currentTime = 0
    myMusicSupport.value.currentTime = 0
    currentTime.value = 0
}

const activeGenre = (item) => {
    item.active = !item.active
    openGenres.value = false
    openGenres.value = true
    localStorage.removeItem('myGenres')
    localStorage.setItem('myGenres', JSON.stringify(genres.value))
}

const openGenres = ref(false)

const handleKeyPlays = (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
        playMusic()
    }
    else if (event.code === 'ArrowRight') {
        playNextMusic()
    }
};


const setupVideo = async () => {
    if (videoElement.value) {
        // Ensure video is muted for autoplay to work
        videoElement.value.muted = true
        videoElement.value.volume = 0

        // Remove controls if they were set by default
        videoElement.value.controls = false

        // Set to loop if desired
        videoElement.value.loop = true

        // For mobile Safari - prevents fullscreen playback
        videoElement.value.playsinline = true

        // Some browsers require explicit loading
        await videoElement.value.load()

        // Attempt to play
        const playPromise = videoElement.value.play()

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error('Autoplay prevented:', error)

            })
        }
    }
}


onMounted(() => {


    let lastGenres = localStorage.getItem('myGenres')

    if (!!lastGenres) {
        genres.value = JSON.parse(lastGenres)
    } else {
        genres.value = storeSimple.value.genres
    }

    pureMyList()
    getRandomNumber()
    getRandomNumberSupport()

    myMusic.value.addEventListener('loadedmetadata', () => {
        duration.value = myMusic.value.duration;
    });

    setTimeout(() => {
        updateMediaSession('paused');
    }, 200);

    window.addEventListener('keydown', handleKeyPlays);


});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyPlays);
});

watch(() => originAudio.value, (newV) => {

    if (newV) {
        getRandomNumber()
        myMusic.value.load();
    } else {
        getRandomNumberSupport()
        myMusicSupport.value.load();
    }
})

</script>


<template>
    <div class="PlayerMain">

        <div class="main-container">
            <div v-show="pureList[randomNumber]?.genre.includes('electronic') || pureList[randomNumber]?.genre.includes('relax')"
                class="video-wrap">
                <video ref="videoElement" autoplay playsinline loop class="">
                    <source
                        src="https://static.vecteezy.com/system/resources/previews/003/769/185/mp4/interstellar-space-travel-universe-to-the-m31-spiral-galaxy-free-video.mp4"
                        type="video/mp4">
                </video>
            </div>
            <div class="back-img"
                :style="`background-image: url(${!!coverMusic ? coverMusic : 'images/background-dance-1.jpg'})`">
            </div>
            <Stars class="bg-stars" />

            <!-- <div class="back-dark" :class="{ 'no-image': !pureList[randomNumber]?.cover }"></div> -->

            <div class="player-box" @mouseover="notShowing = false" @mouseleave="notShowing = true">
                <div @click="isRepeat = !isRepeat" class="cursor-pointer control-item" :class="{ 'show': !notShowing }">
                    <div class="repeat-icon" :class="{ 'active': isRepeat }">
                        <IconsRepeat />
                    </div>
                </div>

                <div class="box-wrapper curve">
                    <div @click="playMusic()" class="cover-music">
                        <h1 v-if="!coverMusic" class="back-logo dance-baby-text">
                            <div class="font-days cover-text">
                                DANCE BABY RADIO
                            </div>
                        </h1>

                        <img v-if="!coverMusic" class="curve radio-poster"
                            :class="{ 'shine-me': storeSimple.isPlaying }" src="/images/background-dance-1.jpg">

                        <img v-else-if="!isEmpty" class="curve cover" :class="{ 'shine-me  ': storeSimple.isPlaying }"
                            :src="coverMusic">

                        <div v-if="!!pureList[randomNumber] && !isLoading"
                            :class="{ 'opacity-0': storeSimple.isPlaying }" @click.stop="playMusic()"
                            class="play-button-box">
                            <div class="inner">
                                <div class="play-shape">
                                    <div class='button-icon' :class="{ 'paused': storeSimple.isPlaying }"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <svg class="loading-svg" v-if="isLoading" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 200">
                            <circle fill="none" stroke-opacity="1" stroke="#64EEFF" stroke-width=".5" cx="100" cy="100"
                                r="0">
                                <animate attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1"
                                    keySplines="0 .2 .5 1" repeatCount="indefinite"></animate>
                                <animate attributeName="stroke-width" calcMode="spline" dur="2" values="0;25"
                                    keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate>
                                <animate attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0"
                                    keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate>
                            </circle>
                        </svg>
                    </div>
                    <input v-model="currentTime" :max="duration" @input="seekAudio" type="range" class="slider"
                        id="myRange">
                    <div class="d-flex justify-space-between max-h-100 overflow-hidden text-10 fs-9 transit"
                        :class="{ 'max-h-0': notShowing }">
                        <div class="pt-2 pl-1 text-left fs-12 titles">
                            <div>{{ originAudio ? pureList[randomNumberSupport]?.title : pureList[randomNumber]?.title
                                }}</div>
                            <div>{{ originAudio ? pureList[randomNumberSupport]?.artist : pureList[randomNumber]?.artist
                                }}</div>
                        </div>
                        <span class="">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
                    </div>

                    <audio ref="myMusic" class="my-music d-none" @timeupdate="updateRange" @ended="nextOrRepeat()">
                        <source :src="pureList[randomNumber]?.audio" type="audio/mpeg" preload="auto">
                    </audio>
                    <audio ref="myMusicSupport" class="my-music-support d-none" @timeupdate="updateRangeSupport"
                        @ended="nextOrRepeat()">
                        <source :src="pureList[randomNumberSupport]?.audio" type="audio/mpeg" preload="auto">
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


            <div :class="'isMobile'" @click="openGenres = !openGenres" class="px-1 py-1 genre-button-box">
                <div class="inner fs-10">
                    <span class="text-genre">GENRE</span>
                    <div class="position-relative h-0">
                        <div class="genre-list" :class="{ 'close-genres': !openGenres }">
                            <div v-for="(genreEl, index) in genres" :key="index" class="py-2 genre-element">
                                <div class="d-flex fs-13" :class="{ 'opacity-05': !genreEl.active }"
                                    @click="activeGenre(genreEl)">
                                    <div>
                                        {{ genreEl.text }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="'isDesktop'" @mouseover="openGenres = true" @mouseleave="openGenres = false"
                class="px-1 py-1 genre-button-box">
                <div class="inner fs-10">
                    <span class="text-genre">GENRE</span>
                    <div class="position-relative h-0">
                        <div class="genre-list" :class="{ 'close-genres': !openGenres }">
                            <div v-for="(genreEl, index) in genres" :key="index" class="py-2 genre-element">
                                <div class="d-flex fs-13" :class="{ 'opacity-05': !genreEl.active }"
                                    @click="activeGenre(genreEl)">
                                    <div>
                                        {{ genreEl.text }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WelcomeModal @letsGo="playMusic()" v-if="letsGoModal" />
    </div>
</template>


<style lang="scss" scoped>
.PlayerMain {
    height: 100vh;

    .box-wrapper {
        background: #0c0c0ca3;
        box-shadow: 0 0 30px #111a1e;
        display: inline-block;
        max-width: 400px;
        min-width: 300px;
        padding: 18px;
        position: relative;
        text-align: center;
        width: 100%;
        z-index: 10;
        border: solid 1px #003e47;
    }

    .shine-me {
        box-shadow: 0 0 9px 2px #84f3ff29;
    }

    .main-container {
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;

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

        .video-wrap {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 2;
            opacity: 0.5;
            overflow: hidden;

            video {
                width: 100vw;
                height: 100vh;
                object-fit: cover;

            }
        }

        // .video-content {
        //     position: absolute;
        //     top: 50%;
        //     left: 50%;
        //     transform: translate(-50%, -50%);
        //     min-width: 100%;
        //     min-height: 100%;
        //     width: auto;
        //     height: auto;
        //     object-fit: cover;
        //     z-index: -1;
        // }

        .back-dark {
            position: absolute;
            background: rgba(36, 36, 36, 0.89);
            width: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 2;

            &.no-image {
                background: rgb(36 36 36 / 67%);
            }
        }

        .bg-stars {
            opacity: 0.5;
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
            min-height: 300px;
            width: 100%;

            .cover {
                // max-width: 400px;
                // width: 100%;
                width: 300px;
                height: 300px;
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
        background-color: #10191a97;
        border-radius: 50%;
        bottom: 27px;
        cursor: pointer;
        height: 81px;
        opacity: .4;
        position: absolute;
        right: 20px;
        width: 83px;
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
        width: 80px;
        height: 80px;
        background-color: rgba(16, 25, 26, 0.593);
        position: absolute;
        bottom: 27px;
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
        appearance: none;
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

.loading-svg {
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 50%;
    transform: translate(-50%, 85px);
    left: 50%;

}

.cover-text {
    width: 250px;
}

.titles {
    color: #23c1d2;
}

.genre-list {
    position: absolute;
    left: 5px;
    bottom: 25px;
    padding: 10px 13px;
    background: rgba(16, 25, 26, 0.593);
    border-radius: 12px;
    width: 200px;
    transition: 0.2s;

    &.close-genres {
        width: 0;
        height: 0;
        overflow: hidden;
        min-width: 0;
        padding: 0;

    }
}

@media only screen and (max-width: 768px) {
    .player-box {
        // width: 100%;
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

.back-logo {
    position: absolute;
    left: 50%;
    top: 71%;
    transform: translate(-50%, -50%);

}

.max-h-0 {
    max-height: 0 !important;
}

.max-h-100 {
    max-height: 100px;
}

.transit {
    transition: 1s;
}
</style>