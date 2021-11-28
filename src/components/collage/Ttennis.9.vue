<template>
  <div data-content="Day 9">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 165 255"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M77 37C68.7 37 62 30.3 62 22C62 13.71 68.7 7 77 7C85.3 7 92 13.71 92 22C92 30.3 85.3 37 77 37Z"
      />
      <path
        fill-rule="evenodd"
        style="fill: #ffffff; cursor: crosshair"
        d="M9 186C9 186 22.33 142.04 76 160C114.33 174.37 108 200 108 200C107 208.37 112.33 218.3 127 223C142.33 228.37 156 232 156 232C156 232 159.33 233.96 157 238C154.33 243.04 152 248 152 248C152 248 151 252.3 145 249C136 241.37 114 233 114 233C114 233 101.67 229.63 91 241C77 253.04 57 255.63 34 241C10.67 226.04 3.67 204.63 9 186ZM77 202C77 190.39 67.61 181 56 181C44.39 181 35 190.39 35 202C35 213.61 44.39 223 56 223C67.61 223 77 213.61 77 202Z"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Ttennis",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 9.3%;
  top: 33.05%;
  left: 68.25%;
}

.bg-img {
  background: url("../../assets/collage/ttennis.9.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
