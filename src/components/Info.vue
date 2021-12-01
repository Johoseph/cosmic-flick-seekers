<template>
  <div class="fixed bottom-12 left-20">
    <div
      class="info-text bg info-box w-64 rounded-3xl mb-4 relative p-4 overflow-hidden"
      :class="`${showHelp ? `info-text-in` : `info-text-out`}`"
    >
      <h1 class="pb-3 text-lg">Welcome to your 2021 Advent Calendar 🎉</h1>
      <p class="pb-2">
        Each day a new image will be added to the collage. Hovering over each
        image will change your cursor to a
        <span class="crosshair">crosshair</span>.
      </p>
      <p class="pb-2">
        Clicking an image once the crosshair is showing will play a song
        specially selected for you! Keep your eyes out for correlation between
        the songs and image 👀.
      </p>
      <p class="pb-2">Have fun enjoying the collage and music! Love Jo.</p>
      <p>🚀 Cosmic Flick Seeking Forever 🚀</p>
    </div>
    <div class="flex h-12">
      <div class="bg p-3 overflow-hidden whitespace-nowrap rounded-full mr-4">
        Advent 2021 🎄⛄🎅
      </div>
      <button
        class="bg w-12 rounded-full p-2 flex justify-center items-center outline-none"
        @click="toggleHelp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          :style="{
            fill: `${showHelp ? `#9f69b5` : `#ffffff`}`,
          }"
        >
          <path
            d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Info",
  data: () => ({
    showHelp: false,
  }),
  methods: {
    toggleHelp() {
      this.showHelp = !this.showHelp;
    },
  },
});
</script>

<style scoped>
.info-text {
  min-width: fit-content;
  transition: top 500ms linear, height 500ms linear, opacity 500ms linear;
}

.info-text-in {
  opacity: 1;
  height: 36rem;
}

.info-text-out {
  opacity: 0;
  height: 3rem;
}

.bg {
  background: #393840eb;
}

.crosshair {
  color: #9f69b5;
  cursor: crosshair;
}

svg {
  fill: #ffffff;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: transform 200ms;
}

button:hover > svg,
button:focus-visible > svg {
  transform: scale(1.2);
}
</style>
