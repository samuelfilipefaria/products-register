products = []

function addProduct() {
  if (document.getElementById("nameInput").value.trim() == "" || document.getElementById("valueInput").value.trim() == "") {
    document.getElementById("invalidInputWarning").style.display = "block";
    return;
  }

  products.push({
    name: document.getElementById("nameInput").value,
    description: document.getElementById("descriptionInput").value,
    value: document.getElementById("valueInput").value,
    availability: document.getElementById("availabilityInput").value,
  });

  closeModal();
  document.getElementById("invalidInputWarning").style.display = "none";
  cleanInputs();
  loadProducts();
}


function loadProducts() {
  products.sort(function (a, b) { return a.value - b.value; });
  document.getElementById("productList").innerHTML = `
    <table class="table is-striped is-bordered is-fullwidth has-text-left">
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

function toggleNavbar() {
  document.getElementById("navbarBurger").classList.toggle("is-active");
  document.getElementById("navbarMenu").classList.toggle("is-active");
  document.getElementById("navbarMenu").classList.toggle("animate__animated");
  document.getElementById("navbarMenu").classList.toggle("animate__fadeIn");
}
