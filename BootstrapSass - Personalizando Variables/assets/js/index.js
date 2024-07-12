const myModal = document.getElementById('loginModal') // Acá buscamos modal
const myInput = document.getElementById('email') // Acá buscamos input en formulario de modal


// Activamos el focus en el input del modal
myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})