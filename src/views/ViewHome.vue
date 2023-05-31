<template>
  <div class="wrapper">
    <BaseButton large>ALL Receipt</BaseButton>
    <BaseButton>Daftar Sekarang</BaseButton>
    <BaseButton secondary>About Us</BaseButton>
    <BaseButton icon><i class="fa-regular fa-envelope"></i></BaseButton>
    <BaseButton icon><i class="fa-solid fa-phone"></i></BaseButton>
    <BaseButton icon><i class="fa-brands fa-instagram"></i> </BaseButton>

    <SlideButton next></SlideButton>
  </div>
</template>
<script>
import BaseButton from "../components/BaseButton.vue";
import SlideButton from "../components/SlideButton.vue";
export default {
  name: "ViewHome",
  components: {
    BaseButton,
    SlideButton,
  },
};
</script>
