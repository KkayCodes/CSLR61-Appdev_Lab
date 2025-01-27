document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    // Get cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display the items in the cart
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let totalPrice = 0;
        cart.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');
            productDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                </div>
            `;
            cartItemsContainer.appendChild(productDiv);
            totalPrice += item.price;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Checkout button functionality
    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to the cart before proceeding to checkout.");
        } else {
            // For now, just show a confirmation alert (you can integrate payment gateway later)
            alert("Proceeding to checkout!");
            // Redirect to a checkout page (if implemented)
            // window.location.href = '/checkout.html';
        }
    });
});
