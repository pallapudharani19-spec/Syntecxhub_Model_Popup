const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

openBtn.onclick = function () {
    modal.style.display = "block";
    overlay.style.display = "block";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
};

overlay.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
};