<script setup>
const breadcrumb = [
  {
    title: "خانه",
    disabled: false,
    to: "/",
  },
  {
    title: "سوالات متداول",
    disabled: true,
    to: "#",
  },
];
const accordionItems = [
  {
    title: "چه نوع طلا و جواهراتی در گالری طلا عبدولی به فروش می رسد؟",
    content: "گالری طلا عبدولی طیف گسترده ای از طلا و جواهرات را از جمله گردنبند، دستبند، گوشواره، انگشتر، سنجاق سینه و غیره ارائه می دهد. ما همچنین مجموعه ای از جواهرات الماس، زمرد، یاقوت و سایر سنگ های قیمتی را به فروش می رسانیم.",
  },
  {
    title: "آیا می توانم جواهرات سفارشی سفارش دهم؟",
    content: "گالری طلا عبدولی طیف گسترده ای از طلا و جواهرات را از جمله گردنبند، دستبند، گوشواره، انگشتر، سنجاق سینه و غیره ارائه می دهد. ما همچنین مجموعه ای از جواهرات الماس، زمرد، یاقوت و سایر سنگ های قیمتی را به فروش می رسانیم.",
  },
  { title: "چه روش های پرداختی را می پذیرید؟", content: "گالری طلا عبدولی طیف گسترده ای از طلا و جواهرات را از جمله گردنبند، دستبند، گوشواره، انگشتر، سنجاق سینه و غیره ارائه می دهد. ما همچنین مجموعه ای از جواهرات الماس، زمرد، یاقوت و سایر سنگ های قیمتی را به فروش می رسانیم." },
  { title: "آیا خرید آنلاین امن است؟", content: "گالری طلا عبدولی طیف گسترده ای از طلا و جواهرات را از جمله گردنبند، دستبند، گوشواره، انگشتر، سنجاق سینه و غیره ارائه می دهد. ما همچنین مجموعه ای از جواهرات الماس، زمرد، یاقوت و سایر سنگ های قیمتی را به فروش می رسانیم." },

  { title: "سفارشات من چگونه ارسال می شوند؟", content: "گالری طلا عبدولی طیف گسترده ای از طلا و جواهرات را از جمله گردنبند، دستبند، گوشواره، انگشتر، سنجاق سینه و غیره ارائه می دهد. ما همچنین مجموعه ای از جواهرات الماس، زمرد، یاقوت و سایر سنگ های قیمتی را به فروش می رسانیم." },

  {
    title: "چه مدت طول می کشد تا سفارش من تحویل داده شود؟",
    content: "گالری طلا عبدولی طیف گسترده ای از طلا و جواهرات را از جمله گردنبند، دستبند، گوشواره، انگشتر، سنجاق سینه و غیره ارائه می دهد. ما همچنین مجموعه ای از جواهرات الماس، زمرد، یاقوت و سایر سنگ های قیمتی را به فروش می رسانیم.",
  },
];
</script>
<template>
  <div class="faq px-4 px-lg-16 py-2">
    <WidgetsBreadcrumb :items="breadcrumb" />
    <div class="faq-wrapper mb-8 mb-md-16">
      <WidgetsExpansion :items="accordionItems" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
