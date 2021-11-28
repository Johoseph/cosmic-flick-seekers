<template>
  <div data-content="Day 8">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 550 390"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M185 383C117.5 333.95 16 238.05 12 167C8 95.95 107 66.05 210 54C239 51.63 314 36 314 36C314 36 337.75 29.28 337 25C335.25 23.47 325.25 24.03 317 27C294.75 7.22 262 16 262 16L256 15C256 15 259 8.55 263 3C263 3 377.5 10.55 377 29C377 29 378.5 44.05 281 62C281 62 140 85.11 137 130C150 198.89 389 319.11 543 383C543 383 296 383 185 383Z"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Highway",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 31%;
  top: 65.7%;
  left: 22.45%;
}

.bg-img {
  background: url("../../assets/collage/highway.8.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
