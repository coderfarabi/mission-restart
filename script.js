const AllProducts = () => "https://fakestoreapi.com/products";
const AllCategories = () => "https://fakestoreapi.com/products/categories";
const ProductDetails = (id) => `https://fakestoreapi.com/products/${id}`;
const ProductsByCategory = (category) =>
  `https://fakestoreapi.com/products/category/${category}`;

const defaultPage = "home";
const pages = [
  { id: "home", name: "Home" },
  { id: "products", name: "Products" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" },
];
const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

function fetchData(url, callback) {
  fetch(url).then((res) => res.json().then((data) => callback(data)));
}

function getUniqueRandoms(count, min, max) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(num);
  }
  return [...uniqueNumbers]; // Convert Set back to an Array
}

function displayPage(pageId) {
  const parent = document.getElementById("content-area");
  const directChildren = parent.children;
  for (let child of directChildren) {
    child.classList.add("hidden");
  }
  const targetPage = document.getElementById(pageId);

  if (targetPage) {
    targetPage.classList.remove("hidden");
  }
}

function pagesButton() {
  displayPage(defaultPage);
  document.querySelectorAll(".nav-pages").forEach((container) => {
    container.innerHTML = "";
    pages.forEach((page) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <li><a href="#" onclick="displayPage('${page.id}')">${page.name}</a></li>
        `,
      );
    });
  });
}
function TrendingNow() {
  getUniqueRandoms(3, 1, 20).forEach((id) => {
    fetchData(ProductDetails(id), (data) => {
      const TrendingNowContainer = document.getElementById("TrendingNow");
      TrendingNowContainer.insertAdjacentHTML(
        "beforeend",
        `
  <div class="card bg-base-100 w-full shadow-sm border border-gray-100">
    <figure class="bg-[#f3f4f6] h-64">
      <img src="${data.image}" alt="${data.title}" class="h-full w-full object-contain p-6" />
    </figure>
    
    <div class="card-body p-4">
      <div class="flex justify-between items-start gap-2">
        <div class="badge badge-secondary text-xs">${data.category}</div>
        <div class="flex items-center text-sm">
          <span class="text-orange-400 mr-1">★</span>
          <span>${data.rating.rate} (${data.rating.count})</span>
        </div>
      </div>

      <h2 class="card-title text-start text-sm md:text-base line-clamp-1">
      ${data.title}
      </h2>
      
      <div class="card-actions justify-end mt-4">
        <p class="text-xl text-start font-bold">$${data.price}</p>
        <button id="product-details" class="btn btn-sm btn-ghost" onclick="showDetails(${data.id})">Details</button>
        <button class="btn btn-sm btn-primary">Add to card</button>
      </div>
    </div>
  </div>
`,
      );
    });
  });
}
function loadProducts(category) {
  const productSection = document.getElementById("product-sections");
  productSection.innerHTML = "";
  try {
    const url =
      category.toLowerCase() === "all"
        ? AllProducts()
        : ProductsByCategory(category);
    fetchData(url, (data) => {
      data.forEach((product) => {
        productSection.insertAdjacentHTML(
          "beforeend",
          `
  <div class="card bg-base-100 w-full shadow-sm border border-gray-100">
    <figure class="bg-[#f3f4f6] h-64">
      <img src="${product.image}" alt="${product.title}" class="h-full w-full object-contain p-6" />
    </figure>
    
    <div class="card-body p-4">
      <div class="flex justify-between items-start gap-2">
        <div class="badge badge-secondary text-xs">${product.category}</div>
        <div class="flex items-center text-sm">
          <span class="text-orange-400 mr-1">★</span>
          <span>${product.rating.rate} (${product.rating.count})</span>
        </div>
      </div>

      <h2 class="card-title text-start text-sm md:text-base line-clamp-1">
      ${product.title}
      </h2>
      
      
      <div class="card-actions justify-end mt-4">
        <p class="text-xl text-start font-bold">$${product.price}</p>
        <button id="product-details" class="btn btn-sm btn-ghost" onclick="showDetails(${product.id})">Details</button>
        <button class="btn btn-sm btn-primary">Add to card</button>
      </div>
    </div>
  </div>
`,
        );
      });
    });
  } catch (error) {
    productSection.innerHTML =
      "<p>Failed to load products. Please try again later.</p>";
  }
}

function categoriesButton() {
  const categoriesContainer = document.getElementById("categories");
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-secondary btn-sm";
    btn.innerText = category;
    btn.addEventListener("click", () => {
      loadProducts(category.toLowerCase());
    });
    categoriesContainer.appendChild(btn);
  });
}

function showDetails(productId) {
    const modal = document.getElementById('details_modal');
    const content = document.getElementById('modal-content');
    
    fetchData(ProductDetails(productId), (data) => {
    content.innerHTML = `
      <div class="space-y-4">
          <h3 class="text-2xl font-bold">${data.title}</h3>
          <p class="text-gray-600">${data.description}</p>
          <div class="flex items-center justify-between">
            <p class="text-3xl font-bold">$${data.price}</p>
            <div class="flex items-center">
              <span class="text-orange-400 mr-2">★</span>
              <span class="text-lg">${data.rating.rate} (${data.rating.count} reviews)</span>
            </div>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-primary flex-1">Buy Now</button>
            <button class="btn btn-secondary flex-1">Add to Cart</button>
          </div>
        </div>
      
    `;
    });
    
    modal.showModal(); // মোডালটি দেখাবে
}

window.displayPage = displayPage;
window.showDetails = showDetails;
pagesButton();
TrendingNow();
categoriesButton();
loadProducts("all");
