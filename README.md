# 🏮 マチカド！ 完全版デモ

> 街角の温かいオンラインマーケット - Phase 4完成版

生産者と購入者を直接つなぐ、オンラインマーケットプラットフォームの **完全動作デモ版** です。

[![Demo](https://img.shields.io/badge/Demo-Live-success)](https://your-username.github.io/machikado-demo/)
[![Status](https://img.shields.io/badge/Status-Phase%204%20Complete-blue)]()
[![License](https://img.shields.io/badge/License-MIT-green)]()

---

## ✨ 主な機能

### 🔐 認証システム

- ✅ ログイン/ログアウト
- ✅ 購入者・出品者・両方の権限管理
- ✅ デモ用クイックログイン
- ✅ LocalStorageでセッション管理

### 👤 購入者機能

- ✅ マイページ
- ✅ 注文履歴表示
- ✅ お気に入り商品
- ✅ 配送先管理
- ✅ アカウント設定

### 🏪 出品者機能

- ✅ 出品者ダッシュボード
- ✅ 売上統計表示
- ✅ 商品管理
- ✅ 注文管理
- ✅ ショップページ編集

### 🛒 ショッピング機能

- ✅ 商品一覧・検索
- ✅ カート機能
- ✅ 出品者一覧
- ✅ レスポンシブデザイン

---

## 🚀 クイックスタート

### 1. リポジトリをクローン

```bash
git clone https://github.com/YOUR_USERNAME/machikado-demo.git
cd machikado-demo
```

### 2. ローカルサーバーを起動

```bash
# Python 3の場合
python3 -m http.server 8000

# Node.jsの場合
npx http-server .
```

### 3. ブラウザで開く

```
http://localhost:8000
```

### 4. デモアカウントでログイン

| 種類 | メール | パスワード |
|------|--------|-----------|
| 👤 購入者 | buyer@example.com | password |
| 🏪 出品者 | seller@example.com | password |
| 🔄 両方 | both@example.com | password |

**または** login.htmlの「デモ用クイックログイン」ボタンでワンクリックログイン！

---

## 📁 ファイル構造

```
machikado-demo/
├── 📄 HTMLファイル（9ファイル）
│   ├── index.html              # トップページ
│   ├── products.html           # 商品一覧
│   ├── cart.html               # カート
│   ├── sellers.html            # 出品者一覧
│   ├── login.html              # ログイン
│   ├── mypage.html             # 購入者マイページ
│   └── seller-dashboard.html  # 出品者ダッシュボード
│
├── 🎨 CSSファイル（8ファイル）
│   ├── css/common.css          # 共通スタイル
│   ├── css/home.css            # トップページ
│   ├── css/products.css        # 商品一覧
│   ├── css/cart.css            # カート
│   ├── css/sellers.css         # 出品者一覧
│   ├── css/auth.css            # 認証ページ
│   ├── css/mypage.css          # マイページ
│   └── css/seller.css          # 出品者ダッシュボード
│
├── ⚡ JavaScriptファイル（3ファイル）
│   ├── js/common.js            # 共通機能
│   ├── js/auth.js              # 認証システム
│   └── js/cart.js              # カート機能
│
└── 📚 ドキュメント（7ファイル）
    ├── README.md               # このファイル
    ├── QUICKSTART.md           # クイックスタート
    ├── DEPLOYMENT.md           # デプロイガイド
    ├── COMPLETION_REPORT.md    # 実装レポート
    ├── PHASE4_COMPLETION.md    # Phase 4完成レポート
    └── PHASE4_STATUS.md        # Phase 4状況
```

**合計**: 27ファイル / 約6,000行のコード

---

## 🎯 実装機能一覧

| カテゴリ | 機能 | 状態 |
|---------|------|------|
| **認証** | ログイン/ログアウト | ✅ 完成 |
| | 権限管理（buyer/seller/both） | ✅ 完成 |
| | セッション管理 | ✅ 完成 |
| **購入者** | マイページ | ✅ 完成 |
| | 注文履歴 | ✅ 完成 |
| | お気に入り | ✅ 完成 |
| | 配送先管理 | ✅ 完成 |
| **出品者** | ダッシュボード | ✅ 完成 |
| | 商品管理 | ✅ 完成 |
| | 注文管理 | ✅ 完成 |
| | 売上統計 | ✅ 完成 |
| **ショッピング** | 商品一覧 | ✅ 完成 |
| | カート機能 | ✅ 完成 |
| | 出品者一覧 | ✅ 完成 |
| **その他** | レスポンシブデザイン | ✅ 完成 |
| | LocalStorage活用 | ✅ 完成 |

---

## 🎨 デザインシステム

### カラーパレット

| 色 | HEX | 用途 |
|---|---|---|
| 🧡 テラコッタオレンジ | `#D4622A` | プライマリー |
| 💚 深緑 | `#4A7C59` | セカンダリー |
| 💛 イエロー | `#E8A838` | アクセント |
| 🤍 クリームホワイト | `#F5EFE0` | 背景 |

### タイポグラフィ

- **見出し**: Noto Serif JP（明朝体）
- **本文**: Noto Sans JP（ゴシック体）
- **ベースサイズ**: 16px

---

## 💻 使用技術

| 技術 | バージョン | 用途 |
|------|-----------|------|
| HTML5 | - | マークアップ |
| CSS3 | - | スタイリング |
| JavaScript (ES6+) | - | インタラクティブ機能 |
| Google Fonts | - | フォント |
| Unsplash API | - | デモ画像 |
| LocalStorage API | - | データ永続化 |

---

## 📱 レスポンシブ対応

- ✅ スマートフォン（〜767px）
- ✅ タブレット（768px〜1023px）
- ✅ デスクトップ（1024px〜）

---

## 🌐 デプロイ

### GitHub Pagesで公開

```bash
# リポジトリ作成・プッシュ
git init
git add .
git commit -m "🎉 Initial commit: マチカド！完全版"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/machikado-demo.git
git push -u origin main
```

**Settings > Pages > Source: main branch** で公開

詳細は [DEPLOYMENT.md](DEPLOYMENT.md) を参照

---

## 🧪 テスト方法

### 基本フロー

1. トップページ表示確認
2. ログイン（デモアカウント）
3. 購入者マイページ確認
4. 商品をカートに追加
5. カート内容確認
6. ログアウト
7. 出品者アカウントでログイン
8. 出品者ダッシュボード確認
9. 各タブの動作確認

### テストアカウント

```javascript
// ブラウザのコンソールで確認
localStorage.getItem('machikado_user')

// カートの内容確認
localStorage.getItem('machikado_cart')
```

---

## 🐛 既知の制限事項

### デモ版の制限

- ❌ 実際の決済機能なし（Stripe未連携）
- ❌ 画像アップロード機能なし
- ❌ メール送信機能なし
- ❌ サーバーサイド処理なし
- ❌ データベース連携なし

### MVP版で実装予定

これらの機能はLaravel + MySQL + Stripeで実装予定です。

---

## 📊 パフォーマンス

### 最適化施策

- ✅ 画像遅延読み込み
- ✅ 最小限のJavaScript
- ✅ CSS変数による効率的なスタイリング
- ✅ セマンティックHTML

### 期待値

- **初回ロード**: 1秒以下
- **ページ遷移**: 即時
- **Lighthouse スコア**: 90+（推定）

---

## 🎓 学習ポイント

このプロジェクトで学べること:

1. **モダンHTML/CSS**
   - Flexbox & Grid Layout
   - CSS Custom Properties
   - レスポンシブデザイン

2. **JavaScript**
   - ES6+ クラス
   - LocalStorage API
   - DOM操作

3. **UI/UXデザイン**
   - ユーザーフロー設計
   - マルチロール対応
   - ダッシュボード設計

4. **認証システム**
   - セッション管理
   - 権限制御
   - リダイレクト処理

---

## 🔄 次のステップ

### Phase 5: MVP実装（Laravel）

```
1. バックエンド構築
   - Laravel 10.x
   - MySQL 8.0
   - AWS S3

2. 決済連携
   - Stripe Connect
   - 自動分配機能

3. 認証システム
   - Laravel Sanctum
   - OAuth（Google/LINE）

4. 管理機能
   - 出品者審査
   - 売上管理
   - 手数料設定
```

---

## 🤝 貢献

このプロジェクトは学習・デモ目的です。
フィードバックや改善提案は Issue でお願いします。

---

## 📝 ライセンス

MIT License

© 2026 マチカド！ All rights reserved.

---

## 📞 お問い合わせ

- GitHub Issues: プロジェクトのIssuesタブ
- Email: info@machikado.example.com（デモ用）

---

## 🙏 謝辞

- デザインインスピレーション: 食べチョク
- デモ画像: Unsplash
- フォント: Google Fonts

---

**Made with ❤️ for マチカド！**

*最終更新: 2026年2月25日*
