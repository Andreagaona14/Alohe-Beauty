let totalPrice = 0; // Variable para almacenar el precio total

export function updatePriceTotalCarShop() {
  const pTotalPrice = document.getElementById('total-price');
  pTotalPrice.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

export function addToTotal(price) {
  totalPrice += price; // Suma el precio al total
  updatePriceTotalCarShop(); // Actualiza el total en el DOM
}
