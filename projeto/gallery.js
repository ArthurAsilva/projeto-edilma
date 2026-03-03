// ============================================
// GALERIA
// ============================================

const galleryItems = [
    { emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", title: "Bandeira Galesa" },
    { emoji: "🍲", title: "Cawl" },
    { emoji: "🧀", title: "Welsh Rarebit" },
    { emoji: "🍞", title: "Bara Brith" },
    { emoji: "🍖", title: "Cordeiro Assado" },
    { emoji: "🌭", title: "Salsicha Glamorgan" },
    { emoji: "🥘", title: "Sopa de Alho-poró" },
    { emoji: "🧅", title: "Alho-poró" },
    { emoji: "🐑", title: "Cordeiro" },
    { emoji: "🥔", title: "Batatas" },
    { emoji: "🦪", title: "Frutos do Mar" },
    { emoji: "🌿", title: "Hortelã Fresca" },
];

function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 50}ms`;
        galleryItem.innerHTML = `
            <div style="text-align: center; cursor: pointer; transition: transform 0.3s ease;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">${item.emoji}</div>
                <p style="font-weight: 600; color: var(--foreground);">${item.title}</p>
            </div>
        `;

        galleryGrid.appendChild(galleryItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});
