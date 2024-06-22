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
      <img :src="items.img" alt="" class="w-100" />
    </div>
    <div class="card3-wrapper_like bg-primary-100 pa-4 rounded-circle">
      <span
        :class="isLike ? 'icon-heart-fill  text-red' : ' icon-heart-line'"
        role="button"
        @click="isLike = !isLike"
      ></span>
    </div>
    <div class="card3-wrapper_info">
      <div>
        <div class="card3-wrapper_info-title mb-3">{{ items.name }}</div>
        <div class="card3-wrapper_info-price">{{numberFormat(items.price)}} تومان</div>
      </div>
      <button class="bg-secondary-300  px-6 py-4 card3-wrapper_button" >مشاهده محصول</button >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
