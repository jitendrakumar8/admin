const productList = document.getElementById('product-list');
const adminButton = document.getElementById('admin-button');
const adminPanel = document.getElementById('admin-panel');
const newProductForm = document.getElementById('new-product-form');

// Hide the admin panel by default
adminPanel.style.display = 'none';

// Show the admin panel when the admin button is clicked
adminButton.addEventListener('click', () => {
  adminPanel.style.display = 'block';
});

// Add a new product when the form is submitted
newProductForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  const product = `
    <div class="product">
      <h3>${name}</h3>
      <p>${price}</p>
      <p>${description}</p>
    </div>
  `;
  productList.innerHTML += product;
  // Clear the form
  newProductForm.reset();
});