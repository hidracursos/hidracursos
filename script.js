const darkSvg = `<svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px" viewBox="0 0 30.457 30.457" xml:space="preserve" stroke="#fff" stroke-width="0.00030457"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M29.693,14.49c-0.469-0.174-1-0.035-1.32,0.353c-1.795,2.189-4.443,3.446-7.27,3.446c-5.183,0-9.396-4.216-9.396-9.397 c0-2.608,1.051-5.036,2.963-6.835c0.366-0.347,0.471-0.885,0.264-1.343c-0.207-0.456-0.682-0.736-1.184-0.684 C5.91,0.791,0,7.311,0,15.194c0,8.402,6.836,15.238,15.238,15.238c8.303,0,14.989-6.506,15.219-14.812 C30.471,15.118,30.164,14.664,29.693,14.49z"></path> </g> </g></svg>`
const lightSvg = `<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1Z" fill="#fff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM8.06167 12C8.06167 14.1751 9.82492 15.9383 12 15.9383C14.1751 15.9383 15.9383 14.1751 15.9383 12C15.9383 9.82492 14.1751 8.06167 12 8.06167C9.82492 8.06167 8.06167 9.82492 8.06167 12Z" fill="#fff"></path> <path d="M20.4853 3.51472C20.0947 3.12419 19.4616 3.12419 19.0711 3.51472L17.6568 4.92893C17.2663 5.31946 17.2663 5.95262 17.6568 6.34315C18.0474 6.73367 18.6805 6.73367 19.0711 6.34315L20.4853 4.92893C20.8758 4.53841 20.8758 3.90524 20.4853 3.51472Z" fill="#fff"></path> <path d="M1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1Z" fill="#fff"></path> <path d="M3.51472 3.51472C3.1242 3.90524 3.1242 4.53841 3.51472 4.92893L4.92894 6.34315C5.31946 6.73367 5.95263 6.73367 6.34315 6.34315C6.73368 5.95262 6.73368 5.31946 6.34315 4.92893L4.92894 3.51472C4.53841 3.12419 3.90525 3.12419 3.51472 3.51472Z" fill="#fff"></path> <path d="M11 21C11 20.4477 11.4477 20 12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21Z" fill="#fff"></path> <path d="M6.34315 17.6569C5.95263 17.2663 5.31946 17.2663 4.92894 17.6569L3.51473 19.0711C3.1242 19.4616 3.1242 20.0948 3.51473 20.4853C3.90525 20.8758 4.53842 20.8758 4.92894 20.4853L6.34315 19.0711C6.73368 18.6805 6.73368 18.0474 6.34315 17.6569Z" fill="#fff"></path> <path d="M21 13C20.4477 13 20 12.5523 20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21Z" fill="#fff"></path> <path d="M17.6568 17.6569C17.2663 18.0474 17.2663 18.6805 17.6568 19.0711L19.0711 20.4853C19.4616 20.8758 20.0947 20.8758 20.4853 20.4853C20.8758 20.0948 20.8758 19.4616 20.4853 19.0711L19.0711 17.6569C18.6805 17.2663 18.0474 17.2663 17.6568 17.6569Z" fill="#fff"></path> </g></svg>`
        
