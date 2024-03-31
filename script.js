let allProducts = [
  { id: 1, title: "Album 1", price: 5, img: "Images/Album 1.png", count: 1 },
  { id: 2, title: "Album 2", price: 15, img: "Images/Album 2.png", count: 1 },
  { id: 3, title: "Album 3", price: 20, img: "Images/Album 3.png", count: 1 },
  { id: 4, title: "Album 4", price: 100, img: "Images/Album 4.png", count: 1 },
  { id: 5, title: "Coffee", price: 5, img: "Images/Cofee.png", count: 1 },
  { id: 6, title: "Shirt", price: 50, img: "Images/Shirt.png", count: 1 },
];
let shoppingCart = [];

let shopItemsContainer = document.querySelector(".shop-items");
let cartItem = document.querySelector(".cart-items");
let removeBtn = document.getElementById("remove-all-products");
let totalPrice = document.querySelector(".cart-total-price");
let $ = document;

allProducts.forEach(function (product) {
  let productContainer = $.createElement("div");
  productContainer.classList.add("shop-item");

  let productTitle = $.createElement("span");
  productTitle.classList.add("shop-item-title");
  productTitle.innerHTML = product.title;

  let productImg = $.createElement("img");
  productImg.classList.add("shop-item-image");
  productImg.setAttribute("src", product.img);

  let productDetails = $.createElement("div");
  productDetails.classList.add("shop-item-details");

  let productPrice = $.createElement("span");
  productPrice.classList.add("shop-item-price");
  productPrice.innerHTML = product.price;

  let productAddBtn = $.createElement("button");
  productAddBtn.className = "btn btn-primary shop-item-button";
  productAddBtn.innerHTML = "ADD TO CART";
  productAddBtn.addEventListener("click", function () {
   
  });

  productDetails.append(productPrice, productAddBtn);
  productContainer.append(productTitle, productImg, productDetails);
  shopItemsContainer.append(productContainer);
});


