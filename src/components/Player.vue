<template>
  <div class="fixed bottom-12 right-20 rounded-full">
    <button class="mr-4" @click="handleShuffle">Sh</button>
    <button class="mr-4" @click="handlePrevious">Rw</button>
    <button class="mr-4" v-if="!isPlaying" @click="handlePlay">Pl</button>
    <button class="mr-4" v-if="isPlaying" @click="handlePause">Ps</button>
    <button class="mr-4" @click="handleNext">Fwr</button>
    <button @click="handleLoop">Rp</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

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
  ],
});
</script>
