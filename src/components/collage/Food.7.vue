<template>
  <div data-content="Day 7">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 250"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M108 129C108 129 167.33 132.3 173 180C165 202.7 150 223 150 223C150 223 129.67 244.63 96 241C58.33 236.7 42 203.37 41 166C40.05 130.66 80 125.96 108 129Z"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Food",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 10.1%;
  top: -4.4%;
  left: 63%;
}

.bg-img {
  background: url("../../assets/collage/food.7.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
