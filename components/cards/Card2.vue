<script setup>
const { $flashMsg } = useNuxtApp();
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  color: {
    type: String,
  },
});
const isLoading = ref(false);
const numberFormat = (money) => {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1،");
};
const addToCart = () => {
  $flashMsg.success({
    text: ` به لیست سفارشات اضافه شد.`,
  });
};
const addToFave = () => {
  props.items.like = !props.items.like;
  if (props.items.like) {
    $flashMsg.success({
      text: `به لیست علاقه مندی ها اضافه شد.`,
    });
  } else {
    $flashMsg.error({
      text: `از لیست علاقه مندی ها حذف شد.`,
    });
  }
};
</script>
<template>
  <div class="card2-wrapper">
    <div class="card2-wrapper_img">
      <img :src="items.img" :alt="items.name" class="w-100" />
      <div class="card2-wrapper_like bg-primary-100 pa-4 rounded-circle">
        <span
          :class="items.like ? 'icon-heart-fill  text-red' : ' icon-heart-line'"
          role="button"
          @click="addToFave"
        ></span>
      </div>
    </div>
    <div :class="'pa-3  card2-wrapper_content bg-' + color">
      {{ items.name }}
      <div
        class="d-flex justify-space-between card2-wrapper_price align-center"
      >
        {{ numberFormat(items.price) }} تومان
        <v-btn
          class="bg-primary px-3 py-2 card2-wrapper_button"
          variant="tonal"
          :loading="isLoading"
          @click="addToCart"
          >افزودن به سبد خرید</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
