window.onload = function(){
    const SelectPersona = localStorage.getItem('SelectPersona')
    //alert(SelectPersona)

    let Gender = document.getElementById('gender-pers');

    let ImgPersona, NamePersona,NamesPersona, AgePersona, ParenPersona, RankPersona, DescPersona;
    //Variavel da Imagem
    ImgPersona = document.getElementById('imagem-persona');
    //Variavel do Nome
    NamePersona = document.getElementById('character-name');
    NamesPersona = document.getElementById('character-names');
    //Variavel da Idade
    AgePersona = document.getElementById('character-age');
    //Variavel da Mídia
    PossMidia = document.getElementById('poss-midia');
    //Variavel de Parentesco
    ParenPersona = document.getElementById('character-relationships');
    //Variavel das Habilidades
    RankPersona = document.getElementById('character-ranks');
    //Variavel da Descrição
    DescPersona = document.getElementById('character-description');

    if(SelectPersona === 'wan-addans'){
        //Imagem
        ImgPersona.src = "persona-n1.jpg";
        //Nomes
        Gender.innerHTML = "da";
        NamePersona.innerHTML = "Wandinha Addans";
        NamesPersona.innerHTML = "Wandinha/Wednsday Addans";
        //Idade
        AgePersona.innerHTML = "16";
        //Mídia
        PossMidia.innerHTML = "Série de Televisão: <br> <p>Wandinha</p>";
        //Parentes
        ParenPersona.innerHTML = "Familia Addans";
        //Classificação
        RankPersona.innerHTML = "8/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Wandinha Addams é uma personagem fictícia que integra a excêntrica e sombria família Addams, criada por Charles Addams na década de 1930. Reconhecida por seus longos cabelos pretos geralmente presos em duas tranças, olhar sério e vestido preto com gola branca, ela transmite uma aparência sóbria e enigmática. De personalidade inteligente, sarcástica e com humor sombrio, Wandinha é fascinada por mistérios, temas macabros e tudo que foge do comum. Extremamente observadora, corajosa e independente, raramente demonstra emoções abertamente e mantém uma postura fria e calculista. Filha de Mortícia e Gomez Addams e irmã de Feioso, prefere atividades inusitadas como experiências estranhas e histórias de terror a qualquer passatempo comum. Em adaptações mais recentes, como a série “Wandinha” da Netflix, é retratada como uma adolescente investigativa que ingressa na escola Nunca Mais, onde se envolve na resolução de um mistério sobrenatural enquanto mantém seu estilo"
    }
    else if(SelectPersona === 'maomao'){
        //Imagem
        ImgPersona.src = "persona-n2(maomao).jpg";
        //Nomes
        Gender.innerHTML = "da";
        NamePersona.innerHTML = "Maomao";
        NamesPersona.innerHTML = "Maomao";
        //Idade
        AgePersona.innerHTML = "18";
        //Mídia
        PossMidia.innerHTML = "Anime: <br> <p>The Apothecary Diaries</p>";
        //Parentes
        ParenPersona.innerHTML = "???";
        //Classificação
        RankPersona.innerHTML = "8.5/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Maomao é a protagonista da história Kusuriya no Hitorigoto, conhecida por sua inteligência afiada e vasto conhecimento em medicina e venenos. Criada no distrito das flores como filha de uma prostituta, desenvolveu desde cedo habilidades raras em identificação e manipulação de substâncias medicinais. De aparência modesta, com cabelos pretos geralmente presos e expressão atenta, Maomao prefere manter-se discreta, mas sua curiosidade e sagacidade frequentemente a colocam no centro de intrigas e mistérios. Apesar de tentar evitar envolvimento em assuntos perigosos, seu talento a torna indispensável em investigações e diagnósticos complexos, especialmente dentro do ambiente restrito e político do palácio imperial onde passa a trabalhar. Embora muitas vezes pareça distante ou pragmática, demonstra um senso de humor peculiar e uma persistente determinação em descobrir a verdade, mesmo que isso signifique enfrentar riscos consideráveis."
    }
    else if(SelectPersona === 'Jeff'){
        //Imagem
        ImgPersona.src = "persona-n3(jeff).jpg";
        //Nomes
        Gender.innerHTML = "do";
        NamePersona.innerHTML = "Jeff(Marvel)";
        NamesPersona.innerHTML = "Jeff";
        //Idade
        AgePersona.innerHTML = "??";
        //Mídia
        PossMidia.innerHTML = "HQs/Jogo: <br> <p>Marvel Rise</p>";
        //Parentes
        ParenPersona.innerHtml = "Gwepoole";
        //Classificação
        RankPersona.innerHTML = "9.5/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Apesar de sua aparência fofa, Jeff é um personagem travesso e pode ser perigoso, com a habilidade de devorar outros personagens. Ele é descrito como um indivíduo amoroso que ajuda os outros e adora fazer amigos, além de possuir superinteligência e a capacidade de respirar dentro e fora da água. "
    }
    else if(SelectPersona === 'satoru-gojo'){
        //Imagem
        ImgPersona.src = "persona-n4(Satoru_Gojo).jpg";
        //Nomes
        Gender.innerHTML = "do";
        NamePersona.innerHTML = "Satoru Gojo";
        NamesPersona.innerHTML = "Satoru Gojo";
        //Idade
        AgePersona.innerHTML = "30";
        //Mídia
        PossMidia.innerHTML = "Anime: <br> <p>Jujutsu Kaisen</p>";
        //Parentes
        ParenPersona.innerHTML = "??";
        //Classificação
        RankPersona.innerHTML = "9/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Satoru Gojo é um dos personagens principais de Jujutsu Kaisen, reconhecido como o feiticeiro mais poderoso de sua era. Possui cabelos brancos, geralmente desalinhados, e olhos azuis intensos cobertos na maior parte do tempo por uma venda ou óculos escuros para conter e controlar seu poder. Carismático e confiante, Gojo combina um comportamento descontraído e provocador com uma inteligência estratégica notável, sendo capaz de analisar rapidamente situações complexas em combate. Sua personalidade brincalhona e irreverente frequentemente contrasta com a seriedade de suas missões, mas por trás de seu jeito leve, há um profundo senso de responsabilidade em proteger seus alunos e mudar o futuro do mundo dos feiticeiros. Mestre das técnicas amaldiçoadas, seu domínio sobre o Infinito e o Seis Olhos o torna praticamente invencível, reforçando sua reputação como um pilar de força e segurança para aqueles que lutam contra maldições."
    }
    else if(SelectPersona === 'geralt-of-rivia'){
        //Imagem
        ImgPersona.src = "persona-n5(Gerald).jpg";
        //Nomes
        Gender.innerHTML = "do";
        NamePersona.innerHTML = "Geralt of Rivia";
        NamesPersona.innerHTML = "Geralt of Rivia";
        //Idade
        AgePersona.innerHTML = "100";
        //Mídia
        PossMidia.innerHTML = "Jogo: <br> <p>The Witcher</p>";
        //Parentes
        ParenPersona.innerHTML = "??";
        //Classificação
        RankPersona.innerHTML = "9/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Geralt de Rívia é o protagonista da saga The Witcher, um bruxo caçador de monstros conhecido por suas habilidades excepcionais em combate, sentidos aguçados e profundo conhecimento sobre criaturas e alquimia. De cabelos brancos e olhar penetrante, resultado das mutações a que foi submetido, carrega consigo duas espadas — uma de aço para enfrentar humanos e uma de prata para criaturas sobrenaturais. Embora seja reservado e muitas vezes pareça frio, possui um forte código moral e age movido por um senso próprio de justiça, equilibrando pragmatismo e compaixão. Sua vida é marcada por viagens constantes, contratos perigosos e intrigas políticas, enquanto tenta sobreviver em um mundo hostil e moralmente ambíguo. Entre seus traços mais marcantes estão o sarcasmo afiado, a lealdade a poucos amigos de confiança e a complexa relação com Yennefer de Vengerberg, que molda parte significativa de sua jornada."
    }
    else if(SelectPersona === 'denji'){
        //Imagem
        ImgPersona.src = "persona-n6(denji).jpg";
        //Nomes
        Gender.innerHTML = "do";
        NamePersona.innerHTML = "Denji";
        NamesPersona.innerHTML = "Denji";
        //Idade
        AgePersona.innerHTML = "16-18";
        //Mídia
        PossMidia.innerHTML = "Anime: <br> <p>Chainsaw Man</p>";
        //Parentes
        ParenPersona.innerHTML = "Pochita/Chainsaw Man";
        //Classificação
        RankPersona.innerHTML = "9/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Denji é o protagonista de Chainsaw Man, um jovem marcado por uma vida de extrema pobreza e dificuldades desde a infância. Órfão e endividado devido às obrigações deixadas por seu pai, sobrevive realizando trabalhos perigosos como caçador de demônios ao lado de seu fiel companheiro, o demônio-serra Pochita. Sua aparência é simples, com cabelos loiros desalinhados e um ar desleixado, refletindo sua vida dura e despreocupada. Apesar de seu comportamento impulsivo e muitas vezes ingênuo, Denji possui uma determinação inabalável para alcançar objetivos simples, como ter comida, conforto e afeto, sonhos que para ele representam felicidade verdadeira. Após se fundir com Pochita, adquire a habilidade de se transformar no temido Chainsaw Man, tornando-se uma arma letal contra demônios. Sua personalidade mistura inocência, brutalidade e humor, criando um contraste marcante entre seu jeito descontraído e a violência extrema do mundo em que vive."
    }
    else if(SelectPersona === 'yor-forger'){
        //Imagem
        ImgPersona.src = "persona-n7(Yor_Forger).jpg";
        //Nomes
        Gender.innerHTML = "da";
        NamePersona.innerHTML = "Yor Forger";
        NamesPersona.innerHTML = "Yor Forger";
        //Idade
        AgePersona.innerHTML = "27";
        //Mídia
        PossMidia.innerHTML = "Anime: <br> <p>Spy X Family</p>";
        //Parentes
        ParenPersona.innerHTML = "Anya e Loid Forger";
        //Classificação
        RankPersona.innerHTML = "9/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Yor Forger é uma das protagonistas de Spy x Family, uma mulher que leva uma vida dupla como uma habilidosa assassina conhecida pelo codinome Princesa do Espinho. Trabalhando oficialmente como funcionária na prefeitura, mantém uma aparência gentil e educada, com longos cabelos pretos e postura elegante, o que mascara completamente sua verdadeira profissão. Apesar de sua incrível força física, agilidade e habilidade letal no combate corpo a corpo, Yor é socialmente ingênua e, por vezes, desajeitada em situações cotidianas, especialmente quando se trata de interações pessoais. Sua relação com a família forjada ao lado de Loid e Anya desperta nela sentimentos genuínos de afeto e desejo de proteção, revelando um lado caloroso e protetor que contrasta com a frieza e precisão que demonstra como assassina. Dividida entre seu papel de irmã, esposa e profissional letal, Yor equilibra inocência e perigo em uma personalidade única e cativante.";
    }
    else if(SelectPersona === 'cloud-strife'){
        //Imagem
        ImgPersona.src = "persona-n8(Cloud_Strife).jpg";
        //Nomes
        Gender.innerHTML = "do";
        NamePersona.innerHTML = "Cloud Strife";
        NamesPersona.innerHTML = "Cloud Strife";
        //Idade
        AgePersona.innerHTML = "21";
        //Mídia
        PossMidia.innerHTML = "Jogo: <br> <p>Final Fantasy VII</p>";
        //Parentes
        ParenPersona.innerHTML = "???";
        //Classificação
        RankPersona.innerHTML = "9/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Cloud Strife é o protagonista de Final Fantasy VII, um ex-membro da elite militar SOLDIER que atua como mercenário após deixar a organização. Reconhecido por seus cabelos loiros espetados e olhar determinado, carrega a imponente Buster Sword, uma espada de tamanho descomunal que se tornou símbolo de sua imagem. De personalidade reservada e aparentemente fria, Cloud muitas vezes esconde suas inseguranças e conflitos internos por trás de uma postura confiante. Ao longo de sua jornada, revela-se um personagem complexo, marcado por memórias fragmentadas, traumas do passado e uma busca constante por identidade e propósito. Embora tente manter distância emocional, demonstra lealdade profunda e disposição para proteger aqueles com quem cria laços, tornando-se um herói relutante que amadurece à medida que enfrenta desafios pessoais e batalhas decisivas pelo destino do mundo.";
    }
    else if(SelectPersona === 'batman'){
        //Imagem
        ImgPersona.src = "persona-n9(Batman).jpg";
        //Nomes
        Gender.innerHTML = "do";
        NamePersona.innerHTML = "Batman";
        NamesPersona.innerHTML = "Bruce Wayne";
        //Idade
        AgePersona.innerHTML = "30";
        //Mídia
        PossMidia.innerHTML = "HQs: <br> <p>Batman</p>";
        //Parentes
        ParenPersona.innerHTML = "Thomas Wayne, Martha Wayne, Alfred Pennyworth, <br> Dick Grayson, Jason Todd, Tim Drake, Damien Wayne.";
        //Classificação
        RankPersona.innerHTML = "9/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Batman, identidade secreta de Bruce Wayne, é um dos heróis mais icônicos dos quadrinhos e protetor de Gotham City. Marcado pelo trauma de ter testemunhado o assassinato de seus pais ainda criança, dedicou sua vida a combater o crime utilizando sua inteligência, recursos e treinamento intenso em artes marciais, investigação e estratégias de combate. Diferente de muitos heróis, não possui superpoderes, contando apenas com suas habilidades humanas levadas ao extremo, além de um vasto arsenal de tecnologia e veículos. Reconhecido por seu traje negro com o símbolo do morcego no peito e sua capa que lhe confere presença intimidadora, atua principalmente nas sombras, inspirando medo nos criminosos. Apesar de manter uma postura fria e reservada, possui um forte senso de justiça e profundo comprometimento em proteger inocentes, mesmo que isso o leve a sacrificar sua vida pessoal. Sua luta constante contra vilões como Coringa, Charada e Duas-Caras reforça seu papel como símbolo de resiliência e determinação em um mundo dominado pelo caos.";
    }
    else if(SelectPersona === 'sonho-morpheus'){
        //Imagem
        ImgPersona.src = "persona-n10(Sandman).jpg";
        //Nomes
        Gender.innerHTML = "do";
        NamePersona.innerHTML = "Sonho";
        NamesPersona.innerHTML = "Sonho/Morpheus";
        //Idade
        AgePersona.innerHTML = "?????";
        //Mídia
        PossMidia.innerHTML = "Série: <br> <p>Sandman</p>";
        //Parentes
        ParenPersona.innerHTML = "Destino, Morte, Destruição, Desejo, Desespero e Delirio";
        //Classificação
        RankPersona.innerHTML = "9.5/10";
        //Descrição
        DescPersona.style.display = "flex";
        DescPersona.style.height = "100%";
        DescPersona.style.flex = "1";
        DescPersona.innerText = "Sonho, também conhecido como Morpheus, é o protagonista da série Sandman, criação de Neil Gaiman. É um dos Perpétuos, entidades imortais que representam aspectos fundamentais da existência, sendo ele a personificação dos sonhos e da imaginação. De aparência esguia, pele pálida e cabelos negros desgrenhados, costuma vestir roupas escuras e exibe um olhar profundo e melancólico. Sua personalidade é séria, introspectiva e, muitas vezes, distante, refletindo o peso de sua responsabilidade sobre o mundo dos sonhos e pesadelos. Extremamente poderoso e sábio, Morpheus é capaz de moldar realidades oníricas, influenciar mentes e transitar entre mundos com naturalidade, mas também carrega fragilidades emocionais e um apego rigoroso às regras e tradições que regem seu domínio. Sua jornada envolve mudanças sutis, confrontos com forças cósmicas e dilemas pessoais, revelando um personagem complexo que equilibra majestade, tragédia e humanidade, mesmo sendo uma entidade eterna.";
    }
}



