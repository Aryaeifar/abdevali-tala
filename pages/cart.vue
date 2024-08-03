<template>
  <div class="cart px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="breadcrumb" />
    <div class="cart-wrapper">
      <h1 class="category_title mb-10">سبد خرید</h1>
      <v-divider :thickness="2"></v-divider>
      <div class="cart-card-items mt-10">
        <v-row>
          <v-col cols="12" md="6">
            <div class="cart-card-item">
              <v-row>
                <v-col cols="5" sm="3" lg="4">
                  <div class="cart-card-item-img">
                    <img src="@/assets/images/similar-1.png" alt="" />
                  </div>
                </v-col>
                <v-col cols="7" sm="9" lg="8">
                  <div class="card-cart-item-info">
                    <div class="card-cart-item-name-price">
                      <div class="card-cart-item-name">انگشتر سافایر</div>
                      <div class="card-cart-item-price">۴۹،۰۰۰،۰۰۰ تومان</div>
                    </div>
                    <div class="card-cart-item-delete">
                      <span class="icon-x"></span>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="cart-wrapper-select-pack">
        <div class="cart-wrapper-select-pack-check-box">
          <label for="me">برای خود</label>
          <input type="radio" id="me" name="prodcuts" />
        </div>
        <div class="cart-wrapper-select-pack-check-box">
          <label for="gift">برای هدیه</label>
          <input type="radio" id="gift" name="prodcuts" />
        </div>
      </div>
      <div class="choose-pack mt-6 mt-md-10">
        <h1 class="category_title mb-6 mt-md-10">انتخاب پک کادویی</h1>
        <Splide :options="type2" aria-label="first">
          <SplideSlide v-for="(item, i) in list" :key="i">
            <CardsGiftCard :items="item" color="primary" />
          </SplideSlide>
        </Splide>
      </div>
      <div class="cart-wrapper_total-price">
        <div>مجموع قیمت</div>
        <v-divider :thickness="2"></v-divider>
        <div>{{ numberFormat(49000000) }} تومان</div>
      </div>
      <div class="cart-wrapper_pay">
        <div class="cart-wrapper_pay-text">
          در صورت نیاز به اطلاعات بیشتر قبل از پرداخت نهایی می‌توانید شماره
          <span>0113320000</span> تماس بگیرید.
        </div>
        <v-btn
          color="primary"
          height="3rem"
          class="px-4 cart-wrapper_pay-button"
          flat
        >
          تایید و پرداخت
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
// import { defineAsyncComponent } from 'vue';

// const GiftCard = defineAsyncComponent(() => import('@/components/cards/giftCard.vue'));
const type2 = ref({
  rewind: true,
  gap: "1rem",
  direction: "rtl",
  perPage: 4,
  gap: 30,
  pagination: false,
  arrows: false,
  breakpoints: {
    540: {
      perPage: 1,
      gap: 15,
    },
    811: {
      perPage: 2,
    },
    1020: {
      perPage: 3,
      padding: { left: "5rem", right: "0" },
      type: "loop",
    },
  },
});
const route = useRoute();
const breadcrumb = [
  {
    title: "خانه",
    disabled: false,
    to: "/",
  },
  {
    title: "سبد خرید",
    disabled: true,
    to: "/cart",
  },
];
const inline = ref(null);
const list = ref([
  {
    name: "پک کادویی مشکی",
    img: "./assets/images/gift-1.png",
    price: "120000",
  },
  {
    name: "پک کادویی بنفش",
    img: "./assets/images/gift-2.png",
    price: "120000",
  },
  {
    name: "پک کادویی آبی",
    img: "./assets/images/gift-3.png",
    price: "120000",
  },
  {
    name: "پک کادویی قرمز",
    img: "./assets/images/gift-4.png",
    price: "120000",
  },
]);
const numberFormat = (money) => {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1،");
};
</script>

<style lang="scss" scoped></style>
