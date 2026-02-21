let count = 1;
document.getElementById("radio-1").checked = true;

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio-" + count).checked = true;
}

setInterval(function(){
    nextImage();
}, 5000);


function setupCarousel(containerSelector, itemSelector, prevSelector, nextSelector, itemsPerGroup = 5) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const items = container.querySelectorAll(itemSelector);
    const totalGroups = Math.ceil(items.length / itemsPerGroup);
    let currentGroup = 0;

    function showGroup(groupIndex) {
        items.forEach((item, i) => {
            if(i >= groupIndex * itemsPerGroup && i < (groupIndex + 1) * itemsPerGroup){
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    function plusSlides(n) {
        currentGroup += n;
        if(currentGroup < 0) currentGroup = totalGroups - 1;
        if(currentGroup >= totalGroups) currentGroup = 0;
        showGroup(currentGroup);
    }

    // Eventos dos botões
    const prevBtn = container.querySelector(prevSelector);
    const nextBtn = container.querySelector(nextSelector);
    if (prevBtn) prevBtn.addEventListener('click', () => plusSlides(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => plusSlides(1));

    // Inicializa
    showGroup(currentGroup);
}

// Para o carrossel-2
setupCarousel('.carrosel_contener-2', '.carrosel_item-2', '.prev button', '.next button', 5);
// Para o carrossel-3
setupCarousel('.carrosel_contener-3', '.carrosel-item-3', '.prev button', '.next button', 5);
// Para o carrossel-4, se quiser, basta adaptar os seletores
setupCarousel('.carrosel_contener-4', '.carrosel-item-4', '.prev button', '.next button', 5);

function mostrarDados(id) {
    localStorage.setItem('SelectPersona', id);
    
    let historico = JSON.parse(localStorage.getItem('historicoPers')) || [];
    if(historico[historico.length - 1] !== id){
        historico.push(id);
        if(historico.length > 10) historico.shift();
        localStorage.setItem('historicoPers', JSON.stringify(historico));
    }
    window.location.href = "personas.html";
};