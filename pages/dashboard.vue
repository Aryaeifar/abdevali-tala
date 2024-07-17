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

  { link: "/dashboard/ticket-inbox/open-ticket", name: "تیکت ها" },

  { link: "/dashboard/authentication", name: "احراز هویت" },
];
const isActive = (link) => route.path.startsWith(link);
</script>
<template>
  <div class="dashboard px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="breadcrumb" />
    <div class="dashboard-wrapper mb-8">
      <div class="dashboard-nav">
        <div class="dashboard-nav_profile">
          <div>
            <img src="@/assets/images/profile.png" alt="" class="" />
          </div>
          <div>ساغر طاهری</div>
        </div>
        <ul class="dashboard-nav_items">
          <li
            v-for="(item, i) in links"
            :key="i"
            :class="[
              'dashboard-nav_item ',
              isActive(item.link) ? 'active-dashboard-desk px-5 py-3' : '',
            ]"
          >
            <NuxtLink :to="item.link"> {{ item.name }} </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="dashboard-content w-100 py-2 px-10">
        <NuxtPage />
      </div>
    </div>
    <div class="dashboard-wrapper-responsive my-8">
      <v-sheet class="mx-auto" max-width="600">
        <v-slide-group show-arrows>
          <v-slide-group-item v-for="(item, i) in links" :key="i">
            <div :class="['dashboard-wrapper-res_tab-btn']" role="button">
              <NuxtLink
                :to="item.link"
                :class="isActive(item.link) ? 'text-Blue' : 'text-muted-500'"
                >{{ item.name }}
              </NuxtLink>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
      <div class="dashboard-content-res w-100">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
