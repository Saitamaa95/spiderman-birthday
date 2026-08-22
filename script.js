let currentPage = 1;

function nextPage() {

    const current = document.getElementById("page" + currentPage);

    current.classList.remove("active");

    currentPage++;

    const next = document.getElementById("page" + currentPage);

    if (next) {
        next.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}