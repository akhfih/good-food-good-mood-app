<template>
  <component
    :is="type"
    class="button"
    :class="[
      large && `button--big`,
      secondary && `button-secondary`,
      icon && `button-icon`,
      slide && `button-slide`,
    ]"
  >
    <slot />
  </component>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    slide: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  data: function () {
    return {
      type: "button",
    };
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.button {
  height: 42px;
  padding: 10px 18px;
  border: none;
  border-radius: 100px;
  background-color: map-get(map-get($color, primary), 1);
  outline: none;
  color: map-get($color, white);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;

  &-secondary {
    background-color: #f2f2f2;
    color: map-get(map-get($color, black), 3);
    &:hover {
      color: map-get($color, white);
    }
  }

  &-icon {
    padding: 0;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: map-get($color, white);
    color: map-get(map-get($color, primary), 1);
    &:hover {
      color: map-get($color, white);
    }
  }

  &:hover {
    background-color: map-get(map-get($color, avocado), 1);
    box-shadow: 0px 8px 32px rgba(102, 107, 226, 0.35);
  }

  &--big {
    height: 50px;
    padding: 15px 34px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }

  &-slide {
    padding: 0 12px;
    height: 50px;
  }
}
</style>
