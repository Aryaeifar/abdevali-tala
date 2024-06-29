<script setup>
const route = useRoute();
const breadcrumb = [
  {
    title: "خانه",
    disabled: false,
    to: "/",
  },
  {
    title: "داستان تو",
    disabled: true,
    to: "/story",
  },
];
</script>
<template>
  <div class="story px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="breadcrumb" />
    <div class="story-wrapper">
      <div class="story-wrapper_info">
        <p class="mb-6">به صفحه داستان تو خوش آمدید!</p>
        <p class="mb-6">
          در این فضای خلاقانه، شما نویسنده داستان خود هستید. تصور کنید که قلم،
          بوم نقاشی شماست و هر کلمه، ضربه‌ای از قلب شماست. اینجا، شما می‌توانید
          داستانی را که همیشه می‌خواستید بنویسید، به واقعیت تبدیل کنید. از
          ماجراجویی‌های هیجان‌انگیز گرفته تا لحظات آرام و عمیق، هر آنچه در ذهن
          دارید را به کلمات بیاندازید.
        </p>
        <p class="mb-6">
          وقتی داستان خود را نوشتید، ما آن را به طلایی تبدیل می‌کنیم که می‌تواند
          برای همیشه درخشش داشته باشد. با استفاده از تکنولوژی پیشرفته و دانش فنی
          ما، داستان شما از صفحه به واقعیت پیوند خواهد خورد.
        </p>
        <p class="mb-6">
          پس بیایید شروع کنیم. قلم‌ها را بردارید و داستان خود را با ما به اشتراک
          بگذارید. ما منتظر شنیدن داستان‌ شگفت‌انگیز شما هستیم!
        </p>
      </div>
      <div class="story-wrapper_img">
        <img src="@/assets/images/story-1.png" alt="" />
      </div>
      <div class="story-wrapper_form">
        <v-row>
          <v-col cols="12" md="6">
            <div class="d-flex align-center">
              <div class="story-wrapper_form-label mb-6 me-3">
                نام و نام خانوادگی
              </div>
              <v-text-field
                variant="outlined"
                density="compact"
                color="rgba(0, 0, 0, 0.2)"
                flat
                class="story-wrapper_form-input"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex align-center">
              <div class="story-wrapper_form-label mb-6 me-3">شماره تماس</div>
              <v-text-field
                variant="outlined"
                density="compact"
                color="rgba(0, 0, 0, 0.2)"
                flat
                class="story-wrapper_form-input"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="d-flex flex-column">
              <div class="story-wrapper_form-label mb-6 me-3">داستان تو</div>
              <v-textarea
                variant="outlined"
                color="rgba(0, 0, 0, 0.2)"
                flat
                class="story-wrapper_form-input"
              ></v-textarea>
            </div>
          </v-col>
        </v-row>
        <div class="story-wrapper_form-buttons">
          <v-btn color="Blue-100" flat> اضافه کردن فایل </v-btn>
          <v-btn color="primary" flat> ثبت داستان </v-btn>
        </div>
      </div>
      <div class="story-wrapper_after-submit">
        پس از ثبت داستان شما طی ۷۲ ساعت طراحان ما با شما تماس گرفته و طرح مخصوص شمارا برای ادامه کار با شما به اشتراک میگذارند
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
