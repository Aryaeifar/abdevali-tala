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
  <div class="faveCard-wrapper">
    <div class="faveCard-wrapper_img">
      <img :src="items.img" :alt="items.name" class="w-100" />
    </div>
    <div class="faveCard-wrapper_like bg-primary-100 pa-3 rounded-circle">
      <span
        :class="isLike ? 'icon-heart-fill  text-red' : ' icon-heart-line'"
        role="button"
        @click="isLike = !isLike"
      ></span>
    </div>
    <div class="faveCard-wrapper_info">
      <div class="faveCard-wrapper_info-title mb-1">{{ items.name }}</div>

      <div class="d-flex align-center justify-space-between">
        <div class="faveCard-wrapper_info-price">
          {{ numberFormat(items.price) }} تومان
        </div>
        <v-btn
          color="primary"
          height="2rem"
          class=" px-3 faveCard-wrapper_button"
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
