document.addEventListener('DOMContentLoaded', () => {

    // --- Seletores de Elementos ---
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const header = document.querySelector('header');
    const backToTopButton = document.querySelector('.back-to-top');
    const revealElements = document.querySelectorAll('section');

    // --- Funcionalidade 1: Menu Hambúrguer Responsivo ---
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menu.classList.toggle('active');
        });

        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }

    // --- Funcionalidade 2: Animação ao Rolar (Scroll Reveal) ---
    // Usar IntersectionObserver é muito eficiente e não causa lentidão.
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        revealElements.forEach(el => {
            el.classList.add('reveal');
            revealObserver.observe(el);
        });
    }

    // --- OTIMIZAÇÃO: Função Única para Lidar com a Rolagem ---
    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Lógica do Header
        if (header) {
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Lógica do Botão "Voltar ao Topo"
        if (backToTopButton) {
            if (scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
    };

    // Adiciona um único "ouvinte" de rolagem que chama a função otimizada
    window.addEventListener('scroll', handleScroll, { passive: true });
    // { passive: true } é outra micro-otimização que informa ao navegador que a função de scroll não impedirá a rolagem, melhorando a fluidez.

});