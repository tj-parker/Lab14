/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tbody = document.querySelector('tbody');
  for (let i = 0; i < cart.items.length; i++) {
    let tr = document.createElement('tr');
     tbody.appendChild(tr);
    
    let td1 = document.createElement('td');
    td1.textContent = cart.items[i].product;
    tr.appendChild(td1);
    

    let td2 = document.createElement('td');
    td2.textContent = cart.items[i].quantity;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = "x";
    td3.setAttribute('id', i);
    tr.appendChild(td3);
  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  cart.removeItem(cart.items[event.target.id].product);
  cart.saveToLocalStorage();
  renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
