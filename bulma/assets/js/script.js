document.addEventListener('DOMContentLoaded', () => {

    // 1. LÓGICA DO MENU MOBILE (BULMA)
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
                
                // Arrumar cor de fundo do menu no mobile
                if($target.classList.contains('is-active')){
                    $target.style.backgroundColor = 'var(--bg-primary)';
                }
            });
        });
    }

    // 2. LÓGICA DO TEMA (DARK/LIGHT)
    const htmlElement = document.documentElement;
    const themeBtn = document.getElementById("themeToggle");

    function applyTheme(theme) {
        htmlElement.setAttribute("data-theme", theme);
        localStorage.setItem("portfolio-theme-bulma", theme);
        
        if (themeBtn) {
            if (theme === "dark") {
                themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        }
    }

    const savedTheme = localStorage.getItem("portfolio-theme-bulma");
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? "dark" : "light");
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = htmlElement.getAttribute("data-theme");
            applyTheme(currentTheme === "light" ? "dark" : "light");
        });
    }

});