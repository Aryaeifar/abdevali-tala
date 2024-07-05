<template>
  <div class="editable-input">
    <input type="text" :placeholder="placeHolder" class="editable-input_input" :disabled="isDisable" />
    <v-btn flat color="primary" class="editable-input_btn" @click="isDisable = !isDisable">{{ isDisable ? 'تغییر' : 'ثبت' }}</v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  placeHolder: {
    type: String,
  },
});
const isDisable = ref(true)
</script>

<style lang="scss" scoped></style>
