import { product } from "./products.js";
import { updatePrice } from "./updatePrice.js";
import { addToTotal } from "./updatePriceTotalCarShop.js";
import { updateProductCardStock } from "./updateProductCardStock.js";

export function subtractStock(id) {
  const productItem = product.find((item) => item.id === id);

  if (!productItem) {
    console.error("Producto no encontrado");
    return;
  }

  const blockProductCarShop = document.querySelector(".block-product-car-shop");
  const existingProductCarShop = [...blockProductCarShop.children].find(
    (item) => {
      return (
        item.querySelector(".title-product-information").textContent ===
        productItem.title
      );
    }
  );

  if (existingProductCarShop) {
    const quantityElement = existingProductCarShop.querySelector(
      ".quantity-product-car-shop"
    );
    const currentQuantity = parseInt(quantityElement.textContent);

    if (currentQuantity > 1) {
      // Decrement the quantity
      quantityElement.textContent = currentQuantity - 1;
      productItem.stock += 1; // Increment stock
      updatePrice(existingProductCarShop, productItem.price, currentQuantity - 1);
      
      // Update the total price
      addToTotal(-productItem.price); // Subtract the price from total

      // Update the stock in the product card
      updateProductCardStock(productItem);
    } else {
      // Remove product from cart if quantity is 1
      existingProductCarShop.remove();
      productItem.stock += 1; // Return stock since we're removing the product
      addToTotal(-productItem.price); // Subtract the price from total when removing

      // Update the stock in the product card
      updateProductCardStock(productItem);
    }
  } else {
    console.error("El producto no se encuentra en el carrito");
  }
}
