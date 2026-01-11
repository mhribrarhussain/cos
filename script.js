// ========== Product Data ==========
const products = [
    {
        id: 1,
        name: "Red Velvet Lipstick",
        category: "lipstick",
        price: 24.99,
        image: "C:/Users/DELL/.gemini/antigravity/brain/44a8b380-15ac-46b8-828b-cccffb5e45d9/lipstick_red_velvet_1768137505870.png",
        description: "Bold and beautiful red lipstick with a velvety matte finish. Long-lasting formula that stays vibrant all day.",
        features: [
            "Long-lasting matte finish",
            "Rich, vibrant color",
            "Comfortable wear",
            "Enriched with vitamin E",
            "Cruelty-free formula"
        ]
    },
    {
        id: 2,
        name: "Pink Nude Lipstick",
        category: "lipstick",
        price: 22.99,
        image: "C:/Users/DELL/.gemini/antigravity/brain/44a8b380-15ac-46b8-828b-cccffb5e45d9/lipstick_pink_nude_1768137520333.png",
        description: "Soft pink nude shade perfect for everyday elegance. Creamy texture for smooth application.",
        features: [
            "Natural nude finish",
            "Hydrating formula",
            "Smooth application",
            "All-day comfort",
            "Paraben-free"
        ]
    },
    {
        id: 3,
        name: "Berry Bliss Lipstick",
        category: "lipstick",
        price: 23.99,
        image: "C:/Users/DELL/.gemini/antigravity/brain/44a8b380-15ac-46b8-828b-cccffb5e45d9/lipstick_berry_bliss_1768137538471.png",
        description: "Deep berry shade with luxurious shine. Perfect for evening sophistication.",
        features: [
            "Glossy finish",
            "Long-lasting wear",
            "Non-drying formula",
            "Vitamin-enriched",
            "Smudge-proof"
        ]
    },
    {
        id: 4,
        name: "Vitamin C Serum",
        category: "skincare",
        price: 45.99,
        image: "C:/Users/DELL/.gemini/antigravity/brain/44a8b380-15ac-46b8-828b-cccffb5e45d9/skincare_vitamin_serum_1768137553543.png",
        description: "Brightening serum with pure vitamin C. Reduces dark spots and evens skin tone.",
        features: [
            "20% pure vitamin C",
            "Brightens complexion",
            "Anti-aging properties",
            "Lightweight formula",
            "Dermatologist tested"
        ]
    },
    {
        id: 5,
        name: "Hydrating Face Cream",
        category: "skincare",
        price: 38.99,
        image: "C:/Users/DELL/.gemini/antigravity/brain/44a8b380-15ac-46b8-828b-cccffb5e45d9/skincare_hydrating_cream_1768137569433.png",
        description: "Luxurious moisturizing cream for radiant, dewy skin. 24-hour hydration.",
        features: [
            "24-hour moisture",
            "Hyaluronic acid",
            "Plumps and smooths",
            "Non-greasy formula",
            "Suitable for all skin types"
        ]
    },
    {
        id: 6,
        name: "Radiance Eye Cream",
        category: "skincare",
        price: 42.99,
        image: "C:/Users/DELL/.gemini/antigravity/brain/44a8b380-15ac-46b8-828b-cccffb5e45d9/skincare_eye_cream_1768137584590.png",
        description: "Premium eye cream that reduces dark circles and puffiness. Reveals brighter, youthful eyes.",
        features: [
            "Reduces dark circles",
            "Diminishes puffiness",
            "Caffeine complex",
            "Gentle formula",
            "Ophthalmologist tested"
        ]
    },
    {
        id: 7,
        name: "Rose Gold Palette",
        category: "eyeshadow",
        price: 52.99,
        image: "C:/Users/DELL/.gemini/antigravity/brain/44a8b380-15ac-46b8-828b-cccffb5e45d9/eyeshadow_rose_palette_1768137599939.png",
        description: "Stunning rose gold eyeshadow palette with 12 shades. From soft neutrals to bold metallics.",
        features: [
            "12 versatile shades",
            "Highly pigmented",
            "Blendable formula",
            "Long-lasting wear",
            "Includes mirror"
        ]
    },
    {
        id: 8,
        name: "Nude Essentials Palette",
        category: "eyeshadow",
        price: 48.99,
        image: "C:/Users/DELL/.gemini/antigravity/brain/44a8b380-15ac-46b8-828b-cccffb5e45d9/eyeshadow_nude_palette_1768137616250.png",
        description: "Essential nude eyeshadow palette for everyday looks. Perfect for creating natural eye looks.",
        features: [
            "12 nude shades",
            "Matte and shimmer",
            "Crease-resistant",
            "Easy to blend",
            "Travel-friendly"
        ]
    },
    {
        id: 9,
        name: "Glamour Shimmer Palette",
        category: "eyeshadow",
        price: 54.99,
        image: "C:/Users/DELL/.gemini/antigravity/brain/44a8b380-15ac-46b8-828b-cccffb5e45d9/eyeshadow_glam_palette_1768137633619.png",
        description: "Dazzling shimmer palette for glamorous looks. Perfect for special occasions and nights out.",
        features: [
            "Intense shimmer",
            "Rich pigmentation",
            "Buttery texture",
            "No fallout",
            "Professional quality"
        ]
    }
];

