<template>
  <div
    class="w-screen h-screen flex justify-center items-center loader fixed z-10"
  >
    <div>
      <div class="text-5xl mb-6">Advent 2021</div>
      <div class="w-full h-1 rounded-sm loading-bar relative overflow-hidden" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
});
</script>

<style scoped>
@keyframes fadeout {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.loader {
  opacity: 0;
  background: linear-gradient(#0c0c0c, #1e1e1e, #0c0c0c);
  animation: fadeout 3450ms linear;
}

.loading-bar {
  background: #242424;
}

@keyframes load {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.loading-bar::after {
  content: "";
  height: 100%;
  width: 100%;
  background: #ffffff;
  position: absolute;
  animation: load 2400ms cubic-bezier(0.73, 0.24, 0.09, 0.85);
}
</style>
