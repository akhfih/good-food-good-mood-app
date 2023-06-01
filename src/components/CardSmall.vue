<template>
  <div class="card" :class="[bgColor]">
    <div class="wrapper">
      <img class="card__img" :src="srcImg" alt="" />
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__sub-title">{{ subTitle }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardSmall",
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
      default: "Title",
    },
    subTitle: {
      type: String,
      default: "subTitle",
    },
  },
  data() {},
};
</script>
<style lang="scss" scoped>
.card {
  max-width: 230px;
  height: 173px;
  text-align: center;
  padding: 30px 80px;
  border-radius: 8px;
  cursor: pointer;

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  &__img {
    width: 47px;
    height: auto;
    margin-bottom: 24px;
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
  &__sub-title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  &:hover {
    background-image: url(@/assets/images/card-backgound-hover.png);
    background-size: cover;
    height: 196px;
  }
}
</style>
