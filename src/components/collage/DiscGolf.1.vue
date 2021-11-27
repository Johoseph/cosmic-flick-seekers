<template>
  <div data-content="Day 1" class="absolute w-full h-full">
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 278 308"
      class="absolute w-full h-full opacity-0"
    >
      <path
        style="fill: none; stroke: #000000"
        d="M146.5 71.51C151.79 71.88 154.72 72.7 158.5 74.87C161.25 76.46 164.85 79.43 166.5 81.48C168.79 84.33 169.57 86.43 169.81 90.36C170.03 94.02 169.57 96.51 168.19 99C167.05 101.07 164.47 103.44 161.88 104.81C159.29 106.17 154.85 107.35 151 107.7C146.55 108.11 143.08 107.83 140 106.82C137.53 106.02 133.47 104 131 102.35C128.23 100.49 125.64 97.64 124.26 94.92C123.03 92.49 122.03 89.38 122.03 88C122.03 86.63 122.9 83.7 123.98 81.5C125.05 79.3 127.39 76.6 129.19 75.5C130.98 74.4 134.04 72.94 135.98 72.26C138.12 71.51 142.24 71.22 146.5 71.51Z"
      />
      <path
        style="fill: none; stroke: #000000"
        d="M36 172C36 172 40 144.78 42 133C1.5 130.72 4 122 4 122L5 90C5 90 14.75 91.78 30 94C20 78.22 18.75 47.53 19 26C16.75 22.47 20 10 20 10C20 10 22.5 5.03 42 3C86 3.22 94 17 94 17C94 17 94.25 21.78 93 34C87.5 73.97 66 97 66 97L93 102C93 102 87.75 123.28 85 132C81 137.97 47 134 47 134L43 172C38.25 173.72 36 172 36 172Z"
      />
      <path
        style="fill: none; stroke: #000000"
        d="M123 84C123 84 127 62.7 160 75C177 80.96 210 97.04 248 147C282 198.96 275 239.04 246 268C216.33 296.96 162 303.03 145 302C141.75 302.26 142.5 299.76 147 298C179 294.45 241.5 269.05 241 220C232 132 139 106 139 106C117.67 100.63 123 84 123 84Z"
      />
    </svg>
    <div class="item absolute w-full h-full" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DiscGolf",
});
</script>

<style scoped>
.item {
  background: url("../../assets/collage/discgolf.1.png");
  background-repeat: no-repeat;
  background-size: 15.6%;
  top: 14.8%;
  left: 59%;
}
</style>
