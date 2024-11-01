export function updateProductCardStock(productItem) {
  const sectionProduct = document.getElementById("section-product");
  const productCard = [...sectionProduct.children].find((card) => {
    return (
      card.querySelector(".title-product").textContent === productItem.title
    );
  });

  if (productCard) {
    const stockProduct = productCard.querySelector(".stock-product");
    if (productItem.stock > 0) {
      stockProduct.textContent = `Cantidad: ${productItem.stock}`;
    } else {
      stockProduct.textContent = "Sin productos"; // Update to show out of stock
      const btnAddToCart = productCard.querySelector(".btn-add-to-car");
      btnAddToCart.disabled = true; // Disable button if out of stock
    }
  }
}