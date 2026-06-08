<script setup lang="ts">
import { closeModeOptions } from '@/constants/index'
import { useAppStore } from '@/stores/app'

const show = defineModel<boolean>('show', { default: false })

const appStore = useAppStore()

const appSetting = reactive(Object.assign({}, appStore.appSetting))

// 每次打开抽屉时，从 store 重新读取
watch(show, (val) => {
  if (val) {
    appSetting.closeMode = appStore.appSetting.closeMode
  }
})

function handleConfirmSetting() {
  appStore.setSetting(appSetting)
  show.value = false
}
</script>

<template>
  <n-drawer v-model:show="show" :width="280">
    <div class="setting">
      <div class="setting-title">
        设置
      </div>

      <div class="sub-title">
        关闭时
      </div>
      <div class="card">
        <n-radio-group
          v-model:value="appSetting.closeMode"
          size="small"
        >
          <div
            v-for="item in closeModeOptions"
            :key="item.value"
            class="radio-item"
          >
            <n-radio :value="item.value">
              {{ item.label }}
            </n-radio>
          </div>
        </n-radio-group>
      </div>

      <div class="setting-footer">
        <n-button
          size="small"
          type="primary"
          block
          @click="handleConfirmSetting"
        >
          确定
        </n-button>
        <n-button
          size="small"
          block
          style="margin-top: 6px"
          @click="show = false"
        >
          取消
        </n-button>
      </div>
    </div>
  </n-drawer>
</template>

<style lang="scss" scoped>
.setting {
  padding: 12px 16px;
  background-color: #f6f6f6;
  height: 100vh;
  border-radius: 8px 0 0 8px;
  position: relative;
  &-title {
    font-size: 16px;
    font-weight: bold;
  }
  .sub-title {
    font-size: 13px;
    color: #666;
    margin: 10px 0 6px;
  }
  .radio-item + .radio-item {
    margin-top: 4px;
  }
  .setting-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
  }
}
</style>
