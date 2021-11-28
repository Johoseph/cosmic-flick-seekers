<template>
  <div data-content="Day 6">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 660 200"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M526 1L616 21C616 21 620 19.58 619 29C618 38.42 614 53 614 53C614 53 524.2 31.18 518 29C518.4 17.02 522 4 522 4C522 4 521.4 0.38 526 1Z"
      />
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M528 38L529 31L535 33L535 39L528 38Z"
      />
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M590 47L599 49L599 56L590 54L590 47Z"
      />
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M524 38C524 38 582.25 52.03 600 56C612.5 58.47 604 69 604 69C604 69 603.25 85.03 601 97C600.25 104.97 594 99 594 99L547 112C547 112 546.75 113.53 547 116C543.25 118.47 537 115 537 115L538 112C538 112 472 89.28 465 88C465 88 460 90.78 458 88C457.25 84.22 461.75 73.28 466 67C463.5 63.72 466 61 466 61L515 38C518.25 36.47 524 38 524 38Z"
      />
      <path
        style="
          fill: none;
          stroke: #ffffff;
          stroke-width: 4.38;
          cursor: crosshair;
        "
        d="M603 77C608.8 77.78 615 79 615 79C615 79 628.2 78.02 628 85C627.8 90.58 616 90 616 90C616 90 615.8 90.22 626 92C647 94.58 652.4 99.62 652 103C651.6 105.98 649 106.02 639 105C628 100.18 601 95 601 95"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Stauber",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 37.3%;
  top: 47.4%;
  left: 3.6%;
}

.bg-img {
  background: url("../../assets/collage/stauber.6.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
