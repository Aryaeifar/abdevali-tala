<template>
  <div class="dashboard-auth mb-6">
    <h1 class="dashboard-auth_title mb-10">احراز هویت</h1>
    <div class="dashboard-auth_wrapper">
      <p class="dashboard-auth_wrapper-text mb-6">
        به بخش احراز هویت خوش آمدید!
      </p>
      <p class="dashboard-auth_wrapper-text mb-10">
         لطفاً اطلاعات زیر را برای تأیید هویت خود وارد کنید.
      </p>
      <v-row class="dashboard-auth_inputs">
        <v-col cols="4" sm="3" lg="2">
          <label for="idCard" class="dashboard-auth-label"
            >شماره کارت ملی</label
          >
        </v-col>
        <v-col cols="8" sm="9" lg="4">
          <input
            type="text"
            id="idCard"
            name="idCard"
            class="dashboard-auth-input"
          />
        </v-col>
      </v-row>
      <v-row class="dashboard-auth_inputs">
        <v-col cols="4" sm="3" lg="2">
          <label for="idbankCardCard" class="dashboard-auth-label"
            >شماره کارت بانکی</label
          >
        </v-col>
        <v-col cols="8" sm="9" lg="4">
          <input
            type="text"
            id="bankCard"
            name="bankCard"
            class="dashboard-auth-input"
          />
        </v-col>
      </v-row>
      <v-row class="dashboard-auth_inputs mb-6">
        <v-col cols="8" sm="5" lg="3">
          <label for="idCard" class="dashboard-auth-label"
            >تاریخ انقضاء کارت بانکی (ماه/سال)</label
          >
        </v-col>
        <v-col cols="12" sm="7" lg="3">
          <div class="dashboard-auth-input-expire">
            <input
              type="text"
              id="month"
              name="month"
              class="input-field"
              maxlength="2"
              v-model="input1"
              @input="handleInput(1)"
            />
            <span class="icon-line"></span>
            <input
              type="text"
              id="year"
              name="year"
              class="input-field"
              maxlength="2"
              v-model="input2"
              @input="handleInput(2)"
            />
          </div>
        </v-col>
      </v-row>
      <div
        class="dashboard-auth_wrapper-upload d-flex flex-column flex-lg-row justify-space-between mb-6"
      >
        <p class="dashboard-auth_wrapper-text dashboard-auth_wrapper-up-text mb-6">
          پس از وارد کردن اطلاعات، لطفاً عکس‌های واضحی از کارت ملی و کارت بانکی
          خود را آپلود کنید.
        </p>
        <v-btn
          flat
          class="dashboard-auth_wrapper-upload-btn px-6"
          color="Blue-100"
          height="3rem"
          width="9rem"
        >
          آپلود عکس <span class="icon-file ms-2"></span>
        </v-btn>
      </div>
      <div class="mb-6">
        <p class="dashboard-auth_wrapper-text dashboard-auth_wrapper-up-text" >
          <span class="text-red">توجه</span>: اطلاعات شما با استانداردهای امنیتی
          بالا محافظت می‌شود و تنها برای احراز هویت شما استفاده خواهد شد.
        </p>
      </div>
      <v-btn
        flat
        color="Blue-100"
        height="3rem"
        class="px-6 dashboard-send-button"
      >
        ارسال اطلاعات
      </v-btn>
    </div>
  </div>
</template>

<script setup>
const input1 = ref('');
const input2 = ref('');
const handleInput = (inputNumber) => {
  if (inputNumber === 1 && input1.value.length >= 2) {
    document.querySelectorAll('.input-field')[1].focus();
  } else if (inputNumber === 2 && input2.value.length >= 2) {
    console.log('You reached the last input. Good job!');
  }
};
onMounted(() => {
  document.querySelector('.input-field').focus();
});
</script>

<style lang="scss" scoped></style>
