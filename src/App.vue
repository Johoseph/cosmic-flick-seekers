<template>
  <Canvas />
  <Player
    :isPlaying="isPlaying"
    :currentSong="songArray[playingIndex].title"
    :handlePlay="handlePlay"
    :handlePause="handlePause"
    :handleNext="handleNext"
    :handlePrevious="handlePrevious"
    :handleLoop="handleLoop"
    :handleShuffle="handleShuffle"
  />
</template>

<script>
import { defineComponent } from "vue";
import { Howl } from "howler";
import Canvas from "./components/Canvas.vue";
import Player from "./components/Player.vue";

import { filterCollageItems } from "./helpers";

const getSong = (song) => {
  const songs = require.context("./assets/songs/", false, /\.mp3$/);
  return songs(`./${song}.mp3`);
};

const songArray = filterCollageItems()
  .sort((first, second) => (first.day < second.day ? -1 : 1))
  .map((item) => ({
    asset: getSong(item.day),
    day: item.day,
    title: item.title,
  }));

export default defineComponent({
  name: "App",
  data: () => ({
    songArray,
    isPlaying: false,
    isLooping: false,
    isShuffled: false,
    playingIndex: 0,
  }),
  provide() {
    return {
      handlePick: this.handlePick,
    };
  },
  components: {
    Canvas,
    Player,
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
        this.howler = undefined;

        if (this.playingIndex === this.songArray.length - 1)
          this.playingIndex = 0;
        else this.playingIndex++;

        this.initialiseHowler();
        if (this.isPlaying) this.howler.play();
      }
    },
    handlePrevious() {
      this.howler?.unload();
      this.howler = undefined;

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
          if (this.playingIndex === first.day) return -1;
          if (this.playingIndex === second.day) return 1;
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
      this.howler = undefined;
      this.handlePlay();
    },
  },
});
</script>
