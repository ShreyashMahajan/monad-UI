let toastBaseline = document.querySelector(".toast--baseline");
let snackbarText = document.querySelector("#snackbar");

toastBaseline.addEventListener('click', () => {
   
   snackbarText.className = "show";
   setTimeout( () =>
    snackbarText.className = snackbarText.className.replace('show', ''), 3000)
});