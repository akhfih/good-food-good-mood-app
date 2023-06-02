<template>
  <div class="trending">
    <div class="wrapper">
      <BaseHeading class="trending__heading">
        <template #title> Browser Our Trending</template>
        <template #sub-title>Receipt</template>
      </BaseHeading>

      <section class="trending__cards">
        <div
          v-for="recipe in recipes"
          :key="recipe.title"
          class="trending__card-item"
        >
          <CardBig
            :bg-color="recipe.bgcolor"
            :src-img="recipe.srcImg"
            :title="recipe.title"
            :sub-title="recipe.category"
            :rating="recipe.rating"
          ></CardBig>
        </div>
      </section>
      <div class="trending__button">
        <BaseButton large>ALL Receipt</BaseButton>
      </div>
    </div>
  </div>
</template>
<script>
import BaseHeading from "@/components/BaseHeading.vue";
import BaseButton from "./BaseButton.vue";
import CardBig from "../components/CardBig.vue";

import PizzaPaperoni from "@/assets/images/1.png";
import PizzaMeat from "@/assets/images/2.png";
import DonerKebab from "@/assets/images/3.png";
import SalmonRoll from "@/assets/images/4.png";
import CupcakeChoco from "@/assets/images/5.png";
import DoughnutMilk from "@/assets/images/6.png";
import DoughnutUnicorn from "@/assets/images/7.png";
import KathiKebab from "@/assets/images/8.png";
export default {
  components: {
    BaseHeading,
    BaseButton,
    CardBig,
  },
  data() {
    return {
      recipes: [
        {
          title: "Pizza Paperoni",
          srcImg: PizzaPaperoni,
          category: "Pizza",
          rating: 4,
          bgcolor: "bg-color-2",
        },
        {
          title: "Pizza Meat",
          srcImg: PizzaMeat,
          category: "Pizza",
          rating: 3,
          bgcolor: "bg-color-2",
        },
        {
          title: "Doner Kebab",
          srcImg: DonerKebab,
          category: "Kebab",
          rating: 5,
          bgcolor: "bg-color-3",
        },
        {
          title: "Salmon Roll",
          srcImg: SalmonRoll,
          category: "Salmon",
          rating: 4,
          bgcolor: "bg-color-4",
        },
        {
          title: "Cupkake Choco",
          srcImg: CupcakeChoco,
          category: "Cupcake",
          rating: 4,
          bgcolor: "bg-color-2",
        },
        {
          title: "Doughnu Milk",
          srcImg: DoughnutMilk,
          category: "Doughnut",
          rating: 5,
          bgcolor: "bg-color-1",
        },
        {
          title: "Doughnu Unicorn",
          srcImg: DoughnutUnicorn,
          category: "Doughnut",
          rating: 4,
          bgcolor: "bg-color-1",
        },
        {
          title: "Kathi Kebab",
          srcImg: KathiKebab,
          category: "Kebab",
          rating: 4,
          bgcolor: "bg-color-1",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: min-content;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 32px;
  padding: 64px 0;
  align-items: start;

  @media (min-width: 640px) {
    margin: 0 120px;
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
  }
}
.trending {
  offset: auto;
  display: flex;
  flex-direction: column;

  &__heading {
    margin-bottom: 56px;
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
  }

  &__card-item {
    @media (max-width: 1139px) {
      flex: 1;
      padding: 10px;

      flex-basis: 300px;
    }
    @media (min-width: 1140px) {
      padding: 10px;

      flex-basis: 300px;
    }
    @media (min-width: 1200px) {
      flex: 1;
      padding: 10px;

      flex-basis: 300px;
    }
  }

  &__button {
    padding-top: 64px;
    margin: auto;
  }
}
</style>
