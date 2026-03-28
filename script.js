// Scroll suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Interatividade do botão CTA
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        document.querySelector('#sobre').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Validação e envio do formulário
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        // Simular envio
        alert('Obrigado por entrar em contato! Sua mensagem foi recebida.');
        this.reset();
    });
}

// Adicionar efeito hover aos cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});

// Navbar sticky effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Contador animado para números
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            // Aqui você pode adicionar animação de contador se desejar
        }
    });
}, observerOptions);

const statBoxes = document.querySelectorAll('.stat-box');
statBoxes.forEach(box => observer.observe(box));

// Menu responsivo (opcional)
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.nav-links').style.display = 'flex';
    }
});

console.log('✅ Script do Público Corinthiano carregado com sucesso!');
