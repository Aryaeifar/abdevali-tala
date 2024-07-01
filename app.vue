<script setup></script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="rgb(245, 125, 129, var(--color-opacity))"
      :height="5"
      :throttle="5000"
    />

    <v-app>
      <WidgetsTheTopBar />
      <div class="layout-wrapper">
        <WidgetsTheHeader />
        <main>
          <NuxtPage />
        </main>
        <WidgetsTheFooter />
      </div>
    </v-app>
  </NuxtLayout>
</template>
<style>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
