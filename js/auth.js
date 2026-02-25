// =====================================
// 認証システム（デモ版）
// =====================================

class Auth {
    constructor() {
        this.currentUser = this.loadUser();
    }

    // デモ用ユーザーデータ
    static DEMO_USERS = {
        // 購入者
        buyer1: {
            id: 'buyer1',
            email: 'buyer@example.com',
            password: 'password',
            role: 'buyer',
            name: '山田太郎',
            avatar: 'https://i.pravatar.cc/100?img=10',
            createdAt: '2026-01-15'
        },
        // 出品者
        seller1: {
            id: 'seller1',
            email: 'seller@example.com',
            password: 'password',
            role: 'seller',
            name: '山田農園',
            businessName: '山田農園',
            avatar: 'https://i.pravatar.cc/100?img=12',
            prefecture: '長野県',
            sellerId: 1,
            createdAt: '2025-12-01'
        },
        seller2: {
            id: 'seller2',
            email: 'sato@example.com',
            password: 'password',
            role: 'seller',
            name: '佐藤花子',
            businessName: '佐藤ファーム',
            avatar: 'https://i.pravatar.cc/100?img=5',
            prefecture: '北海道',
            sellerId: 2,
            createdAt: '2025-11-20'
        },
        // 両方の権限を持つユーザー
        both1: {
            id: 'both1',
            email: 'both@example.com',
            password: 'password',
            role: 'both', // 購入者 + 出品者
            name: '高橋次郎',
            businessName: '高橋養鶏場',
            avatar: 'https://i.pravatar.cc/100?img=33',
            prefecture: '千葉県',
            sellerId: 6,
            createdAt: '2025-10-10'
        }
    };

    loadUser() {
        const saved = localStorage.getItem('machikado_user');
        return saved ? JSON.parse(saved) : null;
    }

    saveUser(user) {
        localStorage.setItem('machikado_user', JSON.stringify(user));
        this.currentUser = user;
    }

    clearUser() {
        localStorage.removeItem('machikado_user');
        this.currentUser = null;
    }

    // ログイン
    login(email, password) {
        // デモユーザーから検索
        const user = Object.values(Auth.DEMO_USERS).find(
            u => u.email === email && u.password === password
        );

        if (user) {
            // パスワードは保存しない
            const { password: _, ...userWithoutPassword } = user;
            this.saveUser(userWithoutPassword);
            return { success: true, user: userWithoutPassword };
        }

        return { success: false, error: 'メールアドレスまたはパスワードが正しくありません' };
    }

    // ログアウト
    logout() {
        this.clearUser();
    }

    // ログイン状態チェック
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // 現在のユーザー取得
    getUser() {
        return this.currentUser;
    }

    // 権限チェック
    hasRole(role) {
        if (!this.currentUser) return false;
        if (this.currentUser.role === 'both') return true;
        return this.currentUser.role === role;
    }

    isBuyer() {
        return this.hasRole('buyer');
    }

    isSeller() {
        return this.hasRole('seller');
    }

