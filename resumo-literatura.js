// ===============================
// DADOS DAS PÁGINAS
// ===============================

const pages = [ // tipo mapa do site
    { id: 'autores', title: 'Principais Autores Brasileiros', time: '', discipline: 'Literatura', meta: 'Literatura' },
    { id: 'escolas', title: 'Escolas Literárias', time: '', discipline: 'Literatura', meta: 'Literatura' },
    { id: 'figuras', title: 'Figuras de Linguagem', time: '', discipline: 'Português', meta: 'Português' },
    { id: 'modernismo', title: 'Modernismo no Brasil', time: '', discipline: 'Literatura', meta: 'Literatura' }
];

const pageColors = {
    autores: { gradient: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)', bg: '#eff6ff', text: '#1d4ed8' },
    escolas: { gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)', bg: '#d1fae5', text: '#047857' },
    figuras: { gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', bg: '#ede9fe', text: '#7c3aed' },
    modernismo: { gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)', bg: '#fed7aa', text: '#c2410c' }
};

// ===============================
// DADOS DO CONTEÚDO
// ===============================

const autoresData = [
    {
        name: 'Machado de Assis',
        period: 'Realismo (1839–1908)',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
        badge: { bg: '#fef3c7', text: '#92400e' },
        initials: 'MA',
        description: 'Considerado o maior escritor brasileiro, Machado é mestre do realismo psicológico. Sua obra é marcada pelo pessimismo, ironia fina e análise profunda da psique humana.',
        mainWorks: [
            { title: 'Dom Casmurro', year: '1899', note: 'Capitu traiu ou não? O narrador não confiável.' },
            { title: 'Memórias Póstumas de Brás Cubas', year: '1881', note: 'Narrador defunto, anticonvencional.' },
            { title: 'Quincas Borba', year: '1891', note: 'Humanitas e a filosofia do absurdo.' }
        ],
        enemTip: 'Foco em narrador não confiável, crítica social implícita e ironia. Dom Casmurro é o mais cobrado.',
        keywords: ['Realismo', 'Ironia', 'Narrador não confiável', 'Psicologia', 'Crítica social']
    },
    {
        name: 'Clarice Lispector',
        period: 'Modernismo (1920–1977)',
        gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
        badge: { bg: '#f3e8ff', text: '#6b21a8' },
        initials: 'CL',
        description: 'Clarice revolucionou a prosa brasileira com estilo introspectivo e existencialista. Explora o fluxo de consciência, a identidade feminina e a epifania.',
        mainWorks: [
            { title: 'A Hora da Estrela', year: '1977', note: 'Macabéa, identidade e narrador masculino.' },
            { title: 'A Paixão Segundo G.H.', year: '1964', note: 'Epifania existencial e desconstrução do ser.' },
            { title: 'Laços de Família', year: '1960', note: 'Contos sobre cotidiano e revelação.' }
        ],
        enemTip: 'Textos de Clarice são frequentes em questões de interpretação profunda. Atente ao fluxo de consciência e temas existenciais.',
        keywords: ['Fluxo de consciência', 'Epifania', 'Existencialismo', 'Feminismo', 'Introspecção']
    },
    {
        name: 'Guimarães Rosa',
        period: 'Modernismo / 3ª Fase (1908–1967)',
        gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        badge: { bg: '#d1fae5', text: '#065f46' },
        initials: 'GR',
        description: 'Rosa criou uma linguagem literária única misturando o sertão mineiro com elementos míticos. Neologismos, ritmo musical e profundidade filosófica marcam seu estilo.',
        mainWorks: [
            { title: 'Grande Sertão: Veredas', year: '1956', note: 'Pacto com o diabo e dualidade bem/mal.' },
            { title: 'Sagarana', year: '1946', note: 'Contos do sertão e vida sertaneja.' },
            { title: 'Primeiras Estórias', year: '1962', note: '"A Terceira Margem do Rio" — símbolo e mistério.' }
        ],
        enemTip: '"A Terceira Margem do Rio" é o conto mais cobrado no ENEM. O pai representa a busca pelo absoluto.',
        keywords: ['Regionalismo', 'Neologismos', 'Sertão', 'Filosofia', 'Mito']
    },
    {
        name: 'Carlos Drummond de Andrade',
        period: 'Modernismo (1902–1987)',
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
        badge: { bg: '#dbeafe', text: '#1e40af' },
        initials: 'CD',
        description: 'O maior poeta brasileiro do século XX explorou o cotidiano, o existencialismo e a crítica social com ironia e lirismo. A pedra é seu símbolo mais icônico.',
        mainWorks: [
            { title: 'Alguma Poesia', year: '1930', note: '"No meio do caminho tinha uma pedra".' },
            { title: 'A Rosa do Povo', year: '1945', note: 'Poesia engajada na 2ª Guerra Mundial.' },
            { title: 'Sentimento do Mundo', year: '1940', note: 'Melancolia e condição humana.' }
        ],
        enemTip: '"No meio do caminho" é símbolo do Modernismo. O ENEM aborda Drummond para avaliar recursos expressivos.',
        keywords: ['Modernismo', 'Ironia', 'Existencialismo', 'Cotidiano', 'Pedra como símbolo']
    },
    {
        name: 'Jorge Amado',
        period: 'Modernismo / Regionalismo (1912–2001)',
        gradient: 'linear-gradient(135deg, #f43f5e 0%, #dc2626 100%)',
        badge: { bg: '#fecdd3', text: '#9f1239' },
        initials: 'JA',
        description: 'Jorge Amado retratou a Bahia com sensualidade, humor e crítica social. Seus romances celebram a cultura afro-brasileira, a resistência popular e a alegria de viver.',
        mainWorks: [
            { title: 'Gabriela, Cravo e Canela', year: '1958', note: 'Sensualidade e preconceito social.' },
            { title: 'Capitães da Areia', year: '1937', note: 'Meninos de rua em Salvador.' },
            { title: 'Dona Flor e Seus Dois Maridos', year: '1966', note: 'Fantástico e dilema amoroso.' }
        ],
        enemTip: '"Capitães da Areia" aborda desigualdade social — tema muito relevante. Cultura afro-brasileira é recorrente.',
        keywords: ['Regionalismo', 'Bahia', 'Cultura afro-brasileira', 'Crítica social', 'Sensualidade']
    }
];

const escolasData = [
    {
        name: 'Barroco',
        period: '1601 – 1768',
        gradient: 'linear-gradient(135deg, #ca8a04 0%, #a16207 100%)',
        badge: { bg: '#fef3c7', text: '#713f12' },
        chars: ['Dualidade espiritual vs. material', 'Cultismo (jogo de palavras) e Conceptismo (jogo de ideias)', 'Pessimismo e efemeridade da vida (memento mori)'],
        authors: ['Padre Antônio Vieira — Sermões argumentativos', 'Gregório de Matos — poesia satírica à sociedade baiana'],
        tip: 'Vieira é cobrado por sua retórica nos sermões. Gregório de Matos pela sátira à hipocrisia colonial.'
    },
    {
        name: 'Arcadismo / Neoclassicismo',
        period: '1768 – 1836',
        gradient: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
        badge: { bg: '#d1fae5', text: '#14532d' },
        chars: ['Bucolismo — fuga do urbano (fugere urbem)', 'Carpe diem — aproveitar o momento presente', 'Razão sobre emoção, linguagem clara e simples'],
        authors: ['Tomás Antônio Gonzaga — Marília de Dirceu', 'Cláudio Manuel da Costa — Vila Rica', 'Basílio da Gama — O Uraguai'],
        tip: 'Carpe diem e fugere urbem são os temas-chave. Gonzaga e a Inconfidência Mineira caem com frequência.'
    },
    {
        name: 'Romantismo',
        period: '1836 – 1881',
        gradient: 'linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)',
        badge: { bg: '#fce7f3', text: '#9f1239' },
        chars: ['1ª geração: Indianismo — idealização do índio como herói nacional', '2ª geração: Ultra-romantismo — mal do século, morte, solidão', '3ª geração: Condoreirismo — poesia social, abolicionismo'],
        authors: ['José de Alencar — O Guarani, Iracema', 'Álvares de Azevedo — Noite na Taverna', 'Castro Alves — Os Escravos'],
        tip: 'Indianismo de Alencar, ultra-romantismo de Álvares de Azevedo e abolicionismo de Castro Alves são os três pilares.'
    },
    {
        name: 'Realismo & Naturalismo',
        period: '1881 – 1893',
        gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
        badge: { bg: '#f1f5f9', text: '#475569' },
        chars: ['Objetividade, verossimilhança, crítica social', 'Realismo: foco psicológico, burguesia carioca', 'Naturalismo: determinismo (meio + raça + momento), classes baixas'],
        authors: ['Machado de Assis — Dom Casmurro (Realismo psicológico)', 'Aluísio Azevedo — O Cortiço (Naturalismo determinista)'],
        tip: 'O Cortiço é o exemplo máximo do Naturalismo. Machado domina o Realismo com ironia e narrador não confiável.'
    },
    {
        name: 'Parnasianismo & Simbolismo',
        period: '1893 – 1922',
        gradient: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
        badge: { bg: '#e0e7ff', text: '#3730a3' },
        chars: ['Parnasianismo: "arte pela arte", perfeição formal, soneto clássico', 'Simbolismo: sugestão, misticismo, musicalidade, sinestesia', 'Ambos: reação ao Naturalismo'],
        authors: ['Olavo Bilac — Via Láctea (Parnasianismo)', 'Cruz e Sousa — Broquéis (Simbolismo)'],
        tip: 'Perfeição formal do Parnasianismo vs. sugestão mística do Simbolismo são contrastes clássicos de prova.'
    },
    {
        name: 'Pré-Modernismo',
        period: '1902 – 1922',
        gradient: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 100%)',
        badge: { bg: '#ffedd5', text: '#9a3412' },
        chars: ['Transição: crítica à Belle Époque e ao academicismo', 'Denúncia social e regional — realidade brasileira nua', 'Linguagem simples, temas nacionais e populares'],
        authors: ['Euclides da Cunha — Os Sertões (Guerra de Canudos)', 'Lima Barreto — Triste Fim de Policarpo Quaresma', 'Monteiro Lobato — Urupês (Jeca Tatu)'],
        tip: 'Os Sertões é divisor de águas: jornalismo literário sobre Canudos. Lima Barreto critica a República e o racismo.'
    }
];

