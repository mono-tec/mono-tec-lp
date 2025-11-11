# Docusaurus LP

-   Projects ページでカード表示／Docs で補足説明\
-   ブログと問い合わせは無し（`blog:false`）

------------------------------------------------------------------------

## 手順

1.  このフォルダを新規リポジトリにコピー（例: `lp-sample`）\

2.  `docusaurus.config.ts` の下記設定を修正：

    ``` ts
    url: 'https://YOUR_GITHUB_ACCOUNT.github.io',
    baseUrl: '/YOUR_REPOSITORY_NAME/',
    organizationName: 'YOUR_GITHUB_ACCOUNT',
    projectName: 'YOUR_REPOSITORY_NAME',
    ```

3.  依存関係のインストール

    ``` bash
    npm install
    ```

------------------------------------------------------------------------

## 🔍 ローカルでの確認方法

開発用サーバーを起動し、ローカルブラウザで確認します。

``` bash
npm run start
```

-   起動後、ブラウザで <http://localhost:3000/mono-tec-lp/> を開く\
-   修正内容は自動リロードで即時反映されます（ホットリロード対応）

------------------------------------------------------------------------

## 🌐 GitHub Pages での公開方法

1.  `.github/workflows/deploy.yml` が設定されていることを確認\

2.  リポジトリにコミット・プッシュすると、GitHub Actions
    が自動でデプロイ\

3.  ブランチ `gh-pages` が生成され、GitHub Pages が有効になります

    -   設定画面：\
        **Settings → Pages → Source → gh-pages / (root)** に設定\

4.  公開URL（例）

        https://YOUR_GITHUB_ACCOUNT.github.io/YOUR_REPOSITORY_NAME/

------------------------------------------------------------------------

## 🧭 補足

-   ページ構成
    -   `/projects` ... プロジェクト一覧\
    -   `/about` ... 概要紹介\
    -   `/docs` ... 補足説明ページ群\
-   CSSは `src/css/custom.css` で調整\
-   静的ファイルは `static/` 配下に配置（画像やフォントなど）

------------------------------------------------------------------------

📘 Example（mono-tec-lp）\
👉 https://mono-tec.github.io/mono-tec-lp/
