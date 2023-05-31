<template>
  <component :is="type" class="button">
    <div v-if="next === true" class="btn-next">
      NEXT
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="33" height="33" rx="16.5" fill="white" />
        <g clip-path="url(#clip0_307_4301)">
          <path
            d="M21.2314 15.8522L13.0695 7.69298C12.7113 7.33574 12.1311 7.33574 11.772 7.69298C11.4139 8.05021 11.4139 8.63046 11.772 8.9877L19.2866 16.4996L11.7729 24.0114C11.4148 24.3687 11.4148 24.9489 11.7729 25.307C12.1311 25.6643 12.7122 25.6643 13.0704 25.307L21.2323 17.1478C21.585 16.7942 21.585 16.2049 21.2314 15.8522Z"
            fill="#8BAC3E"
          />
        </g>
        <defs>
          <clipPath id="clip0_307_4301">
            <rect
              width="18.15"
              height="18.15"
              fill="white"
              transform="translate(7.42505 7.42505)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>

    <div v-else class="btn-prev">
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="33" height="33" rx="16.5" fill="white" />
        <path
          d="M9.0257 15.8218L18.4693 7.28048C18.8837 6.90651 19.555 6.90651 19.9705 7.28048C20.3848 7.65444 20.3848 8.26186 19.9705 8.63583L11.2759 16.4995L19.9694 24.3631C20.3838 24.7371 20.3838 25.3445 19.9694 25.7194C19.555 26.0934 18.8826 26.0934 18.4683 25.7194L9.02465 17.1781C8.61655 16.808 8.61655 16.191 9.0257 15.8218Z"
          fill="#8BAC3E"
        />
      </svg>

      PREV
    </div>
  </component>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    next: {
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
<style lang="scss">
.button {
  padding: 0 12px;
  height: 50px;
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
  &:hover {
    background-color: map-get(map-get($color, avocado), 1);
    box-shadow: 0px 8px 32px rgba(102, 107, 226, 0.35);
  }
}

.btn-prev,
.btn-next {
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  &__text {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
}

.wrapper {
  display: flex;
  align-items: center;
}
</style>
