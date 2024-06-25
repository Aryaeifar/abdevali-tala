<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item mb-3"
    >
      <div class="accordion-header" @click="toggle(index)">
        <i
          :class="[
            'spin-icon mdi',
            'mdi-chevron-down',
            { rotate: activeIndex === index },
          ]"
        ></i>
        <span>{{ item.title }}</span>
      </div>
      <transition name="fade">
        <div v-if="activeIndex === index" class="accordion-body">
          <p>
            {{ item.content }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  width: 100%;
  // border: 1px solid #ddd;
  // border-radius: 4px;
}

.accordion-item {
  border: 1px solid #ddd;
  position: relative;
  border-radius: 28px;
}

.spin-icon {
  position: absolute;
  left: 1%;
  font-size: 28px;
}
.accordion-header {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px 16px;
  cursor: pointer;
  border-radius: 30px;
  font-size: 24px;
}

.accordion-header i {
  margin-right: 8px;
  transition: transform 0.3s ease;
}

.accordion-header .rotate {
  transform: rotate(180deg);
}

.accordion-body {
  padding: 16px;
  background: #fff;
  border-radius: 30px;
  p {
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    padding-top: 16px;
    font-size: 28px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
