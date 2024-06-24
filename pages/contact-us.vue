<script setup>
const breadcrumb = [
  {
    title: "خانه",
    disabled: false,
    to: "/",
  },
  {
    title: "تماس با ما",
    disabled: true,
    to: "#",
  },
];
</script>

<template>
  <div class="contact px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="breadcrumb" />
    <div class="contact-wrapper my-8 my-md-16">
      <v-row class="custom-gap">
        <v-col cols="12" md="4">
          <div class="contact-wrapper_card">
            <div class="contact-wrapper_card-icon">
              <span class="icon-location"></span>
            </div>
            آدرس: ساری ، خیابان انقلاب، بازار نرگسیه ، نبش پاساژ سجاد
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="contact-wrapper_card">
            <div class="contact-wrapper_card-icon">
              <span class="icon-phone"></span>
            </div>
            شماره تماس: ۰۱۱۳۳۳۲۴۱۸۰
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="contact-wrapper_card">
            <div class="contact-wrapper_card-icon">
              <span class="icon-instagram"></span>
            </div>
            اینستاگرام: abdevali.jewelry
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="map my-8 my-md-16">
      <div class="category_title">آدرس گالری رو نقشه</div>
      <div class="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51278.806351145104!2d53.03124920537781!3d36.55591171304011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f853fe39b5048f1%3A0x2a0a7b627a732bbe!2sSari%2C%20Mazandaran%20Province%2C%20Iran!5e0!3m2!1sen!2snl!4v1719224054786!5m2!1sen!2snl"
          width="100%"
          height="450"
          style="border: 0; border-radius:38px;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
