// 1. Menú móvil
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 2. Filtrado de proyectos
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Quitar estilo activo a todos
        filterBtns.forEach(b => {
            b.classList.remove('bg-blue-600', 'text-white');
            b.classList.add('bg-slate-800', 'text-slate-300');
        });

        // Poner estilo activo al botón actual
        btn.classList.remove('bg-slate-800', 'text-slate-300');
        btn.classList.add('bg-blue-600', 'text-white');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 3. Modal
const modal = document.getElementById('project-modal');
// ... referencias a los elementos del modal

function openModal(title, tool, objective, learning, imageSrc, downloadUrl) {
    // Rellenar los datos
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-tool').innerText = tool;
    // ...
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

// Cerrar al hacer clic fuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});