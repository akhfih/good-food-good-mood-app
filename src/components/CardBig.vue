<template>
  <div class="card" :class="[bgColor]">
    <div class="wrapper">
      <img class="card__img" :src="srcImg" alt="" />
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__sub-title">{{ subTitle }}</p>
      <StarRating
        :show-rating="false"
        rounded-corners
        class="card__rating"
        :rating="rating"
        :read-only="true"
        :star-size="16"
        :active-color="`#FF8412`"
      />
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  name: "CardBig",
  components: {
    StarRating,
  },
  props: {
    srcImg: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Pizza Paperony",
    },
    subTitle: {
      type: String,
      default: "Pizza",
    },
    rating: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.card {
  // min-width: 287px;
  width: auto;
  height: 306px;
  text-align: center;
  padding: 33px 24px;
  border-radius: 17px;
  cursor: pointer;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  &__img {
    width: 118px;
    height: auto;
    margin-bottom: 19px;
  }

  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 50px;
    color: #000;
  }
  &__sub-title {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: map-get(map-get($color, primary), 1);
  }

  &__rating {
    padding-top: 19px;
  }

  &:hover {
    background-image: url(@/assets/images/card-backgound-hover.png);
    background-size: cover;
    box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
  }
}
</style>
