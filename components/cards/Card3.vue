<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
const isLike = ref(false)
</script>
<template>
  <div class="card2-wrapper">
    <div class="card2-wrapper_img">
      <img :src="items.img" alt="" class="w-100" />
      <div class="card2-wrapper_like bg-primary-100 pa-4 rounded-circle">
          <span :class="isLike ? 'icon-heart-fill  text-red' : ' icon-heart-line' " role="button" @click="isLike = !isLike"></span>
      </div>
    </div>
    <div class="pa-3 bg-primary card2-wrapper_content" >
        {{items.name}}
        <div class="d-flex justify-space-between card2-wrapper_price align-center">
            {{items.price}} تومان
            <v-btn class="bg-primary px-3 py-2 card2-wrapper_button" variant="tonal">افزودن به سبد خرید</v-btn>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
