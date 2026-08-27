const productsContainer = document.getElementById("products");
const productsDetails = document.getElementById("product-details");
const searchInput = document.querySelector(".search-input");

console.log(productsContainer);

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    console.log(products);

    searchInput.addEventListener("input", (e) => {
      const searchValue = e.target.value.toLowerCase();
      console.log(searchValue);
      const filteredProduct = products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue);
      });
      console.log(filteredProduct);

      const productTitle = filteredProduct.map((product) => {
        return `  
       <div class="product-card" data-id= "${product.id}">
      <img src="${product.image}">
      <h2>${product.title}</h2>
      <p>${product.price}</p>
    </div>`;
      });
      productsContainer.innerHTML = productTitle;
    });

    const productTitle = products.map(function (product) {
      return `  
       <div class="product-card" data-id= "${product.id}">
      <img src="${product.image}">
      <h2>${product.title}</h2>
      <p>${product.price}</p>
    </div>`;
    });

    console.log(productTitle);
    productsContainer.innerHTML = productTitle;

    const cards = document.querySelectorAll(".product-card");

    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        console.log("clicked");
        console.log(card.dataset.id);

        window.location.href = `product.html?id=${card.dataset.id}`;
      });
    });
  })
  .catch((erorr) => {
    console.log(erorr);
  });
