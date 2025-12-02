// ===================================
// 1. Datos iniciales
// ===================================
let datos = [
    {
        id: 1,
        gift: "Netflix",
        tipo: "Suscripción",
        tiempo: "1 mes",
        precio: 22,
        imagen: "https://i.imgur.com/VZQwL.jpg"
    },
    {
        id: 2,
        gift: "Spotify",
        tipo: "Suscripción",
        tiempo: "1 mes",
        precio: 15,
        imagen: "https://i.imgur.com/J4CY9.jpg"
    },
    {
        id: 3,
        gift: "Xbox Gift Card",
        tipo: "Compra",
        tiempo: "N/A",
        precio: 50,
        imagen: "https://i.imgur.com/Qo1Pf.jpg"
    }
];

// ===================================
// 2. Elementos del DOM
// ===================================
const cuerpoTabla = document.querySelector("#cuerpo-tabla");
const formAgregar = document.querySelector("#form-gift");
const formModal = document.querySelector("#form-modal");

let idGiftUpdate = null;

// ===================================
// 3. READ - cargar tabla
// ===================================
function cargarTabla() {
    cuerpoTabla.innerHTML = "";

    datos.forEach(item => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${item.gift}</td>
            <td>${item.tipo}</td>
            <td>${item.tiempo}</td>
            <td>$${item.precio}</td>
            <td>
                <button class="btn btn-warning me-2" onclick="MostrarModal(${item.id})">
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="btn btn-danger" onclick="BorrarGift(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

cargarTabla();

// ===================================
// 4. CREATE - agregarGift
// ===================================
formAgregar.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = datos.length === 0 ? 1 : datos[datos.length - 1].id + 1;

    const gift = document.querySelector("#gift").value.trim();
    const tipo = document.querySelector("#tipo").value.trim();
    const tiempo = document.querySelector("#tiempo").value.trim();
    const precio = Number(document.querySelector("#precio").value);
    const imagen = document.querySelector("#imagen").value.trim();

    if (!gift || !tipo || !tiempo || !precio || precio <= 0) {
        alert("Rellena todos los campos correctamente.");
        return;
    }

    datos.push({ id, gift, tipo, tiempo, precio, imagen });

    formAgregar.reset();
    cargarTabla();
});

// ===================================
// 5. DELETE - eliminar registro
// ===================================
function BorrarGift(id) {
    const index = datos.findIndex(item => item.id === id);
    if (index === -1) return;

    const confirmar = confirm("¿Seguro que deseas eliminar este registro?");
    if (!confirmar) return;

    datos.splice(index, 1);
    cargarTabla();
}

window.BorrarGift = BorrarGift;

// ===================================
// 6. UPDATE - Mostrar modal
// ===================================
function MostrarModal(id) {
    idGiftUpdate = id;

    const item = datos.find(x => x.id === id);

    document.querySelector("#gift-modal").value = item.gift;
    document.querySelector("#tipo-modal").value = item.tipo;
    document.querySelector("#tiempo-modal").value = item.tiempo;
    document.querySelector("#precio-modal").value = item.precio;
    document.querySelector("#imagen-modal").value = item.imagen;

    const modal = new bootstrap.Modal(document.getElementById("modal-gift"));
    modal.show();
}

window.MostrarModal = MostrarModal;

// ===================================
// 7. UPDATE - Guardar cambios
// ===================================
formModal.addEventListener("submit", (e) => {
    e.preventDefault();

    const index = datos.findIndex(item => item.id === idGiftUpdate);
    if (index === -1) return;

    datos[index].gift = document.querySelector("#gift-modal").value.trim();
    datos[index].tipo = document.querySelector("#tipo-modal").value.trim();
    datos[index].tiempo = document.querySelector("#tiempo-modal").value.trim();
    datos[index].precio = Number(document.querySelector("#precio-modal").value);
    datos[index].imagen = document.querySelector("#imagen-modal").value.trim();

    cargarTabla();

    const modal = bootstrap.Modal.getInstance(document.getElementById("modal-gift"));
    modal.hide();
});
