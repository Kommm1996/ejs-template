# ejs-template

[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](.nvmrc)
[![Pnpm](https://img.shields.io/badge/pnpm-%3E%3D8-F69220?logo=pnpm)](package.json)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](#%E8%B4%A1%E7%8C%AE)

[English](./README.md)

> 使用 EJS 编译 HTML 的现代模板 —— 集成 Webpack 5、Tailwind CSS 3、GSAP、Swiper 和 TypeScript。

---

## ✨ 特性

- **EJS 模板引擎** — 模块化 HTML，支持布局复用、include 和数据注入
- **Webpack 5** — 自动发现 EJS 页面，HMR 开发服务器，资源打包
- **Tailwind CSS 3** — 实用优先的样式系统，支持暗色模式
- **GSAP** — 滚动触发动画和平滑滚动
- **Swiper** — 触摸轮播，支持响应式断点
- **CountUp.js** — 数字动画效果
- **Petite-Vue** — 轻量响应式（暗色模式切换、回到顶部）
- **TypeScript** — 类型安全的 JavaScript，esbuild 快速构建
- **自动部署** — GitHub Actions CI/CD 到 GitHub Pages
- **Prettier + ESLint** — 统一的代码格式

---

## 🚀 快速开始

```bash
# 1. 克隆仓库
git clone https://github.com/Kommm1996/ejs-template.git
cd ejs-template

# 2. 安装依赖（推荐 pnpm）
pnpm install
# 或：npm install（需要先删除 package.json 中的 "preinstall" 脚本）

# 3. 启动开发服务器（HMR，访问 http://localhost:8080）
pnpm dev

# 4. 构建生产包
pnpm build    # 输出到 dist/
```

> **注意：** 本模板通过 `preinstall` 钩子强制使用 pnpm。如果偏好 npm 或 yarn，请先删除 `package.json` 中的 `"preinstall"` 行。

---

## 📁 项目结构

```
ejs-template/
├── .github/workflows/      # GitHub Actions — 自动部署到 Pages
├── public/                 # 静态资源（直接引用）
│   └── img.jpg             # 占位图片
├── src/
│   ├── ejs/                # EJS 模板文件 (.ejs)
│   │   ├── layout/         # 可复用的布局片段
│   │   │   ├── html-start.ejs
│   │   │   ├── html-end.ejs
│   │   │   ├── header.ejs
│   │   │   └── footer.ejs
│   │   └── index.ejs       # 页面模板（可按需添加更多）
│   ├── js/                 # TypeScript 入口和模块
│   │   ├── index.ts        # 主入口 —— 导入所有模块
│   │   ├── gsap.ts         # GSAP 滚动动画
│   │   ├── swiper.ts       # Swiper 轮播
│   │   ├── countup.ts      # CountUp 数字动画
│   │   └── utilities.ts    # IntersectionObserver 工具函数
│   ├── css/
│   │   └── input.css       # Tailwind 入口 + 自定义 CSS 变量
│   └── types/              # 类型声明文件
│       └── smoothscroll.d.ts
├── data-file.json          # 共享数据，注入到 EJS 模板
├── webpack.config.js       # Webpack 配置
├── tailwind.config.js      # Tailwind 配置
├── postcss.config.js       # PostCSS 配置
├── tsconfig.json           # TypeScript 配置
└── scripts/
    └── build-test.js       # 构建验证测试（pnpm test）
```

---

## 📄 添加新页面

1. 在 `src/ejs/` 中创建新的 `.ejs` 文件：

```ejs
<%- include('./layout/header.ejs', {title: '我的页面'}) %>
<main>
  <section class="container mx-auto px-5 my-10">
    <h1 class="text-3xl font-bold">你好，世界！</h1>
  </section>
</main>
<%- include('./layout/footer.ejs') %>
```

2. 在 `data-file.json` 中添加页面标题：

```json
{
  "indexTitle": "首页",
  "myPageTitle": "我的页面"
}
```

3. Webpack 会自动识别新页面——刷新即可！

---

## 🧪 测试

```bash
# 运行构建验证（构建项目 + 检查输出文件）
pnpm test

# Lint TypeScript 文件
pnpm lint

# 使用 Prettier 格式化代码
pnpm format
```

---

## 🌐 预览生产构建

```bash
pnpm build
pnpm serve   # 在 http://localhost:8080 上提供 dist/ 服务
```

---

## 🎨 自定义

### 颜色和暗色模式

编辑 `src/css/input.css` 中的 CSS 变量：

```css
:root {
  --background: 210 40% 98%;
  --primary: 199 89% 48%;
  /* ... */
}
html.dark {
  --background: 222 47% 11%;
  /* ... */
}
```

### 字体和 Tailwind 扩展

编辑 `tailwind.config.js` 以添加自定义字体或扩展设计系统。

---

## 🤝 贡献

欢迎提交 PR！对于重大更改，请先提交 issue 讨论。

1. Fork 本项目
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 发起 Pull Request

---

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。
