<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
const type2 = ref({
  type: "loop",
  rewind: true,
  gap: "1rem",
  direction: "rtl",
  perPage: 4,
  gap: 30,
  padding: { left: "5rem", right: "0" },
  pagination: false,
  arrows: false,
  breakpoints: {
    540: {
      perPage: 1,
      gap: 15,
      padding: { left: "8rem", right: "0" },
    },
    811: {
      perPage: 2,
      padding: { left: "5rem", right: "0" },
    },
    1020: {
      perPage: 3,
    },
  },
});
const list = ref([
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/sale1.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/sale2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/sale3.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/sale4.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/sale1.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/sale2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/sale3.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../.../../assets/images/sale4.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/sale2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/sale2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/sale2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/sale2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/sale2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/sale2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
]);
</script>

<template>
  <div class="dashboard-favorite mb-6">
    <h1 class="dashboard-fave_title mb-10">لیست علاقه مندی ها</h1>
    <div class="dashboard-fave_list">
      <Splide :options="type2" aria-label="first">
        <SplideSlide v-for="(item, i) in list" :key="i">
          <CardsFaveCard :items="item" />
        </SplideSlide>
      </Splide>
    </div>
    <div class="dashboard-similiar-product">
      <h1 class="dashboard-fave_title mb-10">لیست علاقه مندی ها</h1>
      <div class="dashboard-fave_list">
        <Splide :options="type2" aria-label="first">
          <SplideSlide v-for="(item, i) in list" :key="i">
            <CardsFaveCard :items="item" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
