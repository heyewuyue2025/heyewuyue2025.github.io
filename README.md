# AI 作品档案

这是一个具有鲜明视觉气质的个人 AI 作品档案，面向 AI 影像、交互叙事、数据新闻、视觉叙事、法律/技术、游戏与创意媒体交叉方向的学生创作者/研究者。

## 技术栈

- React + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion
- Canvas API hero 互动
- 独立 AI 作品展区

## 编辑内容

所有占位个人资料都集中在：

```txt
src/data/profile.ts
```

请在这里替换姓名、简介、AI 作品、项目链接、发表场合、时间线条目与联系方式。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

Vite 配置使用了 `base: './'`，因此构建后的站点适合部署到 GitHub Pages 的项目页面地址。

## 部署到 GitHub Pages

项目已经包含 `.github/workflows/deploy.yml`。推送到 `main` 分支后，在仓库设置中启用 GitHub Pages，并选择 GitHub Actions 作为发布来源。
