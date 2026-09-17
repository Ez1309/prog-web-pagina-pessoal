const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");

function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    
    if (themeBtn) {
        if (theme === "dark") {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? "dark" : "light");
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const currentTheme = root.getAttribute("data-bs-theme");
        applyTheme(currentTheme === "light" ? "dark" : "light");
    });
}