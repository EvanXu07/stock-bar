<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'

const win = getCurrentWindow()
const isMaximized = ref(false)

async function checkMaximized() {
  isMaximized.value = await win.isMaximized()
}

const unlisten = ref<(() => void) | null>(null)

onMounted(() => {
  win.onResized(checkMaximized).then((fn) => {
    unlisten.value = fn
  })
  checkMaximized()
})

onUnmounted(() => {
  unlisten.value?.()
})

async function handleMinimize() {
  await win.minimize()
}

async function handleToggleMaximize() {
  await win.toggleMaximize()
}

async function handleClose() {
  await win.close()
}

function onDragRegionMouseDown(e: MouseEvent) {
  // 排除按钮区域
  const target = e.target as HTMLElement
  if (target.closest('.titlebar-controls'))
    return
  if (e.button === 0) {
    win.startDragging()
  }
}
</script>

<template>
  <div
    class="titlebar"
    @mousedown="onDragRegionMouseDown"
  >
    <div class="titlebar-title">
      Stock Bar
    </div>
    <div class="titlebar-controls">
      <button
        class="titlebar-btn"
        title="最小化"
        @click="handleMinimize"
      >
        <svg width="12" height="12" viewBox="0 0 12 12">
          <rect x="2" y="5.5" width="8" height="1" fill="currentColor" />
        </svg>
      </button>
      <button
        class="titlebar-btn"
        :title="isMaximized ? '还原' : '最大化'"
        @click="handleToggleMaximize"
      >
        <svg v-if="isMaximized" width="12" height="12" viewBox="0 0 12 12">
          <rect x="2.5" y="4.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1" />
          <rect x="3.5" y="0.5" width="7" height="7" rx="1" fill="var(--bg)" stroke="currentColor" stroke-width="1" />
        </svg>
        <svg v-else width="12" height="12" viewBox="0 0 12 12">
          <rect x="2" y="2" width="8" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="1.2" />
        </svg>
      </button>
      <button
        class="titlebar-btn titlebar-btn--close"
        title="关闭"
        @click="handleClose"
      >
        <svg width="12" height="12" viewBox="0 0 12 12">
          <line x1="3" y1="3" x2="9" y2="9" stroke="currentColor" stroke-width="1.2" />
          <line x1="9" y1="3" x2="3" y2="9" stroke="currentColor" stroke-width="1.2" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.titlebar {
  --bg: #1a1a2e;
  --text: #e0e0e0;
  --hover-bg: #2a2a3e;
  --close-hover-bg: #e81123;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  background: var(--bg);
  color: var(--text);
  user-select: none;
  flex-shrink: 0;
}

.titlebar-title {
  padding-left: 12px;
  font-size: 13px;
  opacity: 0.85;
}

.titlebar-controls {
  display: flex;
  height: 100%;
  cursor: default;
}

.titlebar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 100%;
  border: none;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: background 0.15s;
}

.titlebar-btn:hover {
  background: var(--hover-bg);
}

.titlebar-btn--close:hover {
  background: var(--close-hover-bg);
  color: #fff;
}
</style>
