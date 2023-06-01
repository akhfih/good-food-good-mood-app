<template>
  <swiper
    :slides-per-view="6"
    :space-between="11"
    :free-mode="true"
    class="default-slider"
    @swiper="onSwiper"
  >
    <swiper-slide v-for="n in 7" :key="n">
      <CardSmall bg-color="bg-color-1" :src-img="kebab"></CardSmall>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import swiper styles
import "swiper/css"; // this will import basic styles
import "swiper/css/bundle"; // this will import all styles
import "swiper/css/navigation"; // this will import specific styles
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardSmall from "../components/CardSmall.vue";
import kebab from "@/assets/images/kebab.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardSmall,
  },
  data() {
    return {
      kebab: kebab,
    };
  },
  methods: {
    onSwiper: function () {
      console.log("onSwiper called");
    },
    onSlideChange: function () {
      console.log("Slide change");
    },
  },
};
</script>

<style scoped>
.swiper-slide {
  /* background-color: palevioletred; */
  width: 400px;
}
</style>
