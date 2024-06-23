<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  bgColor:{
      type:String,
      required:false
  }
});

const emit = defineEmits(["update:modelValue"]);

const selected = ref(props.modelValue);
const showDropdown = ref(false);

const selectBox = ref(null);
const dropdown = ref(null);

watch(
  () => props.modelValue,
  (newValue) => {
    selected.value = newValue;
  }
);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const handleSelect = (item) => {
  emit("update:modelValue", item);
  showDropdown.value = false;
};

// Click outside to close the dropdown
const handleClickOutside = (event) => {
  if (
    showDropdown.value &&
    dropdown.value &&
    selectBox.value &&
    !dropdown.value.contains(event.target) &&
    !selectBox.value.contains(event.target)
  ) {
    showDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
<template>
  <div class="container">
    <div :class="'selectbox bg-' +  bgColor" @click="toggleDropdown" ref="selectBox">
      <div class="selected">{{ selected }}</div>
      <div :class="['icon', { 'icon--spin': showDropdown }]">
        <span class="mdi mdi-chevron-down"></span>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showDropdown" :class="'dropdown bg-' + bgColor" ref="dropdown">
        <div
          v-for="(item, index) in items"
          :key="index"
          @click="handleSelect(item)"
          class="dropdown-item"
        >
          {{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>
<style>
.container {
  position: relative;
  width: 100%;
}
.icon {
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
  position: absolute;
  left: 0;
}

.icon--spin {
  transform: rotate(180deg);
}
.selectbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  cursor: pointer;
  background-color: #fff9ec;
  border-radius: 16px;
  font-size: 20px;
}

.icon {
  margin-left: 10px;
}

.dropdown {
  position: absolute;
  top: calc(100% + 10px); /* Adjust the gap here to keep the dropdown consistent */  left: 0;
  right: 0;
  background-color: #fff9ec;
  border-radius: 16px;
  font-size: 16px;
  z-index: 1000;
  padding: 1rem;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  border-radius: 16px;
}

.dropdown-item:hover {
  background-color: #F1F4E8;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
