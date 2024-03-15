products = []

function addProduct() {
  products.push({
    name: document.getElementById("nameInput").value,
    description: document.getElementById("descriptionInput").value,
    value: document.getElementById("valueInput").value,
    availability: document.getElementById("availabilityInput").value,
  });

  closeModal();
  cleanInputs();
  loadProducts();
}


function loadProducts() {
  products.sort(function (a, b) { return a.value - b.value; });
  document.getElementById("productList").innerHTML = `
    <table class="table align-center-by-block-display">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor (R$)</th>
        </tr>
      </thead>
      <tbody id="productInfos">
      <tbody>
    </table>
  `;

  products.forEach(product => {
    document.getElementById("productInfos").innerHTML += `
      <tr>
        <td>${product.name}</td>
        <td>${product.value}</td>
      </tr>
    `
  });
}

function cleanInputs() {
  document.getElementById("nameInput").value = "";
  document.getElementById("descriptionInput").value = "";
  document.getElementById("valueInput").value = "";
  document.getElementById("availabilityInput").value = "Sim";
}

function openModal() {
  document.getElementById("registerModal").classList.add("is-active")
}

function closeModal() {
  document.getElementById("registerModal").classList.remove("is-active");
}