function VoltarP(){
    let SelectPersona = localStorage.getItem('SelectPersona');

    if(SelectPersona === 'wan-addans'){
        window.location.href = "projeto2_per.html#Wandinha";
    }
    else if(SelectPersona === 'maomao'){
        window.location.href = "projeto2_per.html#Maomao";
    }
    else if(SelectPersona === 'Jeff'){
        window.location.href = "projeto2_per.html#Jeff";
    }
    else if(SelectPersona === 'satoru-gojo'){
        window.location.href = "projeto2_per.html#SatoruGojo";
    }
    else if(SelectPersona === 'geralt-of-rivia'){
        window.location.href = "projeto2_per.html#Geralt";
    }
    else if(SelectPersona === 'denji'){
        window.location.href = "projeto2_per.html#Denji";
    }
    else if(SelectPersona === 'yor-forger'){
        window.location.href = "projeto2_per.html#Yor";
    }
    else if(SelectPersona === 'cloud-strife'){
        window.location.href = "projeto2_per.html#Cloud";
    }
    else if(SelectPersona === 'batman'){
        window.location.href = "projeto2_per.html#Batman";
    }
    else if(SelectPersona === 'sonho-morpheus'){
        window.location.href = "projeto2_per.html#Sonho";
    }
    else{
        window.location.href = "projeto2_per.html"
    }
};