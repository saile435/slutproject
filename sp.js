var cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
    updateCartModal();
}

function updateCartModal() {
    var cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';
    cartItems.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
    openModal();
}

function openModal() {
    document.getElementById('cartModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('cartModal').style.display = 'none';
}