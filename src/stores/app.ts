import type { AppSetting } from '@/types'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAppStore = defineStore('app', () => {
  const appSetting = reactive<AppSetting>({
    closeMode: 'hide',
    theme: 'system',
  })

  return { appSetting }
}, {
  persist: true,
})
