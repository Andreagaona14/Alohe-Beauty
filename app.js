import { loadProducts } from "./logic/getProduct.js"
import { openCarShop, closeCarShop, buyCarShop, clearCarShop } from "./logic/headerCarShop.js";

const btnCarShop = document.getElementById('btn-car-shop');
const btnCloseCarShop = document.getElementById('close-car-shop');
const btnBuyCarShop = document.getElementById('buy-car-shop');
const btnTrashCarShop = document.getElementById('trash-car-shop');

document.addEventListener("DOMContentLoaded", ()=>{
  loadProducts();
  btnCarShop.onclick = ()=>{
    openCarShop();
  };
  btnCloseCarShop.onclick = () => {
    closeCarShop();
  };

  btnBuyCarShop.onclick = () => {
    buyCarShop();
  }

  btnTrashCarShop.onclick = () =>{
    clearCarShop();
  }
});
