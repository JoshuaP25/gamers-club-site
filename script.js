const register = document.getElementById("register");
const modal = document.getElementById("modal");
const close = document.querySelector(".closeBtn");

function openRegistration() {
    modal.style.display = "block";
}

// function closeRegistration() {
//     modal.style.display = "none";
// }

register.addEventListener("click", openRegistration);
close.onclick = function() {
    modal.style.display = "none";
}