// ========== State Management ==========
let cart = [];
let currentProduct = null;

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
    // Load cart from localStorage
    loadCart();
    
    // Render products
    renderProducts('all');
    
    // Event listeners
    setupEventListeners();
});

// ========== Event Listeners ==========
function setupEventListeners() {
    // Category filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderProducts(category);
        });
    });
    
    // Cart toggle
    document.getElementById('cartToggle').addEventListener('click', toggleCart);
    document.getElementById('cartClose').addEventListener('click', toggleCart);
    
    // Modal close buttons
    document.getElementById('modalClose').addEventListener('click', closeProductModal);
    document.getElementById('modalOverlay').addEventListener('click', closeProductModal);
    
    // Quantity controls in modal
    document.getElementById('qtyMinus').addEventListener('click', () => {
        const input = document.getElementById('modalQuantity');
        if (input.value > 1) input.value = parseInt(input.value) - 1;
    });
    
    document.getElementById('qtyPlus').addEventListener('click', () => {
        const input = document.getElementById('modalQuantity');
        if (input.value < 10) input.value = parseInt(input.value) + 1;
    });
    
    // Add to cart and buy now
    document.getElementById('addToCartBtn').addEventListener('click', addToCartFromModal);
    document.getElementById('buyNowBtn').addEventListener('click', buyNow);
    
    // Checkout buttons
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
    document.getElementById('checkoutOverlay').addEventListener('click', closeCheckout);
    
    // Checkout form
    document.getElementById('checkoutForm').addEventListener('submit', processPayment);
    
    // Success modal
    document.getElementById('successClose').addEventListener('click', closeSuccessModal);
}

// ========== Product Rendering ==========
function renderProducts(category) {
    const grid = document.getElementById('productsGrid');
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="product-badge">${product.category}</span>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 70)}...</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}

// ========== Product Modal ==========
function openProductModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;
    
    document.getElementById('modalProductImage').src = currentProduct.image;
    document.getElementById('modalCategory').textContent = currentProduct.category;
    document.getElementById('modalProductName').textContent = currentProduct.name;
    document.getElementById('modalPrice').textContent = `$${currentProduct.price.toFixed(2)}`;
    document.getElementById('modalDescription').textContent = currentProduct.description;
    document.getElementById('modalFeatures').innerHTML = currentProduct.features
        .map(f => `<li>${f}</li>`).join('');
    document.getElementById('modalQuantity').value = 1;
    
    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    currentProduct = null;
}

// ========== Cart Management ==========
function addToCartFromModal() {
    if (!currentProduct) return;
    
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    addToCart(currentProduct, quantity);
    closeProductModal();
}

function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    
    // Show cart briefly
    document.getElementById('cartSidebar').classList.add('active');
}

function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, Math.min(10, newQuantity));
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const totalPrice = document.getElementById('totalPrice');
    
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update total price
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `$${total.toFixed(2)}`;
    
    // Render cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
        `).join('');
    }
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
}

function buyNow() {
    if (!currentProduct) return;
    
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    addToCart(currentProduct, quantity);
    closeProductModal();
    
    // Small delay to show cart update
    setTimeout(() => {
        openCheckout();
    }, 300);
}

// ========== Local Storage ==========
function saveCart() {
    localStorage.setItem('cosmeticsCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cosmeticsCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// ========== Checkout ==========
function openCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Close cart sidebar
    document.getElementById('cartSidebar').classList.remove('active');
    
    // Populate checkout items
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <div class="checkout-item-info">
                <div class="checkout-item-name">${item.name}</div>
                <div class="checkout-item-qty">Qty: ${item.quantity}</div>
            </div>
            <div class="checkout-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `).join('');
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${subtotal.toFixed(2)}`;
    
    // Show modal
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function processPayment(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    
    // Simulate payment processing
    console.log('Processing payment...', {
        name, email, phone, address, payment,
        cart: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });
    
    // Close checkout modal
    closeCheckout();
    
    // Show success modal
    document.getElementById('successModal').classList.add('active');
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
    
    // Reset form
    document.getElementById('checkoutForm').reset();
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
}

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
