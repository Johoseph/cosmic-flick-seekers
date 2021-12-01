<template>
  <div
    class="w-full mb-4 rounded-3xl text-scroll relative px-2 overflow-hidden outline-none"
    role="button"
    tabindex="0"
    :style="{
      height: `${showAll ? showAllHeight : `3rem`}`,
      transition: `${showAll ? `height 500ms linear` : ``}`,
    }"
  >
    <div v-if="showAll" class="text-lg px-2 pt-2 flex justify-between">
      <span>Song List 💿</span>
      <button
        class="flex justify-center items-center"
        @click="setShowAll(false)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path style="fill: #ffffff" d="m11.998 17 7-8h-14z" />
        </svg>
      </button>
    </div>
    <div v-for="song in songArray" :key="song.day">
      <div
        v-if="currentSong === song.title"
        :class="`${showAll ? `h-7` : `h-12`}`"
        @mouseenter="handleAnimationPause(`paused`)"
        @mouseleave="handleAnimationPause(`running`)"
      >
        <div
          v-for="index in 4"
          :key="index"
          class="absolute whitespace-nowrap absolute left-6"
          :class="`text-scroll-item-${index} ${showAll ? `py-1` : `py-3`}`"
          :style="{
            cursor: `${showAll ? `auto` : `pointer`}`,
            animationPlayState: `${playState}`,
            animationDuration: `${animationLength}`,
          }"
          @click="`${!showAll && setShowAll(true)}`"
        >
          {{ currentSong }} —&nbsp;
        </div>
      </div>
      <div v-else-if="showAll" class="h-7">
        <div
          class="py-1 absolute whitespace-nowrap left-4"
          style="cursor: pointer"
          @click="handlePick(song.day)"
        >
          {{ song.title }}
        </div>
      </div>
    </div>
    <div
      class="absolute left-0 w-8 gradient-left"
      :class="`${showAll ? `top-10` : `top-0`}`"
      :style="{
        height: `${showAll ? showAllHeight : `3rem`}`,
      }"
    />
    <div
      class="absolute right-0 w-8 gradient-right"
      :class="`${showAll ? `top-10` : `top-0`}`"
      :style="{
        height: `${showAll ? showAllHeight : `3rem`}`,
      }"
    />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "SongList",
  props: ["isPlaying", "currentSong", "songArray"],
  inject: ["handlePick"],
  data: () => ({
    playState: "running",
    showAll: false,
  }),
  methods: {
    handleAnimationPause(state) {
      if (!this.isPlaying) this.playState = "paused";
      else this.playState = state;
    },
    setShowAll(value) {
      this.showAll = value;
    },
  },
  watch: {
    isPlaying: function (state) {
      this.playState = state ? "running" : "paused";
    },
  },
  computed: {
    animationLength: function () {
      return `${Math.round((this.currentSong.length / 3) * 1000)}ms`;
    },
    showAllHeight: function () {
      return `${this.songArray.length * 1.75 + 3.25}rem`;
    },
  },
});
</script>

<style scoped>
.text-scroll {
  background: #393840eb;
}

@keyframes marquee-1 {
  from {
    transform: translateX(250%);
  }
  to {
    transform: translateX(50%);
  }
}

@keyframes marquee-2 {
  from {
    transform: translateX(150%);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-3 {
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(-150%);
  }
}

@keyframes marquee-4 {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(-250%);
  }
}

.text-scroll-item-1 {
  animation: marquee-1 linear infinite;
}

.text-scroll-item-2 {
  animation: marquee-2 linear infinite;
}

.text-scroll-item-3 {
  animation: marquee-3 linear infinite;
}

.text-scroll-item-4 {
  animation: marquee-4 linear infinite;
}

.gradient-left {
  background: linear-gradient(to right, #393840 40%, transparent);
}

.gradient-right {
  background: linear-gradient(to left, #393840 40%, transparent);
}
</style>