// Continua na próxima parte...

const figurasData = [
    {
        name: 'Figuras de Comparação',
        headerColor: '#2563eb',
        cardColor: { bg: '#eff6ff', border: '#bfdbfe' },
        figures: [
            { name: 'Metáfora', def: 'Comparação implícita sem conector', ex: '"A vida é um sonho."' },
            { name: 'Comparação/Símile', def: 'Comparação explícita com conector (como, tal qual...)', ex: '"Ela canta como um rouxinol."' },
            { name: 'Metonímia', def: 'Substituição por relação de proximidade (autor/obra, parte/todo)', ex: '"Gosto de ler Machado." (= obras de Machado)' },
            { name: 'Catacrese', def: 'Metáfora desgastada pelo uso — já não sentimos como figura', ex: '"O braço da cadeira", "pé da mesa"' },
            { name: 'Sinestesia', def: 'Mistura de sensações de órgãos diferentes', ex: '"Voz doce e fria, perfume áspero."' }
        ]
    },
    {
        name: 'Figuras de Pensamento',
        headerColor: '#7c3aed',
        cardColor: { bg: '#f5f3ff', border: '#ddd6fe' },
        figures: [
            { name: 'Ironia', def: 'Diz o oposto do que pensa, geralmente para criticar', ex: '"Que aluno dedicado!" (dito para quem não estuda)' },
            { name: 'Antítese', def: 'Oposição entre ideias ou palavras', ex: '"O amor é fogo que arde sem se ver."' },
            { name: 'Paradoxo (Oxímoro)', def: 'Contradição aparente que revela uma verdade profunda', ex: '"É ferida que dói e não se sente."' },
            { name: 'Hipérbole', def: 'Exageração intencional com efeito expressivo', ex: '"Já te expliquei um milhão de vezes."' },
            { name: 'Eufemismo', def: 'Suavização de algo desagradável ou chocante', ex: '"Ele nos deixou." (= morreu)' },
            { name: 'Litotes', def: 'Afirmar algo negando o contrário (understatement)', ex: '"Não é ruim." (= é bom)' },
            { name: 'Prosopopeia/Personificação', def: 'Atribuir características humanas ao inanimado ou animal', ex: '"O vento gemia entre as árvores."' }
        ]
    },
    {
        name: 'Figuras de Som',
        headerColor: '#059669',
        cardColor: { bg: '#d1fae5', border: '#86efac' },
        figures: [
            { name: 'Aliteração', def: 'Repetição de sons consonantais', ex: '"Vozes veladas, veludosas vozes..."' },
            { name: 'Assonância', def: 'Repetição de sons vocálicos', ex: '"Sou uma pobre donzela." (o, o, a, o, a)' },
            { name: 'Onomatopeia', def: 'Palavra que imita um som da realidade', ex: '"O tique-taque do relógio."' },
            { name: 'Paronomásia', def: 'Aproximação de palavras de sons semelhantes', ex: '"Quem não tem cão, caça com gato."' }
        ]
    },
    {
        name: 'Figuras de Construção',
        headerColor: '#d97706',
        cardColor: { bg: '#fef3c7', border: '#fde68a' },
        figures: [
            { name: 'Anáfora', def: 'Repetição de palavras no início de frases ou versos', ex: '"Vim, vim e vim mais uma vez."' },
            { name: 'Elipse', def: 'Omissão de termo subentendido pelo contexto', ex: '"Na sala, silêncio." (= havia silêncio)' },
            { name: 'Zeugma', def: 'Omissão de termo já expresso anteriormente', ex: '"Ele come carne; ela, peixe."' },
            { name: 'Polissíndeto', def: 'Repetição intencional de conjunções coordenativas', ex: '"E chora, e grita, e corre, e some."' },
            { name: 'Assíndeto', def: 'Omissão das conjunções — frases justapostas por vírgulas', ex: '"Vim, vi, venci."' }
        ]
    }
];

