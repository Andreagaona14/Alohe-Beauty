
import { addStock } from "./addStock.js";
import { product } from "./products.js";
import { subtractStock } from "./subtractStock.js";
import { updatePrice } from "./updatePrice.js";
import { addToTotal } from "./updatePriceTotalCarShop.js";

export function addToCardShop(id) {
  const productItem = product.find((item) => item.id === id);

  if (!productItem) {
    console.error("Producto no encontrado");
    return;
  }

  const blockProductCarShop = document.querySelector(".block-product-car-shop");
  const existingProductCarShop = [...blockProductCarShop.children].find(
    (item) => item.querySelector(".title-product-information").textContent === productItem.title
  );

  if (existingProductCarShop) {
    const quantityElement = existingProductCarShop.querySelector(".quantity-product-car-shop");
    const currentQuantity = parseInt(quantityElement.textContent);

    // Incrementa la cantidad
    quantityElement.textContent = currentQuantity + 1;

    // Decrementa el stock y actualiza el total
    if (productItem.stock > 0) {
      productItem.stock -= 1;
      addToTotal(productItem.price); // Actualiza el total
      updatePrice(existingProductCarShop, productItem.price, currentQuantity + 1);
    } else {
      alert("No hay más stock para añadir.");
    }
  } else {
    if (productItem.stock <= 0) {
      alert("NO QUEDAN PRODUCTOS");
      return;
    }

    const productCarShop = document.createElement("div");
    productCarShop.className = "product-car-shop";

    const imgProduct = document.createElement("img");
    imgProduct.className = "img-product-car-shop";
    imgProduct.src = productItem.img;
    imgProduct.alt = productItem.title;

    const informationProduct = document.createElement("div");
    informationProduct.className = "information-product-car-shop";

    const titleProduct = document.createElement("p");
    titleProduct.className = "title-product-information";
    titleProduct.textContent = productItem.title;

    const priceProduct = document.createElement("p");
    priceProduct.className = "price-product-information";
    priceProduct.textContent = `$${productItem.price}`;

    const actionProduct = document.createElement("div");
    actionProduct.className = "action-product-car-shop";

    const btnAdd = document.createElement("img");
    btnAdd.src = "Img/mas.svg";
    btnAdd.alt = "sumar";
    btnAdd.onclick = () => addStock(productItem.id);

    const quantity = document.createElement("p");
    quantity.className = "quantity-product-car-shop";
    quantity.textContent = "1"; // Empieza la cantidad en 1

    const btnSubtract = document.createElement("img");
    btnSubtract.src = "Img/menos.svg";
    btnSubtract.alt = "restar";
    btnSubtract.onclick = () => subtractStock(productItem.id);

    informationProduct.appendChild(titleProduct);
    informationProduct.appendChild(priceProduct);
    actionProduct.appendChild(btnAdd);
    actionProduct.appendChild(quantity);
    actionProduct.appendChild(btnSubtract);

    productCarShop.appendChild(imgProduct);
    productCarShop.appendChild(informationProduct);
    productCarShop.appendChild(actionProduct);
    blockProductCarShop.appendChild(productCarShop);

    // Decrementa el stock y actualiza el total
    productItem.stock -= 1;
    addToTotal(productItem.price); // Actualiza el total
  }
}
