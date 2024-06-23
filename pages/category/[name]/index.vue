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
</script>
<template>
  <div class="category px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="items" />
    <v-btn to="/category/womens/دستبند"> {{ route.params.name }} محصول </v-btn>
  </div>
</template>



<style lang="scss" scoped></style>
