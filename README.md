# Stock Bar

基于 **Vue 3 + TypeScript + Vite + Tauri v2** 的股票行情桌面应用。

## 技术栈

| 技术 | 说明 |
|------|------|
| [Vue 3](https://vuejs.org/) | Composition API + `<script setup>` |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [Vite](https://vitejs.dev/) | 构建工具 |
| [Tauri v2](https://v2.tauri.app/) | 桌面应用框架（Rust 后端） |
| [pnpm](https://pnpm.io/) | 包管理器 |
| [Sass](https://sass-lang.com/) | CSS 预处理器 |
| [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) | Vue API 自动导入 |
| [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) | 组件自动导入 |
| [@antfu/eslint-config](https://github.com/antfu/eslint-config) | ESLint 配置 |

## 前置要求

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/tools/install)
- Tauri v2 系统依赖（参考 [官方文档](https://v2.tauri.app/start/prerequisites/)）

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动 Vite 开发服务器（仅前端）
pnpm dev

# 启动 Tauri 桌面应用开发模式
pnpm tauri dev

# 构建生产版本
pnpm tauri build
```

## 项目结构

```
stock-bar/
├── src/                    # 前端源码
│   ├── assets/             # 静态资源（样式、图片等）
│   │   └── styles/
│   │       └── index.scss  # 全局样式入口
│   ├── components/         # 组件
│   │   ├── TabBar.vue      # 底部导航栏
│   │   └── TitleBar.vue    # 自定义标题栏
│   ├── views/              # 页面
│   │   ├── home.vue        # 首页
│   │   └── setting.vue     # 设置页
│   ├── router/             # 路由配置
│   │   └── index.ts
│   ├── types/              # 自动生成的类型声明
│   │   ├── auto-imports.d.ts
│   │   └── components.d.ts
│   ├── App.vue             # 根组件
│   └── main.ts             # 入口文件
├── src-tauri/              # Tauri Rust 后端
│   ├── src/
│   │   ├── lib.rs
│   │   └── main.rs
│   ├── icons/              # 应用图标
│   ├── capabilities/       # 权限配置
│   ├── tauri.conf.json     # Tauri 配置
│   └── Cargo.toml
├── eslint.config.js        # ESLint 配置
├── vite.config.ts          # Vite 配置
└── package.json
```

## 可用脚本

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动 Vite 开发服务器 |
| `pnpm build` | 构建前端生产版本 |
| `pnpm preview` | 预览构建结果 |
| `pnpm lint` | ESLint 代码检查 |
| `pnpm lint:fix` | ESLint 自动修复 |
| `pnpm tauri dev` | 启动 Tauri 桌面应用开发 |
| `pnpm tauri build` | 构建桌面应用安装包 |
| `pnpm tauri icon <图片>` | 生成应用图标 |

## 功能

- 自定义无边框窗口 + 可拖拽标题栏
- 底部导航栏（毛玻璃悬浮效果）
- Vue Router 页面路由
- Vue API 自动导入
- 组件自动导入
- ESLint + @antfu/eslint-config 代码规范
