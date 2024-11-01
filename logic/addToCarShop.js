import { product } from "./products.js";

export function addToCardShop(id) {
  const productItem = product.find(item => item.id === id);
  
  if (!productItem) {
    console.error("Producto no encontrado");
    return;
  }

  const blockProductCarShop = document.querySelector(".block-product-car-shop");

  const existingProductCarShop = [...blockProductCarShop.children].find(item => {
    return item.querySelector(".title-product-information").textContent === productItem.title;
  });

  if (existingProductCarShop) {
    const quantityElement = existingProductCarShop.querySelector(".quantity-product-car-shop");
    const currentQuantity = parseInt(quantityElement.textContent);
    
    // Increment the quantity
    quantityElement.textContent = currentQuantity + 1;

    // Decrement stock when updating quantity
    if (productItem.stock > 0) {
      productItem.stock -= 1;
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
    btnAdd.onclick = () => sumarSock(productItem.id);

    const quantity = document.createElement("p");
    quantity.className = "quantity-product-car-shop";
    quantity.textContent = "1"; // Start quantity at 1

    const btnSubtract = document.createElement("img");
    btnSubtract.src = "Img/menos.svg";
    btnSubtract.alt = "restar";
    btnSubtract.onclick = () => restarSock(productItem.id);

    informationProduct.appendChild(titleProduct);
    informationProduct.appendChild(priceProduct);
    actionProduct.appendChild(btnAdd);
    actionProduct.appendChild(quantity);
    actionProduct.appendChild(btnSubtract);
    
    productCarShop.appendChild(imgProduct);
    productCarShop.appendChild(informationProduct);
    productCarShop.appendChild(actionProduct);

    blockProductCarShop.appendChild(productCarShop);
    
    // Decrement stock when adding a new product
    productItem.stock -= 1;
  }
}

function sumarSock(id) {
  const productItem = product.find(item => item.id === id);
  
  if (!productItem) {
    console.error("Producto no encontrado");
    return;
  }

  const blockProductCarShop = document.querySelector(".block-product-car-shop");
  const existingProductCarShop = [...blockProductCarShop.children].find(item => {
    return item.querySelector(".title-product-information").textContent === productItem.title;
  });

  if (existingProductCarShop) {
    const quantityElement = existingProductCarShop.querySelector(".quantity-product-car-shop");
    const currentQuantity = parseInt(quantityElement.textContent);
    
    if (productItem.stock > 0) {
      // Increment the quantity
      quantityElement.textContent = currentQuantity + 1;
      productItem.stock -= 1; // Decrement stock
      updatePrice(existingProductCarShop, productItem.price, currentQuantity + 1);

      // Update the stock in the product card
      updateProductCardStock(productItem);
    } else {
      alert("No hay más stock para añadir.");
    }
  } else {
    console.error("El producto no se encuentra en el carrito");
  }
}


function restarSock(id) {
  const productItem = product.find(item => item.id === id);
  
  if (!productItem) {
    console.error("Producto no encontrado");
    return;
  }

  const blockProductCarShop = document.querySelector(".block-product-car-shop");
  const existingProductCarShop = [...blockProductCarShop.children].find(item => {
    return item.querySelector(".title-product-information").textContent === productItem.title;
  });

  if (existingProductCarShop) {
    const quantityElement = existingProductCarShop.querySelector(".quantity-product-car-shop");
    const currentQuantity = parseInt(quantityElement.textContent);
    
    if (currentQuantity > 1) {
      // Decrement the quantity
      quantityElement.textContent = currentQuantity - 1;
      productItem.stock += 1; // Increment stock
      updatePrice(existingProductCarShop, productItem.price, currentQuantity - 1);
      
      // Update the stock in the product card
      updateProductCardStock(productItem);
    } else {
      // Remove product from cart if quantity is 1
      existingProductCarShop.remove();
      productItem.stock += 1; // Return stock since we're removing the product
      updateProductCardStock(productItem);
    }
  } else {
    console.error("El producto no se encuentra en el carrito");
  }
}

function updateProductCardStock(productItem) {
  const sectionProduct = document.getElementById("section-product");
  const productCard = [...sectionProduct.children].find(card => {
    return card.querySelector(".title-product").textContent === productItem.title;
  });

  if (productCard) {
    const stockProduct = productCard.querySelector(".stock-product");
    if (productItem.stock > 0) {
      stockProduct.textContent = `Cantidad: ${productItem.stock}`;
    } else {
      stockProduct.textContent = "Sin stock"; // Update to show out of stock
      const btnAddToCart = productCard.querySelector(".btn-add-to-car");
      btnAddToCart.disabled = true; // Disable button if out of stock
    }
  }
}


function updatePrice(productElement, productPrice, quantity) {
  const priceElement = productElement.querySelector(".price-product-information");
  const totalPrice = productPrice * quantity;
  priceElement.textContent = `$${totalPrice.toFixed(2)}`; // Update the total price in the card
}
