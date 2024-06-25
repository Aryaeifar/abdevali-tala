<script setup>
const breadcrumb = [
  {
    title: "خانه",
    disabled: false,
    to: "/",
  },
  {
    title: "پنل کاربری",
    disabled: true,
    to: "#",
  }
];
</script>
<template>
    <div class="dashboard px-4 px-lg-16 py-2">
            <WidgetsBreadcrumb :items="breadcrumb" />
        
    </div>
</template>



<style lang="scss" scoped>

</style>