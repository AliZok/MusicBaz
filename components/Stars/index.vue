<script setup>

const inputValue = ref('');



console.log(
  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
    1524555444,
  ),
);

</script>
<template>
  <div class="opacity-[0.1]">
    <div class="h-[100vh]">
      
    </div>
    <div class="opacity-[0.1]">
      <transition name="fade" enter-active-class="transition-opacity delay-500 duration-500"
        leave-active-class="transition-opacity duration-100" enter-from-class="opacity-0" enter-to-class="opacity-100"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div class="block" elementtiming="ignore-bg">
          <div class="stars" elementtiming="ignore-bg"></div>
          <div class="twinkling" elementtiming="ignore-bg"></div>
        </div>
      </transition>
    </div>
  </div>
</template>


<style scoped>

.stars,
.twinkling {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  /*  opacity: 0.8; */
  background: #000000 url(/images/stars.png) repeat top center;
  z-index: 0;
}

.twinkling {
  background: transparent url(/images/twinkling.png) repeat top center;
  z-index: 1;
  -moz-animation: move-twink-back 200s linear infinite;
  -ms-animation: move-twink-back 200s linear infinite;
  -o-animation: move-twink-back 200s linear infinite;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}



@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@-webkit-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@-moz-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@-ms-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 10000px 0;
  }
}

@-webkit-keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 10000px 0;
  }
}

@-moz-keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 10000px 0;
  }
}

@-ms-keyframes move-clouds-back {
  from {
    background-position: 0;
  }

  to {
    background-position: 10000px 0;
  }
}
</style>
