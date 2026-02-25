# 🚀 マチカド！デモ版 - デプロイメントガイド

このドキュメントは、マチカド！デモ版をGitHubにアップロードして公開する手順を説明します。

---

## 📋 事前準備

### 必要なもの

- ✅ GitHubアカウント
- ✅ Git（インストール済み）
- ✅ テキストエディタ（VS Code推奨）

---

## 🛠️ ステップ1: GitHubリポジトリ作成

### 1. GitHubにログイン

[https://github.com](https://github.com) にアクセスしてログイン

### 2. 新規リポジトリを作成

1. 右上の「+」→「New repository」をクリック
2. リポジトリ情報を入力:
   - **Repository name**: `machikado-demo`（任意）
   - **Description**: `マチカド！ - 街角の温かいオンラインマーケット（デモ版）`
   - **Public** を選択（公開サイトにするため）
   - 「Add a README file」は**チェックしない**（既にREADME.mdがあるため）
3. 「Create repository」をクリック

---

## 💻 ステップ2: ローカルでGit初期化

### 1. プロジェクトフォルダに移動

```bash
cd /path/to/machikado-demo
```

### 2. Gitを初期化

```bash
git init
```

### 3. ファイルをステージング

```bash
git add .
```

### 4. 初回コミット

```bash
git commit -m "🎉 Initial commit: マチカド！デモ版"
```

### 5. リモートリポジトリを追加

```bash
# GitHubのリポジトリURLに置き換えてください
git remote add origin https://github.com/YOUR_USERNAME/machikado-demo.git
```

### 6. プッシュ

```bash
git branch -M main
git push -u origin main
```

---

## 🌐 ステップ3: GitHub Pagesで公開

### 1. リポジトリの設定を開く

1. GitHubのリポジトリページにアクセス
2. 「Settings」タブをクリック

### 2. GitHub Pagesを有効化

1. 左メニューから「Pages」をクリック
2. **Source**セクションで:
   - **Branch**: `main` を選択
   - **Folder**: `/ (root)` を選択
3. 「Save」をクリック

### 3. 公開URLを確認

数分後、以下のURLでサイトが公開されます:

```
https://YOUR_USERNAME.github.io/machikado-demo/
```

---

## ✅ ステップ4: 動作確認

### チェックリスト

- [ ] トップページが正しく表示される
- [ ] ハンバーガーメニューが動作する
- [ ] 商品一覧ページに遷移できる
- [ ] カートに商品を追加できる
- [ ] カートページで商品が表示される
- [ ] 数量変更・削除が動作する
- [ ] 出品者一覧が表示される
- [ ] スマホで正しく表示される

### テストURL

```
トップページ:
https://YOUR_USERNAME.github.io/machikado-demo/

商品一覧:
https://YOUR_USERNAME.github.io/machikado-demo/products.html

カート:
https://YOUR_USERNAME.github.io/machikado-demo/cart.html

出品者一覧:
https://YOUR_USERNAME.github.io/machikado-demo/sellers.html
```

---

## 🔄 更新方法

コードを修正した後:

```bash
# 変更をステージング
git add .

# コミット
git commit -m "✨ 機能追加: ○○を実装"

# プッシュ
git push origin main
```

数分後、自動的にGitHub Pagesに反映されます。

---

## 🎨 カスタマイズ

### サイト名を変更する場合

1. すべてのHTMLファイルの `<title>` タグを修正
2. ヘッダーの `<h1>マチカド！</h1>` を修正
3. フッターのコピーライトを修正

### 色を変更する場合

`css/common.css` の `:root` セクションで色変数を変更:

```css
:root {
    --color-primary: #D4622A;  /* メインカラー */
    --color-secondary: #4A7C59; /* サブカラー */
    /* ... */
}
```

---

## 🐛 トラブルシューティング

### 画像が表示されない

- Unsplashの画像URLは外部リンクです
- インターネット接続を確認してください
- 本番環境では自分の画像をS3等にアップロードすることを推奨

### カートが動作しない

- ブラウザのJavaScriptが有効か確認
- LocalStorageが利用可能か確認
- デベロッパーツールでエラーを確認

### GitHub Pagesが表示されない

- リポジトリがPublicになっているか確認
- 「Settings > Pages」で正しくBranchが設定されているか確認
- 数分待ってから再度アクセス

---

## 📱 スマホで確認する方法

### iPhoneの場合

1. Safariで公開URLを開く
2. 画面下部の共有ボタン→「ホーム画面に追加」
3. アイコンからアクセス可能に

### Androidの場合

1. Chromeで公開URLを開く
2. メニュー→「ホーム画面に追加」
3. アイコンからアクセス可能に

---

## 🎯 次のステップ

デモ版が公開できたら、以下の準備を進めましょう:

### 1. ドメイン取得（オプション）

独自ドメインを使いたい場合:

1. ドメインを取得（お名前.com等）
2. GitHub Pagesのカスタムドメイン設定
3. DNSレコードを設定

### 2. MVP版の開発準備

- [ ] Laravel環境構築
- [ ] データベース設計の確認
- [ ] AWS アカウント作成
- [ ] Stripeアカウント作成

### 3. デザインの詳細化

- [ ] Figmaでモックアップ作成
- [ ] アイコン・ロゴのデザイン
- [ ] 各ページの詳細デザイン

---

## 📞 サポート

質問や問題があれば:

- **GitHub Issues**: リポジトリのIssuesタブで質問
- **プルリクエスト**: 改善提案を送ってください

---

**デプロイ、お疲れ様でした！🎉**

これであなたの「マチカド！」デモ版が世界に公開されました。
