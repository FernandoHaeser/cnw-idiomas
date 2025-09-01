document.addEventListener('DOMContentLoaded', function() {

    // --- Funcionalidade 1: Menu Hambúrguer Responsivo ---
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link (para navegação na mesma página)
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }

    // --- Funcionalidade 2: Animação ao Rolar (Scroll Reveal) ---
    const revealElements = document.querySelectorAll('section');

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Opcional: para a observação após a animação
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
        });
        
        revealElements.forEach(el => {
            el.classList.add('reveal'); // Prepara os elementos para a animação
            revealObserver.observe(el);
        });
    }

    // --- Funcionalidade 3: Botão "Voltar ao Topo" ---
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Mostra o botão após rolar 300 pixels
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
    }
    
    // --- Funcionalidade 4: Header com Fundo Dinâmico ---
    const header = document.querySelector('header');

    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adiciona a classe 'scrolled' após rolar 50 pixels
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

});