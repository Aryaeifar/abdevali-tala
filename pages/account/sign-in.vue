<script setup>
const route = useRoute();
const phoneSubmited = ref(false);
const isSigninLoading = ref(false);

const sendCode = () => {
  phoneSubmited.value = true;
};
const signin = () => {
  isSigninLoading.value = true;
};
</script>
<template>
  <div class="account">
    <div class="account-wrapper">
      <v-row no-gutters >
        <v-col cols="12" sm="6">
          <div class="account-wrapper_form">
            <h1 class="account-wrapper_form-title">ورود / ثبت نام</h1>
            <Transition mode="out-in">
              <div class="account-wrapper_form-content" v-if="!phoneSubmited">
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
                <div class="account-wrapper_form-actions">
                  <v-btn
                    color="primary"
                    height="3rem"
                    block
                    flat
                    @click="sendCode"
                  >
                    دریافت کد تایید
                  </v-btn>
                </div>
              </div>
              <div
                class="account-wrapper_form-content"
                v-else-if="phoneSubmited"
              >
                <div>
                  <div class="account-wrapper_form-label mb-6 me-3">
                    کد تایید را وارد کنید
                  </div>
                  <v-text-field
                    variant="outlined"
                    color="rgba(0, 0, 0, 0.2)"
                    bg-color="light"
                    flat
                    class="account-wrapper_form-input"
                  ></v-text-field>
                </div>
                <div class="account-wrapper_form-actions">
                  <v-btn
                    color="primary"
                    height="3rem"
                    block
                    flat
                    @click="signin"
                    :loading="isSigninLoading"
                  >
                    وارد شوید
                  </v-btn>
                </div>
              </div>
            </Transition>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="d-none d-sm-block">
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
  transition: all 0.4s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
