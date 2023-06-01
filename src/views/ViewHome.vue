<template>
  <!-- <div class="wrapper">
    <BaseButton large>ALL Receipt</BaseButton>
    <BaseButton>Daftar Sekarang</BaseButton>
    <BaseButton secondary>About Us</BaseButton>
    <BaseButton icon><i class="fa-regular fa-envelope"></i></BaseButton>
    <BaseButton icon><i class="fa-solid fa-phone"></i></BaseButton>
    <BaseButton icon><i class="fa-brands fa-instagram"></i> </BaseButton>

    <SlideButton next></SlideButton>


  </div> -->
  <TheNavbar></TheNavbar>
  <TheHeroSection />
  <br />
  <CardSmall bg-color="bg-color-1" :src-img="kebab"></CardSmall>
  <star-rating></star-rating>
  <CardBig bg-color="bg-color-1" :src-img="pizza"></CardBig>
</template>
<script>
// import BaseButton from "../components/BaseButton.vue";
// import SlideButton from "../components/SlideButton.vue";
import TheNavbar from "../components/TheNavbar.vue";
import TheHeroSection from "../components/TheHeroSection.vue";
import CardSmall from "../components/CardSmall.vue";
import CardBig from "../components/CardBig.vue";
// import StarsRating from "@/components/StarsRating.vue";
import StarRating from "vue-star-rating";
import kebab from "@/assets/images/kebab.png";
import pizza from "@/assets/images/1.png";

export default {
  name: "ViewHome",
  components: {
    // BaseButton,
    // SlideButton,
    TheNavbar,
    TheHeroSection,
    CardSmall,
    // StarsRating,
    StarRating,
    CardBig,
  },
  data() {
    return {
      kebab: kebab,
      pizza,
    };
  },
};
</script>
