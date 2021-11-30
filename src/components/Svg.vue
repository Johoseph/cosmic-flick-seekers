<template>
  <svg
    version="1.2"
    baseProfile="tiny-ps"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 1080"
    class="absolute scale"
  >
    <g
      v-for="item in config"
      v-html="item.path"
      :key="item.day"
      :style="{
        transform: `translate(${item.left}, ${item.top}) scale(109%)`,
      }"
      :class="`${checkIfToday(item.day) && !howler() ? `current` : ``}`"
      @mousemove="handleMouseMove($event, item.day)"
      @mouseleave="handleMouseLeave()"
      @click="handlePick(item.day)"
    />
  </svg>
  <Tooltip
    v-if="day !== undefined"
    :day="day"
    :position="position"
    :size="tltpSize"
  />
</template>

<script>
import { defineComponent } from "vue";
import { filterCollageItems, checkCurrentDay } from "./../helpers";
import Tooltip from "./Tooltip.vue";

const tltpSize = 48;
const tltpOffset = 10;

export default defineComponent({
  name: "Svg",
  inject: ["handlePick", "howler"],
  data: () => ({
    config: filterCollageItems(),
    day: undefined,
    position: {
      top: 0,
      left: 0,
    },
    tltpSize,
  }),
  components: {
    Tooltip,
  },
  methods: {
    handleMouseMove(e, day) {
      const left =
        document.body.clientWidth / 2 > e.clientX
          ? e.clientX + tltpOffset
          : e.clientX - (this.tltpSize + tltpOffset);

      const top =
        document.body.clientHeight / 2 > e.clientY
          ? e.clientY + tltpOffset
          : e.clientY - (this.tltpSize + tltpOffset);

      this.day = day;
      this.position = {
        top: `${top}px`,
        left: `${left}px`,
      };
    },
    handleMouseLeave() {
      this.day = undefined;
    },
    checkIfToday(day) {
      return checkCurrentDay(day);
    },
  },
});
</script>

<style scoped>
svg g {
  cursor: crosshair;
}
</style>

<style>
@keyframes glow {
  from {
    fill: #ffffff00;
  }
  to {
    fill: #ffffff4d;
  }
}

.current path {
  animation: glow 1s linear alternate infinite;
}
</style>
