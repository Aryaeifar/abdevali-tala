<template>
  <div class="dashboard-ticket-inbox mb-6">
    <h1 class="dashboard-ticket-inbox_title mb-10">تیکت ها</h1>
    <div class="dashboard-inbox_tabs">
      <v-row class="align-center">
        <v-col cols="4">
          <div class="dashboard-inbox_tabs-item">
            <NuxtLink to="/dashboard/ticket-inbox/open-ticket"> باز </NuxtLink>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="dashboard-inbox_tabs-item">
            <NuxtLink to="/dashboard/ticket-inbox/close-ticket">
              بسته شده
            </NuxtLink>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="dashboard-inbox_tabs-item">
            <NuxtLink to="/dashboard/ticket-inbox/answered-ticket">
              پاسخ داده شده
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
