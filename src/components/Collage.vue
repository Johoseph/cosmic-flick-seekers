<template>
  <div data-content="Collage Items" class="absolute w-full h-full">
    <Item v-for="item in config" :key="item.day" :config="item" />
  </div>
  <div data-content="Interaction Handler" class="w-full h-full">
    <Svg />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { filterCollageItems } from "./../helpers";

import Svg from "./Svg.vue";
import Item from "./Item.vue";

export default defineComponent({
  name: "Collage",
  data: () => ({
    config: filterCollageItems(),
  }),
  components: {
    Svg,
    Item,
  },
});
</script>
