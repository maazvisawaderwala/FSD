const apiUrl = '/api/products';

async function loadProducts() {
  const res = await fetch(apiUrl);
  const data = await res.json();

  const grid = document.getElementById('product-grid') || document.getElementById('admin-grid');
  if (!grid) return;
  grid.innerHTML = '';

  data.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p>${p.description}</p>
      ${grid.id === 'admin-grid' ? `
        <button onclick="deleteProduct('${p._id}')">Delete</button>
      ` : ''}
    `;
    grid.appendChild(card);
  });
}

async function deleteProduct(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  loadProducts();
}

const form = document.getElementById('product-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const product = {
      name: document.getElementById('name').value,
      price: document.getElementById('price').value,
      image: document.getElementById('image').value,
      description: document.getElementById('description').value
    };
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    form.reset();
    loadProducts();
  });
}

window.onload = loadProducts;
