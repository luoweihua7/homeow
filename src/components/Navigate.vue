<script setup lang="ts">
import { reactive } from 'vue';

const urls = reactive(window.links);
</script>

<template>
  <div class="flex-center flex-row flex-wrap gap-8">
    <div
      v-for="(item, index) in urls"
      class="box-border flex-center flex-col hover:cursor-pointer card-item"
      :key="index"
    >
      <img :src="item.icon" alt="item.name" class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
      <div class="description font-medium text-slate-800">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-center {
  @apply flex items-center justify-center;
}

.card-item {
  transition: transform 0.3s ease;
}

.card-item:hover {
  transform: scale(1.2);
}
</style>
