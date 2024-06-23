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
  <div class="card4-wrapper">
    <div class="card4-wrapper_img">
      <img :src="items.img" alt="" class="w-100" />
    </div>
    <div class="card4-wrapper_like bg-primary-100 pa-4 rounded-circle">
      <span
        :class="isLike ? 'icon-heart-fill  text-red' : ' icon-heart-line'"
        role="button"
        @click="isLike = !isLike"
      ></span>
    </div>
    <div class="card4-wrapper_info">
      <div class="card4-wrapper_info-title mb-3 ms-6">{{ items.name }}</div>

      <div class="d-flex align-center justify-space-around">
        <div class="card4-wrapper_info-price">
          {{ numberFormat(items.price) }} تومان
        </div>
        <v-btn
          color="secondary"
          height="3rem"
          class=" px-5 card4-wrapper_button"
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
