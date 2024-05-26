const searchBar = document.getElementsByClassName('.search');

function openPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "grid";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function openSearch() {
    const search = document.getElementById("search-bar");
    search.style.display = "flex";
}

function closeSearch() {
    const search = document.getElementById("search-bar");
    search.style.display = "none";
}

function toggleCards(cardClass) {
    const toggleButton = document.getElementById(`${cardClass}ToggleBtn`);
    const hiddenElements = document.querySelectorAll(`.${cardClass}-hidden`);

    toggleButton.textContent = toggleButton.textContent === "عرض الأقل" ? "عرض المزيد" : "عرض الأقل";

    hiddenElements.forEach(element => {
        if (toggleButton.textContent === "عرض المزيد") {
            element.classList.add("fade-out");
        } else {
            element.classList.remove("fade-out");
        }
    });

    async function waitASecond() {
        await new Promise(resolve => setTimeout(resolve, 500));
        hiddenElements.forEach(function (element) {
            element.style.display = (element.style.display === "block") ? "none" : "block";
        });
    }
    waitASecond();
}

document.getElementById("lgToggleBtn").addEventListener("click", function () {
    toggleCards("lg");
});

document.getElementById("prToggleBtn").addEventListener("click", function () {
    toggleCards("pr");
});

document.getElementById("grToggleBtn").addEventListener("click", function () {
    toggleCards("gr");
});
