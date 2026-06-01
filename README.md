# Fake API - 0penAI gpt 6.7 Demo

> 本页面、前端代码、后端 Worker、README 文档均由 AI 撰写和整理。

这是一个 **OpenAI Chat Completions 兼容格式** 的演示 API 项目。  
默认模型商名称为 `0penAI`，默认模型名称为 `gpt 6.7`。

`gpt 6.7` 不是 OpenAI 官方模型名称，本项目也不是 OpenAI 官方服务。

## 演示 API

```text
https://api.circleestops.ccwu.cc/v1/chat/completions
```

前端默认变量 `USE_DEFAULT_BACKEND` 为 `true`，会使用上面的默认演示后端。  
如果你要使用自己的后端，把 `USE_DEFAULT_BACKEND` 改为 `false`，并填写 `BACKEND_BASE`。

## 目录

- [项目结构](#项目结构)
- [核心原理](#核心原理)
- [变量说明](#变量说明)
- [快速开始](#快速开始)
- [Cloudflare 部署教程](#cloudflare-部署教程)
- [GitHub Pages 部署教程](#github-pages-部署教程)
- [其他平台部署](#其他平台部署)
- [API 调用示例](#api-调用示例)
- [管理员入口](#管理员入口)
- [注意事项](#注意事项)
- [故障排查](#故障排查)

## 项目结构

```text
fake api/
  pages/
    index.html      # 前端页面，可部署到 Cloudflare Pages、GitHub Pages、Netlify 等静态平台
    _redirects      # Cloudflare Pages 单页回退规则
  worker/
    src/index.js    # Cloudflare Workers 后端
    wrangler.toml   # Worker 部署配置与变量
    package.json
  README.md
```

## 核心原理

后端不调用真实大模型。它的工作方式是内置规则匹配：

1. 接收 OpenAI 风格的 `/v1/chat/completions` 请求。
2. 读取 `messages` 中最后一条 `user` 消息。
3. 如果输入包含 `翻译`，优先进入内置翻译词典。
4. 否则进入关键词规则表，统计命中的关键词数量。
5. 命中数量最高的规则返回对应回复。
6. 如果没有命中明确规则，再检查日常短句库和日常单词库。
7. 仍然没有命中时，返回：

```text
您的当前 API KEY 权限不足，请联系管理员提升权限
```

返回结构兼容 OpenAI Chat Completions 的常见字段：

- `id`
- `object`
- `created`
- `model`
- `choices`
- `usage`

## 变量说明

### 前端变量

前端变量在：

```text
pages/index.html
```

搜索：

```js
const FRONTEND_CONFIG = {
```

| 变量 | 默认值 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| `FRONTEND_BASE` | `""` | string | 否 | 前端部署地址，例如 `https://ht.example.com` |
| `USE_DEFAULT_BACKEND` | `true` | boolean | 是 | 是否使用默认演示后端；`true` 使用默认后端，`false` 使用 `BACKEND_BASE` |
| `DEFAULT_BACKEND_BASE` | `https://api.circleestops.ccwu.cc` | string | 是 | 默认演示后端地址 |
| `BACKEND_BASE` | `""` | string | 使用自建后端时必填 | 自己部署的 Worker 后端地址，例如 `https://js.example.com` |
| `PUBLIC_ENDPOINT` | `""` | string | 否 | 页面展示和复制的 API 地址；为空时由后端地址自动拼出 `/v1/chat/completions` |
| `ADMIN_LOGIN_PATH` | `/login?!=pass==admin` | string | 是 | 管理员手动登录路径 |
| `ADMIN_TOKEN` | `admin` | string | 是 | 管理员统计接口 token |
| `MODEL_VENDOR` | `0penAI` | string | 是 | 页面使用的模型商名称 |
| `MODEL_NAME` | `gpt 6.7` | string | 是 | 前端请求时传入的模型名称 |
| `DEMO_API_ENDPOINT` | `https://api.circleestops.ccwu.cc/v1/chat/completions` | string | 否 | 复制按钮的演示兜底地址 |

### 后端变量

后端变量在：

```text
worker/wrangler.toml
```

| 变量 | 默认值 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| `PUBLIC_API_BASE` | `""` | string | 自建后端建议填写 | 公开 API 域名，例如 `https://api.circleestops.ccwu.cc` |
| `HIDDEN_WORKER_BASE` | `""` | string | 否 | Worker 默认后端域名，例如 `https://js.example.com` |
| `ALLOWED_FRONTEND_ORIGINS` | `""` | string | 需要领取随机 key 时必填 | 允许领取随机 `sk-` 密钥的前端来源，例如 `https://ht.example.com` |
| `ADMIN_TOKEN` | `admin` | string | 是 | 管理员统计接口 token |
| `MODEL_VENDOR` | `0penAI` | string | 是 | `/v1/models` 中的模型商名称 |
| `MODEL_NAME` | `gpt 6.7` | string | 是 | 默认模型名称 |
| `DEMO_API_BASE` | `https://api.circleestops.ccwu.cc` | string | 否 | README 中展示的演示 API 域名 |

## 快速开始

### 只部署前端，使用默认后端

这是最简单的方式。

1. 打开 `pages/index.html`。
2. 保持：

```js
USE_DEFAULT_BACKEND: true,
DEFAULT_BACKEND_BASE: "https://api.circleestops.ccwu.cc",
```

3. 把 `pages/` 部署到任意静态站点平台。
4. 页面会默认调用演示后端。

### 部署自己的后端

如果你要使用自己的 Worker 后端：

1. 部署 `worker/`。
2. 获得你的 Worker 地址，例如：

```text
https://js.example.com
```

3. 修改 `pages/index.html`：

```js
USE_DEFAULT_BACKEND: false,
BACKEND_BASE: "https://js.example.com",
PUBLIC_ENDPOINT: "https://api.example.com/v1/chat/completions",
```

4. 修改 `worker/wrangler.toml`：

```toml
PUBLIC_API_BASE = "https://api.example.com"
HIDDEN_WORKER_BASE = "https://js.example.com"
ALLOWED_FRONTEND_ORIGINS = "https://ht.example.com"
ADMIN_TOKEN = "admin"
MODEL_VENDOR = "0penAI"
MODEL_NAME = "gpt 6.7"
```

## Cloudflare 部署教程

### 1. 部署 Worker 后端

进入 Worker 目录：

```bash
cd "S:\ccs\fake api\worker"
```

安装依赖：

```bash
npm install
```

本地检查：

```bash
npm run check
```

本地预览：

```bash
npm run dev
```

部署到 Cloudflare Workers：

```bash
npm run deploy
```

### 2. 绑定 Worker 域名

在 Cloudflare Dashboard 中绑定你的 Worker 路由或自定义域名。

示例：

```text
js.example.com/*
api.example.com/*
```

如果你要使用演示域名样式，可以把公开 API 域名设置为：

```text
api.circleestops.ccwu.cc
```

### 3. 配置 Worker 变量

你可以在 `worker/wrangler.toml` 中配置，也可以在 Cloudflare Dashboard 的 Worker Variables 中配置。

推荐至少配置：

```toml
PUBLIC_API_BASE = "https://api.example.com"
ALLOWED_FRONTEND_ORIGINS = "https://你的前端域名"
ADMIN_TOKEN = "admin"
MODEL_VENDOR = "0penAI"
MODEL_NAME = "gpt 6.7"
```

### 4. 部署 Cloudflare Pages 前端

Cloudflare Pages 设置：

| 项目 | 值 |
| --- | --- |
| Build command | 留空 |
| Build output directory | `pages` |
| Framework preset | None |

部署前确认 `pages/index.html` 中的变量：

```js
USE_DEFAULT_BACKEND: false,
BACKEND_BASE: "https://js.example.com",
PUBLIC_ENDPOINT: "https://api.example.com/v1/chat/completions",
```

如果你只想用演示后端，则保持：

```js
USE_DEFAULT_BACKEND: true,
```

## GitHub Pages 部署教程

GitHub Pages 只能托管前端静态页面，不能运行 Worker 后端。  
如果你用 GitHub Pages，需要同时满足：

- 前端放在 GitHub Pages。
- 后端使用默认演示后端，或自己部署到 Cloudflare Workers。

### 方式 A：仓库根目录部署

1. 新建 GitHub 仓库。
2. 把 `pages/index.html`、`pages/_redirects` 复制到仓库根目录。
3. 提交并推送。
4. 打开仓库 Settings -> Pages。
5. Source 选择 `Deploy from a branch`。
6. Branch 选择 `main`，目录选择 `/root`。
7. 保存后等待 GitHub Pages 构建完成。

### 方式 B：保留 pages 目录

1. 新建 GitHub 仓库。
2. 上传整个项目。
3. 在 Settings -> Pages 中选择发布目录为 `/pages`，如果你的仓库界面不支持该选项，可使用 GitHub Actions。

示例 GitHub Actions：

```yaml
name: Deploy static pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: pages
      - id: deployment
        uses: actions/deploy-pages@v4
```

### GitHub Pages 使用默认后端

保持：

```js
USE_DEFAULT_BACKEND: true,
```

页面会调用：

```text
https://api.circleestops.ccwu.cc
```

### GitHub Pages 使用自建后端

修改：

```js
USE_DEFAULT_BACKEND: false,
BACKEND_BASE: "https://你的-worker-域名",
PUBLIC_ENDPOINT: "https://你的-api-域名/v1/chat/completions",
```

## 其他平台部署

### Vercel / Netlify / 静态主机

前端是纯静态页面，上传 `pages/` 即可。

常见配置：

| 平台 | 构建命令 | 发布目录 |
| --- | --- | --- |
| Vercel | 留空 | `pages` |
| Netlify | 留空 | `pages` |
| Cloudflare Pages | 留空 | `pages` |
| Nginx | 不需要 | 指向 `pages` 目录 |

### 后端迁移到其他平台

当前后端是 Cloudflare Workers 写法：

```js
export default {
  async fetch(request, env) {}
}
```

如果迁移到其他平台，需要适配：

- Vercel Functions：改成 `export default async function handler(req, res)`。
- Netlify Functions：改成 `exports.handler = async (event) => {}`。
- Node.js/Express：把不同路径映射到 Express 路由。
- Bun / Deno：可以较容易适配 Fetch API。

## API 调用示例

```bash
curl https://api.circleestops.ccwu.cc/v1/chat/completions \
  -H "content-type: application/json" \
  -H "authorization: Bearer sk-demo" \
  -d "{\"model\":\"gpt 6.7\",\"messages\":[{\"role\":\"user\",\"content\":\"你是什么模型？\"}]}"
```

示例返回：

```json
{
  "object": "chat.completion",
  "model": "gpt 6.7",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "我是0penAI gpt 6.7。"
      }
    }
  ]
}
```

## 管理员入口

管理员入口不显示在页面 UI 中，需要手动输入：

```text
https://你的前端域名/login?!=pass==admin
```

管理员统计接口使用：

```text
GET /admin/stats
Header: x-admin-token: admin
```

如果你修改了 `ADMIN_TOKEN`，前端和后端都要同步修改。

## 注意事项

- 本项目是演示 API，不是真实模型服务。
- 不要提交真实密码、隐私信息、生产密钥或敏感数据。
- `0penAI` 使用数字 `0`，不是官方 `OpenAI` 品牌。
- `gpt 6.7` 不是 OpenAI 官方模型。
- 默认统计数据保存在 Worker 内存中，实例重启后会清空。
- 如果 `ALLOWED_FRONTEND_ORIGINS` 为空，前端无法领取随机 `sk-` key。
- API 调用本身默认不强制校验 key，适合演示，不适合生产。

## 故障排查

### 页面显示“请先配置 BACKEND_BASE”

说明：

```js
USE_DEFAULT_BACKEND: false
```

但 `BACKEND_BASE` 为空。

解决：

```js
BACKEND_BASE: "https://你的-worker-域名"
```

或者改回：

```js
USE_DEFAULT_BACKEND: true
```

### 无法领取 key

检查 Worker 变量：

```toml
ALLOWED_FRONTEND_ORIGINS = "https://你的前端域名"
```

它必须和浏览器访问前端时的来源完全一致。

### 管理员统计读取失败

检查：

- 前端 `ADMIN_TOKEN`
- 后端 `ADMIN_TOKEN`
- `BACKEND_BASE`
- Worker 是否部署成功
- 浏览器控制台 CORS 错误

### API 返回权限不足

这是未命中关键词规则、日常语句库和日常单词库后的默认兜底回复。

```text
您的当前 API KEY 权限不足，请联系管理员提升权限
```
