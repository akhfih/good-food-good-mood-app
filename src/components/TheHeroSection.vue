<template>
  <div class="hero">
    <div class="container">
      <div class="wrapper">
        <div class="hero__content">
          <h1>Good Food Us Good Mood</h1>
          <img :src="figure" alt="hero__figure" />
          <p>
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div class="cta">
            <BaseButton>Daftar Sekarang</BaseButton>
            <BaseButton secondary>About Us</BaseButton>
          </div>
        </div>
        <div class="hero__figure">
          <img :src="figure" alt="hero__figure" />
        </div>
        <CardFigure />
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../components/BaseButton.vue";
import figure from "../assets/images/piring.png";
import background from "../assets/images/hero-background.svg";
import CardFigure from "./CardFigure.vue";
export default {
  name: "TheHeroSection",
  components: {
    BaseButton,
    CardFigure,
  },
  data() {
    return {
      figure: figure,
      background: background,
    };
  },
};
</script>
<style lang="scss">
.hero {
  height: min-content;
  background-image: url(@/assets/images/hero-background.svg);

  .wrapper {
    position: relative;
    height: min-content;
    display: flex;
    background-color: transparent;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex;
    align-items: start;
    gap: 32px;
    @media (min-width: 960px) {
      width: 500px;
    }

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 64px;

      color: map-get(map-get($color, primary), 1);

      @media (min-width: 960px) {
        font-size: 64px;
      }
    }

    img {
      display: block;
      width: 75%;
      @media (min-width: 960px) {
        display: none;
      }
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 29px;
      color: map-get(map-get($color, black), 3);
    }

    .cta {
      display: flex;
      gap: 16px;
    }
  }
  &__figure {
    @media (max-width: 960px) {
      display: none;
    }
    img {
      width: 440px;
      height: auto;
      @media (min-width: 1024px) {
        width: 100%;
        height: auto;
      }
    }
  }
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
