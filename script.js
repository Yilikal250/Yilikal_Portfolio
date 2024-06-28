document.getElementById("hamburger").addEventListener("click", function() {
    var toggleList = document.getElementById("toggleList");
    toggleList.classList.toggle("hidden");
    toggleList.classList.toggle("visible");
});