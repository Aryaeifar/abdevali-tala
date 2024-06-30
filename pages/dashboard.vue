<script setup>
const route = useRoute();

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
  },
];
const links = [
  { link: "/dashboard/orders-list", name: "سفارشات" },
  { link: "/dashboard/info", name: "مشخصات شما" },
  { link: "/dashboard/favorite", name: "علاقه مندی ها" },

  { link: "/dashboard/send-ticket", name: "ارسال تیکت" },

  { link: "/dashboard/ticket-inbox", name: "تیکت ها" },

  { link: "/dashboard/authentication", name: "احراز هویت" },
];
</script>
<template>
  <div class="dashboard px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="breadcrumb" />
    <div class="dashboard-wrapper mb-8">
      <div class="dashboard-nav">
        <div class="dashboard-nav_profile">
          <div>
            <img src="@/assets/images/profile.png" alt="" class="">
          </div>
          <div>ساغر طاهری</div>
        </div>
        <ul class="dashboard-nav_items">
          <li
            v-for="(item, i) in links"
            :key="i"
            :class="[
              'dashboard-nav_item ',
              route.path === item.link ? 'active-dashboard-desk pa-3' : '',
            ]"
          >
            <NuxtLink :to="item.link"> {{ item.name }} </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="dashboard-content w-100 py-16 px-10">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
