const productsContainer = document.querySelector(".products");
const shoppingTrolly = document.querySelector(".cart_head p span");
const cartContainer = document.querySelector(".cart_items");

let userCart = [];

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();

  showProducts(data.products);
};

function showProducts(products) {
  products.forEach((product) => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
        <img src="${product.images[0]}" alt="" />
        <div class="brand">
            <h4>${product.title}</h4>
            <p>${product.price}$</p>
        </div>
        <button>Add to cart</button>
    `;
    productsContainer.appendChild(item);

    item.children[2].addEventListener("click", addToCart(product));
  });
}

function addToCart(product) {
  return () => {
    const isExist = userCart.find((item) => item.id == product.id);

    if (!isExist) {
      userCart.push({ ...product, quantity: 1 });
      shoppingTrolly.innerHTML = userCart.length;
      showCartItems(userCart);
      findTotal();
    } else {
      console.log("Item is already in cart");
    }
  };
}

function showCartItems(cartItems) {
  // Cleanup function
  while (cartContainer.firstChild) {
    cartContainer.removeChild(cartContainer.firstChild);
  }

  cartItems.forEach((cartItem) => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
        <img src="${cartItem.images[0]}"/>
        <div class="description">
            <h4>${cartItem.title}</h4>
            <h5 class="sub_total">Subtotal: <span>${
              cartItem.quantity * cartItem.price
            }$</span></h5>
            <input type="number" min="1" placeholder="Enter quantity" value="${
              cartItem.quantity
            }" />
        </div>
        <div class="delete">&#128465;</div>
    `;
    cartContainer.appendChild(item);

    item.children[1].children[2].addEventListener(
      "change",
      changeSubTotal(cartItem, item)
    );

    item.children[2].addEventListener("click", deleteItem(cartItem));
  });
}

function changeSubTotal(cartItem, item) {
  return () => {
    cartItem.quantity = item.children[1].children[2].value;
    item.children[1].children[1].children[0].innerHTML = `${
      cartItem.quantity * cartItem.price
    }$`;
    findTotal();
  };
}

function deleteItem(cartItem) {
  return (e) => {
    const index = userCart.findIndex((item) => item.id === cartItem.id);
    userCart.splice(index, 1);
    shoppingTrolly.innerHTML = userCart.length;
    e.target.parentElement.remove();
    findTotal();
  };
}

function findTotal() {
  if (userCart.length != 0) {
    const total = userCart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity * currentValue.price;
    }, 0);
    document.querySelector(".total p:nth-child(2)").innerHTML = total + "$";
  } else {
    document.querySelector(".total p:nth-child(2)").innerHTML = "0$";
  }
}

getProducts();
