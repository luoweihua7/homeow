<script setup lang="ts">
import { reactive } from 'vue';

const urls = reactive(window.links);
</script>

<template>
  <div class="flex-center flex-row flex-wrap gap-8">
    <a
      v-for="(item, index) in urls"
      class="box-border flex-center flex-col hover:cursor-pointer no-underline card-item"
      target="_blank"
      :href="item.innerUrl"
      :key="index"
    >
      <img
        class="rounded-full bg-white w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        :class="item.className || []"
        :src="item.icon"
        :alt="item.name"
      />
      <div class="description font-medium text-slate-800">
        <span>{{ item.name }}</span>
      </div>
    </a>
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

.class-name {
  @apply p-1 p-2 p-3 p-4 p-5 p-6;
}
</style>
