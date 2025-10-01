# UI/UX Designer Portfolio

一個現代化的UI/UX設計師作品集網站，使用React、Three.js、GSAP等技術打造。

## 🚀 技術堆疊

- **前端框架**: React 18
- **路由**: React Router 6
- **動畫**: GSAP, Framer Motion
- **3D圖形**: Three.js
- **平滑滾動**: Lenis
- **樣式**: CSS3
- **分析**: Google Analytics GA4
- **標籤管理**: Google Tag Manager
- **PWA**: Progressive Web App

## 📁 專案結構

```
src/
├── components/          # 可重用組件
│   ├── Header.js       # 導航欄
│   ├── Footer.js       # 頁腳
│   ├── Hero.js         # 首頁英雄區塊
│   ├── AboutPreview.js # 關於我預覽
│   ├── Skills.js       # 技能展示
│   └── PortfolioPreview.js # 作品集預覽
├── pages/              # 頁面組件
│   ├── Home.js         # 首頁
│   ├── Portfolio.js    # 作品集頁面
│   ├── About.js        # 關於我頁面
│   ├── Contact.js      # 聯絡頁面
│   └── ProjectDetail.js # 專案詳情頁面
├── App.js              # 主應用組件
├── index.js            # 應用入口
└── index.css           # 全域樣式
```

## 🎨 功能特色

- **響應式設計**: 適配各種裝置尺寸
- **平滑動畫**: 使用GSAP和Framer Motion創造流暢動畫
- **3D效果**: Three.js提供視覺衝擊
- **現代化UI**: 玻璃擬態效果和漸層設計
- **PWA支援**: 可安裝為應用程式
- **SEO優化**: 包含Open Graph標籤
- **分析追蹤**: 整合Google Analytics

## 🛠️ 安裝與執行

### 前置需求
- Node.js 16.0 或更高版本
- npm 或 yarn

### 安裝步驟

1. 克隆專案
```bash
git clone https://github.com/yourusername/uiux-portfolio.git
cd uiux-portfolio
```

2. 安裝依賴
```bash
npm install
```

3. 啟動開發伺服器
```bash
npm start
```

4. 開啟瀏覽器訪問 `http://localhost:3000`

### 建置生產版本
```bash
npm run build
```

## 📱 PWA功能

本專案支援Progressive Web App功能：
- 可安裝到裝置主畫面
- 離線快取
- 推送通知（可選）

## 🔧 自訂設定

### Google Analytics
在 `public/index.html` 中替換 `GA_MEASUREMENT_ID` 為您的Google Analytics ID。

### Google Tag Manager
在 `public/index.html` 中替換 `GTM-XXXXXXX` 為您的GTM容器ID。

### 內容更新
- 修改 `src/pages/` 中的頁面內容
- 更新 `src/components/` 中的組件
- 替換圖片和專案資訊

## 🚀 部署到GitHub Pages

1. 安裝gh-pages套件
```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 中添加部署腳本
```json
{
  "scripts": {
    "deploy": "gh-pages -d build"
  },
  "homepage": "https://yourusername.github.io/uiux-portfolio"
}
```

3. 建置並部署
```bash
npm run build
npm run deploy
```

## 📄 授權

MIT License - 詳見 [LICENSE](LICENSE) 檔案

## 📞 聯絡

如有任何問題或建議，歡迎聯絡：
- Email: your-email@example.com
- LinkedIn: [Your LinkedIn Profile]
- Behance: [Your Behance Profile]

---

⭐ 如果這個專案對您有幫助，請給個星星！
