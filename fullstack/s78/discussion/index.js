console.log(`connected`);
const inventory = [
  { name: `Laptop`, category: `Electronics`, price: 1000, quantity: 0 },
  { name: `Headphones`, category: `Electronics`, price: 1000, quantity: 10 },
  { name: `Shirt`, category: `Clothing`, price: 1000, quantity: 15 },
];
// Solution 1
function getCategoryCount() {
  const itemCategoryCount = {};
  inventory.forEach((item) => {
    const category = item.category;

    if (itemCategoryCount[category]) {
      itemCategoryCount[category]++;
    } else {
      itemCategoryCount[category] = 1;
    }
  });
  return itemCategoryCount;
}
console.log(getCategoryCount()); //output:{Electronics: 2 Clothing: 1}

// solution 2
function countProductInCategory(products, category) {
  if (!Array.isArray(products) || products.length == 0) {
    return 0;
  }

  const filtered = products.filter((e) => e.category.toLowerCase() === category.toLowerCase());
  return filtered.length;
}

console.log(
  countProductInCategory(
    [
      { name: `Laptop`, category: `Electronics`, price: 1000, quantity: 0 },
      { name: `Headphones`, category: `Electronics`, price: 1000, quantity: 10 },
      { name: `Shirt`, category: `Clothing`, price: 1000, quantity: 15 },
    ],
    "electronics"
  )
); //output 2

// solution 1
function isProductAvailable(products, productName) {
  if (!Array.isArray(products) || products.length === 0) {
    return false;
  }

  if (typeof productName !== "string") {
    return "Product name should be a string";
  }

  const availableProducts = products.filter((p) => p.quantity > 0);

  const isAvailable = availableProducts.some((p) => p.name === productName);

  return isAvailable;
}
console.log(
  isProductAvailable(
    [
      { name: `Laptop`, category: `Electronics`, price: 1000, quantity: 0 },
      { name: `Headphones`, category: `Electronics`, price: 1000, quantity: 10 },
      { name: `Shirt`, category: `Clothing`, price: 1000, quantity: 15 },
    ],
    "Headphones"
  )
);

function ProductAvailable(products, productName) {
  if (!Array.isArray(products) || products.length === 0) {
    return false;
  }

  if (typeof productName !== "string") {
    return "Product name should be a string";
  }

  const product = products.find((p) => p.name === productName);

  return product.quantity > 0;
}

console.log(
  ProductAvailable(
    [
      { name: `Laptop`, category: `Electronics`, price: 1000, quantity: 0 },
      { name: `Headphones`, category: `Electronics`, price: 1000, quantity: 10 },
      { name: `Shirt`, category: `Clothing`, price: 1000, quantity: 15 },
    ],
    "Laptop"
  )
);
