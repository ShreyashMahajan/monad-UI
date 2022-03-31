const btnShowModal = document.querySelector(".btn-modal");
const btnDelete = document.querySelector(".modal-cross");
const modalBox = document.querySelector(".modal-wrapper");

btnShowModal.addEventListener('click', () => {
    return modalBox.style.display = 'initial';
})

btnDelete.addEventListener('click', () => {
   return modalBox.style.display = 'none';
})