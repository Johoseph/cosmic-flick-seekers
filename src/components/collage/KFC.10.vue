<template>
  <div data-content="Day 10">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 255 365"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M155 200L74 208L68 177L71 175L77 175L77 173L82 170L148 164L143 140L136 136C136 136 85.5 138.53 70 139C54.5 139.47 51 127 51 127C51 127 40.5 73.53 38 56C35.5 38.47 54 36 54 36C54 36 170.25 36.53 193 36C215.75 35.47 218 46 218 46C218 46 227.75 90.78 231 110C234.25 129.22 213 130 213 130L164 133L156 137L162 164L234 159L239 187L230 190L167 198L199 355L185 358L155 200Z"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "KFC",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 14.4%;
  top: 1.4%;
  left: 30.95%;
}

.bg-img {
  background: url("../../assets/collage/KFC.10.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
