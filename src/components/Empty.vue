<script setup lang="ts">
const { text = '', height = 120 } = defineProps<{
  text?: string
  height?: number
}>()
</script>

<template>
  <div class="empty">
    <div class="empty-icon" :style="{ height: `${height}px` }">
      <img src="@/assets/images/empty.png" alt="empty">
    </div>
    <div class="empty-text">
      {{ text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  text-align: center;
  &-icon {
    img {
      width: auto;
      height: 100%;
    }
  }
  &-text {
    color: var(--text-tertiary);
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>
