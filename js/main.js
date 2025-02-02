// script.js
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Scroll hodisasini tinglash
    window.addEventListener('scroll', function() {
        if (window.scrollY > 800) {
            backToTopButton.style.display = 'block'; // Tugmani ko'rsatish
        } else {
            backToTopButton.style.display = 'none'; // Tugmani yashirish
        }
    });

    // Tugma bosilganda yuqoriga qaytish
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
if(document.body.className !="dark"){
this.firstElementChild.src="images/light.svg";
}else{
this.firstElementChild.src="images/dark.svg";
}
document.body.classList.toggle("dark");
});
