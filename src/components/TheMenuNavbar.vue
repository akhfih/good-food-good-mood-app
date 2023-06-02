<template>
  <div class="wrapper">
    <menu class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="#" class="menu__link"
            ><img :src="menuIcon" />
            <div>Home</div>
          </a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link"
            ><img :src="menuIcon" />
            <div>Promotion</div>
          </a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link"
            ><img :src="menuIcon" />
            <div>Other</div>
          </a>
        </li>
      </ul>
    </menu>
  </div>
</template>
<script>
import menuIcon from "@/assets/icons/menu.svg";
export default {
  data() {
    return {
      menuIcon,
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
  background-color: white;
  @media (min-width: 640px) {
    display: none;
  }
  height: 89px;
  margin: auto;
  border: 1px solid #f8f8f8;
}
.menu {
  width: 100%;
  padding: 0 32px;
  @media (min-width: 640px) {
    padding: 0 120px;
  }
  display: flex;
  justify-content: space-between !important;
  &__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    li:nth-child(2) {
      position: relative;
      top: -5px;
    }
  }

  &__item {
    a {
      display: flex;
      flex-direction: column;

      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;

      color: #757575;
      img {
        height: 39px;
        width: auto;
      }

      div {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        color: #757575;
      }
    }
  }
}
</style>
