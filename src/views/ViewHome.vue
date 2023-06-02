<template>
  <!-- <div class="wrapper">
   
    <BaseButton icon><i class="fa-regular fa-envelope"></i></BaseButton>
    <BaseButton icon><i class="fa-solid fa-phone"></i></BaseButton>
    <BaseButton icon><i class="fa-brands fa-instagram"></i> </BaseButton>

  


  </div> -->
  <TheNavbar></TheNavbar>
  <TheHeroSection />
  <TheCategorySection></TheCategorySection>
  <TheTrendingSection></TheTrendingSection>
  <TheFooter />
</template>
<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheHeroSection from "../components/TheHeroSection.vue";
import TheCategorySection from "../components/TheCategorySection.vue";
import TheTrendingSection from "../components/TheTrendingSection.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "ViewHome",
  components: {
    TheNavbar,
    TheHeroSection,
    TheCategorySection,
    TheTrendingSection,
    TheFooter,
  },
  data() {
    return {};
  },
};
</script>
