<script setup>
const props = defineProps({
    items:{
        type:Array,
    }
})
</script>
<template>
  <div class="breadcrumb">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<style lang="scss" scoped>
    .mdi-chevron-right {
        transform: scale(-1);
    }
    .breadcrumb {
      .v-breadcrumbs {
        padding: 16px 0;
      }
    }
</style>
