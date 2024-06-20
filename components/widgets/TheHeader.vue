<script setup>
const searchInput = ref(null)
const expandInput = () => {
  searchInput.value.style.width = '17rem'
}

const shrinkInput = () => {
  searchInput.value.style.width = '13rem'
}
</script>
<template>
    <nav class="main-header d-flex justify-space-between align-center px-4 px-lg-16 py-6 ">
        <div class="main-header_nav-links d-none d-md-block">
            <ul>
                <li class="main-header_nav-links-li">
                    <NuxtLink to="#">
                        خانه
                    </NuxtLink>
                </li>
                <li class="main-header_nav-links-li">
                     <NuxtLink to="#">
                        زنانه
                    </NuxtLink>
                </li>
                <li class="main-header_nav-links-li">
                     <NuxtLink to="#">
                        مردانه
                    </NuxtLink>
                </li>
                <li class="main-header_nav-links-li">
                     <NuxtLink to="#">
                        هدیه
                    </NuxtLink>
                </li>
                <li class="main-header_nav-links-li">
                     <NuxtLink to="#">
                        داستان تو
                    </NuxtLink>
                </li>
                <li class="main-header_nav-links-li">
                     <NuxtLink to="#">
                        تماس با ما
                    </NuxtLink>
                </li>
                <li class="main-header_nav-links-li">
                     <NuxtLink to="#">
                        درباره ما
                    </NuxtLink>
                </li>
                <li class="main-header_nav-links-li">
                     <NuxtLink to="#">
                        وبلاگ
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <span class="icon-menu d-block d-md-none" role="button"></span>
        <div class="main-header_items"> 
            <div class="main-header_search">
                <input class="pa-3 pe-10" type="text"   @focus="expandInput" ref="searchInput"  @blur="shrinkInput" placeholder="جستجو کنید...">
                <span class="icon-search"></span>
            </div>
             <NuxtLink to="#"> <span class="icon-cart main-header_items-icon"></span></NuxtLink>
             <NuxtLink to="#"> <span class="icon-user main-header_items-icon"></span></NuxtLink>
        </div>
    </nav>
</template>



<style lang="scss" scoped>

</style>