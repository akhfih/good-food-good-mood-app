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
          <li class="nav__item">
            <a href="#" class="nav__link"> Promotion </a>
            <!-- <span class="nav__hot">HOT</span> -->
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
  border: 1px solid #f8f8f8;
}
.wrapper {
  display: flex;
  margin: 0 32px;
  padding: 28px 0;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  height: 96px;
  @media (min-width: 640px) {
    margin: 0 120px;
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

.nav {
  color: map-get($color, black(2));
  gap: 32px;
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
    background-color: red;
    color: map-get($color, white);
    font-size: 22px;
    line-height: 65px;
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