const modernismoData = [
    {
        phase: 'Semana de Arte Moderna',
        period: 'Fevereiro de 1922',
        gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
        badge: { bg: '#fee2e2', text: '#991b1b' },
        description: 'Realizada no Theatro Municipal de São Paulo, a Semana de 22 foi o marco inaugural do Modernismo. Apresentações de música, poesia e artes plásticas chocaram o público conservador e romperam com o academicismo.',
        features: ['Ruptura com o Parnasianismo e o academicismo', 'Valorização da cultura popular brasileira', 'Influência das vanguardas europeias (cubismo, futurismo, dadaísmo)'],
        authors: ['Di Cavalcanti (pintura)', 'Graça Aranha (organização)', 'Mário de Andrade', 'Oswald de Andrade'],
        tip: 'Saiba quem organizou (Graça Aranha, Di Cavalcanti) e o contexto de ruptura. A data — 1922 — coincide com centenário da Independência.'
    },
    {
        phase: '1ª Fase — Heroica',
        period: '1922 – 1930',
        gradient: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
        badge: { bg: '#ffedd5', text: '#9a3412' },
        description: 'Fase de ruptura radical. A geração de 22 propôs a "deglutição" da cultura estrangeira (Manifesto Antropófago) e a criação de uma identidade cultural brasileira autêntica.',
        features: ['Verso livre, sem métrica rígida', 'Humor, ironia e provocação', 'Linguagem coloquial e cotidiana', 'Valorização do índio, do negro e do popular'],
        authors: ['Oswald de Andrade — Manifesto Antropófago (1928), Pau-Brasil', 'Mário de Andrade — Macunaíma (1928), Pauliceia Desvairada', 'Manuel Bandeira — Libertinagem (1930)'],
        tip: 'Macunaíma é o "herói sem nenhum caráter" — símbolo da identidade nacional múltipla. O Manifesto Antropófago propõe "devorar" a cultura europeia e regurgitá-la como brasilidade.'
    },
    {
        phase: '2ª Fase — Amadurecimento',
        period: '1930 – 1945',
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
        badge: { bg: '#dbeafe', text: '#1e40af' },
        description: 'Fase de consolidação e engajamento social. A prosa domina: romance regionalista nordestino e romance urbano. Contexto: Grande Depressão, ascensão do fascismo, 2ª Guerra Mundial.',
        features: ['Prosa de ficção regionalista e social', 'Engajamento político e humano', 'Investigação psicológica profunda', 'Retrato da seca, da pobreza e da injustiça'],
        authors: ['Carlos Drummond de Andrade — A Rosa do Povo', 'Graciliano Ramos — Vidas Secas, São Bernardo', 'Rachel de Queiroz — O Quinze (1ª romancista modernista)', 'Jorge Amado — Capitães da Areia', 'José Lins do Rego — Menino de Engenho'],
        tip: 'Vidas Secas de Graciliano é fundamental: narração seca que reflete a aridez do sertão. Fabiano, Sinhá Vitória e a cachorra Baleia são símbolos de humanidade esquecida.'
    },
    {
        phase: '3ª Fase — Pós-Modernismo',
        period: '1945 – 1980',
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
        badge: { bg: '#f3e8ff', text: '#6b21a8' },
        description: 'Fase de experimentação formal e linguística. A poesia torna-se mais cerebral (Concretismo) e a prosa aprofunda-se no interior humano com linguagem inovadora.',
        features: ['Experimentação linguística e formal radical', 'Fluxo de consciência e monólogo interior', 'Concretismo poético (poesia visual)', 'Regionalismo como metáfora universal'],
        authors: ['Guimarães Rosa — Grande Sertão: Veredas, Primeiras Estórias', 'João Cabral de Melo Neto — Morte e Vida Severina', 'Clarice Lispector — A Hora da Estrela', 'Haroldo e Augusto de Campos — Concretismo'],
        tip: '"Morte e Vida Severina" de João Cabral é muito cobrado: auto de natal nordestino que retrata a migração do sertanejo. Guimarães Rosa e seus neologismos representam experimentação máxima.'
    }
];

