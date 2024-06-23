<script setup>
const route = useRoute();
const breadcrumb = [
  {
    title: "خانه",
    disabled: false,
    to: "/",
  },
  {
    title: "درباره ما",
    disabled: true,
    to: "#",
  },
];
</script>
<template>
  <div class="about px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="breadcrumb" />
    <div class="about-wrapper__firstPara mb-8 mb-md-10">
      <v-row>
        <v-col cols="12" sm="6">
          <div class="about-wrapper__img">
            <img src="@/assets/images/para1.png" alt="" class="w-100" />
            <div class="mask"></div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="about-wrapper__content">
            <div class="about-wrapper__content-title mb-3">درباره عبدولی</div>
            <p class="about-wrapper__content-text about-wrapper__content-text1">
              گالری طلا عبدولی با سابقه‌ی [تعداد سال] سال در صنعت طلا و جواهر،
              مفتخر است که با ارائه زیورآلاتی نفیس و باکیفیت، تجربه‌ای منحصر به
              فرد را برای مشتریان خود رقم بزند. ما در گالری عبدولی با اتکا به
              تخصص و ظرافت هنرمندان ایرانی، زیورآلاتی را خلق می‌کنیم که در عین
              زیبایی، ماندگار و ارزشمند باشند.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="about-wrapper__secondPara my-8 my-md-10">
      <v-row>
        <v-col cols="12" sm="6" class="order-2 order-sm-1">
          <div class="about-wrapper__content">
            <div class="about-wrapper__content-title mb-3">ارزش‌های ما</div>
            <p class="about-wrapper__content-text about-wrapper__content-text2">
              کیفیت: ما در گالری عبدولی بر استفاده از بهترین مواد اولیه و
              به‌کارگیری جدیدترین تکنیک‌های ساخت زیورآلات تأکید داریم.
            </p>
            <p class="about-wrapper__content-text about-wrapper__content-text2">
              تنوع: ما طیف گسترده‌ای از زیورآلات را در سبک‌های مختلف، از کلاسیک
              تا مدرن، ارائه می‌کنیم تا بتوانیم سلیقه‌ی هر مشتری را راضی کنیم.
            </p>
            <p class="about-wrapper__content-text about-wrapper__content-text2">
              خدمات مشتری: ما در گالری عبدولی به رضایت مشتریان خود اهمیت ویژه‌ای
              می‌دهیم و همواره در تلاشیم تا بهترین خدمات را به آن‌ها ارائه دهیم
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="order-1 order-sm-2">
          <div class="about-wrapper__img">
            <img src="@/assets/images/para2.png" alt="" class="w-100" />
            <div class="mask"></div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="about-wrapper__thirdPara my-8 my-md-10">
      <v-row>
        <v-col cols="12" sm="6">
          <div class="about-wrapper__img">
            <img src="@/assets/images/para3.png" alt="" class="w-100" />
            <div class="mask"></div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="about-wrapper__content">
            <div class="about-wrapper__content-title mb-3">خدمات ما</div>
            <p class="about-wrapper__content-text about-wrapper__content-text3">
              فروش زیورآلات طلا و جواهر: ما در گالری عبدولی انواع زیورآلات طلا و
              جواهر، از جمله گردنبند، دستبند، انگشتر، گوشواره و ... را به
              مشتریان خود ارائه می‌دهیم.
            </p>
            <p class="about-wrapper__content-text about-wrapper__content-text3">
              سفارش ساخت زیورآلات: شما می‌توانید با مراجعه به گالری عبدولی،
              زیورآلات مورد نظر خود را با طرح دلخواهتان سفارش دهید.
            </p>
            <p class="about-wrapper__content-text about-wrapper__content-text3">
              تعمیر و بازسازی زیورآلات: ما در گالری عبدولی خدمات تعمیر و بازسازی
              انواع زیورآلات طلا و جواهر را نیز ارائه می‌دهیم.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
