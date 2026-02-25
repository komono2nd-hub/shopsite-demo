// =====================================
// カートページ専用JavaScript
// =====================================

// 商品データ（デモ用）
const products = {
    1: {
        id: 1,
        name: '朝採れトマト 1kg',
        price: 1980,
        seller: '山田農園',
        sellerId: 1,
        image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200&h=200&fit=crop'
    },
    2: {
        id: 2,
        name: '季節の有機野菜セット',
        price: 2800,
        seller: '佐藤ファーム',
        sellerId: 2,
        image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=200&h=200&fit=crop'
    },
    3: {
        id: 3,
        name: '蜜入りりんご 2kg',
        price: 2980,
        seller: '青森果樹園',
        sellerId: 3,
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop'
    },
    4: {
        id: 4,
        name: '新米コシヒカリ 5kg',
        price: 3200,
        seller: '田中米店',
        sellerId: 4,
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop'
    },
    5: {
        id: 5,
        name: '朝採れきゅうり 500g',
        price: 800,
        seller: '山田農園',
        sellerId: 1,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784643?w=200&h=200&fit=crop'
    },
    6: {
        id: 6,
        name: '甘熟いちご 300g',
        price: 1500,
        seller: 'いちご園佐々木',
        sellerId: 5,
        image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=200&h=200&fit=crop'
    },
    7: {
        id: 7,
        name: '平飼い有精卵 10個',
        price: 680,
        seller: '高橋養鶏場',
        sellerId: 6,
        image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=200&h=200&fit=crop'
    },
    8: {
        id: 8,
        name: '北海道産じゃがいも 3kg',
        price: 1200,
        seller: '佐藤ファーム',
        sellerId: 2,
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=200&h=200&fit=crop'
    }
};

// 送料計算（デモ用：出品者ごとに固定）
const shippingFees = {
    1: 500,
    2: 600,
    3: 700,
    4: 500,
    5: 600,
    6: 500
};

// カート表示
function renderCart() {
    const cartItems = cart.items;
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');

    if (cartItems.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.innerHTML = '';
        return;
    }

    emptyCart.style.display = 'none';

    // 出品者ごとにグループ化
    const groupedItems = groupBySellerfunction() {
        const grouped = {};
        cartItems.forEach(item => {
            const product = products[item.id];
            if (!product) return;

            if (!grouped[product.sellerId]) {
                grouped[product.sellerId] = {
                    seller: product.seller,
                    items: []
                };
            }
            grouped[product.sellerId].items.push({
                ...item,
                product: product
            });
        });
        return grouped;
    };

    const grouped = groupBySeller();
    let totalAmount = 0;
    let totalShipping = 0;

    let html = '<div class="cart-layout">';
    html += '<div class="cart-items">';

    // 各出品者ごとにカートグループを表示
    Object.keys(grouped).forEach(sellerId => {
        const group = grouped[sellerId];
        let groupSubtotal = 0;
        const shipping = shippingFees[sellerId] || 500;

        html += `
            <div class="cart-group">
                <div class="cart-group-header">
                    <h2 class="seller-name">🏪 ${group.seller}</h2>
                </div>
        `;

        group.items.forEach(item => {
            const subtotal = item.product.price * item.quantity;
            groupSubtotal += subtotal;

            html += `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.product.image}" alt="${item.product.name}">
                    </div>
                    <div class="cart-item-info">
                        <h3 class="cart-item-name">${item.product.name}</h3>
                        <div class="cart-item-price">${formatPrice(item.product.price)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">削除</button>
                    </div>
                </div>
            `;
        });

        const groupTotal = groupSubtotal + shipping;
        totalAmount += groupTotal;
        totalShipping += shipping;

        html += `
                <div class="cart-group-summary">
                    <div class="summary-row">
                        <span class="summary-label">小計</span>
                        <span class="summary-value">${formatPrice(groupSubtotal)}</span>
                    </div>
                    <div class="summary-row">
                        <span class="summary-label">送料</span>
                        <span class="summary-value">${formatPrice(shipping)}</span>
                    </div>
                    <div class="summary-row total">
                        <span>合計</span>
                        <span>${formatPrice(groupTotal)}</span>
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>'; // cart-items

    // チェックアウトセクション
    html += `
        <div class="checkout-section">
            <h2 class="section-title" style="font-size: 1.25rem; margin-bottom: 1.5rem;">注文内容</h2>
            <div class="checkout-summary">
                <div class="summary-row" style="margin-bottom: 0.5rem;">
                    <span class="summary-label">商品合計</span>
                    <span class="summary-value">${formatPrice(totalAmount - totalShipping)}</span>
                </div>
                <div class="summary-row" style="margin-bottom: 0.5rem;">
                    <span class="summary-label">送料合計</span>
                    <span class="summary-value">${formatPrice(totalShipping)}</span>
                </div>
            </div>
            <div class="checkout-total">
                <span class="checkout-total-label">総合計</span>
                <span class="checkout-total-value">${formatPrice(totalAmount)}</span>
            </div>
            <button class="btn btn-primary checkout-btn" onclick="checkout()">購入手続きへ</button>
            <div class="continue-shopping">
                <a href="products.html">← 買い物を続ける</a>
            </div>
        </div>
    `;

    html += '</div>'; // cart-layout

    cartContent.innerHTML = html;
}

// 数量更新
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
    } else {
        cart.updateQuantity(productId, newQuantity);
        renderCart();
    }
}

// カートから削除
function removeFromCart(productId) {
    if (confirm('この商品をカートから削除しますか？')) {
        cart.removeItem(productId);
        renderCart();
        showToast('カートから削除しました');
    }
}

// チェックアウト
function checkout() {
    showToast('購入手続きはデモ版では利用できません');
    // 実際の実装では注文確認ページへ遷移
    // window.location.href = 'checkout.html';
}

// ページ読み込み時にカートを表示
document.addEventListener('DOMContentLoaded', function() {
    renderCart();
});
