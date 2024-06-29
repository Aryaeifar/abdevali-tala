<script setup>
const route = useRoute();
const phoneSubmited = ref(false);
const sendCode = () => {
  phoneSubmited.value = true;
};
</script>
<template>
  <div class="account">
    <div class="account-wrapper">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <div class="account-wrapper_form">
            <h1 class="account-wrapper_form-title">ورود</h1>
            <div class="account-wrapper_form-content">
              <div>
                <div class="account-wrapper_form-label mb-6 me-3">
                  شماره تماس خود را وارد کنید
                </div>
                <v-text-field
                  variant="outlined"
                  color="rgba(0, 0, 0, 0.2)"
                  bg-color="light"
                  flat
                  class="account-wrapper_form-input"
                ></v-text-field>
              </div>
              <Transition>
                <div class="account-wrapper-forn-otp" v-if="phoneSubmited">
                  <v-otp-input></v-otp-input>
                </div>
              </Transition>
              <div class="account-wrapper_form-actions">
                <v-btn color="primary" flat @click="sendCode"> ارسال کد </v-btn>
              </div>
              <div class="account-wrapper_form-actions">
                <v-btn color="primary" flat> ورود </v-btn>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="account-wrapper_img">
            <img src="@/assets/images/blog-5.png" alt="" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}</style>
