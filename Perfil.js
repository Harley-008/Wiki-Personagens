window.onload = function() {
    let emailSalvo = localStorage.getItem('usuarioEmail');
    let DadosUsuario = {
        nome: localStorage.getItem('Name'),
        idade: localStorage.getItem('Age'),
        interesses: localStorage.getItem('Interess'),
        local: localStorage.getItem('Live'),
        redes: localStorage.getItem('RedesSociais'),
    }
    let nome_dados, email_dados, idade_dados, localizacao_dados;
    nome_dados = document.getElementById('dados-nome');
    idade_dados = document.getElementById('dados-idade');
    email_dados = document.getElementById('dados-email');
    localizacao_dados = document.getElementById('dados-localizacao');
    biografia_dados = document.getElementById('dados-biografia');
    interesses_dados = document.getElementById('dados-interesses');
    redes_sociais_dados = document.getElementById('dados-redes_sociais');

    let salvarBtn, limparBtn;
    salvarBtn = document.getElementById('salvar');
    limparBtn = document.getElementById('limpar');
    
    if(DadosUsuario.nome && DadosUsuario.idade && DadosUsuario.interesses && DadosUsuario.local && DadosUsuario.redes){
        formulario.style.display = 'none';
        salvarBtn.style.display = 'none';
        limparBtn.style.display = 'none';
        
        nome_dados.value = DadosUsuario.nome;
        nome_dados.style.textTransform = 'capitalize';

        idade_dados.value = DadosUsuario.idade;
        idade_dados.style.textTransform = 'capitalize';

        localizacao_dados.value = DadosUsuario.local;
        localizacao_dados.style.textTransform = 'capitalize';

        interesses_dados.value = DadosUsuario.interesses;
        interesses_dados.style.textTransform = 'capitalize';

        redes_sociais_dados.value = DadosUsuario.redes;
        redes_sociais_dados.style.textTransform = 'capitalize';
    }
    if (emailSalvo) {
        document.getElementById('email').value = emailSalvo;
        // Mostra também no campo de dados do perfil
        let email_dados = document.getElementById('dados-email');
        if(email_dados) {
            email_dados.value = emailSalvo;
            email_dados.style.textTransform = 'lowercase';
        }
    }
}

function previewImage(event){
    const input = event.target;
    const imgPerfil = document.getElementById('img-perfil');
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imgPerfil.innerHTML = `<img src="${e.target.result}" alt="Imagem de Perfil">`;
        }
        
        reader.readAsDataURL(input.files[0]);
    } else {
        imgPerfil.innerHTML = '';
    }
};

