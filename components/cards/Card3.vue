<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
const isLike = ref(false);
const numberFormat = (money) => {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1،");
};
</script>
<template>
  <div class="card3-wrapper">
    <div class="card3-wrapper_img">
      <img :src="items.img" :alt="items.name" class="w-100" />
    </div>
    <div class="card3-wrapper_like bg-primary-100 pa-4 rounded-circle">
      <span
        :class="isLike ? 'icon-heart-fill  text-red' : ' icon-heart-line'"
        role="button"
        @click="isLike = !isLike"
      ></span>
    </div>
    <div class="card3-wrapper_info">
      <div class="card3-wrapper_info-title mb-3">{{ items.name }}</div>

      <div class="d-flex align-center justify-space-between">
        <div class="card3-wrapper_info-price">
          {{ numberFormat(items.price) }} تومان
        </div>
        <v-btn
          color="secondary-300 px-8 card3-wrapper_button"
          height="3rem"
          flat
          :to="items.link"
        >
          مشاهده محصول
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
