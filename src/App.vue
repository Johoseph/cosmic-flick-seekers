<template>
  <Loader v-if="isLoading" />
  <Canvas />
  <Info />
  <Player
    v-if="!!howler"
    :isPlaying="isPlaying"
    :currentSong="songArray[playingIndex].title"
    :handlePlay="handlePlay"
    :handlePause="handlePause"
    :handleNext="handleNext"
    :handlePrevious="handlePrevious"
    :handleLoop="handleLoop"
    :handleShuffle="handleShuffle"
    :isLooping="isLooping"
    :isShuffled="isShuffled"
    :songArray="songArray"
  />
</template>

<script>
import { defineComponent } from "vue";
import { Howl } from "howler";
import Canvas from "./components/Canvas.vue";
import Player from "./components/Player.vue";
import Loader from "./components/Loader.vue";
import Info from "./components/Info.vue";

import { filterCollageItems } from "./helpers";

const getSong = (song) => {
  const songs = require.context("./assets/songs/", false, /\.mp3$/);
  return songs(`./${song}.mp3`);
};

const songArray = filterCollageItems()
  .sort((first, second) => (first.day < second.day ? -1 : 1))
  .map((item) => ({
    asset: getSong(
      process.env.VUE_APP_EXAMPLE_SONGS != 1
        ? item.day
        : `${item.day % 2 === 1 ? "example1" : "example2"}`
    ),
    day: item.day,
    title: item.title,
  }));

export default defineComponent({
  name: "App",
  data: () => ({
    isLoading: process.env.VUE_APP_DISABLE_LOADING != 1,
    howler: null,
    songArray,
    isPlaying: false,
    isLooping: false,
    isShuffled: false,
    playingIndex: 0,
  }),
  provide() {
    return {
      handlePick: this.handlePick,
      howler: () => this.howler,
    };
  },
  components: {
    Canvas,
    Player,
    Loader,
    Info,
  },
  methods: {
    initialiseHowler() {
      if (!this.howler) {
        this.howler = new Howl({
          src: [this.songArray[this.playingIndex].asset],
          html5: true,
          format: ["mp3"],
          loop: this.isLooping,
          onend: () => this.handleNext("onend"),
        });
      }
    },
    handlePlay() {
      this.initialiseHowler();
      this.isPlaying = true;
      this.howler.play();
    },
    handlePause() {
      this.isPlaying = false;
      this.howler.pause();
    },
    handleNext(trigger) {
      if (trigger !== "onend" || (trigger === "onend" && !this.isLooping)) {
        this.howler?.unload();
        this.howler = null;

        if (this.playingIndex === this.songArray.length - 1)
          this.playingIndex = 0;
        else this.playingIndex++;

        this.initialiseHowler();
        if (this.isPlaying) this.howler.play();
      }
    },
    handlePrevious() {
      this.howler?.unload();
      this.howler = null;

      if (this.playingIndex === 0)
        this.playingIndex = this.songArray.length - 1;
      else this.playingIndex--;

      this.initialiseHowler();
      if (this.isPlaying) this.howler.play();
    },
    handleLoop() {
      this.isLooping = !this.isLooping;
      this.howler.loop(this.isLooping);
    },
    handleShuffle() {
      const newPlayingIndex = this.isShuffled
        ? this.songArray[this.playingIndex].day - 1
        : 0;

      this.songArray = this.songArray.sort((first, second) => {
        if (this.isShuffled) {
          return first.day < second.day ? -1 : 1;
        } else {
          if (first.day === second.day) return 0;
          if (this.playingIndex === first.day - 1) return -1;
          if (this.playingIndex === second.day - 1) return 1;
          return Math.random() > 0.5 ? -1 : 1;
        }
      });

      this.playingIndex = newPlayingIndex;
      this.isShuffled = !this.isShuffled;
    },
    handlePick(day) {
      if (!this.isShuffled) {
        this.playingIndex = day - 1;
      } else {
        this.songArray = this.songArray.sort((first, second) => {
          if (first.day === second.day) return 0;
          if (day === first.day) return -1;
          if (day === second.day) return 1;
          return Math.random() > 0.5 ? -1 : 1;
        });

        this.playingIndex = 0;
      }

      this.howler?.unload();
      this.howler = null;
      this.handlePlay();
    },
  },
  beforeMount() {
    this.timeout = setTimeout(() => (this.isLoading = false), 3500);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
});
</script>