function SalvarDados(){
    const usuario = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        localizacao: document.getElementById('localizacao').value,
        interesses: document.getElementById('interesses').value,
        redes_sociais: document.getElementById('redes_sociais').value,
        email: document.getElementById('email').value,
    };
    let status = usuario.idade >= 18 ? 'Adulto' : 'Menor de idade';
    
    const formulario = document.getElementById('formulario');
    
    let salvarBtn, limparBtn;
    salvarBtn = document.getElementById('salvar');
    limparBtn = document.getElementById('limpar');

    let nome_dados, email_dados, idade_dados, localizacao_dados;
    nome_dados = document.getElementById('dados-nome');
    idade_dados = document.getElementById('dados-idade');
    email_dados = document.getElementById('dados-email');
    localizacao_dados = document.getElementById('dados-localizacao');
    biografia_dados = document.getElementById('dados-biografia');
    interesses_dados = document.getElementById('dados-interesses');
    redes_sociais_dados = document.getElementById('dados-redes_sociais');

    // Aqui você pode salvar os dados do usuário, por exemplo, enviando para um servidor ou armazenando localmente

    if(usuario.nome && usuario.idade && usuario.localizacao && usuario.interesses && usuario.redes_sociais && usuario.email){
        mostrarMensagem('Dados salvos com sucesso!');
        console.log('Dados do usuário:', usuario);
        // Exibir os dados no elemento de resultado
        nome_dados.value = usuario.nome;
        nome_dados.style.textTransform = 'capitalize';
        
        idade_dados.value = usuario.idade;
        idade_dados.style.textTransform = 'capitalize';
        
        localizacao_dados.value = usuario.localizacao;
        localizacao_dados.style.textTransform = 'capitalize';
        
        interesses_dados.value = usuario.interesses;
        interesses_dados.style.textTransform = 'capitalize';
        
        redes_sociais_dados.value = usuario.redes_sociais;
        redes_sociais_dados.style.textTransform = 'capitalize';
        
        email_dados.value = usuario.email;
        email_dados.style.textTransform = 'lowercase';
        // Salva o email no localStorage para manter entre páginas
        localStorage.setItem('usuarioEmail', usuario.email);
        
        localStorage.setItem('Name', usuario.nome);
        localStorage.setItem('Age', usuario.idade);
        localStorage.setItem('Interess', usuario.interesses);
        localStorage.setItem('Live', usuario.localizacao);
        localStorage.setItem('RedesSociais', usuario.redes_sociais);

        // Limpar os campos após salvar
        usuario.nome = '';
        usuario.idade = '';
        usuario.localizacao = '';
        usuario.descricao = '';
        usuario.interesses = '';
        usuario.redes_sociais = '';
        // Esconde os campos de dados
        formulario.style.display = 'none';
        
        // Esconde os botões de salvar e limpar
        salvarBtn.style.display = 'none';
        limparBtn.style.display = 'none';
        if(formulario.style.display === 'none' && salvarBtn.style.display === 'none' && limparBtn.style.display === 'none'){
            let imgPerfil = document.getElementById('img-perfil');
            imgPerfil.className = 'fotoImg';
            let labelFoto = document.getElementById('label_foto');
            labelFoto.className = 'labelImg';
            let infoPerfil, infoPerfilDescricao;
            infoPerfil = document.getElementById('informacoes-perfil');
            infoPerfil.style.display = 'none';
            infoPerfilDescricao = document.getElementById('informacoes-perfil-descricao');
            infoPerfilDescricao.style.display = 'none';

        }
    }
    else{
        mostrarMensagem('Por favor, preencha todos os campos obrigatórios.', 'erro');
    }
};
function LimparDados(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('localizacao').value = '';
    document.getElementById('img-perfil').innerHTML = '';
    document.getElementById('foto-perfil').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('interesses').value = '';
    document.getElementById('redes_sociais').value = '';

    alert('Dados limpos com sucesso!');
    console.log('Dados do usuário limpos.');
};

function mostrarMensagem(texto, tipo = 'sucesso'){
    let msg = document.getElementById('mensagem');
    msg.innerText = texto;
    msg.className = tipo;
    msg.style.display = 'block';

    // Esconde a mensagem após 3 segundos
    setTimeout(() => msg.style.display = 'none', 3000);
}

function DicaImg() {
    let img = document.getElementById('foto_perfil')
    if(img.files == null || img.files.length == 0){
        mostrarMensagem('Formato recomendado: JPG, PNG ou GIF', 'info');
        dica.style.display = 'block';
    }
}


function verificarModal(){
    let nome_dados, email_dados, idade_dados, localizacao_dados;
    nome_dados = document.getElementById('dados-nome');
    email_dados = document.getElementById('dados-email');
    idade_dados = document.getElementById('dados-idade');
    localizacao_dados = document.getElementById('dados-localizacao');
    interesses_dados = document.getElementById('dados-interesses');
    redes_sociais_dados = document.getElementById('dados-redes_sociais');

    if(nome_dados.value || email_dados.value || idade_dados.value || localizacao_dados.value || interesses_dados.value || redes_sociais_dados.value){
        abrirModal();
        return true; // Permite o envio do formulário
    }
    else{
        mostrarMensagem('Nenhum dado para excluir.', 'erro');
        return false; // Impede o envio do formulário
    }
}

