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
let removeAllBtn = document.getElementById("remove-all-products");
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
    //send product id to this function
    addProduct(product.id);
  });

  productDetails.append(productPrice, productAddBtn);
  productContainer.append(productTitle, productImg, productDetails);
  shopItemsContainer.append(productContainer);
});

function addProduct(productId) {
  //access to product specs according to id

  let selectedProduct = allProducts.find(function (product) {
    return product.id === productId;
  });

  shoppingCart.push(selectedProduct);
  selectedProductGenarator(shoppingCart);
  console.log(shoppingCart);
}

function selectedProductGenarator(userBasketArray) {
  cartItem.innerHTML = "";
  userBasketArray.forEach(function (product) {
    let basketProductContainer = $.createElement("div");
    basketProductContainer.classList.add("cart-row");

    let basketProductDetailsContainer = $.createElement("div");
    basketProductDetailsContainer.className = "cart-item cart-column";

    let basketProductImg = $.createElement("img");
    basketProductImg.setAttribute("src", product.img);
    basketProductImg.setAttribute("width", "100");
    basketProductImg.setAttribute("height", "100");
    basketProductImg.classList.add("cart-item-image");

    let basketProductTitleSpan = $.createElement("span");
    basketProductTitleSpan.classList.add("cart-item-title");
    basketProductTitleSpan.innerHTML = product.title;

    basketProductDetailsContainer.append(
      basketProductImg,
      basketProductTitleSpan
    );

    let basketProductPriceSpan = $.createElement("span");
    basketProductPriceSpan.className = "cart-price cart-column";
    basketProductPriceSpan.innerHTML = product.price;

    let basketProductInputsContainer = $.createElement("div");
    basketProductInputsContainer.className = "cart-quantity cart-column";

    let basketProductInput = $.createElement("input");
    basketProductInput.className = "cart-quantity-input";
    basketProductInput.value = product.count;
    basketProductInput.setAttribute("type", "number");

    let basketProductRemoveBtn = $.createElement("button");
    basketProductRemoveBtn.className = "btn btn-danger";
    basketProductRemoveBtn.innerHTML = "Remove";
    basketProductRemoveBtn.addEventListener("click", function () {
      removeProduct(product.id);
    });

    basketProductInputsContainer.append(
      basketProductInput,
      basketProductRemoveBtn
    );

    basketProductContainer.append(
      basketProductDetailsContainer,
      basketProductPriceSpan,
      basketProductInputsContainer
    );

    cartItem.append(basketProductContainer);
  });
}

//Remove Button

function removeProduct(productId) {
  //reassign new value or update value of shopping cart
  shoppingCart = shoppingCart.filter(function (product) {
    return product.id !== productId;
  });
  selectedProductGenarator(shoppingCart);
}

removeAllBtn.addEventListener("click", function () {
  shoppingCart = [];
  selectedProductGenarator(shoppingCart);
});
