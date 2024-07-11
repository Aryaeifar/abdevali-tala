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
  <div class="giftCard-wrapper">
    <div class="giftCard-wrapper_img">
      <img :src="items.img" :alt="items.name" class="w-100" />
    </div>
    <div class="giftCard-wrapper_info">
      <div class="giftCard-wrapper_info-title mb-1">{{ items.name }}</div>

      <div class="d-flex align-center justify-space-between">
        <div class="giftCard-wrapper_info-price">
          {{ numberFormat(items.price) }} تومان
        </div>
        <v-btn
          color="light"
          height="2rem"
          class="px-3 giftCard-wrapper_button"
          flat
        >
          انتخاب
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
