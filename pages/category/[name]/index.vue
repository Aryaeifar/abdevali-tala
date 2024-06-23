<script setup>
const route = useRoute();
const items = [
  {
    title: "خانه",
    disabled: false,
    to: "/",
  },
  {
    title: "زنانه",
    disabled: true,
    to: "#",
  },
];
const productItem = ref(['نقره ای', 'طلایی']);
const productType = ref('نوع محصول');
const productBrand = ref('برند محصول');
const productAyar = ref('عیار محصول');
const productWeight = ref('وزن تقریبی');
const list = ref([
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link:'./womens/product'
  },
]);
</script>
<template>
  <div class="products px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="items" />
    <div class="products-filter d-none d-lg-block">
           <v-row>
        <v-col lg="3">
            <FormSelectbox v-model="productType" :items="productItem" bgColor="rgba(217, 217, 217, 0.09)" />
        </v-col>
         <v-col lg="3">
            <FormSelectbox v-model="productBrand" :items="productItem" bgColor="rgba(217, 217, 217, 0.09)" />
        </v-col>
         <v-col lg="3">
            <FormSelectbox v-model="productAyar" :items="productItem" bgColor="rgba(217, 217, 217, 0.09)"/>
        </v-col>
         <v-col lg="3">
            <FormSelectbox v-model="productWeight" :items="productItem" bgColor="rgba(217, 217, 217, 0.09)" />
        </v-col>
    </v-row>
    </div>
    <div class="products-items mt-8 mt-md-16">
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, i) in list" :key="i">
                <CardsCard4 :items="item" color="primary"  />
            </v-col>
        </v-row>
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>
