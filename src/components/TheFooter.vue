<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__address">
        <img :src="logo" alt="logo" />
        <p>
          Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
          Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
        </p>
        <div class="sosmed">
          <BaseButton icon><i class="fa-regular fa-envelope"></i></BaseButton>
          <BaseButton icon><i class="fa-solid fa-phone"></i></BaseButton>
          <BaseButton icon><i class="fa-brands fa-instagram"></i> </BaseButton>
        </div>
      </div>
      <div class="footer__category">
        <div class="footer_heading">Categories</div>
        <ul class="wrapper-link">
          <li><a href="#" class="footer__link-list">Cupcake</a></li>
          <li><a href="#" class="footer__link-list">Pizza</a></li>
          <li><a href="#" class="footer__link-list">Kebab</a></li>
          <li><a href="#" class="footer__link-list">Salmon</a></li>
          <li><a href="#" class="footer__link-list">Dughnut</a></li>
          <li></li>
        </ul>
      </div>
      <div class="footer__about">
        <div class="footer_heading">About Us</div>
        <ul class="wrapper-link">
          <li><a href="#" class="footer__link-list">About Us</a></li>
          <li><a href="#" class="footer__link-list">FAQ</a></li>
          <li><a href="#" class="footer__link-list">Report Problem</a></li>
        </ul>
      </div>
      <div class="footer__newsletter">
        <div class="footer_heading">Newsletter</div>
        <div class="item-newsletter">
          <p>Get now free 50% discount for alll products on your first order</p>
          <div class="input-button">
            <BaseInputButton>SEND</BaseInputButton>
          </div>

          <div class="contact">
            <a href=""
              ><i class="fa-regular fa-envelope"></i>elemesid@gmail.com</a
            >
            <a href=""><i class="fa-solid fa-phone"></i>0888 1111 2222 </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">© 2021 Elemes id. All rights reserved</div>
  </footer>
</template>
<script>
import logo from "@/assets/images/logo.png";
import BaseButton from "./BaseButton.vue";
import BaseInputButton from "./BaseInputButton.vue";
export default {
  components: {
    BaseButton,
    BaseInputButton,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
<style lang="scss">
@mixin warna_paragraph {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #757575;
}

.footer {
  margin-top: 186px;
  &__content {
    display: flex;
    justify-content: space-between;

    height: fit-content;
    @media (max-width: 960px) {
      flex-direction: column;
      gap: 32px;
    }

    padding: 66px;
    max-width: 1200px;
    margin: auto;
    background: #f9fff7;
    border-radius: 20px;

    @media (min-width: 640px) {
      margin: 0 120px;
    }
    @media (min-width: 1200px) {
      margin: 0 auto;
    }
  }

  &__heading {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */
  }

  &__category,
  &__about,
  &__newsletter {
    display: flex;
    gap: 33px;
    flex-direction: column;

    .wrapper-link {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }

  &__link-list {
    gap: 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #757575;
    &:hover {
      color: #8bac3e;
    }
  }

  &__address {
    .logo {
      height: 50px;
    }
    p {
      max-width: 336px;
      margin-top: 21px;
      font-family: "Rubik";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;

      color: #757575;
    }

    .sosmed {
      margin-top: 33px;
      display: flex;
    }
  }
  &__newsletter {
    max-width: 245px;
    p {
      @include warna_paragraph;
    }

    .item-newsletter {
      display: flex;
      flex-direction: column;
      gap: 19px;
    }

    .contact {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    a {
      i {
        color: #8bac3e;
        margin-right: 4px;
      }
    }
  }

  &__copyright {
    display: flex;
    justify-content: center;
    margin: 48px auto 32px auto;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
}
</style>
