const products = [
  {
    name: "Wireless Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224bdea?w=400",
    description: "Noise-cancelling Bluetooth headphones with rich bass."
  },
  {
    name: "Smart Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=400",
    description: "Track your health, fitness, and notifications on the go."
  },
  {
    name: "Gaming Mouse",
    price: 799,
    image: "https://images.unsplash.com/photo-1617787168943-b97e74fdfd62?w=400",
    description: "High DPI RGB gaming mouse with customizable buttons."
  },
  {
    name: "Laptop Backpack",
    price: 1299,
    image: "https://images.unsplash.com/photo-1600185365225-c9a9834b8b6b?w=400",
    description: "Stylish and durable backpack with multiple compartments."
  }
];

function openModal(index) {
  const product = products[index];
  document.getElementById("modal-name").textContent = product.name;
  document.getElementById("modal-desc").textContent = product.description;
  document.getElementById("modal-price").textContent = `Price: ₹${product.price}`;
  document.getElementById("modal-img").src = product.image;

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
