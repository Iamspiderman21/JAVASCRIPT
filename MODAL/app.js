// Selecciona el modal-btn , el modal-overlay y close-btn
// Se escucha los botones de eventos en modal-btn, close-btn
// Cuando el usuario da clcik en modal-btn, abre .open-modal en modal-overlay
// Cuando el usuario da click en  close-btn, cierra el .open-modal desde modal-overlay

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function () {
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('open-modal');
});
