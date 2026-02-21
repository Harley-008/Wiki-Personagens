function acesso(){
    let key, ckey, info1, info1_2;
    key = document.getElementById("key").value;
    ckey = document.getElementById("ckey").value;
    info1 = document.getElementById("info1");
    info1_2 = document.getElementById("info1_2");

    if(key === ckey){
        return true;
    }
    else{
        info1.innerHTML="Senhas diferentes";
        info1.style.color ="white";
        info1_2.style.backgroundColor = "red";
        alert("As senhas não coincidem. Por favor, tente novamente.");

        return false;
    };
};

function senha(){
    let key, info2;
    key = document.getElementById("key").value;
    info2 = document.getElementById("info2");
    info2_2 = document.getElementById("info2_2");


    if(key.length < 6){
        info2.innerHTML="Senha Fraca";
        info2.style.color="white";
        info2_2.style.backgroundColor="red";
    }
    else if(key.length >= 6 && key.length < 10){
        info2.innerHTML="Senha Moderada";
        info2.style.color="white";
        info2_2.style.backgroundColor="goldenrod";
    }
    else{
        info2.innerHTML="Senha Forte";
        info2.style.color="white";
        info2_2.style.backgroundColor="green";
    }
};

function escrever(){
    const valorInput = document.getElementById("email").value;

    const CaixaBaixa = valorInput.toLowerCase();

    document.getElementById("email").value = CaixaBaixa;
};

function SenhaUnlock(idCampo, imagem){
    let inputSenha = document.getElementById(idCampo);


    if(inputSenha.type ==="password"){
        inputSenha.type = "text";
        imagem.src = "Olhos_Abertos.png";
    }
    else{
        inputSenha.type = "password";
        imagem.src = "Olhos_Fechados.png";
    }
};

function senhaC(){
    let key, info3, info3_2, ckey;
    key = document.getElementById("key").value;
    info3 = document.getElementById("info3");
    info3_2 = document.getElementById("info3_2");
    ckey = document.getElementById("ckey").value;
    
    if(key.length >= 10 && key === ckey){
        info3.innerHTML = "Permissão concedida";
        info3.style.color = "white";
        info3_2.style.backgroundColor = "green";
        
        return true
    }
    else{
        info3.innerHTML = "Permissão negada";
        info3.style.color = "white";
        info3_2.style.backgroundColor = "red";
        alert("A senha deve conter pelo menos 10 caracteres.");

        return false
    }
};

function salvarUsuario(email){
    localStorage.setItem('usuarioEmail', email);
    
}

function ValidarC(){
    let senhaCorreta = acesso();
    let senhaForte = senhaC();
    if(senhaCorreta && senhaForte){
        let email = document.getElementById("email").value;
        salvarUsuario();
        return true;
    }
    return false;
}

function ValidarL(){
    let SenhaForte = senhaC();
    if(SenhaForte){
        let email = document.getElementById("email").value;
        salvarUsuario(email);
        return true;
    }

    return false;
}