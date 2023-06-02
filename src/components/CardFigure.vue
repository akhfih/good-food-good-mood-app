<template>
  <div class="card">
    <img class="card__img" :src="piring" alt="piring" />
    <div class="card__content">
      <p class="card__title">Green Salad Tomato</p>
      <p class="card__subtitle">Tomato</p>
      <StarRating
        :show-rating="false"
        rounded-corners
        class="card__rating"
        :rating="4"
        :read-only="true"
        :star-size="11"
        :active-color="`#FF8412`"
      />
    </div>
  </div>
</template>
<script>
import piring from "@/assets/images/small-piring.png";
import StarRating from "vue-star-rating";
export default {
  name: "CardFigure",
  components: {
    StarRating,
  },
  data() {
    return {
      piring,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 93px;
  width: 292px;
  position: absolute;

  right: 5%;
  bottom: 30%;
  @media (min-width: 960px) {
    right: 25%;
    bottom: 10%;
  }
  background-color: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
  backdrop-filter: blur(5.5px);
  border-radius: 17px;

  display: flex;
  align-items: center;
  gap: 12px;
  padding: 23px;

  //   &__conten {
  //   }
  &__img {
    width: 53px;
    height: 53px;
  }
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    /* or 157% */

    color: #000000;
  }
  &__subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 12px !important;
    line-height: 14px;
    color: #757575;
  }
  &__rating {
    margin-top: 9px;
  }
}
</style>
