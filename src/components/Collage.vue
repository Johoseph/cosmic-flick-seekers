<template>
  <div data-content="Collage Items" class="absolute w-full h-full">
    <DiscGolf />
    <Emoji />
    <Priconner />
    <Chacha />
    <Nobara />
    <Stauber />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DiscGolf from "./collage/DiscGolf.1.vue";
import Emoji from "./collage/Emoji.2.vue";
import Chacha from "./collage/Chacha.3.vue";
import Priconner from "./collage/Priconner.4.vue";
import Nobara from "./collage/Nobara.5.vue";
import Stauber from "./collage/Stauber.6.vue";

export default defineComponent({
  name: "Collage",
  components: {
    DiscGolf,
    Emoji,
    Chacha,
    Priconner,
    Nobara,
    Stauber,
  },
});
</script>
