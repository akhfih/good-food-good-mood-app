<template>
  <header class="header">
    <div class="wrapper">
      <img class="logo" :src="logo" alt="Logo" />
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link"> Home </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link"> About </a>
          </li>
          <li class="nav__item item-mark">
            <a href="#" class="nav__link"> Promotion </a>
            <p class="nav__hot">HOT</p>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link"> Blogs </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link"> Contact Us </a>
          </li>
        </ul>
      </nav>
      <div class="cta">
        <a class="cta__masuk">Masuk</a>
        <BaseButton class="cta__daftar">Daftar Sekarang</BaseButton>
      </div>
    </div>
  </header>
</template>
<script>
import BaseButton from "./BaseButton.vue";
import logo from "../assets/images/logo.png";
export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>
<style lang="scss">
.header {
  background-color: transparent;

  @media (max-width: 640px) {
    border: 1px solid #f8f8f8;
  }
}
.wrapper {
  max-width: 1200px;
  display: flex;
  margin: 0 32px;
  padding: 28px 0;
  justify-content: space-between;
  align-items: center;

  height: 96px;
  @media (min-width: 640px) {
    margin: 0 120px;
    // background: #ffffff;
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
  }
}

.logo {
  @media (max-width: 480px) {
    height: 36px;
  }
}

ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}

.item-mark {
  position: relative;
}

.nav {
  color: map-get($color, black(2));
  gap: 32px;
  background-color: transparent;
  @media (max-width: 960px) {
    display: none;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__link {
    padding: 0 16px;
    height: 65px;
    color: map-get(map-get($color, black), 3);
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;

    @media (max-width: 1064px) {
      padding: 0 4px;
    }

    &:hover,
    &:focus {
      color: map-get(map-get($color, primary), 1);
    }
  }

  &__hot {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: #e7462d;
    color: white;
    text-align: center;
    width: 36px;
    height: 19px;
    bottom: 20px;
    right: 0;

    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 14px;
  }
}

.cta {
  display: flex;
  align-items: center;
  gap: 24px;
  &__masuk {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: map-get(map-get($color, black), 2);
    cursor: pointer;
    @media (max-width: 640px) {
      display: none;
    }
    &:hover,
    &:focus {
      color: map-get(map-get($color, primary), 1);
    }
  }
}
</style>
