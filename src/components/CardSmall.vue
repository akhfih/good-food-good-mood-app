<template>
  <div class="card" :class="[bgcolor]">
    <div class="wrapper">
      <img class="card__img" :src="srcImg" alt="" />
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__sub-title">{{ subtitle }}</p>
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
    bgcolor: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Title",
    },
    subtitle: {
      type: String,
      default: "subTitle",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.card {
  max-width: 230px;
  max-height: 172px;
  text-align: center;
  padding: 30px 40px;
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

    position: relative;
    z-index: 1;
    height: 120px;
  }
}
</style>
