var closeMenu = new Boolean(true);










function menuCLick() {
    var responsiveBar = document.getElementById("responsiveBar");
    if (closeMenu) {
        responsiveBar.style.height = "30vh";
        closeMenu = false;
    } else {
        responsiveBar.style.height = "0vh";
        closeMenu = true;
    }
}