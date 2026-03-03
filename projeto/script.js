// ============================================
// DADOS - PRATOS
// ============================================
const dishes = [
    {
        name: "Cawl",
        emoji: "🍲",
        description: "O ensopado nacional galês, feito com cordeiro, alho-poró, batatas e legumes. Um prato quente e reconfortante que representa a essência da culinária galesa.",
        ingredients: ["Cordeiro", "Alho-poró", "Batatas", "Cenoura", "Cebola"],
        origin: "Tradição Galesa"
    },
    {
        name: "Welsh Rarebit",
        emoji: "🧀",
        description: "Um prato nacional desde os tempos dos Tudors. Pão tostado coberto com uma mistura cremosa de queijo derretido, temperos e cerveja, criando uma combinação irresistível.",
        ingredients: ["Queijo Cheddar", "Pão", "Cerveja", "Mostarda", "Temperos"],
        origin: "Receita Clássica"
    },
    {
        name: "Bara Brith",
        emoji: "🍞",
        description: "Um pão doce tradicional que significa 'pão manchado'. Feito com uvas passas, groselha Zante e cascas cristalizadas, é perfeito para o chá da tarde.",
        ingredients: ["Uvas Passas", "Groselha", "Cascas Cristalizadas", "Farinha", "Ovos"],
        origin: "Doçaria Galesa"
    },
    {
        name: "Cordeiro Assado",
        emoji: "🍖",
        description: "Cordeiro macio e suculento assado com perfeição, acompanhado de molho de hortelã fresca ou molho de pia. Um prato que celebra a qualidade do cordeiro galês.",
        ingredients: ["Cordeiro", "Hortelã Fresca", "Alho", "Alecrim", "Azeite"],
        origin: "Prato Principal"
    },
    {
        name: "Salsicha Glamorgan",
        emoji: "🌭",
        description: "Uma salsicha única feita com queijo, ovos e farinha de rosca. Vegetariana e deliciosa, é um prato que mostra a criatividade da culinária galesa.",
        ingredients: ["Queijo Cheddar", "Ovos", "Farinha de Rosca", "Cebola", "Salsa"],
        origin: "Glamorgan"
    },
    {
        name: "Sopa de Alho-poró",
        emoji: "🥘",
        description: "Uma sopa tradicional conhecida como Cawl Cennin ou Cawl Mamgu (cozido da avó). Simples, reconfortante e feita com os ingredientes mais autênticos.",
        ingredients: ["Alho-poró", "Batatas", "Caldo", "Cebola", "Manteiga"],
        origin: "Receita Tradicional"
    }
];

// ============================================
// DADOS - INGREDIENTES
// ============================================
const ingredients = [
    {
        name: "Alho-poró",
        emoji: "🧅",
        description: "O vegetal nacional do País de Gales. Membro da família da cebola, é essencial em muitos pratos tradicionais galeses.",
        uses: ["Cawl", "Sopa de Alho-poró", "Acompanhamentos"]
    },
    {
        name: "Cordeiro",
        emoji: "🐑",
        description: "A carne mais importante da culinária galesa. Criado extensivamente nas montanhas galesas, o cordeiro é conhecido por sua qualidade e sabor.",
        uses: ["Cawl", "Cordeiro Assado", "Torta do Pastor"]
    },
    {
        name: "Batatas",
        emoji: "🥔",
        description: "Base de muitos pratos tradicionais galeses. Versátil e nutritiva, aparece em formas diversas na culinária local.",
        uses: ["Tatws Pum Munud", "Tatws Popty", "Acompanhamentos"]
    },
    {
        name: "Queijo",
        emoji: "🧀",
        description: "Tradição importante em Gales, com variedades como Caerphilly, Y Fenni e Tintern. Essencial em Welsh Rarebit.",
        uses: ["Welsh Rarebit", "Salsicha Glamorgan", "Acompanhamentos"]
    },
    {
        name: "Frutos do Mar",
        emoji: "🦪",
        description: "Tradição forte nas proximidades do litoral galês. Mexilhões de Conwy são especialmente famosos.",
        uses: ["Pratos Costeiros", "Acompanhamentos", "Sopas"]
    },
    {
        name: "Hortelã Fresca",
        emoji: "🌿",
        description: "Erva aromática usada para fazer molhos que acompanham cordeiro assado. Traz frescor e sabor aos pratos.",
        uses: ["Molho de Hortelã", "Cordeiro Assado", "Bebidas"]
    }
];

// ============================================
// RENDERIZAR PRATOS
// ============================================
function renderDishes() {
    const dishesGrid = document.getElementById('dishesGrid');
    if (!dishesGrid) return;
    
    dishes.forEach((dish, index) => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.style.animationDelay = `${index * 100}ms`;
        
        const ingredientsLabel = getTranslation('dishes.ingredients_label');
        const learnMore = getTranslation('dishes.learn_more');
        
        dishCard.innerHTML = `
            <div class="dish-header">
                <div class="dish-emoji">${dish.emoji}</div>
                <h3 class="dish-name">${dish.name}</h3>
                <p class="dish-origin">${dish.origin}</p>
            </div>
            <div class="dish-content">
                <p class="dish-description">${dish.description}</p>
                <div>
                    <h4 class="dish-ingredients-label">${ingredientsLabel}</h4>
                    <div class="dish-ingredients">
                        ${dish.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="dish-footer">
                <button>${learnMore}</button>
            </div>
        `;
        
        dishesGrid.appendChild(dishCard);
    });
}

// ============================================
// RENDERIZAR INGREDIENTES
// ============================================
function renderIngredients() {
    const ingredientsGrid = document.getElementById('ingredientsGrid');
    if (!ingredientsGrid) return;
    
    ingredients.forEach((ingredient, index) => {
        const ingredientCard = document.createElement('div');
        ingredientCard.className = 'ingredient-card';
        ingredientCard.style.animationDelay = `${index * 100}ms`;
        
        const usedIn = getTranslation('ingredients.used_in');
        
        ingredientCard.innerHTML = `
            <div class="ingredient-emoji">${ingredient.emoji}</div>
            <h3 class="ingredient-name">${ingredient.name}</h3>
            <p class="ingredient-description">${ingredient.description}</p>
            <div>
                <h4 class="ingredient-uses-label">${usedIn}</h4>
                <div class="ingredient-uses">
                    ${ingredient.uses.map(use => `
                        <div class="use-item">
                            <span class="use-dot"></span>
                            ${use}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        ingredientsGrid.appendChild(ingredientCard);
    });
}

// ============================================
// MENU MOBILE
// ============================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!menuToggle || !nav) return;
    
    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// ============================================
// BOTÃO CTA
// ============================================
function initCTAButton() {
    const ctaButton = document.getElementById('ctaButton');
    if (!ctaButton) return;
    
    ctaButton.addEventListener('click', () => {
        const pratosSection = document.getElementById('pratos');
        if (pratosSection) {
            pratosSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ============================================
// SMOOTH SCROLL PARA LINKS
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href !== '#' && href !== '#0') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderDishes();
    renderIngredients();
    initMobileMenu();
    initCTAButton();
    initSmoothScroll();
});