// ===============================
// CONTROLE DE ESTADO
// ===============================

let currentPageIndex = 0;
let visitedPages = new Set([pages[0].id]);

function getCurrentPageId() {
    if (currentPageIndex === 'final') return 'final'; 
    return pages[currentPageIndex].id;
}

function getProgress() {
    return (visitedPages.size / pages.length) * 100;
}

// ===============================
// RENDERIZAÇÃO DE CONTEÚDO
// ===============================

function renderAutoresContent() {
    return `
        <div class="info-box">
            <div class="info-box-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Por que estudar esses autores?
            </div>
            <p class="info-box-text">
                Os 5 autores deste resumo respondem por mais de <strong>70% das questões de Literatura</strong> nos últimos 10 anos do ENEM. Conhecer seus estilos, obras e recursos expressivos é essencial.
            </p>
        </div>
        
        ${autoresData.map(autor => `
            <div class="content-card">
                <div class="content-card-header" style="background: ${autor.gradient}">
                    <div class="header-avatar">${autor.initials}</div>
                    <div class="header-info">
                        <h2>${autor.name}</h2>
                        <p>${autor.period}</p>
                    </div>
                </div>
                <div class="content-card-body">
                    <div class="card-section">
                        <p class="section-description">${autor.description}</p>
                    </div>
                    
                    <div class="card-section">
                        <p class="section-label">Obras Principais</p>
                        <div class="item-list">
                            ${autor.mainWorks.map(work => `
                                <div class="item-list-item">
                                    <div class="item-bullet"></div>
                                    <div class="item-content">
                                        <div>
                                            <span class="item-title">${work.title}</span>
                                            <span class="item-year">(${work.year})</span>
                                        </div>
                                        <p class="item-note">${work.note}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="card-section">
                        <div class="tag-list">
                            ${autor.keywords.map(kw => `
                                <span class="tag" style="background-color: ${autor.badge.bg}; color: ${autor.badge.text}">${kw}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="tip-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8 12 12 8 16 12"></polyline>
                            <line x1="12" y1="8" x2="12" y2="21"></line>
                        </svg>
                        <div class="tip-content">
                            <p class="tip-label">Dica ENEM</p>
                            <p class="tip-text">${autor.enemTip}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

function renderEscolasContent() {
    return `
        <div class="info-box">
            <div class="info-box-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Como estudar Escolas Literárias?
            </div>
            <p class="info-box-text">
                O ENEM não pede que você memorize datas, mas que identifique <strong>características e autores</strong> de cada escola. Foque nos elementos marcantes de cada período e nos contrastes entre eles.
            </p>
        </div>
        
        ${escolasData.map(escola => `
            <div class="content-card">
                <div class="content-card-header" style="background: ${escola.gradient}">
                    <div class="header-info">
                        <h2>${escola.name}</h2>
                        <p>${escola.period}</p>
                    </div>
                </div>
                <div class="content-card-body">
                    <div class="card-section">
                        <p class="section-label">Características</p>
                        <div class="item-list">
                            ${escola.chars.map(char => `
                                <div class="item-list-item">
                                    <div class="item-bullet" style="background-color: #059669"></div>
                                    <div class="item-content">
                                        <p class="section-description">${char}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="card-section">
                        <p class="section-label">Principais Autores & Obras</p>
                        <div class="item-list">
                            ${escola.authors.map(author => `
                                <div class="item-list-item">
                                    <svg style="color: #059669; margin-top: 0.125rem" class="item-bullet" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                    </svg>
                                    <div class="item-content">
                                        <p class="section-description">${author}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="tip-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8 12 12 8 16 12"></polyline>
                            <line x1="12" y1="8" x2="12" y2="21"></line>
                        </svg>
                        <div class="tip-content">
                            <p class="tip-label">Dica ENEM</p>
                            <p class="tip-text">${escola.tip}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

// Continua na próxima parte...

function renderFigurasContent() {
    return `
        <div class="info-box">
            <div class="info-box-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Como o ENEM cobra Figuras de Linguagem?
            </div>
            <p class="info-box-text">
                As figuras aparecem em questões de <strong>interpretação de texto e poesia</strong>. Você precisa identificar a figura e explicar seu efeito de sentido — não basta saber o nome, precisa entender por que o autor usou.
            </p>
        </div>
        
        ${figurasData.map(group => `
            <div class="content-card" style="background-color: ${group.cardColor.bg}; border-color: ${group.cardColor.border}">
                <div class="content-card-header" style="background-color: ${group.headerColor}; padding: 0.75rem 1.25rem">
                    <h2 style="font-size: 1.125rem">${group.name}</h2>
                </div>
                <div class="content-card-body">
                    ${group.figures.map(fig => `
                        <div style="background: white; border-radius: 0.75rem; padding: 1rem; border: 1px solid white; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); margin-bottom: 0.75rem">
                            <p style="font-weight: 700; font-size: 0.875rem; margin-bottom: 0.25rem">${fig.name}</p>
                            <p style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.5rem">${fig.def}</p>
                            <div style="background-color: rgba(241, 245, 249, 0.5); border-radius: 0.5rem; padding: 0.75rem">
                                <p style="font-size: 0.875rem; font-style: italic">${fig.ex}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}
        
        <div class="tip-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #d97706">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <div class="tip-content">
                <p class="tip-label">As 5 mais cobradas no ENEM</p>
                <div class="tag-list" style="margin-top: 0.5rem">
                    ${['Metáfora', 'Ironia', 'Hipérbole', 'Antítese', 'Prosopopeia'].map((fig, i) => `
                        <span class="tag" style="background-color: #fde68a; color: #78350f">
                            ${i + 1}. ${fig}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderModernismoContent() {
    return `
        <div class="info-box">
            <div class="info-box-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                O Modernismo e o ENEM
            </div>
            <p class="info-box-text">
                O Modernismo é o período mais cobrado no ENEM. Dominar as <strong>três fases</strong>, seus autores e o contexto histórico garante pontos preciosos tanto em Literatura quanto em Interpretação de Texto.
            </p>
        </div>
        
        ${modernismoData.map(fase => `
            <div class="content-card">
                <div class="content-card-header" style="background: ${fase.gradient}">
                    <div class="header-info">
                        <h2>${fase.phase}</h2>
                        <p>${fase.period}</p>
                    </div>
                </div>
                <div class="content-card-body">
                    <div class="card-section">
                        <p class="section-description">${fase.description}</p>
                    </div>
                    
                    <div class="card-section">
                        <p class="section-label">Características</p>
                        <div class="item-list">
                            ${fase.features.map(feature => `
                                <div class="item-list-item">
                                    <div class="item-bullet" style="background-color: #f97316"></div>
                                    <div class="item-content">
                                        <p class="section-description">${feature}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="card-section">
                        <p class="section-label">Autores & Obras</p>
                        <div class="item-list">
                            ${fase.authors.map(author => `
                                <div class="item-list-item">
                                    <svg style="color: #f97316; margin-top: 0.125rem" class="item-bullet" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                    </svg>
                                    <div class="item-content">
                                        <p class="section-description">${author}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="tip-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8 12 12 8 16 12"></polyline>
                            <line x1="12" y1="8" x2="12" y2="21"></line>
                        </svg>
                        <div class="tip-content">
                            <p class="tip-label">Dica ENEM</p>
                            <p class="tip-text">${fase.tip}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

function renderFinalContent() {
    return `
        <div style="min-height: 100vh; background-color: #f8fafc">
            <div class="final-page-header">
                <div class="container" style="max-width: 48rem">
                    <div class="trophy-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                            <path d="M4 22h16"></path>
                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                    </div>
                    <h1 class="final-title">Parabéns!</h1>
                    <p class="final-subtitle">
                        Você completou o módulo de Literatura e Linguagens. Aqui está sua revisão final.
                    </p>
                    <div class="final-badges">
                        ${['4 resumos', '65+ conceitos', '20+ autores', 'Pronto para o ENEM'].map(badge => `
                            <span class="final-badge">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                ${badge}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="container" style="max-width: 64rem; padding: 3rem 1rem">
                <div class="complete-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <div class="complete-info">
                        <p class="complete-title">Módulo 100% concluído</p>
                        <p class="complete-text">Todos os resumos de Literatura e Linguagens foram lidos.</p>
                    </div>
                    <div class="complete-percent">
                        <p class="complete-value">100%</p>
                    </div>
                </div>
                
                <div class="summary-section">
                    <h2 class="summary-title">Resumo do Módulo</h2>
                    <p class="summary-description">Use este guia de revisão rápida na véspera da prova.</p>
                    
                    <div class="summary-grid">
                        <div class="summary-card" style="border-color: #bfdbfe; background-color: #eff6ff">
                            <div class="summary-card-header" style="background-color: #2563eb"><h3>Autores Essenciais</h3></div>
                            <div class="summary-card-body">
                                <div class="summary-list">
                                    ${['Machado de Assis — Realismo, ironia, narrador não confiável', 
                                       'Clarice Lispector — Epifania, fluxo de consciência, existencialismo',
                                       'Guimarães Rosa — Sertão, neologismos, filosofia',
                                       'Carlos Drummond — Cotidiano, pedra, crítica social poética',
                                       'Jorge Amado — Bahia, cultura afro-brasileira, desigualdade'].map(item => `
                                        <div class="summary-list-item">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            <span>${item}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <div class="summary-card" style="border-color: #86efac; background-color: #d1fae5">
                            <div class="summary-card-header" style="background-color: #059669"><h3>Escolas em 1 Linha</h3></div>
                            <div class="summary-card-body">
                                <div class="summary-list">
                                    ${['Barroco — dualidade espiritual/material, Vieira e Gregório',
                                       'Arcadismo — carpe diem, fugere urbem, Gonzaga',
                                       'Romantismo — indianismo, ultra-romantismo, condoreirismo',
                                       'Realismo/Naturalismo — objetividade, Machado vs. Aluísio',
                                       'Parnasianismo/Simbolismo — forma perfeita vs. sugestão mística',
                                       'Pré-Modernismo — Os Sertões, Lima Barreto'].map(item => `
                                        <div class="summary-list-item">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            <span>${item}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <div class="summary-card" style="border-color: #ddd6fe; background-color: #f5f3ff">
                            <div class="summary-card-header" style="background-color: #7c3aed"><h3>Top Figuras de Linguagem</h3></div>
                            <div class="summary-card-body">
                                <div class="summary-list">
                                    ${['Metáfora — comparação sem conector: "A vida é um sonho"',
                                       'Ironia — dizer o oposto para criticar',
                                       'Hipérbole — exagero intencional: "mil vezes te disse"',
                                       'Antítese — oposição: "amor e ódio"',
                                       'Prosopopeia — humanizar o inanimado: "o vento gemia"',
                                       'Metonímia — parte pelo todo, autor pela obra',
                                       'Sinestesia — mistura de sentidos: "voz doce e fria"'].map(item => `
                                        <div class="summary-list-item">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            <span>${item}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <div class="summary-card" style="border-color: #fdba74; background-color: #fed7aa">
                            <div class="summary-card-header" style="background-color: #f97316"><h3>Modernismo — 3 Fases</h3></div>
                            <div class="summary-card-body">
                                <div class="summary-list">
                                    ${['1922 — Semana de Arte Moderna (ruptura com academicismo)',
                                       '1ª Fase (1922–30) — Ruptura: Oswald, Mário, Manuel Bandeira',
                                       '2ª Fase (1930–45) — Engajamento: Drummond, Graciliano, Rachel',
                                       '3ª Fase (1945–80) — Experimentação: Guimarães Rosa, Clarice',
                                       'Macunaíma — herói sem caráter, identidade nacional',
                                       'Vidas Secas — linguagem árida = aridez do sertão'].map(item => `
                                        <div class="summary-list-item">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            <span>${item}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="comparison-table">
                    <div class="table-header"><h3>Comparativo Rápido — Autores x Escola x Tema</h3></div>
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Autor</th>
                                    <th>Escola</th>
                                    <th>Obra-chave</th>
                                    <th>Tema central</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${[
                                    ['Machado de Assis', 'Realismo', 'Dom Casmurro', 'Ironia e psicologia'],
                                    ['Clarice Lispector', 'Modernismo', 'A Hora da Estrela', 'Identidade e epifania'],
                                    ['Guimarães Rosa', 'Modernismo', 'Grande Sertão', 'Sertão e metafísica'],
                                    ['C. Drummond', 'Modernismo', 'Alguma Poesia', 'Cotidiano e existência'],
                                    ['Jorge Amado', 'Regionalismo', 'Capitães da Areia', 'Desigualdade social'],
                                    ['Aluísio Azevedo', 'Naturalismo', 'O Cortiço', 'Determinismo social'],
                                    ['Graciliano Ramos', 'Modernismo', 'Vidas Secas', 'Seca e marginalização']
                                ].map(row => `
                                    <tr>
                                        ${row.map((cell, i) => `<td>${cell}</td>`).join('')}
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="cta-box">
                    <h3 class="cta-title">Continue seus estudos</h3>
                    <p class="cta-text">Explore as outras áreas do conhecimento para o ENEM.</p>
                    <a href="linguagens.html" class="cta-button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Voltar para Linguagens e Códigos
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Continua na próxima parte...

// ===============================
// RENDERIZAÇÃO DA PÁGINA ATUAL
// ===============================

function renderCurrentPage() {
    const currentId = getCurrentPageId();
    const contentArea = document.getElementById('contentArea');
    
    if (currentId === 'final') {
        document.body.innerHTML = renderFinalContent();
        return;
    }
    
    // Renderizar conteúdo baseado no ID da página
    switch (currentId) {
        case 'autores':
            contentArea.innerHTML = renderAutoresContent();
            break;
        case 'escolas':
            contentArea.innerHTML = renderEscolasContent();
            break;
        case 'figuras':
            contentArea.innerHTML = renderFigurasContent();
            break;
        case 'modernismo':
            contentArea.innerHTML = renderModernismoContent();
            break;
    }
    
    updateHeader();
    updateNavigation();
    updateProgress();
    updateNextButton();
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===============================
// ATUALIZAÇÃO DO HEADER
// ===============================

function updateHeader() {
    const currentId = getCurrentPageId();
    const currentPage = pages.find(p => p.id === currentId);
    const colors = pageColors[currentId];
    
    // Atualizar cor do header
    const header = document.getElementById('pageHeader');
    header.style.background = colors.gradient;
    
    // Breadcrumb
    document.getElementById('breadcrumb').innerHTML = `
        <span>Linguagens e Códigos</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>Resumos</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span style="color: white; font-weight: 500">${currentPage.title}</span>
    `;
    
    // Título
    document.getElementById('headerTitle').textContent = currentPage.title;
    
    // Meta
    document.getElementById('headerMeta').innerHTML = `
        <div class="meta-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polygon points=" 4 5 10 3 12 5 14 3 20 5 20 19 14 17 12 19 10 17 4 19 "/>
            </svg>
            <span>${currentPage.meta}</span>
        </div>
        <div class="meta-badge meta-badge-star">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Alta relevância ENEM</span>
        </div>
    `;
}

// ===============================
// ATUALIZAÇÃO DA NAVEGAÇÃO
// ===============================

function updateNavigation() {
    const navList = document.getElementById('navList');
    const currentId = getCurrentPageId();
    
    navList.innerHTML = pages.map(page => {
        const isActive = page.id === currentId;
        const isVisited = visitedPages.has(page.id);
        
        let iconClass = 'nav-icon-unvisited';
        if (isActive) iconClass = 'nav-icon-active';
        else if (isVisited) iconClass = 'nav-icon-visited';
        
        return `
            <a class="nav-item ${isActive ? 'active' : ''}" onclick="navigateToPage('${page.id}')">
                <svg class="nav-icon ${iconClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    ${isVisited ? 
                        '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>' :
                        '<circle cx="12" cy="12" r="10"></circle>'
                    }
                </svg>
                <div class="nav-item-info">
                    <p class="nav-item-title">${page.title}</p>
                    <p class="nav-item-meta">${page.time} · ${page.discipline}</p>
                </div>
            </a>
        `;
    }).join('');
}

// ===============================
// ATUALIZAÇÃO DO PROGRESSO
// ===============================

function updateProgress() {
    const progress = getProgress();
    const count = visitedPages.size;
    const total = pages.length;
    
    // Barra de progresso principal (sidebar)
    document.getElementById('progressValue').textContent = `${progress}%`;
    document.getElementById('progressText').textContent = `${count} de ${total} resumos lidos`;
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    // Barra de progresso mini (header)
    document.getElementById('progressPercent').textContent = `${progress}%`;
    document.getElementById('progressFillMini').style.width = `${progress}%`;
    
    // Mostrar/ocultar dica
    const tipCard = document.getElementById('tipCard');
    if (currentPageIndex === pages.length - 1) {
        tipCard.style.display = 'none';
    } else {
        tipCard.style.display = 'block';
    }
}

// ===============================
// ATUALIZAÇÃO DO BOTÃO PRÓXIMO
// ===============================

function updateNextButton() {
    const nextButton = document.getElementById('nextButton');
    const nextButtonText = document.getElementById('nextButtonText');
    
    if (currentPageIndex < pages.length - 1) {
        const nextPage = pages[currentPageIndex + 1];
        nextButtonText.textContent = `Próximo: ${nextPage.title}`;
        nextButton.classList.remove('next-button-final');
    } else {
        nextButtonText.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="height: 1rem; width: 1rem; margin-right: 0.25rem">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            Ver Resumo Final
        `;
        nextButton.classList.add('next-button-final');
    }
}

// ===============================
// NAVEGAÇÃO
// ===============================

function navigateToPage(pageId) {
    const pageIndex = pages.findIndex(p => p.id === pageId);
    if (pageIndex === -1) return;
    
    currentPageIndex = pageIndex;
    visitedPages.add(pageId);
    renderCurrentPage();
}

function goToNextPage() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        const nextPageId = pages[currentPageIndex].id;
        visitedPages.add(nextPageId);
        renderCurrentPage();
    } else {
        currentPageIndex = 'final';
        visitedPages = new Set(pages.map(p => p.id));
        renderCurrentPage();
    }
}


// ===============================
// INICIALIZAÇÃO
// ===============================

document.addEventListener('DOMContentLoaded', function() {
    // Começar na primeira página
    currentPageIndex = 0;
    visitedPages = new Set([pages[0].id]);
    renderCurrentPage();
});

console.log('Sistema de navegação de resumos carregado!');
