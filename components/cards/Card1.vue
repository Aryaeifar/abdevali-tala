<script setup>
const props = defineProps({
    items:{
        type:Object,
        required: true,
    }
})
</script>
<template>
    <div class="card1_wrapper">
        <img :src="items.img" :alt="items.name" class="w-100">
        <div class="card1_title">
            {{items.name}}
        </div>
    </div>
</template>

