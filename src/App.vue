<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#E6212A',
    primaryColorHover: '#E6212A',
    primaryColorPressed: '#E6212A',
    primaryColorSuppl: '#E6212A',
  },
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="app">
      <TitleBar />
      <div class="app-content">
        <router-view />
      </div>
      <TabBar />
    </div>
  </n-config-provider>
</template>

<style scoped lang="scss"></style>
