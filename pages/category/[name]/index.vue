<script setup>
const route = useRoute();
const items = [
  {
    title: "خانه",
    disabled: false,
    to: "/",
  },
  {
    title: route.params.name,
    disabled: true,
    to: "#",
  },
];
const productItem = ref(["نقره ای", "طلایی"]);
const productType = ref("نوع محصول");
const productBrand = ref("برند محصول");
const productAyar = ref("عیار محصول");
const productWeight = ref("وزن تقریبی");
// Function to run when any of the select boxes change
const handleInputChange = (value, name) => {
  console.log(`${name} changed to ${value}`);
  // Add your logic here
};

// Watch for changes on each of the reactive variables
watch(productType, (newValue) => {
  handleInputChange(newValue, "productType");
});

watch(productBrand, (newValue) => {
  handleInputChange(newValue, "productBrand");
});

watch(productAyar, (newValue) => {
  handleInputChange(newValue, "productAyar");
});

watch(productWeight, (newValue) => {
  handleInputChange(newValue, "productWeight");
});
const list = ref([
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند مادر و فرزند",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "انگشتر سافایر",
    img: "../../assets/images/similar-2.png",
    price: "46900000",
    link: "./womens/product",
  },
  {
    name: "گردنبند  پاپیلون",
    img: "../../assets/images/similar-2.png",
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
  
  <div class="products px-4 px-lg-16 py-2">
    <!-- <div class="isloading-page">
    <span class="loader"></span>
  </div> -->
    <WidgetsBreadcrumb :items="items" />
    <div class="products-filter d-none d-lg-block">
      <v-row>
        <v-col lg="3">
          <FormSelectbox
            v-model="productType"
            :items="productItem"
            bgColor="rgba(217, 217, 217, 0.09)"
            dropDownbgColor="rgba(217, 217, 217, .9)"
          />
        </v-col>
        <v-col lg="3">
          <FormSelectbox
            v-model="productBrand"
            :items="productItem"
            bgColor="rgba(217, 217, 217, 0.09)"
            dropDownbgColor="rgba(217, 217, 217, .9)"
          />
        </v-col>
        <v-col lg="3">
          <FormSelectbox
            v-model="productAyar"
            :items="productItem"
            bgColor="rgba(217, 217, 217, 0.09)"
            dropDownbgColor="rgba(217, 217, 217, .9)"
          />
        </v-col>
        <v-col lg="3">
          <FormSelectbox
            v-model="productWeight"
            :items="productItem"
            bgColor="rgba(217, 217, 217, 0.09)"
            dropDownbgColor="rgba(217, 217, 217, .9)"
          />
        </v-col>
      </v-row>
    </div>
    <div class="products-items my-0 my-md-10">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(item, i) in list"
          :key="i"
        >
          <CardsCard4 :items="item" color="primary" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
