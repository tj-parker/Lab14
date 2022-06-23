/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementById('tbody').removeChild('tr');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  for (let i = 0; i < this.cartItems.length; i++) {
    const tr = document.createElement('tr');
    tr.cartContent = this.cartItems[i];
    
    tbody.appendChild(tr);
  }
    
  const dataRow = document.createElement('tr');
  tbody.appendChild(dataRow);

    const deleteLink = document.createElement('td');
    dataRow.appendChild(deleteLink);
    deleteLink.addEventListener('click', removeItemFromCart);

    const quantityCell = document.createElement('td');
    dataRow.appendChild(quantityCell);
    quantityCell.textContent = this.quantity;

    const item = document.createElement('td');
    dataRow.appendChild(item);
    item.textContent = this.product;

    tbody.appendChild(dataRow);

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  Cart.prototype.removeItem();
  Cart.prototype.saveToLocalStorage();
  document.getElementById('tr').removedChild('td');
  const deleteLink = document.createElement('td');
    dataRow.appendChild(deleteLink);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
