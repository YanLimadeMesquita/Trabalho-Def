// Dados das matérias
const subjects = [
    {
        title: 'Linguagens e Códigos',
        description: 'Português, Literatura, Língua Estrangeira, Artes e Educação Física',
        color: 'from-blue-500 to-blue-600',
        bgColor: '#eff6ff',
        textColor: '#2563eb',
        icon: 'book',
        link: 'linguagens.html'
    },
    {
        title: 'Matemática',
        description: 'Álgebra, Geometria, Estatística, Probabilidade e Matemática Financeira',
        color: 'from-green-500 to-green-600',
        bgColor: '#f0fdf4',
        textColor: '#16a34a',
        icon: 'calculator'
    },
    {
        title: 'Ciências Humanas',
        description: 'História, Geografia, Filosofia e Sociologia',
        color: 'from-purple-500 to-purple-600',
        bgColor: '#faf5ff',
        textColor: '#9333ea',
        icon: 'globe'
    },
    {
        title: 'Ciências da Natureza',
        description: 'Física, Química e Biologia',
        color: 'from-orange-500 to-orange-600',
        bgColor: '#fff7ed',
        textColor: '#ea580c',
        icon: 'microscope'
    },
    {
        title: 'Redação',
        description: 'Técnicas de escrita, estrutura dissertativa e temas atuais',
        color: 'from-pink-500 to-pink-600',
        bgColor: '#fdf2f8',
        textColor: '#ec4899',
        icon: 'pen'
    }
];

// Dados dos materiais
const materials = [
    {
        type: 'Videoaula',
        title: 'Segunda Guerra Mundial',
        subject: 'História',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?w=400',
        color: '#2563eb',
        icon: 'play'
    },
    {
        type: 'Resumo',
        title: 'Funções Trigonométricas',
        subject: 'Matemática',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1667655861998-46fe4c29a4cf?w=400',
        color: '#16a34a',
        icon: 'file'
    },
    {
        type: 'Videoaula',
        title: 'Interpretação de Texto',
        subject: 'Português',
        duration: '35 min',
        image: 'https://images.unsplash.com/photo-1721468184185-214871ec4411?w=400',
        color: '#9333ea',
        icon: 'play'
    },
    {
        type: 'Resumo',
        title: 'Ecologia e Meio Ambiente',
        subject: 'Biologia',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1627556704387-e3f28658e782?w=400',
        color: '#ea580c',
        icon: 'file'
    },
    {
        type: 'Videoaula',
        title: 'Termodinâmica',
        subject: 'Física',
        duration: '50 min',
        image: 'https://images.unsplash.com/photo-1627556704465-fa360ceb4f6f?w=400',
        color: '#dc2626',
        icon: 'play'
    },
    {
        type: 'Resumo',
        title: 'Estrutura da Redação',
        subject: 'Redação',
        duration: '25 min',
        image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?w=400',
        color: '#ec4899',
        icon: 'file'
    }
];

// Função para criar ícone SVG
function getIconSVG(iconName) {
    const icons = {
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
        calculator: '<rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><line x1="8" y1="14" x2="8" y2="18"></line><line x1="12" y1="14" x2="12" y2="18"></line><line x1="8" y1="10" x2="16" y2="10"></line>',
        globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
        microscope: '<path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>',
        pen: '<line x1="18" y1="2" x2="22" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path>',
        play: '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
        file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>'
    };
    return icons[iconName] || icons.book;
}

// Renderizar cards de matérias
function renderSubjects() {
    const grid = document.getElementById('subjectsGrid');
    if (!grid) return;
    
    grid.innerHTML = subjects.map((subject, index) => `
        <div class="subject-card" onclick="${subject.link ? `window.location.href='${subject.link}'` : 'alert(\'Em breve!\')'}">
            <div class="subject-icon" style="background-color: ${subject.bgColor}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: ${subject.textColor}">
                    ${getIconSVG(subject.icon)}
                </svg>
            </div>
            <h3 class="subject-title">${subject.title}</h3>
            <p class="subject-description">${subject.description}</p>
            <div class="subject-link">Explorar conteúdo →</div>
        </div>
    `).join('');
}

// Renderizar materiais de estudo
function renderMaterials() {
    const grid = document.getElementById('materialsGrid');
    if (!grid) return;
    
    grid.innerHTML = materials.map((material, index) => `
        <div class="material-card">
            <div class="material-image">
                <img src="${material.image}" alt="${material.title}" onerror="this.src='https://via.placeholder.com/400x300?text=${material.type}'">
                <div class="material-type">${material.type}</div>
            </div>
            <div class="material-content">
                <div class="material-header">
                    <svg class="material-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: ${material.color}">
                        ${getIconSVG(material.icon)}
                    </svg>
                    <div class="material-info">
                        <h3 class="material-title">${material.title}</h3>
                        <div class="material-meta">
                            <span>${material.subject}</span>
                            <span>${material.duration}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Inicializar quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    renderSubjects();
    renderMaterials();
});
