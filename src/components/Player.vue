<template>
  <div class="fixed bottom-12 right-20 player">
    <SongList
      :isPlaying="isPlaying"
      :currentSong="currentSong"
      :songArray="songArray"
    />
    <div class="flex">
      <button class="mr-4" @click="handleShuffle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          :style="{
            fill: `${isShuffled ? `#9f69b5` : `#ffffff`}`,
          }"
        >
          <path
            d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"
          />
          <path
            d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"
          />
        </svg>
      </button>
      <button class="mr-4" @click="handlePrevious">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="4 3 18 18"
        >
          <path d="M12 12V7l-7 5 7 5zm7-5-7 5 7 5z" />
        </svg>
      </button>
      <button class="mr-4" v-if="!isPlaying" @click="handlePlay">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="2 3 18 18"
        >
          <path d="M7 6v12l10-6z" />
        </svg>
      </button>
      <button class="mr-4" v-if="isPlaying" @click="handlePause">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="3 3 18 18"
        >
          <path d="M8 7h3v10H8zm5 0h3v10h-3z" />
        </svg>
      </button>
      <button class="mr-4" @click="handleNext">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="2 3 18 18"
        >
          <path d="m19 12-7-5v10zM5 7v10l7-5z" />
        </svg>
      </button>
      <button @click="handleLoop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          :style="{
            fill: `${isLooping ? `#9f69b5` : `#ffffff`}`,
          }"
        >
          <path
            d="M21 6h-5v2h4v9H4V8h5v3l5-4-5-4v3H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SongList from "./SongList.vue";

export default defineComponent({
  name: "Player",
  props: [
    "isPlaying",
    "handlePlay",
    "handlePause",
    "handleNext",
    "handlePrevious",
    "handleLoop",
    "handleShuffle",
    "isLooping",
    "isShuffled",
    "currentSong",
    "songArray",
  ],
  components: {
    SongList,
  },
});
</script>

<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.player {
  animation: fadein 1s linear;
}

button {
  background: #393840eb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  width: 3rem;
  height: 3rem;
  padding: 10px;
  outline: none;
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
