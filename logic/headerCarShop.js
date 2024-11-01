const carShop = document.getElementById('car-shop');
import { product } from "./products.js";
import { resetTotal } from "./updatePriceTotalCarShop.js";

export function openCarShop() {
  carShop.style.display = 'flex';
}

export function closeCarShop() {
  carShop.style.display = 'none';
}

function clearCart(removeFromStock = false) {
  const blockProductCarShop = document.querySelector(".block-product-car-shop");
  const productsInCart = [...blockProductCarShop.children];

  productsInCart.forEach(item => {
    const titleElement = item.querySelector(".title-product-information").textContent;
    const productItem = product.find(item => item.title === titleElement);
    
    if (productItem) {
      const quantityElement = item.querySelector(".quantity-product-car-shop");
      const currentQuantity = parseInt(quantityElement.textContent);

      if (removeFromStock) {
        // Solo restaura stock si se indica
        productItem.stock += currentQuantity;
        
        // Actualizar el stock en la interfaz
        const sectionProduct = document.getElementById("section-product");
        const productCard = [...sectionProduct.children].find(card => {
          return card.querySelector(".title-product").textContent === productItem.title;
        });

        if (productCard) {
          const stockProduct = productCard.querySelector(".stock-product");
          stockProduct.textContent = `Cantidad: ${productItem.stock}`;
          // Desactivar botón si no hay stock
          const btnAddToCart = productCard.querySelector(".btn-add-to-car");
          btnAddToCart.disabled = productItem.stock <= 0;
        }
      }
    }

    // Remove item from the cart
    item.remove();
  });
  
  // Resetea el total
  resetTotal();
}

export function clearCarShop() {
  clearCart(true); // Limpia el carrito y restaura el stock
}

export function buyCarShop() {
  const blockProductCarShop = document.querySelector(".block-product-car-shop");
  const productsInCart = [...blockProductCarShop.children];

  if (productsInCart.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  // Aquí se podría añadir la lógica de procesamiento de pago, etc.

  alert("Compra realizada con éxito!");

  // Limpia el carrito después de la compra
  clearCart(false); // Limpia el carrito sin restaurar el stock
}
