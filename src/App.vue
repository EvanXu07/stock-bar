<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import TabBar from '@/layouts/TabBar.vue'
import TitleBar from '@/layouts/TitleBar.vue'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#E6212A',
    primaryColorHover: '#E6212A',
    primaryColorPressed: '#E6212A',
    primaryColorSuppl: '#E6212A',
    borderRadius: '8px',
    fontSizeSmall: '12px',
  },
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-dialog-provider>
      <div class="app">
        <TitleBar />
        <div class="app-content">
          <router-view />
        </div>
        <TabBar />
      </div>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style scoped lang="scss">
.app-content {
  height: calc(100vh - 42px);
  overflow: auto;
  padding: 12px;
}
</style>
