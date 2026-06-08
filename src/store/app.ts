import type { AppSetting, CloseMode } from '@/types'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAppStore = defineStore('app', () => {
  let appSetting = reactive<AppSetting>({
    closeMode: 'hide',
  })

  function setSetting(setting: AppSetting) {
    appSetting = Object.assign({}, appSetting, setting)
  }

  return { appSetting, setSetting }
}, {
  persist: true,
})
