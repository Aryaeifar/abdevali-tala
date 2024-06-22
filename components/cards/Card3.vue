<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
const isLike = ref(false);
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
        <div class="card3-wrapper_info-price">{{ items.price }} تومان</div>
      </div>
      <button class="bg-secondary-300  px-3 py-2 card3-wrapper_button" >مشاهده محصول</button >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
