<template>
  <div data-content="Day 12">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 215 180"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M119 158C119 158 103.33 174.04 71 174C-15.33 175.96 9 115 9 115C9 115 23 77.7 48 60C51.67 43.3 68.33 31.37 78 32C83.33 26.96 103 12 103 12C103 12 175.67 -18.3 203 40C238.33 112.96 149 144 149 144C143 153.96 121.33 161.37 119 158Z"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Wrinkles",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 12.15%;
  top: 1.85%;
  left: 43.2%;
}

.bg-img {
  background: url("../../assets/collage/wrinkles.12.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
