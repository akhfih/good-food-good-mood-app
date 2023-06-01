<template>
  <div class="category">
    <div class="wrapper">
      <BaseHeading class="category__heading">
        <template #title> Browser Our Trending </template>
        <template #sub-title>Receipt</template>
      </BaseHeading>
    </div>
    <swiper
      :breakpoints="{
        '320': {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        '640': {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 12,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 12,
        },
        '1268': {
          slidesPerView: 6,
          spaceBetween: 12,
        },
      }"
      class="default-slider"
      :space-between="12"
      :free-mode="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="category in categorys" :key="category.title"
        ><CardSmall
          :title="category.title"
          :subtitle="category.subtitle"
          :bgcolor="category.bgcolor"
          :src-img="category.srcImg"
        ></CardSmall>
      </swiper-slide>
    </swiper>
    <div class="category__navigation"><SlideButton /> <SlideButton next /></div>
  </div>
</template>

<script>
import SwiperCore, { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper core and required modules
// Import swiper styles
import "swiper/css"; // this will import basic styles
import "swiper/css/bundle"; // this will import all styles
import "swiper/css/free-mode";

import SlideButton from "../components/SlideButton.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import CardSmall from "../components/CardSmall.vue";
import cupcake from "@/assets/images/cupcake.png";
import pizza from "@/assets/images/pizza.png";
import kebab from "@/assets/images/kebab.png";
import salmon from "@/assets/images/salmon.png";
import doughnut from "@/assets/images/doughnut.png";

// Import Swiper styles
import "swiper/swiper.min.css";

SwiperCore.use([FreeMode, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardSmall,
    BaseHeading,
    SlideButton,
  },
  data() {
    return {
      modules: [Navigation],
      categorys: [
        {
          title: "Cupcake",
          srcImg: cupcake,
          subtitle: "22 items",
          bgcolor: "bg-color-4",
        },
        {
          title: "Pizza",
          srcImg: pizza,
          subtitle: "25 items",
          bgcolor: "bg-color-2",
        },
        {
          title: "Kebab",
          srcImg: kebab,
          subtitle: "12 items",
          bgcolor: "bg-color-3",
        },
        {
          title: "Salmon",
          srcImg: salmon,
          subtitle: "22 items",
          bgcolor: "bg-color-4",
        },
        {
          title: "Doughnut",
          srcImg: doughnut,
          subtitle: "11 items",
          bgcolor: "bg-color-1",
        },
        {
          title: "Salmon",
          srcImg: salmon,
          subtitle: "22 items",
          bgcolor: "bg-color-4",
        },
        {
          title: "Doughnut",
          srcImg: doughnut,
          subtitle: "11 items",
          bgcolor: "bg-color-1",
        },
      ],
    };
  },
  methods: {
    handleNext() {
      this.swiper.navigationNext();
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  &__heading {
    height: auto;
  }

  &__navigation {
    display: flex;
    gap: 11px;
    justify-content: end;
    max-width: 1200px;
    margin: 0 32px;
    padding: 32px 0;
    align-items: center;

    @media (max-width: 640px) {
      display: none;
    }
    @media (min-width: 640px) {
      margin: 0 120px;
    }
    @media (min-width: 1200px) {
      margin: 0 auto;
    }
  }
}
.wrapper {
  max-width: 1200px;
  margin: 0 32px;
  padding: 64px 0;
  align-items: center;

  @media (min-width: 640px) {
    margin: 0 120px;
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
  }
}

/* style untuk slidenya */
.default-slider .swiper-slide {
  /* padding: 4; */
  // display: flex;
  // /* height: 300px !important; */
  // /* height: auto; */
  // justify-content: center;
  // /* align-items: center; */
  // color: #000;
}

.default-slider {
  max-width: 3000px;
  margin-top: 100px;
  align-items: center;
  margin: auto;
}
</style>
