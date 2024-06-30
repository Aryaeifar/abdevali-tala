<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
const route = useRoute();
const items = [
  {
    title: "خانه",
    disabled: false,
    to: "/",
  },
  {
    title: "زنانه",
    disabled: false,
    to: "/category/women",
  },
  {
    title: route.params.product,
    disabled: true,
    to: "#",
  },
];
const productInfo = [
  { label: "کد استاندارد", value: "T1637" },
  { label: "وزن1.8 گرمرنگ طلا", value: "رزگلد, زرد, سفید" },
  { label: "جنسیت", value: "زنانه" },
  { label: "طول زنجیر", value: "2 سانتی متر" },
  { label: "ابعاد حدودی", value: "1.8, 1.82" },
  { label: "وزن طلا", value: "40 گرم" },
];
const type2 = ref({
  type: "loop",

  rewind: true,
  gap: "1rem",
  direction: "rtl",
  perPage: 3,
  gap: 30,
  pagination: false,
  arrows: false,
  breakpoints: {
    600: {
      perPage: 1,
      gap: 15,
      padding: { left: "3rem", right: "0" },
    },
    811: {
      perPage: 1,
      padding: { left: "15rem", right: "0" },
    },
    1020: {
      perPage: 2,
    },
  },
});

const newest = ref([
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-1.png",
    price: "46900000",
    link: "product1",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "product1",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-3.png",
    price: "46900000",
    link: "product1",
  },
]);
const numberFormat = (money) => {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1،");
};
const selectBoxitem = ref(["نقره ای", "طلایی"]);
const selectedColor = ref("تغییر رنگ");
const zanjirCount = ref("تعداد زنجیر");
const plak = ref("تغییر پلاک");
const weight = ref("وزن محصول");
</script>
<template>
  <div class="product px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="items" />
    <div>
      <v-row class="align-center">
        <v-col cols="12" lg="6">
          <div>
            <img
              src="@/assets/images/product-1.png"
              alt="abdevali"
              class="product__img"
            />
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="product-info bg-secondary-400">
            <div class="product-info_title mb-3">دستبند جتاش</div>
            <div class="product-info_subtitle mb-3">اطلاعات محصول</div>
            <div class="product-info_items mb-6">
              <div
                class="product-info_item mb-2"
                v-for="(item, index) in productInfo"
                :key="index"
              >
                <div class="label">{{ item.label }}</div>
                <div class="value">{{ item.value }}</div>
              </div>
            </div>
            <div
              class="d-flex justify-space-between align-center product-info_price"
            >
              قیمت: {{ numberFormat(49000000) }} تومان
              <v-btn
                class="bg-primary product-info_price-button"
                size="x-large"
                variant="tonal"
                >افزودن به سبد خرید</v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="customise mt-8 mt-md-16">
      <h1 class="category_title">سفارشی سازی</h1>
      <div
        class="d-flex justify-space-between align-center d-flex flex-column flex-md-row"
      >
        <div class="customise-info_selectboxes">
          <v-row>
            <v-col cols="6" lg="2">
              <FormSelectbox v-model="selectedColor" :items="selectBoxitem" />
            </v-col>
            <v-col cols="6" lg="2">
              <FormSelectbox v-model="zanjirCount" :items="selectBoxitem" />
            </v-col>
            <v-col cols="6" lg="2">
              <FormSelectbox v-model="plak" :items="selectBoxitem" />
            </v-col>
            <v-col cols="6" lg="2">
              <FormSelectbox v-model="weight" :items="selectBoxitem" />
            </v-col>
          </v-row>
        </div>
        <div
          class="mt-6 mt-md-0 d-flex justify-end product-info_customize-btn-wrapper"
        >
          <v-btn class="product-info_customize-btn" variant="tonal" size="large"
            >محاسبه قیمت</v-btn
          >
        </div>
      </div>
    </div>
    <div class="similar-products my-8 my-md-16">
      <h1 class="category_title">محصولات مشابه</h1>
      <Splide :options="type2" aria-label="Most sales">
        <SplideSlide v-for="(item, i) in newest" :key="i">
          <CardsCard3 :items="item" color="primary" />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style lang="scss"></style>
