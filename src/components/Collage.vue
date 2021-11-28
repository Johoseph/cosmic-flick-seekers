<template>
  <div data-content="Collage Items" class="absolute w-full h-full">
    <DiscGolf />
    <Ttennis />
    <Emoji />
    <Priconner />
    <Chacha />
    <Albus />
    <Food />
    <Wrinkles />
    <KFC />
    <Nobara />
    <Stauber />
    <Highway />
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
import Food from "./collage/Food.7.vue";
import Highway from "./collage/Highway.8.vue";
import Ttennis from "./collage/Ttennis.9.vue";
import KFC from "./collage/KFC.10.vue";
import Albus from "./collage/Albus.11.vue";
import Wrinkles from "./collage/Wrinkles.12.vue";

export default defineComponent({
  name: "Collage",
  components: {
    DiscGolf,
    Emoji,
    Chacha,
    Priconner,
    Nobara,
    Stauber,
    Food,
    Highway,
    Ttennis,
    KFC,
    Albus,
    Wrinkles,
  },
});
</script>
