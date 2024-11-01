import { addToCardShop } from "./addToCarShop.js";
import { product } from "./products.js";

export function loadProducts() {
  const sectionProduct = document.getElementById("section-product");
  if (!sectionProduct) {
    console.error("Element with ID 'section-product' not found.");
    return;
  }

  product.forEach((item) => {
    const productCard = document.createElement("article");
    productCard.className = "product-card";

    const imgProduct = document.createElement("img");
    imgProduct.className = "img-product";
    imgProduct.src = item.img;
    imgProduct.alt = item.title;

    const informationProduct = document.createElement("div");
    informationProduct.className = "information-product";

    const titleProduct = document.createElement("h3");
    titleProduct.className = "title-product";
    titleProduct.textContent = item.title;

    const descriptionProduct = document.createElement("p");
    descriptionProduct.className = "description-product";
    descriptionProduct.textContent = item.description;

    const stockProduct = document.createElement("span");
    stockProduct.className = "stock-product";
    stockProduct.textContent = `Cantidad: ${item.stock}`;

    const btnAddToCart = document.createElement("button");
    btnAddToCart.className = "btn-add-to-car";
    btnAddToCart.textContent = "Añadir al carrito";
    btnAddToCart.onclick = () => {
      addToCardShop(item.id);
      // Actualizar el stock mostrado en la interfaz
      stockProduct.textContent = `Cantidad: ${item.stock}`; // Actualizar el stock en la interfaz
      if (item.stock < 0) {
        stockProduct.textContent = "Sin stock"; // Mensaje si no hay stock
        btnAddToCart.disabled = true; // Desactivar botón si no hay stock
      }
    };

    informationProduct.appendChild(titleProduct);
    informationProduct.appendChild(descriptionProduct);
    informationProduct.appendChild(stockProduct);
    productCard.appendChild(imgProduct);
    productCard.appendChild(informationProduct);
    productCard.appendChild(btnAddToCart);
    sectionProduct.appendChild(productCard);
  });
}
