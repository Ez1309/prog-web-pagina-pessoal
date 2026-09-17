// Seleção de elementos
const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");

// Função para aplicar o tema e trocar o ícone
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

// Inicialização: Verifica se já tem tema salvo ou busca preferência do Sistema Operacional
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    // Se não tem salvo, verifica se o sistema operacional está no modo escuro
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? "dark" : "light");
}

// Evento de clique para o botão
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const currentTheme = root.getAttribute("data-bs-theme");
        applyTheme(currentTheme === "light" ? "dark" : "light");
    });
}