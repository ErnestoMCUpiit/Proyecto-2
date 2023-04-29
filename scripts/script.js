const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const sidebar = document.querySelector('.sidebar');
const cancelBtn = sidebar.querySelector('input[type="button"]');
const sendBtn = sidebar.querySelector('input[type="submit"]');
const quantityInputs = document.querySelectorAll('input[type="number"]');
const totalSpan = sidebar.querySelector('.total');
const formulario = document.getElementById('formulario');
const botonCancelar = document.querySelector('.cancelar');

let total = 0;

botonCancelar.addEventListener('click', function () {
    formulario.reset();
    resetTotal();
});

document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const isClickInsideSidebar = sidebar.contains(event.target);
    if (!isClickInsideSidebar) {
        sidebar.classList.remove('active');
    }
});

function resetTotal() {
    total = 0;
    const itemsDiv = sidebar.querySelector('.items');
    itemsDiv.innerHTML = '';
    quantityInputs.forEach(input => {
        input.value = 0;
        input.parentElement.nextElementSibling.firstElementChild.checked = false;
    });
    totalSpan.textContent = '$0.00';
}

function updateTotal() {
    total = 0;
    const itemsDiv = sidebar.querySelector('.items');
    itemsDiv.innerHTML = '';
    quantityInputs.forEach(input => {
        const isChecked = input.parentElement.nextElementSibling.firstElementChild.checked;
        if (isChecked) {
            const price = parseFloat(input.parentElement.previousElementSibling.textContent.replace('$', ''));
            const quantity = parseInt(input.value);
            const nombre = input.parentElement.parentElement.dataset.nombre;
            total += price * quantity;
            const item = document.createElement('div');
            item.textContent = `${nombre} x ${quantity} = $${(price * quantity).toFixed(2)}`;
            itemsDiv.appendChild(item);
        }
    });
    totalSpan.textContent = `$${total.toFixed(2)}`;
}


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        updateTotal();
        sidebar.classList.toggle('active', total > 0);
    });
});

cancelBtn.addEventListener('click', () => {
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    formulario.reset();
    updateTotal();
    sidebar.classList.remove('active');
    const itemsDiv = sidebar.querySelector('.items');
    itemsDiv.innerHTML = '';
});

sendBtn.addEventListener('click', () => {
    if (total > 0) {
        alert(`Total a pagar: $${total.toFixed(2)}`);
    }
});