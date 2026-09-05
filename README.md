# 叶千煜｜AI 训练师 — 个人站（GitHub Pages 版）

一个纯静态的个人站（`index.html` + `style.css` + `public/` 资源），零构建、零依赖，可直接用 **GitHub Pages** 托管。

> 这个静态版本是从 ChatGPT Sites 生成的项目里**独立复刻**出来的。
> 原项目使用 OpenAI 的 `vinext` 框架 + Cloudflare Workers 部署，无法直接放到 GitHub Pages，因此单独保留了这套静态版。

## 本地预览

直接双击 `index.html`，或在项目目录启动任意静态服务器：

```bash
# 例如
npx serve .
```

## 发布到 GitHub Pages

项目已内置 **GitHub Actions 自动部署**（`.github/workflows/deploy.yml`），推送代码即可自动发布，无需每次手动操作。

1. 在 GitHub 新建一个仓库（如 `yeqianyu.github.io`，或任意普通仓库）。
2. 把本项目文件推上去：

```bash
git init
git add .
git commit -m "init: static portfolio"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

3. 打开仓库 **Settings → Pages**：
   - **Source** 选择 `GitHub Actions`
   - 推送后，Actions 会自动构建并部署（也可在 **Actions** 页手动触发 `workflow_dispatch`）
   - 部署完成后，访问 `https://<你的用户名>.github.io/<仓库名>/`

> 如果仓库名是 `<你的用户名>.github.io`，则直接访问 `https://<你的用户名>.github.io/`。
> 工作流只发布静态版文件（`index.html` + `style.css` + `public/`），不包含 Next.js 源码。

## 绑定自定义域名

1. 在仓库根目录创建 `CNAME` 文件（可复制 `CNAME.example`），内容填你的域名（不带协议）：

```
yourdomain.com
```

2. 在域名服务商处添加 DNS 解析：
   - **Apex 域名**（`yourdomain.com`）：添加 4 条 `A` 记录，指向 GitHub Pages 的 IP：

     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

   - **子域名**（如 `www.yourdomain.com`）：添加一条 `CNAME` 记录，指向 `<你的用户名>.github.io`。

3. 在仓库 **Settings → Pages → Custom domain** 填入域名并保存，等待证书自动签发（HTTPS 勾选 `Enforce HTTPS`）。

> 建议使用子域名（CNAME 方式），无需维护固定 IP，配置更简单稳定。

## 文件结构

```
├── index.html              # 页面主体（全部内容）
├── style.css               # 全部样式（原设计完整保留）
├── public/
│   ├── favicon.svg         # 站点图标
│   └── og.png              # 社交分享图
├── .github/workflows/      # GitHub Actions 自动部署
│   └── deploy.yml
├── CNAME.example           # 自定义域名模板（复制为 CNAME 使用）
└── README.md
```

## 备注

- 站点不依赖任何外部服务，无需 API Key，可离线打开。
- 原 ChatGPT Sites 版本（含 Dify 聊天组件）托管在 `https://yeqianyu-ai-trainer.nsvsjsvvsn82725.chatgpt.site/`，仍可独立访问；两者内容一致，此静态版用于 GitHub 托管。
