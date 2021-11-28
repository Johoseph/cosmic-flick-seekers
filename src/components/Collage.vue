<template>
  <div data-content="Collage Items" class="absolute w-full h-full">
    <Item v-for="item in collageConfig" :key="item.day" :config="item" />
  </div>
  <div data-content="Interaction Handler" class="w-full h-full">
    <Svg />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import collageConfig from "./../config/collage.json";

import Svg from "./Svg.vue";
import Item from "./Item.vue";

export default defineComponent({
  name: "Collage",
  data: () => ({
    collageConfig,
  }),
  components: {
    Svg,
    Item,
  },
});
</script>
