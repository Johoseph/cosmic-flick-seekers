<template>
  <div data-content="Day 11">
    <div class="scale bg-img absolute pointer-events-none" />
    <svg
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 230 220"
      class="absolute scale opacity-0"
      v-on:mousemove="this.handleMouseMove"
    >
      <path
        style="fill: #ffffff; cursor: crosshair"
        d="M145 199C145 199 125.67 174.7 118 164C107 163.3 98 143 98 143C98 143 92.67 142.37 90 140C87 133.3 83 141 83 141C83 141 70.67 142.7 68 130C67.67 127.63 68.33 117.04 81 108C80.33 106 81 101 81 101C81 101 78.33 85.7 55 96C31 109.96 51 85 51 85L65 69C65 69 74.67 58.37 99 57C131 49.96 142 64.37 155 79C166.67 72.63 177.67 73.37 178 90C178.33 106.63 165 101 165 101L165 105C165 105 166.33 106.04 172 117C177.67 127.96 174 134 174 134C174 134 177.67 144.37 186 162C194.33 179.63 186 185 186 185L152 202C149.33 201.96 145 199 145 199Z"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Albus",
  methods: {
    handleMouseMove() {
      // Logic for tooltip here
    },
  },
});
</script>

<style scoped>
.scale {
  width: 13%;
  top: 68.8%;
  left: 66.6%;
}

.bg-img {
  background: url("../../assets/collage/albus.11.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 999px;
}
</style>
