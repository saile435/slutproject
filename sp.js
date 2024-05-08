var cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
}

function openModal() {
    var cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';
    cartItems.forEach(function(item, index) {
        var li = document.createElement('li');
        li.textContent = item;
        
        // Create a button to remove the item from the cart
        var removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', function() {
            removeFromCart(index);
        });
        
        // Append the remove button to the list item
        li.appendChild(removeButton);
        
        cartList.appendChild(li);
    });
    document.getElementById('cartModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    openModal(); // Reopen modal to update the cart items list
}
