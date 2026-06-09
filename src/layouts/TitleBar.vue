<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'
import { CloseOutlined, LineOutlined, SettingOutlined } from '@vicons/antd'
import { useAppStore } from '@/stores/app'

const currentWindow = getCurrentWindow()
const appStore = useAppStore()
const active = ref(false)

function handleMinimize() {
  currentWindow.minimize()
}

function handleClose() {
  if (appStore.appSetting.closeMode === 'hide') {
    currentWindow.hide()
  } else {
    currentWindow.close()
  }
}
</script>

<template>
  <div class="title-bar" data-tauri-drag-region>
    <div class="title-bar__icon">
      <img src="@/assets/images/icon.png" alt="icon">
    </div>
    <div class="title-bar__operation">
      <div class="operation-setting" @click="active = true">
        <n-icon :size="14" :component="SettingOutlined" />
      </div>
      <div class="operation-box" data-no-drag @click="handleMinimize">
        <n-icon :size="12" :component="LineOutlined" />
      </div>
      <div class="operation-box" data-no-drag @click="handleClose">
        <n-icon :size="12" :component="CloseOutlined" />
      </div>
    </div>
  </div>
  <Setting v-model:show="active" />
</template>

<style scoped lang="scss">
.title-bar {
  height: 42px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-card);
  border-bottom: 1px solid var(--border-light);
  &__icon {
    width: 26px;
    height: 26px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__operation {
    display: flex;
    align-items: center;
    gap: 6px;
    .operation-setting {
      display: flex;
      align-items: center;
      margin-right: 16px;
      cursor: pointer;
      color: var(--text-secondary);
      &:hover {
        color: var(--text-primary);
      }
    }
    .operation-box {
      cursor: pointer;
      background-color: var(--bg-operation);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 8px;
      color: var(--text-secondary);
      &:hover {
        color: var(--text-primary);
      }
    }
  }
}
</style>
