let menuIcon = document.querySelector(".menu-icon");
let mobileMenu = document.querySelector(".mobile-menu");

let buyButton = document.querySelector(".buttons button:first-child");
let callButton = document.querySelector(".nav3 button");

menuIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});

buyButton.addEventListener("click", function () {
    alert("Thank you for choosing the course!");
});

callButton.addEventListener("click", function () {
    alert("Our team will contact you soon!");
});