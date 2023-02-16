let img = document.querySelectorAll("img");
img.forEach(element => {
    element.addEventListener("dragstart", e => {
        e.preventDefault();
        timeReloadImg = new Date().getTime();
        e.src = e.src + '?timeReloadImg=' + timeReloadImg;
    });
    //
    element.addEventListener('contextmenu', function (event) {
        // event.preventDefault();
    });
});