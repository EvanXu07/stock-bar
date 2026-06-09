<script setup lang="ts">
import { StockOutlined, UserSwitchOutlined } from '@vicons/antd'

const router = useRouter()
const route = useRoute()

const tabs = ref([
  {
    label: '股票',
    icon: StockOutlined,
    path: '/',
  },
  {
    label: '我的',
    icon: UserSwitchOutlined,
    path: '/mine',
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
  color: var(--text-primary);
  z-index: 999;
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-tabbar);
  border-top: 1px solid var(--border-light);
  .tabbar-item {
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    width: 50px;
    color: var(--text-tertiary);
    &__label {
      font-size: 10px;
      margin-top: -6px;
    }
  }
  .tabbar-item--active {
    color: var(--color-red);
  }
}
</style>
