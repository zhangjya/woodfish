<script setup lang="ts" name="home">
import { onMounted, ref } from 'vue';
import { useLocalStorage, useThrottleFn } from '@vueuse/core';

const count = useLocalStorage('count', 0);
const isPlaying = ref(false);
const audioRef = ref<HTMLAudioElement>();

onMounted(() => {
  // 监听 audioRef 的停止播放事件
  if (audioRef.value) {
    audioRef.value.onended = () => {
      isPlaying.value = false;
    };
  }
});

const onClick = useThrottleFn(() => {
  if (audioRef.value) {
    // 播放中则关停重播
    if (isPlaying.value) {
      audioRef.value.pause();
      audioRef.value.load();
    }
    audioRef.value.play();
    count.value = (count.value || 0) + 1;
    isPlaying.value = true;
  }
}, 300);

const onReset = () => {
  count.value = 0;
}

</script>

<template>
  <div class="home">
    <div class="bg"></div>
    <header>
      <h3 class="center">
        敲木鱼攒功德
      </h3>
    </header>

    <main>
      <div class="count-box center">
        您的功德：<span class="count">{{ count }}</span>
      </div>
      <div class="center">
        <div @click="onClick" class="muyu-img">
          <img :src="$assets('images/muyu.webp')" alt="" srcset="" />
        </div>
      </div>
      <div class="reset center" @click="onReset">重新开始</div>
    </main>

    <audio class="audio" ref="audioRef" :src="$assets('audio/muyu1.mp3')" :loop="false"></audio>
  </div>
</template>

<style lang="scss" scoped>
.home {
  min-height: 500px;
  height: 100vh;
  overflow: hidden auto;
  position: relative;

  .bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('/@/assets/images/bg1.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(4px);
  }

  .muyu-img {
    margin: 1vh auto 0;
    width: 320px;
    height: 320px;
    transition: all 0.05s ease-out;
    transform-origin: bottom;

    &:active {
      transform: scale(0.98);
    }
  }

  .center {
    text-align: center;
  }

  .count-box {
    margin-top: 35vh;
    font-size: 36px;

    .count {
      font-weight: bold;
      color: #25202c;
    }
  }

  .reset {
    margin-top: 10vh;
    color: #777777;
    text-decoration: underline;
  }

  .audio {
    display: none;
  }
}
</style>