    // 会員登録（デモ版）
    register(data) {
        // デモ版では実際には保存せず、成功を返す
        const newUser = {
            id: 'new_' + Date.now(),
            email: data.email,
            name: data.name,
            role: data.role || 'buyer',
            avatar: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`,
            createdAt: new Date().toISOString()
        };

        if (data.role === 'seller') {
            newUser.businessName = data.businessName;
            newUser.prefecture = data.prefecture;
            newUser.sellerId = Math.floor(Math.random() * 1000);
        }

        // 自動ログイン
        this.saveUser(newUser);

        return { success: true, user: newUser };
    }

    // 認証が必要なページへのリダイレクト
    requireAuth(redirectUrl = '/login.html') {
        if (!this.isLoggedIn()) {
            window.location.href = redirectUrl;
            return false;
        }
        return true;
    }

    // 権限が必要なページへのリダイレクト
    requireRole(role, redirectUrl = '/index.html') {
        if (!this.hasRole(role)) {
            showToast('この機能を利用するには' + (role === 'seller' ? '出品者' : '購入者') + '権限が必要です');
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 2000);
            return false;
        }
        return true;
    }

    // ヘッダーの更新
    updateHeader() {
        const loginBtn = document.querySelector('.login-btn');
        const mobileMenu = document.getElementById('mobileMenu');

        if (this.isLoggedIn()) {
            const user = this.getUser();
            
            // デスクトップのログインボタンを置き換え
            if (loginBtn) {
                loginBtn.innerHTML = `
                    <img src="${user.avatar}" alt="${user.name}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
                `;
                loginBtn.href = '#';
                loginBtn.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.showUserMenu(e.currentTarget);
                };
            }

            // モバイルメニューを更新
            if (mobileMenu) {
                const loginLinks = mobileMenu.querySelectorAll('a[href="#login"], a[href="#register"]');
                loginLinks.forEach(link => {
                    const li = link.parentElement;
                    li.style.display = 'none';
                });

                // ユーザーメニューを追加
                const divider = mobileMenu.querySelector('.divider');
                if (divider && !document.getElementById('mobileUserMenu')) {
                    const userMenu = document.createElement('div');
                    userMenu.id = 'mobileUserMenu';
                    userMenu.innerHTML = `
                        <li style="padding: 1rem; background: var(--color-surface-alt);">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <img src="${user.avatar}" alt="${user.name}" style="width: 40px; height: 40px; border-radius: 50%;">
                                <div>
                                    <div style="font-weight: 600;">${user.name}</div>
                                    <div style="font-size: 0.875rem; color: var(--color-text-light);">${user.email}</div>
                                </div>
                            </div>
                        </li>
                        ${user.role === 'buyer' || user.role === 'both' ? '<li><a href="mypage.html">📱 マイページ</a></li>' : ''}
                        ${user.role === 'seller' || user.role === 'both' ? '<li><a href="seller-dashboard.html">🏪 出品者ダッシュボード</a></li>' : ''}
                        <li><a href="#" onclick="auth.logout(); return false;">🚪 ログアウト</a></li>
                    `;
                    divider.parentNode.insertBefore(userMenu, divider);
                }
            }
        }
    }

    // ユーザーメニュー表示（デスクトップ）
    showUserMenu(triggerElement) {
        const user = this.getUser();
        
        // 既存のメニューがあれば削除
        const existing = document.querySelector('.user-menu-dropdown');
        if (existing) {
            existing.remove();
            return; // トグル動作
        }

        const menu = document.createElement('div');
        menu.className = 'user-menu-dropdown';
        menu.innerHTML = `
            <div class="user-menu-header">
                <img src="${user.avatar}" alt="${user.name}">
                <div>
                    <div class="user-menu-name">${user.name}</div>
                    <div class="user-menu-email">${user.email}</div>
                </div>
            </div>
            <div class="user-menu-divider"></div>
            ${user.role === 'buyer' || user.role === 'both' ? '<a href="mypage.html" class="user-menu-item">📱 マイページ</a>' : ''}
            ${user.role === 'seller' || user.role === 'both' ? '<a href="seller-dashboard.html" class="user-menu-item">🏪 出品者ダッシュボード</a>' : ''}
            <div class="user-menu-divider"></div>
            <a href="#" onclick="auth.logout(); return false;" class="user-menu-item">🚪 ログアウト</a>
        `;

        document.body.appendChild(menu);

        // triggerElementがある場合、その位置にメニューを配置
        if (triggerElement) {
            const rect = triggerElement.getBoundingClientRect();
            menu.style.position = 'fixed';
            menu.style.top = (rect.bottom + 8) + 'px';
            menu.style.right = (window.innerWidth - rect.right) + 'px';
        }

        // メニュー外クリックで閉じる
        setTimeout(() => {
            const closeMenu = (e) => {
                if (!menu.contains(e.target) && e.target !== triggerElement) {
                    menu.remove();
                    document.removeEventListener('click', closeMenu);
                }
            };
            document.addEventListener('click', closeMenu);
        }, 100);
    }

    logout() {
        if (confirm('ログアウトしますか？')) {
            this.clearUser();
            showToast('ログアウトしました');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }
    }
}

// グローバルインスタンス
const auth = new Auth();

// ページ読み込み時にヘッダーを更新
document.addEventListener('DOMContentLoaded', function() {
    auth.updateHeader();
});

// デモ用のクイックログイン関数
function quickLogin(userType) {
    let result;
    switch(userType) {
        case 'buyer':
            result = auth.login('buyer@example.com', 'password');
            break;
        case 'seller':
            result = auth.login('seller@example.com', 'password');
            break;
        case 'both':
            result = auth.login('both@example.com', 'password');
            break;
    }
    
    if (result.success) {
        showToast('ログインしました');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}
