<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import type { ThemeMode } from '@/types'
import TabBar from '@/layouts/TabBar.vue'
import TitleBar from '@/layouts/TitleBar.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

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

/** 系统偏好 */
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

/** 解析最终 theme */
function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'system')
    return prefersDark.matches ? 'dark' : 'light'
  return mode
}

/** 应用 theme class */
function applyTheme(mode: ThemeMode) {
  const theme = resolveTheme(mode)
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

// 初始化
applyTheme(appStore.appSetting.theme)

// 监听 store 变化
watch(() => appStore.appSetting.theme, (val) => {
  applyTheme(val)
})

// 监听系统主题变化（仅在 system 模式下）
watch(prefersDark, () => {
  if (appStore.appSetting.theme === 'system') {
    applyTheme('system')
  }
})
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
  background-color: var(--bg-primary);
}
</style>
