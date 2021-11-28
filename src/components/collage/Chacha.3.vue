<template>
  <div data-content="Day 3">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 605 405"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M474 383L463 384L463 389C463 389 458.5 393.78 449 394C449 394 446 392.53 439 396C428.5 401.72 433 386 433 386C433 386 436.5 379.28 433 374C418.75 369.97 409.25 357.53 408 342C408 342 407.75 329.28 402 323C396.25 317.22 391 301 391 301L306 329L369 266L282 235L360 210L295 149L380 172L333 83L406 135L398 44L444 127L473 37L478 138L545 79L511 170L596 158L520 214L589 241L527 247C527 247 528.25 250.03 521 255C510.75 257.22 522 268 522 268C522 268 530.5 272.78 524 291C524 291 520 304.28 524 314C526.5 316.72 528.25 333.78 518 339C518 339 500.5 355.28 503 371C505 391.72 480 384 480 384L474 383Z"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Chacha",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 34.2%;
  top: -4.6%;
  left: 2.7%;
}

.bg-img {
  background: url("../../assets/collage/chacha.3.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
