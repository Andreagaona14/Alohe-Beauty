import { product } from "./products.js";
import { updatePrice } from "./updatePrice.js";
import { addToTotal } from "./updatePriceTotalCarShop.js";
import { updateProductCardStock } from "./updateProductCardStock.js";


export function addStock(id) {
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

    if (productItem.stock > 0) {
      // Increment the quantity
      quantityElement.textContent = currentQuantity + 1;
      productItem.stock -= 1; // Decrement stock
      updatePrice(existingProductCarShop, productItem.price, currentQuantity + 1);
      
      // Update the total price
      addToTotal(productItem.price); // Update the total price

      // Update the stock in the product card
      updateProductCardStock(productItem);
    } else {
      alert("No hay más stock para añadir.");
    }
  } else {
    console.error("El producto no se encuentra en el carrito");
  }
}
