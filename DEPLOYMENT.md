# 部署指南

本指南將幫助您將UI/UX作品集網站部署到GitHub Pages。

## 🚀 快速部署

### 1. 準備GitHub儲存庫

1. 在GitHub上建立新的儲存庫
2. 將專案推送到GitHub：

```bash
git init
git add .
git commit -m "Initial commit: UI/UX Portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/uiux-portfolio.git
git push -u origin main
```

### 2. 安裝gh-pages

```bash
npm install --save-dev gh-pages
```

### 3. 更新package.json

確保您的`package.json`包含以下設定：

```json
{
  "homepage": "https://yourusername.github.io/uiux-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 4. 部署到GitHub Pages

```bash
npm run deploy
```

### 5. 啟用GitHub Pages

1. 前往您的GitHub儲存庫
2. 點擊 "Settings" 標籤
3. 滾動到 "Pages" 部分
4. 在 "Source" 下選擇 "Deploy from a branch"
5. 選擇 "gh-pages" 分支和 "/ (root)" 資料夾
6. 點擊 "Save"

您的網站將在 `https://yourusername.github.io/uiux-portfolio` 上線！

## 🔧 自訂設定

### 更新網站資訊

1. **個人資訊**: 編輯 `src/pages/About.js` 和 `src/pages/Contact.js`
2. **作品集**: 更新 `src/pages/Portfolio.js` 中的專案資料
3. **聯絡資訊**: 修改 `src/components/Footer.js` 和 `src/pages/Contact.js`

### Google Analytics設定

1. 建立Google Analytics帳戶
2. 取得測量ID (GA_MEASUREMENT_ID)
3. 在 `public/index.html` 中替換 `GA_MEASUREMENT_ID`

### Google Tag Manager設定

1. 建立GTM帳戶
2. 取得容器ID (GTM-XXXXXXX)
3. 在 `public/index.html` 中替換 `GTM-XXXXXXX`

### 自訂網域

如果您有自己的網域：

1. 在 `package.json` 中更新 `homepage` 欄位
2. 在GitHub Pages設定中新增自訂網域
3. 在您的網域DNS設定中添加CNAME記錄

## 📱 PWA設定

本專案已包含PWA功能：

- **Manifest**: `public/manifest.json`
- **Service Worker**: 由Create React App自動生成
- **圖示**: 放置在 `public/` 資料夾中

### 自訂PWA圖示

1. 準備以下尺寸的圖示：
   - 192x192px (logo192.png)
   - 512x512px (logo512.png)
   - favicon.ico

2. 將圖示放置在 `public/` 資料夾中

## 🔄 更新部署

每次更新後，執行以下命令重新部署：

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
npm run deploy
```

## 🐛 常見問題

### 部署後網站無法載入

1. 檢查 `package.json` 中的 `homepage` 設定
2. 確認GitHub Pages已啟用
3. 檢查 `gh-pages` 分支是否存在

### 樣式或圖片無法顯示

1. 確認所有資源路徑使用相對路徑
2. 檢查 `public/` 資料夾中的靜態資源
3. 確認建置過程沒有錯誤

### 動畫效果異常

1. 檢查瀏覽器控制台是否有JavaScript錯誤
2. 確認所有依賴套件已正確安裝
3. 測試不同瀏覽器的相容性

## 📞 支援

如果遇到部署問題，請：

1. 檢查GitHub Pages文件
2. 查看專案README
3. 在GitHub Issues中提出問題

---

🎉 恭喜！您的UI/UX作品集網站已成功部署！
