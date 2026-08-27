// =====================================================
// URL SE PRODUCT ID NIKALNA
// =====================================================

// Example URL:
// product.html?id=2
//
// Yahan:
// ?id=2
//   ↑
//   id = parameter ka naam
//   2  = parameter ki value

// 1️⃣ window.location.search
// -----------------------------------------
// Current URL ka "?" ke baad wala part deta hai.
//
// Example:
// URL = product.html?id=2
//
// window.location.search
//        ↓
// "?id=2"

const params = new URLSearchParams(window.location.search);

// 2️⃣ new URLSearchParams(...)
// -----------------------------------------
// URL ke query parameters ko read/handle karne ke liye
// ek URLSearchParams object banata hai.
//
// Ab "params" ke through hum URL ki values nikal sakte hain.

// 3️⃣ params.get("id")
// -----------------------------------------
// "id" naam ke parameter ki VALUE nikalta hai.
//
// URL:
// product.html?id=2
//
// params.get("id")
//        ↓
// "2"

const productId = params.get("id");

// 4️⃣ console.log()
// -----------------------------------------
// Jo product ID URL se mili hai usko console mein check karte hain.

console.log(productId);

// Output:
// "2"

//===========================================================================

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    console.log(products);

    const product = products.find((product) => {
      return product.id === Number(productId);
    });
    console.log(product);

    const productDetails = document.getElementById("product-details");

    productDetails.innerHTML = `
  <div class="product-detail-card">
    <img src="${product.image}" alt="${product.title}">
    
    <div class="product-info">
      <h2>${product.title}</h2>
      <p class="price">$${product.price}</p>
      <p class="description">${product.description}</p>
      <p class="category">Category: ${product.category}</p>
      <button>Add to Cart</button>
    </div>
  </div>
`;
  })
  .catch((error) => {
    console.log(error);
  });
