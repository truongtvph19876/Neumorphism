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


let scrollPosition = 0;

window.addEventListener('scroll', function() {

  scrollPosition = window.scrollY;
});

window.addEventListener('scroll', function(e) {
    e.preventDefault();
  setTimeout(function() {
    window.scrollTo(0, scrollPosition + 0);
  }, 200);
});

  
