import { product } from "./products.js";

export function loadProducts() {
  const sectionProduct = document.getElementById("section-product");
  product.forEach(item => {
    // Crear el contenedor del producto
    const productCard = document.createElement("article");
    productCard.className = "product-card";

    // Crear la imagen del producto
    const imgProduct = document.createElement("img");
    imgProduct.className = "img-product";
    imgProduct.src = item.img; // Ruta de la imagen
    imgProduct.alt = item.title; // Alt con el título del producto

    // Crear el contenedor de información
    const informationProduct = document.createElement("div");
    informationProduct.className = "information-product";

    // Crear el título del producto
    const titleProduct = document.createElement("h3");
    titleProduct.className = "title-product";
    titleProduct.textContent = item.title;

    // Crear la descripción del producto
    const descriptionProduct = document.createElement("p");
    descriptionProduct.className = "description-product";
    descriptionProduct.textContent = `${item.description}`;

    // Crear el span para el stock
    const stockProduct = document.createElement("span");
    stockProduct.className = "Stock-product";
    stockProduct.textContent = `Cantidad: ${item.stock}`;

    // Crear el botón para añadir al carrito
    const btnAddToCart = document.createElement("button");
    btnAddToCart.className = "btn-add-to-car";
    btnAddToCart.textContent = "Añadir al carrito";

    // Append elements
    informationProduct.appendChild(titleProduct);
    informationProduct.appendChild(descriptionProduct);
    informationProduct.appendChild(stockProduct);
    productCard.appendChild(imgProduct);
    productCard.appendChild(informationProduct);
    productCard.appendChild(btnAddToCart);
    sectionProduct.appendChild(productCard);
  });
}
