<template>
  <div class="heading">
    <h2 class="heading__title">
      <slot name="title"></slot>
    </h2>
    <h2 class="heading__sub-title">
      <slot name="sub-title"></slot>
    </h2>
  </div>
</template>
<script>
export default {
  name: "BaseHeading",
};
</script>
<style lang="scss" scoped>
.heading {
  font-style: normal;
  font-weight: 500;

  font-size: 24px;
  line-height: 30px;

  &__title {
    font-size: 24px;
    line-height: 30px;
    @media (min-width: 768px) {
      font-size: 38px;
      line-height: 50px;
    }
    color: #333333;
  }
  &__sub-title {
    font-size: 24px;
    line-height: 30px;
    @media (min-width: 768px) {
      font-size: 38px;
      line-height: 50px;
    }
    color: #8bac3e;
  }
}
</style>
