<script setup>
import storeSimple from "@/store/storeSimple"
import DarkBackground from "@/components/DarkBackground"
</script>
<template>
    <div class="PlayerMain">
        <div class="main-container">
            <div class="back-img"></div>
            <div class="back-dark"></div>
            <div class="player-box">
                <div class="box-wrapper curve bg-dark">
                    <div class="cover-music">
                        <img class="curve "
                            src="https://vmusic.ir/wp-content/uploads/2023/05/Oneheart-searching-for-you-2023.jpg"
                            alt="">
                        <div class="play-button-box">
                            <div class="inner">
                                <div class="play-shape">
                                    <div class="triangle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="range" min="1" max="100" value="0" class="slider" id="myRange">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.PlayerMain {
    height: 100vh;

    .box-wrapper {
        width: 100%;
        text-align: center;
        max-width: 400px;
        padding: 10px;
        box-shadow: 0 0 30px #111a1e;
        display: inline-block;
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
            background-image: url("https://vmusic.ir/wp-content/uploads/2023/05/Oneheart-searching-for-you-2023.jpg");
            filter: blur(5px);

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
                width: 50px;
                height: 50px;
                background-color: rgba(74, 74, 74, 0.597);
                position: absolute;
                bottom: 7px;
                left: 5px;
                border-radius: 50%;
                opacity: 0.4;
                cursor: pointer;
                &:hover{
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

@media only screen and (max-width: 768px) {
    .player-box {
        width: 100%;
    }

    .cover-music {
        width: 100%;
    }
}
</style>
