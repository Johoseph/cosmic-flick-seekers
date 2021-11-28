<template>
  <div data-content="Day 2">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 655 370"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M79 176C79 176 91.67 172.63 119 174C128.67 166.37 138 165.63 144 167C181.33 147.7 198 186.3 180 207C200 230.04 200.33 269.3 197 287C204.67 302.7 190 320 190 320L171 348L161 341C161 341 112.33 376.3 59 346C5.67 315.7 12 256.63 14 247C-3.67 231.04 7 198.63 37 202C52.67 185 79 176 79 176Z"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Emoji",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 37%;
  top: 51.5%;
  left: 36.1%;
}

.bg-img {
  background: url("../../assets/collage/emoji.2.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
