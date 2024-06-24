<script setup>
const searchInput = ref(null);
// const expandInput = () => {
//   searchInput.value.style.width = '17rem'
// }
const expandInput = () => {
  if (window.innerWidth <= 430) {
    searchInput.value.style.width = "15rem";
  } else {
    searchInput.value.style.width = "17rem";
  }
};
const shrinkInput = () => {
  searchInput.value.style.width = "11rem";
};
const drawer = ref(false);
// const drawer =  ref(null)
</script>
<template>
  <nav
    class="main-header d-flex justify-space-between align-center px-4 px-lg-16 py-6"
  >
    <div class="main-header_nav-links d-none d-md-block">
      <ul>
        <li class="main-header_nav-links-li">
          <NuxtLink to="/"> خانه </NuxtLink>
        </li>
        <li class="main-header_nav-links-li">
          <NuxtLink to="/category/womens"> زنانه </NuxtLink>
        </li>
        <li class="main-header_nav-links-li">
          <NuxtLink to="/category/mens"> مردانه </NuxtLink>
        </li>
        <li class="main-header_nav-links-li">
          <NuxtLink to="#"> هدیه </NuxtLink>
        </li>
        <li class="main-header_nav-links-li">
          <NuxtLink to="#"> داستان تو </NuxtLink>
        </li>
        <li class="main-header_nav-links-li">
          <NuxtLink to="contact-us"> تماس با ما </NuxtLink>
        </li>
        <li class="main-header_nav-links-li">
          <NuxtLink to="/about-us"> درباره ما </NuxtLink>
        </li>
        <li class="main-header_nav-links-li">
          <NuxtLink to="#"> وبلاگ </NuxtLink>
        </li>
      </ul>
    </div>
    <span
      class="icon-menu d-block d-md-none"
      role="button"
      @click.stop="drawer = !drawer"
    >
    </span>
    <div class="main-header_items">
      <div class="main-header_search">
        <input
          class="pa-3 pe-10"
          type="text"
          @focus="expandInput"
          ref="searchInput"
          @blur="shrinkInput"
          placeholder="جستجو کنید..."
        />
        <span class="icon-search"></span>
      </div>
      <NuxtLink to="#">
        <span class="icon-cart main-header_items-icon"></span
      ></NuxtLink>
      <NuxtLink to="#">
        <span class="icon-user main-header_items-icon"></span
      ></NuxtLink>
    </div>
  </nav>
  <transition>
    <div v-if="drawer" class="sidebar">
      <span
        class="icon-x px-5"
        role="button"
        @click.stop="drawer = !drawer"
      ></span>

      <v-list density="compact" nav class="mt-2">
        <v-list-item title="خانه" value="خانه" to="/" @click.stop="drawer = !drawer" ></v-list-item>
        <v-list-item title="مردانه" value="مردانه" @click.stop="drawer = !drawer"></v-list-item>
        <v-list-item title="زنانه" value="زنانه" to="/category/womens" @click.stop="drawer = !drawer"></v-list-item>
        <v-list-item title="هدیه" value="هدیه" @click.stop="drawer = !drawer"></v-list-item>
        <v-list-item title="داستان تو" value="داستان تو" @click.stop="drawer = !drawer"></v-list-item>
        <v-list-item title="تماس با ما" value="تماس با ما" to="contact-us" @click.stop="drawer = !drawer"></v-list-item>
        <v-list-item title="درباره ما" value="درباره ما" to="about-us" @click.stop="drawer = !drawer"></v-list-item>
        <v-list-item title="وبلاگ" value="وبلاگ" @click.stop="drawer = !drawer"></v-list-item>
      </v-list>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
