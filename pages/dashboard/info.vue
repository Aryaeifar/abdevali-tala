<template>
    <div class="dashboard-info">
        <h1 class="dashboard-info_title">مشخصات کاربر</h1> 
        <v-row>
            <v-col cols="12" lg="6">
                <div class="d-flex flex-column flex-lg-row align-start align-lg-center dashboard-info_item-label ma-lg-4">
                    نام
                    <WidgetsEditableInput />
                </div>
            </v-col>
            <v-col cols="12" lg="6">
                <div class="d-flex flex-column flex-lg-row align-start align-lg-center dashboard-info_item-label ma-lg-4">
                    نام خانوادگی
                    <WidgetsEditableInput />
                </div>
            </v-col>
            <v-col cols="12" lg="6">
                <div class="d-flex flex-column flex-lg-row align-start align-lg-center dashboard-info_item-label ma-lg-4">
                    آدرس ثبت شده
                    <WidgetsEditableInput />
                </div>
            </v-col>
            <v-col cols="12" lg="6">
                <div class="d-flex flex-column flex-lg-row align-start align-lg-center dashboard-info_item-label ma-lg-4">
                    شماره تماس
                    <WidgetsEditableInput />
                </div>
            </v-col>
            <v-col cols="12" lg="6">
                <div class="d-flex flex-column flex-lg-row align-start align-lg-center dashboard-info_item-label ma-lg-4">
                    کد ملی
                    <WidgetsEditableInput />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>