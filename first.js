document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.home', {
        // Specify Swiper options here
        loop: true, // Example option
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        autoplay:{
            dealy:2000,
            disableOnInteraction:false,
        }
    });
});












document.addEventListener('DOMContentLoaded', function () {
    let cart = [];
    const cartCount = document.querySelector('.cart-count');
    const cartSection = document.getElementById('cart-section');
    const cartItems = document.getElementById('cart-items');
    const productList = document.getElementById('product-list');

    // Add to cart functionality
    productList.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.closest('.box').getAttribute('data-id');
            addToCart(productId);
        }
    });

    function addToCart(productId) {
        // For simplicity, assume each product has an ID and name (you can improve this)
        const product = {
            id: productId,
            name: `Product ${productId}`,
            price: 200,
            quantity: 1
        };

        // Check if product is already in cart
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        // Update cart count and display
        updateCart();
    }

    function updateCart() {
        // Update cart count
        cartCount.textContent = cart.length;

        // Show cart items
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - ${item.quantity} x ₹${item.price}`;
            cartItems.appendChild(cartItem);
        });

        // Show the cart section
        cartSection.classList.remove('hidden');
    }

    // Checkout button functionality
    document.getElementById('checkout-btn').addEventListener('click', function () {
        alert('Proceeding to checkout...');
        // Add backend integration here (e.g., process payment)
    });

    // Toggle login/register modal
    const authModal = document.getElementById('auth-modal');
    const toggleAuthButton = document.getElementById('toggle-auth');
    
    toggleAuthButton.addEventListener('click', function () {
        document.getElementById('login-form').classList.toggle('hidden');
        document.getElementById('register-form').classList.toggle('hidden');
    });

    // Show auth modal (you can trigger this on button click like "Login" or "Register" buttons)
    authModal.classList.remove('hidden');
});


