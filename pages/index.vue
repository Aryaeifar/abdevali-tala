<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
const type1 = ref({
  type: "loop",
  rewind: true,
  gap: "1rem",
  direction: "rtl",
  perPage: 6,
  gap: 30,
  pagination: false,
  arrows: false,
  breakpoints: {
    540: {
      perPage: 2,
      gap: 15,
    },
    640: {
      perPage: 3,
      padding: { left: "3rem", right: "0" },
    },
    1020: {
      perPage: 4,
    },
  },
});

const type2 = ref({
  type: "loop",
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
      padding: { left: "3rem", right: "0" },
    },
    1020: {
      perPage: 3,
    },
  },
});

const items = ref([
  { name: "دستبند", img: "./assets/images/img1.png" },
  { name: "انگشتر", img: "./assets/images/img2.png" },
  { name: "گوشواره", img: "./assets/images/img3.png" },
  { name: "گردنبند", img: "./assets/images/img4.png" },
  { name: "سرویس", img: "./assets/images/img5.png" },
  { name: "اکسسوری", img: "./assets/images/img6.png" },
]);
const topBrands = ref([
  { name: "تیفانی", img: "./assets/images/brand1.png" },
  { name: "شوپارد", img: "./assets/images/brand2.png" },
  { name: "سافایر", img: "./assets/images/brand3.png" },
  { name: "می کی می تو", img: "./assets/images/brand4.png" },
  { name: "بوچورن", img: "./assets/images/brand5.png" },
  { name: "کارتیر", img: "./assets/images/brand6.png" },
]);

const mostSales = ref([
  { name: "دستبند جتاش", img: "./assets/images/sale1.png", price: "46900000" },
  {
    name: "پلاک مادرفرزند",
    img: "./assets/images/sale2.png",
    price: "46900000",
  },
  { name: "پلاک پاپیلون", img: "./assets/images/sale3.png", price: "46900000" },
  {
    name: "انگشتر سافایر",
    img: "./assets/images/sale4.png",
    price: "46900000",
  },
]);
const newest = ref([
  { name: "دستبند جتاش", img: "./assets/images/sale1.png", price: "46900000" },
  {
    name: "پلاک مادرفرزند",
    img: "./assets/images/sale2.png",
    price: "46900000",
  },
  { name: "پلاک پاپیلون", img: "./assets/images/sale3.png", price: "46900000" },
  {
    name: "انگشتر سافایر",
    img: "./assets/images/sale4.png",
    price: "46900000",
  },
]);
</script>
<template>
  <div class="landing px-4 px-lg-16 py-2 mt-0 mt-lg-4">
    <div>
      <v-row>
        <v-col cols="12" lg="7" sm="8">
          <div class="h-100 position-relative">
            <img
                src="../assets/images/image1.png"
                alt="jwelery-abdevali"
                class="w-100 h-100 landing-top-box_img"
              />
              <div class="landing-top-box_title">
                <div class="mb-3 mb-md-6">عبدولی</div>
                <div class="">گنجینه ای از ظرافت و زیبایی</div>
              </div>
          </div>
        </v-col>
        <v-col cols="3" lg="3" sm="4" class="d-none d-sm-block">
          <div class="h-100">
            <img
              src="../assets/images/image2.png"
              alt="jwelery-abdevali"
              class="w-100 h-100"
            />
          </div>
        </v-col>
        <v-col cols="2" lg="2" class="d-none d-lg-block">
          <div class="h-100">
            <img
              src="../assets/images/image3.png"
              alt="jwelery-abdevali"
              class="w-100 h-100"
            />
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mt-8 mt-md-16">
      <Splide :options="type1" aria-label="first">
        <SplideSlide v-for="(item, i) in items" :key="i">
          <CardsCard1 :items="item" />
        </SplideSlide>
      </Splide>
    </div>
    <div class="mt-8 mt-md-16">
      <h1 class="category_title">پر فروش ترین ها</h1>
      <Splide :options="type2" aria-label="Most sales">
        <SplideSlide v-for="(item, i) in mostSales" :key="i">
          <CardsCard2 :items="item" color="muted-100" />
        </SplideSlide>
      </Splide>
    </div>
    <div class="mt-8 mt-md-16">
      <div class="poster-wrapper">
        <img
          src="../assets/images/poster-1.png"
          alt="jwelery-abdevali"
          class="w-100"
        />
        <div class="poster-wrapper_text">
          با عشق هدیه بده، با جواهرات عبدولی خاطره بساز!
        </div>
        <div class="mask"></div>
      </div>
    </div>
    <div class="mt-8 mt-md-16">
      <h1 class="category_title">جدیدترین ها</h1>
      <Splide :options="type2" aria-label="Most sales">
        <SplideSlide v-for="(item, i) in newest" :key="i">
          <CardsCard2 :items="item" color="muted-100" />
        </SplideSlide>
      </Splide>
    </div>
    <div class="mt-8 mt-md-16">
      <Splide :options="type1" aria-label="first">
        <SplideSlide v-for="(item, i) in topBrands" :key="i">
          <CardsCard1 :items="item" />
        </SplideSlide>
      </Splide>
    </div>
    <div class="my-8 my-md-16">
      <div class="poster-wrapper">
        <img
          src="../assets/images/poster2.png"
          alt="jwelery-abdevali"
          class="w-100"
        />
        <div class="poster-wrapper_text2">بهترین روزت رو تا ابد ماندگار کن</div>
        <div class="poster-wrapper_text3">خاص ترین حلقه ها برای شما</div>
        <div class="mask"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
