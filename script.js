document.addEventListener('DOMContentLoaded', () => {
    // Grab the cart button and cart count elements
    const cartCount = document.getElementById('cart-count');
    const cartBtn = document.getElementById('cart-btn');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Initialize cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Update the cart count on page load
    cartCount.textContent = cart.length;

    // Update cart count and localStorage
    const updateCartCount = () => {
        cartCount.textContent = cart.length;
        localStorage.setItem('cart', JSON.stringify(cart));  // Save cart to localStorage
    };

    // Add item to cart on "Add to Cart" button click
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productName = productElement.querySelector('h3').innerText;
            const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('$', ''));
            const productImage = productElement.querySelector('img').src;

            // Create product object
            const product = { name: productName, price: productPrice, image: productImage };
            cart.push(product);

            // Update the cart count and save to localStorage
            updateCartCount();

            alert(`${productName} added to cart!`);
        });
    });

    // When the cart button is clicked, redirect to the cart page
    cartBtn.addEventListener('click', () => {
        window.location.href = 'cart.html';  // Redirect to the cart page
    });
});