function applyTheme() {
    const userPreference = localStorage.getItem('theme'); // Checa a preferência do usuário
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (userPreference) {
        // Aplica o tema baseado na preferência do usuário
        document.documentElement.setAttribute('data-theme', userPreference);
        updateButtonSVG(userPreference);
    } else if (prefersDark) {
        // Aplica o tema baseado na preferência do dispositivo
        document.documentElement.setAttribute('data-theme', 'dark');
        updateButtonSVG('dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        updateButtonSVG('light');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Armazena a preferência do usuário
    updateButtonSVG(newTheme);
}

function updateButtonSVG(theme) {
    const button = document.getElementById('btn-dark-mode-toggle');
    button.innerHTML = theme === 'dark' ? darkSvg : lightSvg;
}

document.addEventListener('DOMContentLoaded', function() {
    applyTheme(); // Aplica o tema inicial
    document.getElementById('btn-dark-mode-toggle').addEventListener('click', toggleTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);







let rendering = false;
let filesData = [];
let fuse;                // Para Fuse.js
let debounceTimer;       // Timer para debounce da pesquisa
let loadedData = [];     // Dados já carregados na página
let searchResults = [];  // Armazena os resultados da pesquisa
let startIndex = 0;      // Índice de início para carregamento
const BATCH_SIZE = 100;  // Quantidade de linhas a serem carregadas por vez
let isSearching = false; // Flag para verificar se estamos em modo de busca

// Função para carregar os dados
async function loadFileData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/abcde124/hidragarcon_bot/refs/heads/main/courses_list.txt');
        const text = await response.text();
        const lines = text.trim().split('\n');

        filesData = lines.map(line => {
            // Divide o conteúdo da linha em `fileName` e `ids` com base no "||"
            const [fileName, ids] = line.split('||').map(part => part.trim());
            return {
                name: fileName,
                ids: ids.replace(/\s*,\s*/g, ', ') // Remove espaços ao redor das vírgulas
            };
        });

        // Inicializa Fuse.js para busca
        fuse = new Fuse(filesData, {
            keys: ['name'],
            includeScore: true,
            threshold: 0.3
        });

        // Carrega o primeiro lote de dados
        loadNextBatch();
    } catch (error) {
        console.error('Erro ao carregar o arquivo:', error);
    }
}

// Função para carregar o próximo lote de dados
function loadNextBatch() {
    if (rendering || isSearching) return;
    rendering = true;

    const endIndex = Math.min(startIndex + BATCH_SIZE, filesData.length);
    loadedData.push(...filesData.slice(startIndex, endIndex));
    startIndex = endIndex;

    rendering = false;
    // Aqui você pode adicionar o código para renderizar `loadedData` na página
}

// Função para carregar o próximo lote de dados
function loadNextBatch() {
    if (rendering || isSearching) return; // Evita carregamento duplicado ou durante busca

    const endIndex = startIndex + BATCH_SIZE;
    const batch = filesData.slice(startIndex, endIndex); // Pega o próximo lote de dados

    renderFiles(batch);
    loadedData = [...loadedData, ...batch]; // Atualiza os dados já carregados
    startIndex = endIndex; // Atualiza o índice de início para o próximo lote
}

// Função para renderizar os arquivos no container
function renderFiles(data, reset = true) {
    const container = document.getElementById('files-container');
    if (reset) {
        container.innerHTML = ''; // Limpa o container se for um reset (ex: nova pesquisa)
    }
    data.forEach(file => {
        const fileDiv = document.createElement('div');
        fileDiv.classList.add('file-entry');

        const fileNameDiv = document.createElement('div');
        fileNameDiv.classList.add('file-name');
        fileNameDiv.setAttribute('onclick', 'toggleDropdown(this)');

        fileNameDiv.innerHTML = `
            <div>
                <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill=""></path>
                    </g>
                </svg>
            </div>
            <h2>${file.name}</h2>
        `;

        const fileContentDiv = document.createElement('div');
        fileContentDiv.classList.add('file-content');
        fileContentDiv.style.display = 'none';

        fileContentDiv.innerHTML = `
            <div class="box content-name">
                <h3>Nome</h3>
                <p>${file.name}</p>
            </div>
            <div class="box content-ids">
                <h3>IDs</h3>
                <p>${file.ids}</p>
            </div>
        `;

        fileDiv.appendChild(fileNameDiv);
        fileDiv.appendChild(fileContentDiv);

        container.appendChild(fileDiv);
    });
}

// Função para alternar dropdown
function toggleDropdown(element) {
    const content = element.nextElementSibling;
    const isActive = element.parentElement.classList.contains('active');

    document.querySelectorAll('.file-entry').forEach(entry => {
        entry.classList.remove('active');
        entry.querySelector('.file-content').style.display = 'none';
    });

    if (!isActive) {
        element.parentElement.classList.add('active');
        content.style.display = 'grid';
    }
}

// Função para verificar o scroll e carregar mais dados
function handleScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 200 && !isSearching) { // Ajuste o valor conforme necessário
        loadNextBatch(); // Carrega mais dados normais
    }
}

// Adiciona o event listener para o scroll
window.addEventListener('scroll', debounce(handleScroll, 100)); // Use debounce para evitar chamadas excessivas

// Função debounce
function debounce(func, delay) {
    return function(...args) {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Função de pesquisa
function search(event) {
    clearTimeout(debounceTimer); // Limpa o timer anterior
    const input = event.target.value.toLowerCase();

    debounceTimer = setTimeout(() => {
        if (input === '') {
            isSearching = false; // Não está mais em busca
            renderFiles(loadedData, true); // Restaura os dados carregados
            return;
        }

        const results = fuse.search(input); // Supondo que fuse.js esteja configurado
        const filteredFiles = results.map(result => result.item);

        isSearching = true; // Modo de busca ativo
        renderFiles(filteredFiles, true); // Renderiza os resultados e limpa os dados anteriores
    }, 1000); // Tempo de debounce
}

document.getElementById('search-input').addEventListener('input', search);

window.onload = loadFileData;