function abrirModal(){
    document.getElementById('modal').classList.add('ativo');
    document.querySelector('.modal-backdrop').style.display = 'block';
}
function fecharModal(){
    document.getElementById('modal').classList.remove('ativo');
    document.querySelector('.modal-backdrop').style.display = 'none';
}

//Fechar ao clicar no X ou fora do modal
document.getElementById('fechar').onclick = fecharModal;
document.querySelector('.modal-backdrop').onclick = fecharModal;

//Fechar com ESC
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        fecharModal();
    }
});

function confirmarExclusao(){
    let nome_dados, email_dados, idade_dados, localizacao_dados, interesses_dados, redes_sociais_dados;
    nome_dados = document.getElementById('dados-nome');
    email_dados = document.getElementById('dados-email');
    idade_dados = document.getElementById('dados-idade');
    localizacao_dados = document.getElementById('dados-localizacao');
    interesses_dados = document.getElementById('dados-interesses');
    redes_sociais_dados = document.getElementById('dados-redes_sociais');

    if(nome_dados.value || email_dados.value || idade_dados.value || localizacao_dados.value || interesses_dados.value || redes_sociais_dados.value){
        nome_dados.value = '';
        email_dados.value = '';
        idade_dados.value = '';
        localizacao_dados.value = '';
        interesses_dados.value = '';
        redes_sociais_dados.value = '';
    }
    // Aqui você pode adicionar a lógica para excluir o perfil
    mostrarMensagem('Perfil excluído com sucesso!', 'sucesso');
    fecharModal();
}
function cancelarExclusao(){
    mostrarMensagem('Exclusão cancelada.', 'erro');
    fecharModal();
}

function EditarDados() {
    let nome_dados, email_dados, idade_dados, localizacao_dados, interesses_dados, redes_sociais_dados;
    nome_dados = document.getElementById('dados-nome');
    email_dados = document.getElementById('dados-email');
    idade_dados = document.getElementById('dados-idade');
    localizacao_dados = document.getElementById('dados-localizacao');
    interesses_dados = document.getElementById('dados-interesses');
    redes_sociais_dados = document.getElementById('dados-redes_sociais');

    // Evita múltiplos botões "Salvar"
    if (document.getElementById('salvar-edicao')) {
        mostrarMensagem('Você já está editando seus dados.', 'info');
        return;
    }

    // Habilita os campos para edição
    let campos = [
        'dados-nome', 'dados-email', 'dados-idade',
        'dados-localizacao', 'dados-interesses', 'dados-redes_sociais'
    ];
    if(nome_dados.value !== '' && email_dados.value !== '' && idade_dados.value !== '' && localizacao_dados.value !== '' && interesses_dados.value !== '' && redes_sociais_dados.value !== ''){
        mostrarMensagem('Agora você pode editar seus dados.', 'info');
        
        campos.forEach(id => {
            let campo = document.getElementById(id);
            campo.removeAttribute('readonly');
            campo.classList.add('editavel');
        });
        // Cria botão salvar
        let acoes = document.querySelector('.acoes');
        let salvarBtn = document.createElement('button');
        salvarBtn.id = 'salvar-edicao';
        salvarBtn.textContent = 'Salvar';
        acoes.appendChild(salvarBtn);
    
        salvarBtn.onclick = function () {
            // Salva os dados editados
            campos.forEach(id => {
                let campo = document.getElementById(id);
                campo.setAttribute('readonly', true);
                campo.classList.remove('editavel');
                // Atualiza os valores nos inputs correspondentes
                document.getElementById(id.replace('dados-', '')).value = campo.value;
            });
            mostrarMensagem('Dados salvos com sucesso!', 'sucesso');
            SalvarDados();
            salvarBtn.remove(); // Remove o botão após salvar
        };
    }
    else {
        mostrarMensagem('Por favor, preencha todos os campos obrigatórios.', 'erro');
    }
}