const menuHamburger = document.querySelector(".menu-hamburger");
const mainBar = document.querySelector(".main-container");
const sideBar = document.querySelector(".sidebar");
const menuClose = document.querySelector(".icon-cross");

menuHamburger.addEventListener("click", () => {
    sideBar.style.width = "70%";
    sideBar.style.display = "initial";
    mainBar.style.display = "none";
    menuHamburger.style.display = "none";
    menuClose.style.display = "initial";

})

menuClose.addEventListener('click', () => {
    menuClose.style.display = "none";
    sideBar.style.width = "20rem";
    sideBar.style.display = "none";
    menuHamburger.style.display = "initial";
    
    function mediaQueryFunction(x) {
        if (x.matches) { // If media query matches
            menuClose.style.display = "none";
            sideBar.style.width = "20rem";
            sideBar.style.display = "none";
            menuHamburger.style.display = "initial";
        } else {
          sideBar.style.display = "initial";
          menuHamburger.style.display = "none";
        }
      }
      
      let mediaWidth = window.matchMedia("(max-width: 700px)")
      mediaQueryFunction(mediaWidth) // Call listener function at run time
      mediaWidth.addListener(mediaQueryFunction);

})




