import { updatePriceTotalCarShop } from "./updatePriceTotalCarShop.js";

export function updatePrice(productElement, productPrice, quantity) {

  const priceElement = productElement.querySelector(
    ".price-product-information"
  );
  const totalPrice = productPrice * quantity;

  updatePriceTotalCarShop(totalPrice)

  priceElement.textContent = `$${totalPrice.toFixed(2)}`; // Actualiza el precio total del producto 
}