<template>
  <div class="dashboard-auth mb-6">
    <h1 class="dashboard-auth_title mb-10">احراز هویت</h1>
    <div class="dashboard-auth_wrapper">
      <p class="dashboard-auth_wrapper-text mb-6">
        به بخش احراز هویت خوش آمدید!
      </p>
      <p class="dashboard-auth_wrapper-text mb-6">
         لطفاً اطلاعات زیر را برای تأیید هویت خود وارد کنید.
      </p>
      <div class="dashboard-auth_wrapper-input mb-6">
        <label for="idCard">شماره کارت ملی</label>
        <input type="text" id="idCard" name="idCard" />
      </div>
      <div class="dashboard-auth_wrapper-input mb-6">
        <label for="bankCard">شماره کارت بانکی</label>
        <input type="text" id="bankCard" name="bankCard" />
      </div>
      <div class="dashboard-auth_wrapper-input-expire mb-6">
        <label for="">تاریخ انقضاء کارت بانکی (ماه/سال)</label>
        <div class="dashboard-auth_wrapper-expire-inputs">
          <input type="text" class="dashboard-auth_wrapper-expire-input" />
          <span class="icon-line"></span>
          <input type="text" class="dashboard-auth_wrapper-expire-input" />
        </div>
      </div>
      <div class="dashboard-auth_wrapper-upload d-flex justify-space-between mb-6">
        <p class="dashboard-auth_wrapper-text mb-6">
          پس از وارد کردن اطلاعات، لطفاً عکس‌های واضحی از کارت ملی و کارت بانکی
          خود را آپلود کنید.
        </p>
        <v-btn flat class="dashboard-auth_wrapper-upload-btn px-6" color="Blue-100" height="3rem">
            آپلود عکس <span class="icon-file ms-2"></span>
        </v-btn>
      </div>
      <div class=" mb-6">
        <p class="dashboard-auth_wrapper-text">
         <span class="text-red" >توجه</span>: اطلاعات شما با استانداردهای امنیتی بالا محافظت می‌شود و تنها برای احراز هویت شما استفاده خواهد شد.
        </p>
      </div>
      <v-btn flat color="Blue-100" height="3rem" class="px-6 dashboard-send-button">
        ارسال اطلاعات
      </v-btn>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
