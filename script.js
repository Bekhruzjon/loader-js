document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 3000); 

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementsByClassName("content");
        content.style.display = "block";
    }
});