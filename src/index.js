// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price>span');

  const quantity = product.querySelector('.quantity>input');

  const priceValue = price.textContent;
  const quantityValue = quantity.value;

  let total = priceValue * quantityValue;

  const totalToUdpate = product.querySelector('.subtotal>span');

  totalToUdpate.innerHTML = total;

  return total;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');

  let counter = 0;

  products.forEach((item) => {
    updateSubtotal(item);

    counter += updateSubtotal(item);
    // console.log(counter);
  });

  //   ITERATION 3
  const finalPrice = document.querySelector('#total-value > span');

  finalPrice.innerHTML = counter;

  console.log(finalPrice);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const newProductsInput = document.querySelectorAll('.create-product input');
  const newProductName = newProductsInput[0].value;
  const newProductPrice = newProductsInput[1].value;

  let newProduct = `
  <tr class="product">
    <td class="name">
      <span>${newProductName}</span>
    </td>
    <td class="price">
      $<span>${newProductPrice}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">
      $<span>0</span>
    </td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr> `;

  const tbody = document.querySelector('tbody');
  tbody.insertAdjacentHTML('beforeend', newProduct);

  newProductsInput[0].value = '';
  newProductsInput[1].value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.querySelector('#create.btn');

  createProductBtn.addEventListener('click', () => {
    createProduct();
  });
});
