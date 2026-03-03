// ============================================
// FORMULÁRIO DE CONTATO
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Coletar dados do formulário
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validar campos obrigatórios
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Simular envio (em produção, isso seria enviado para um servidor)
        console.log('Formulário enviado:', formData);
        
        // Mostrar mensagem de sucesso
        alert('Obrigado por entrar em contato! Responderemos em breve.');
        
        // Limpar formulário
        contactForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});
