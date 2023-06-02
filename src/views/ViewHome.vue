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
  <TheCategorySection></TheCategorySection>
  <TheTrendingSection></TheTrendingSection>
  <!-- <CardBig bg-color="bg-color-1" :src-img="pizza"></CardBig> -->
</template>
<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheHeroSection from "../components/TheHeroSection.vue";
import TheCategorySection from "../components/TheCategorySection.vue";
import TheTrendingSection from "../components/TheTrendingSection.vue";
import kebab from "@/assets/images/kebab.png";
import pizza from "@/assets/images/1.png";

export default {
  name: "ViewHome",
  components: {
    TheNavbar,
    TheHeroSection,
    TheCategorySection,
    TheTrendingSection,
  },
  data() {
    return {
      kebab: kebab,
      pizza,
    };
  },
};
</script>
