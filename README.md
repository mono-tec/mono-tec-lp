# Docusaurus LP

- Projectsページでカード表示／Docsで補足説明
- ブログと問い合わせは無し（`blog:false`）

## 手順
1) このフォルダを新規リポジトリにコピー（例: `lp-sample`）  
2) `docusaurus.config.ts` の `url`, `baseUrl`, `organizationName`, `projectName` を修正  
3) ローカル起動：

```bash
npm install
npm run start
```

4) Pagesデプロイ（Actionsを使う場合はリポジトリにpushし、Pagesのブランチを`gh-pages`に設定）
