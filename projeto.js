function pesquisar(){
    let buscar = document.getElementById("buscar").value;
    let infoBusca = document.getElementById("info_busca");
    let personagens = {
        cod1: "Personagem 1",
        cod2: "Personagem 2",
        cod3: "Personagem 3",
        cod4: "Personagem 4",
    };

    if(buscar == null || buscar.trim() == ""){
        infoBusca.innerHTML = "Digite algo para pesquisar.";
        infoBusca.style.color = "red";
    } else if(personagens[buscar]){
        infoBusca.innerHTML = "Você pesquisou por: "+ personagens[buscar];
        infoBusca.style.color = "green";
    }
    else{
        infoBusca.innerHTML = "Personagem não encontrado.";
        infoBusca.style.color = "orange";
    }

    infoBusca.style.display = "block";
    setTimeout(() => {
        infoBusca.style.display = "none";
    },3000);
};

// function Limpar(){
//     document.getElementById("buscar").value = "";
//     document.getElementById("info_buscar").innerHTML = "";
//     document.getElementById("info_buscar").innerHTML = "Digite algo para pesquisar.";
//     document.getElementById("info_buscar").style.color = "black";
//     document.getElementById("info_buscar").style.display = "none";
//     document.getElementById("buscar").focus();
// }
// // Função para manipular o clique do botão de pesquisa
// document.getElementById("buscar_b").addEventListener("click", pesquisar());

// // Função para limpar o campo de pesquisa
// document.getElementById("buscar").addEventListener("input", function(){
//     if(this.value.trim() === ""){
//         document.getElementById("info_buscar").innerHTML = "Digite algo para pesquisar.";
//         document.getElementById("info_buscar").style.color = "black";
//         document.getElementById("info_buscar").style.display = "none";
//         document.getElementById("buscar").focus();
//     }
//     else{
//         document.getElementById("info_buscar").innerHTML = "";
//         document.getElementById("info_buscar").style.display = "none";
//         document.getElementById("buscar").focus();
//     }
// });