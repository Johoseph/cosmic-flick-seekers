<template>
  <div data-content="Day 5">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 375 220"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M247 68C247 68 249.75 40.97 252 34C239.5 26.03 248.5 15.22 259 22C265.5 11.28 284.75 -2.03 304 6C307.25 3.03 315 7.47 320 15C327.5 17.78 333 31 333 31L350 28C350 28 367 26.97 356 40C343.75 49.28 340 50 340 50C340 50 345.67 70.96 345 83C349.33 82.7 352 83 352 83C352 83 389.33 106.63 357 171C361 177.7 356.67 185.3 351 187C246.33 210.04 234 212 234 212C234 212 222.33 203.63 231 189C239.67 174.37 239 173 239 173C239 173 232 179.96 225 184C222.33 196.37 209 208 205 213C198.67 208.04 182 198 182 198C182 198 163 189.63 172 163C167 164.37 165 167 165 167C165 167 162.33 170.96 148 151C141.33 150.04 140 146 140 146L134 149C134 149 123.67 162.3 109 163C93 164.04 81 167 81 167C81 167 67 169.96 68 159C70.67 149.04 63 133 63 133C63 133 46.25 131.97 59 114C18.25 101.53 10 97 10 97C10 97 -5.2 90.18 12 94C35.6 102.22 57 109 57 109C57 109 46.8 95.58 65 92C40.8 77.62 36 73 36 73C36 73 16.2 58.38 39 68C64.6 85.62 71 91 71 91C71 91 73.8 85.38 85 85C92.2 75.82 99 72 99 72C99 72 101.4 68.18 114 76C132.6 84.62 154 95 154 95C154 95 160.4 86.38 168 86C176.6 87.02 192 88 192 88C192 88 197.2 83.38 203 85C209.4 86.62 212 86 212 86L199 57L210 54L222 65C222 65 230.2 69.58 225 61C220.4 54.02 220 52 220 52L232 51C232 51 245.6 66.18 247 68Z"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Nobara",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 21.2%;
  top: 14.4%;
  left: 36.2%;
}

.bg-img {
  background: url("../../assets/collage/nobara.5.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
