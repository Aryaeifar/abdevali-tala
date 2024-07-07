<template>
  <div class="dashboard-send-ticket mb-6">
    <h1 class="dashboard-send-ticket_title mb-10">ارسال تیکت</h1>
    <div class="dashboard-send_wrapper">
      <div class="dashboard-send_subject">
        <div class="dashboard-send_subject-title mb-4">موضوع تیکت</div>
        <div class="dahsboard-send_subject-input">
          <input type="text" class="bg-light" />
        </div>
      </div>
      <div class="dashboard-send_text">
        <div class="dashboard-send_subject-text mb-4">موضوع تیکت</div>
        <div class="dahsboard-send_subject-text-input">
          <textarea type="text" class="bg-light" rows="10"></textarea>
        </div>
      </div>
      <div class="d-flex justify-space-between mt-6">
        <v-btn flat class="dashboard-send_upload-btn" color="Blue-100" height="3rem">
          آپلود عکس <span class="icon-file ms-2"></span>
        </v-btn>
        <v-btn class="dashboard-send_button" color="primary" height="3rem"flat>ارسال</v-btn>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped></style>
