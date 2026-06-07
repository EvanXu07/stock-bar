<script setup lang="ts">
import { SettingOutlined, StockOutlined } from '@vicons/antd'

const router = useRouter()
const route = useRoute()

const tabs = ref([
  {
    label: '股票',
    icon: StockOutlined,
    path: '/',
  },
  {
    label: '设置',
    icon: SettingOutlined,
    path: '/setting',
  },
])

function handleClick(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="tabbar">
    <div
      v-for="tab in tabs"
      :key="tab.path"
      class="tabbar-item"
      :class="{ 'tabbar-item--active': route.path === tab.path }"
      @click="handleClick(tab.path)"
    >
      <div class="tabbar-item__icon">
        <n-icon :size="20" :component="tab.icon" />
      </div>
      <div class="tabbar-item__label">
        {{ tab.label }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabbar {
  width: 260px;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 60px;
  color: #333;
  z-index: 999;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  .tabbar-item {
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    &__label {
      font-size: 10px;
      margin-top: -6px;
    }
  }
  .tabbar-item--active {
    color: #E6212A;
  }
}
</style>
