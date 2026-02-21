const personagens = {
    "wan-addans": { nome: "Wandinha", img: "persona-n1.jpg", desc: "Gótica" },
    "maomao": { nome: "Maomao", img: "persona-n2(maomao).jpg", desc: "Detetive" },
    "Jeff": { nome: "Jeff", img: "persona-n3(jeff).jpg", desc: "Fofo" },
    "satoru-gojo": { nome: "Satoru Gojo", img: "persona-n4(Satoru_Gojo).jpg", desc: "Feiticeiro" },
    "geralt-of-rivia": { nome: "Geralt of Rivia", img: "persona-n5(Gerald).jpg", desc: "Bruxo" },
    "denji": { nome: "Denji", img: "persona-n6(denji).jpg", desc: "Chainsaw Man" },
    "yor-forger": { nome: "Yor Forger", img: "persona-n7(Yor_Forger).jpg", desc: "Assassina" },
    "cloud-strife": { nome: "Cloud Strife", img: "persona-n8(Cloud_Strife).jpg", desc: "Herói" },
    "batman": { nome: "Batman", img: "persona-n9(Batman).jpg", desc: "Cavaleiro das Trevas" },
    "sonho-morpheus": { nome: "Morpheus/Sonho", img: "persona-n10(Sandman).jpg", desc: "O Sonho" }
};

const Caixa = document.getElementById('prime-body');
const btnLimpar = document.getElementById('Limpar-his');

function renderHistorico(){
    const historico = JSON.parse(localStorage.getItem('historicoPers')) || [];

    Caixa.innerHTML = `
            <button id="Limpar-his">Limpar Historico</button>
    `;

    if(historico.length === 0){
        Caixa.innerHTML += `
        <div class="corpo-his">
            <div class="his-principal">
                <img src="#" alt="Personagem">
                <div class="his-text">
                    <h3 id="titulo-his-1">Não temos nada aqui</h3>
                    <p id="lev-desc-1"></p>
                </div>
            </div>
        </div>
        `;
    }
    else{
        historico.slice().reverse().forEach(id => {
            let p = personagens[id];
            if(p){
                Caixa.innerHTML += `
                <div class="corpo-his">
                    <div class="his-principal">
                        <img src="${p.img}" alt="Personagem">
                        <div class="his-text">
                            <h3>${p.nome}</h3>
                            <p>${p.desc}</p>
                        </div>
                    </div>
                </div>
                `; 
            }
        });
    }
    document.getElementById('Limpar-his').onclick = limparHistorico;
}

function limparHistorico(){
    localStorage.removeItem('historicoPers');
    renderHistorico();
    Caixa.style.display = 'none';
    alert("Historico Limpo")
}

renderHistorico();