export type CloseMode = 'hide' | 'close'
export type ThemeMode = 'system' | 'light' | 'dark'

export interface AppSetting {
  closeMode: CloseMode
  theme: ThemeMode
}
