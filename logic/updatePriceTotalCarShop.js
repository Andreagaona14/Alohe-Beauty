let totalPrice = 0; 

export function updatePriceTotalCarShop() {
  const pTotalPrice = document.getElementById('total-price');
  pTotalPrice.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

export function addToTotal(price) {
  totalPrice += price; 
  updatePriceTotalCarShop(); 
}

export function resetTotal() {
  totalPrice = 0;
  updatePriceTotalCarShop()
}
