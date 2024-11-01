import { loadProducts } from "./logic/getProduct.js"
import { openCarShop, closeCarShop } from "./logic/headerCarShop.js";

const btnCarShop = document.getElementById('btn-car-shop');
const btnCloseCarShop = document.getElementById('close-car-shop');

document.addEventListener("DOMContentLoaded", ()=>{
  loadProducts();
  btnCarShop.onclick = ()=>{
    openCarShop();
  };
  btnCloseCarShop.onclick = () => {
    closeCarShop();
  };
});
