const searchBar = document.getElementsByClassName('.search');

function openPopup() {
    const popup = document.getElementById("contacts-window");
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("contacts-window");
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

function openNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.style.display = "flex";
}

function closeNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.style.display = "none";
}

const button = document.getElementById("menu");
let isOn = false;

button.addEventListener("click", function () {
    const imageOn = "url('../images/SVGs/bars-active.svg')";
    const imageOff = "url('../images/SVGs/bars.svg')";
    isOn = !isOn;

    if (isOn) {
        button.style.backgroundImage = imageOn;
        button.style.backgroundColor = "#007DC5";
        openNavbar();
    } else {
        button.style.backgroundImage = imageOff;
        button.style.backgroundColor = "#F2F2F2";
        closeNavbar();
    }

    button.backgroundImage = isOn ? imageOn : imageOff;
});

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
