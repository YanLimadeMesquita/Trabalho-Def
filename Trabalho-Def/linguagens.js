// Dados das videoaulas
const videoaulas = [
    {
        title: 'Figuras de Linguagem - Parte 1',
        discipline: 'Português',
        duration: '42 min',
        views: '15.2k',
        image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?w=400'
    },
    {
        title: 'Romantismo no Brasil',
        discipline: 'Literatura',
        duration: '38 min',
        views: '12.8k',
        image: 'https://images.unsplash.com/photo-1627556704465-fa360ceb4f6f?w=400'
    },
    {
        title: 'Interpretação de Texto - Técnicas Essenciais',
        discipline: 'Português',
        duration: '35 min',
        views: '18.5k',
        image: 'https://images.unsplash.com/photo-1667655861998-46fe4c29a4cf?w=400'
    },
    {
        title: 'Verb Tenses - Present Perfect',
        discipline: 'Inglês',
        duration: '28 min',
        views: '9.3k',
        image: 'https://images.unsplash.com/photo-1721468184185-214871ec4411?w=400'
    },
    {
        title: 'Modernismo - Primeira Fase',
        discipline: 'Literatura',
        duration: '45 min',
        views: '11.2k',
        image: 'https://images.unsplash.com/photo-1627556704387-e3f28658e782?w=400'
    },
    {
        title: 'Regência Verbal e Nominal',
        discipline: 'Português',
        duration: '40 min',
        views: '14.7k',
        image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?w=400'
    }
];

// Dados dos resumos
const resumos = [
    {
        title: 'Conjunções Coordenativas e Subordinativas',
        discipline: 'Português',
        duration: '12 min',
        pages: '8 páginas',
        link: 'resumo-literatura.html'
    },
    {
        title: 'Escolas Literárias - Resumo Completo',
        discipline: 'Literatura',
        duration: '15 min',
        pages: '12 páginas',
        link: 'resumo-literatura.html'
    },
    {
        title: 'Phrasal Verbs Mais Cobrados no ENEM',
        discipline: 'Inglês',
        duration: '10 min',
        pages: '6 páginas',
        link: 'resumo-literatura.html'
    },
    {
        title: 'Funções da Linguagem',
        discipline: 'Português',
        duration: '8 min',
        pages: '5 páginas',
        link: 'resumo-literatura.html'
    },
    {
        title: 'Principais Autores Brasileiros',
        discipline: 'Literatura',
        duration: '18 min',
        pages: '15 páginas',
        link: 'resumo-literatura.html'
    },
    {
        title: 'Reading Comprehension - Estratégias',
        discipline: 'Inglês',
        duration: '11 min',
        pages: '7 páginas',
        link: 'resumo-literatura.html'
    }
];

// Função para trocar de aba
function switchTab(tabName) {
    // Atualizar botões
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Atualizar painéis
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(tabName + '-panel').classList.add('active');
}

// Renderizar videoaulas
function renderVideoaulas() {
    const grid = document.getElementById('videoaulasGrid');
    if (!grid) return;
    
    grid.innerHTML = videoaulas.map(video => `
        <div class="video-card">
            <div class="video-thumbnail">
                <img src="${video.image}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Video'">
                <div class="video-overlay">
                    <svg class="play-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                </div>
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-content">
                <span class="video-discipline">${video.discipline}</span>
                <h3 class="video-title">${video.title}</h3>
                <div class="video-meta">
                    <div class="video-meta-item">
                        <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                        </svg>
                        <span>${video.views} visualizações</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizar resumos
function renderResumos() {
    const grid = document.getElementById('resumosGrid');
    if (!grid) return;
    
    grid.innerHTML = resumos.map(resumo => `
        <div class="resumo-card" onclick="window.location.href='${resumo.link}'">
            <div class="resumo-content">
                <div class="resumo-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                </div>
                <div class="resumo-info">
                    <span class="resumo-discipline">${resumo.discipline}</span>
                    <h3 class="resumo-title">${resumo.title}</h3>
                    <div class="resumo-meta">
                        <div class="resumo-meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>${resumo.duration} de leitura</span>
                        </div>
                        <div class="resumo-meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                            </svg>
                            <span>${resumo.pages}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Inicializar quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    renderVideoaulas();
    renderResumos();
});
