
const perfis = [
    {
        id: 1,
        nome: "Engenheiro de Sistemas",
        categoria: "Construção",
        descricao: "Transforma problemas em soluções. Gosta de construir, corrigir falhas e desenvolver tecnologias.",
        recomendacao: "Construa e repare equipamentos, sistemas de comunicação e estruturas essenciais para a sobrevivência da equipe.",
        imagem: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 330" role="img" aria-label="Engenheiro futurista trabalhando em uma máquina">
            <defs>
                <linearGradient id="f1" x2="1" y2="1">
                    <stop stop-color="#17103d"/>
                    <stop offset="1" stop-color="#071c32"/>
                </linearGradient>
                <linearGradient id="s1" x2="1" y2="1">
                    <stop stop-color="#a78bfa"/>
                    <stop offset="1" stop-color="#67e8f9"/>
                </linearGradient>
            </defs>
            <rect width="440" height="330" fill="url(#f1)"/>
            <g stroke="#493d87" opacity=".6">
                <path d="M0 50H440M0 100H440M0 150H440M0 200H440M0 250H440M50 0V330M100 0V330M150 0V330M200 0V330M250 0V330M300 0V330M350 0V330M400 0V330"/>
            </g>
            <circle cx="345" cy="72" r="45" fill="#6d28d9" opacity=".2"/>
            <circle cx="345" cy="72" r="28" fill="none" stroke="#67e8f9" stroke-width="2"/>
            <circle cx="345" cy="72" r="14" fill="none" stroke="#a78bfa" stroke-width="2"/>
            <path d="M20 264L420 264" stroke="#67e8f9" opacity=".5"/>
            <rect x="268" y="140" width="126" height="105" rx="12" fill="#17284a" stroke="#67e8f9" stroke-width="2"/>
            <rect x="285" y="155" width="92" height="64" rx="5" fill="#0a1024" stroke="#a78bfa"/>
            <path d="M300 195L320 175L340 189L361 165" fill="none" stroke="#67e8f9" stroke-width="3"/>
            <circle cx="320" cy="175" r="4" fill="#fff"/>
            <circle cx="340" cy="189" r="4" fill="#fff"/>
            <path d="M105 260L115 202L153 177L205 180L241 217L247 267Z" fill="#3b2b70" stroke="#a78bfa" stroke-width="2"/>
            <path d="M122 209L142 232L134 267H100Z" fill="#182d4b" stroke="#67e8f9" stroke-width="2"/>
            <path d="M205 198L251 215L275 188L290 197L271 236L226 237" fill="#4e3a87" stroke="#67e8f9" stroke-width="3"/>
            <path d="M145 177L145 153L192 153L202 181" fill="#253e66" stroke="#67e8f9" stroke-width="2"/>
            <path d="M143 154L148 112Q168 87 192 112L197 154Z" fill="#a78bfa" stroke="#67e8f9" stroke-width="2"/>
            <path d="M148 131Q169 116 194 131L192 151H151Z" fill="#09172e"/>
            <path d="M151 135H191" stroke="#67e8f9" stroke-width="4"/>
            <path d="M137 177L118 196L137 212M206 182L221 203" fill="none" stroke="#67e8f9" stroke-width="7" stroke-linecap="round"/>
            <circle cx="218" cy="203" r="7" fill="#a78bfa" stroke="#fff"/>
            <path d="M220 202L252 181" stroke="#67e8f9" stroke-width="4"/>
            <path d="M246 174L260 185L251 195" fill="none" stroke="#fff" stroke-width="3"/>
            <path d="M95 274H254" stroke="#a78bfa" stroke-width="5"/>
            <circle cx="73" cy="78" r="3" fill="#67e8f9"/>
            <circle cx="92" cy="53" r="2" fill="#a78bfa"/>
            <circle cx="235" cy="52" r="3" fill="#67e8f9"/>
            <path d="M35 300H405" stroke="#67e8f9" opacity=".3"/>
        </svg>`
    },
    {
        id: 2,
        nome: "Cientista Explorador",
        categoria: "Investigação",
        descricao: "Gosta de pesquisar, analisar evidências e descobrir como as coisas funcionam.",
        recomendacao: "Analise amostras, estude possíveis formas de vida e investigue as características do planeta antes que a equipe avance.",
        imagem: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 330" role="img" aria-label="Cientista futurista estudando uma amostra alienígena">
            <defs>
                <linearGradient id="f2" x2="1" y2="1">
                    <stop stop-color="#10133e"/>
                    <stop offset="1" stop-color="#092a3c"/>
                </linearGradient>
                <radialGradient id="orb2">
                    <stop stop-color="#fff"/>
                    <stop offset=".3" stop-color="#67e8f9"/>
                    <stop offset="1" stop-color="#7c3aed" stop-opacity=".1"/>
                </radialGradient>
            </defs>
            <rect width="440" height="330" fill="url(#f2)"/>
            <circle cx="340" cy="75" r="55" fill="#67e8f9" opacity=".06"/>
            <g stroke="#33557c" opacity=".5">
                <path d="M0 55H440M0 110H440M0 165H440M0 220H440M0 275H440"/>
                <path d="M55 0V330M110 0V330M165 0V330M220 0V330M275 0V330M330 0V330M385 0V330"/>
            </g>
            <path d="M25 256H415" stroke="#67e8f9" stroke-width="2" opacity=".6"/>
            <rect x="254" y="143" width="143" height="101" rx="9" fill="#1b2c50" stroke="#67e8f9" stroke-width="2"/>
            <rect x="270" y="157" width="111" height="66" rx="5" fill="#071224" stroke="#a78bfa"/>
            <circle cx="325" cy="189" r="25" fill="url(#orb2)"/>
            <path d="M310 190L319 178L330 193L340 181L348 191" fill="none" stroke="#fff" stroke-width="2"/>
            <path d="M103 260L110 211L141 182L187 184L221 222L226 266Z" fill="#403b80" stroke="#a78bfa" stroke-width="2"/>
            <path d="M135 182L139 154L185 154L193 188" fill="#254966" stroke="#67e8f9" stroke-width="2"/>
            <path d="M137 154L142 111Q165 84 187 111L192 154Z" fill="#c4b5fd" stroke="#67e8f9" stroke-width="2"/>
            <path d="M143 129Q165 115 189 129L188 148H145Z" fill="#09172e"/>
            <path d="M145 135H188" stroke="#67e8f9" stroke-width="4"/>
            <path d="M124 197L102 216L132 237" fill="none" stroke="#67e8f9" stroke-width="8" stroke-linecap="round"/>
            <path d="M191 194L226 176L264 188" fill="none" stroke="#a78bfa" stroke-width="10" stroke-linecap="round"/>
            <path d="M258 177L274 187L261 198" fill="none" stroke="#67e8f9" stroke-width="4"/>
            <path d="M85 276H245" stroke="#a78bfa" stroke-width="5"/>
            <circle cx="57" cy="83" r="15" fill="none" stroke="#67e8f9" stroke-width="2"/>
            <circle cx="57" cy="83" r="5" fill="#a78bfa"/>
            <path d="M57 60V48M57 106V118M34 83H22M80 83H92" stroke="#67e8f9" stroke-width="2"/>
            <circle cx="222" cy="55" r="3" fill="#67e8f9"/>
            <circle cx="244" cy="72" r="2" fill="#a78bfa"/>
        </svg>`
    },
    {
        id: 3,
        nome: "Explorador de Campo",
        categoria: "Exploração",
        descricao: "Gosta de descobrir lugares, experimentar alternativas e lidar com situações novas.",
        recomendacao: "Mapeie territórios, encontre recursos naturais e identifique rotas seguras para a equipe avançar pelo planeta.",
        imagem: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 330" role="img" aria-label="Explorador futurista em uma paisagem alienígena">
            <defs>
                <linearGradient id="f3" x2="0" y2="1">
                    <stop stop-color="#11103b"/>
                    <stop offset=".65" stop-color="#203d66"/>
                    <stop offset="1" stop-color="#101a31"/>
                </linearGradient>
                <linearGradient id="s3" x2="1" y2="1">
                    <stop stop-color="#67e8f9"/>
                    <stop offset="1" stop-color="#8b5cf6"/>
                </linearGradient>
            </defs>
            <rect width="440" height="330" fill="url(#f3)"/>
            <circle cx="333" cy="70" r="40" fill="#a78bfa" opacity=".4"/>
            <circle cx="333" cy="70" r="55" fill="none" stroke="#67e8f9" stroke-opacity=".5"/>
            <path d="M0 205L65 118L108 169L170 94L232 187L291 126L361 188L405 142L440 177V330H0Z" fill="#27315c"/>
            <path d="M0 235L87 184L143 218L211 155L271 219L344 173L440 225V330H0Z" fill="#151e3b"/>
            <path d="M0 281L90 244L155 272L237 223L321 270L395 233L440 252V330H0Z" fill="#0a1229"/>
            <path d="M65 288L75 240L87 288M92 291L107 252L120 291M352 280L367 223L383 280" fill="#17465b" stroke="#67e8f9" stroke-width="2"/>
            <path d="M54 289H130M339 282H399" stroke="#67e8f9" stroke-width="3"/>
            <path d="M170 282L179 216L200 191L222 215L231 282Z" fill="#4e438e" stroke="#a78bfa" stroke-width="2"/>
            <path d="M177 218L156 244L174 260M220 220L245 242L259 226" fill="none" stroke="#67e8f9" stroke-width="9" stroke-linecap="round"/>
            <path d="M181 192L184 156Q200 136 216 156L221 192Z" fill="#a78bfa" stroke="#67e8f9" stroke-width="2"/>
            <path d="M186 174Q202 164 218 174L217 188H187Z" fill="#08162a"/>
            <path d="M188 177H216" stroke="#67e8f9" stroke-width="4"/>
            <path d="M183 228L174 284M224 228L232 284" stroke="#67e8f9" stroke-width="7"/>
            <path d="M165 286H245" stroke="#a78bfa" stroke-width="5"/>
            <path d="M260 100L283 88L300 104L289 121L270 119Z" fill="#67e8f9" opacity=".7"/>
            <path d="M27 64L41 50L55 64L41 78Z" fill="none" stroke="#67e8f9" stroke-width="2"/>
            <circle cx="109" cy="69" r="3" fill="#fff"/>
            <circle cx="137" cy="48" r="2" fill="#a78bfa"/>
            <path d="M260 39H298M279 20V58" stroke="#67e8f9" opacity=".6"/>
        </svg>`
    },
    {
        id: 4,
        nome: "Estrategista da Missão",
        categoria: "Planejamento",
        descricao: "Gosta de organizar informações, coordenar pessoas e decidir os próximos passos.",
        recomendacao: "Coordene a equipe, distribua recursos e defina estratégias para que a exploração aconteça com eficiência e segurança.",
        imagem: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 330" role="img" aria-label="Capitão futurista planejando uma missão espacial">
            <defs>
                <linearGradient id="f4" x2="1" y2="1">
                    <stop stop-color="#180f3c"/>
                    <stop offset="1" stop-color="#071b31"/>
                </linearGradient>
                <linearGradient id="h4" x2="1" y2="1">
                    <stop stop-color="#67e8f9" stop-opacity=".15"/>
                    <stop offset="1" stop-color="#a78bfa" stop-opacity=".45"/>
                </linearGradient>
            </defs>
            <rect width="440" height="330" fill="url(#f4)"/>
            <g stroke="#394b82" opacity=".45">
                <path d="M0 50H440M0 100H440M0 150H440M0 200H440M0 250H440M0 300H440"/>
                <path d="M50 0V330M100 0V330M150 0V330M200 0V330M250 0V330M300 0V330M350 0V330M400 0V330"/>
            </g>
            <path d="M24 61Q220 -10 416 61" fill="none" stroke="#67e8f9" stroke-width="2" opacity=".6"/>
            <rect x="260" y="58" width="143" height="112" rx="10" fill="#121d40" stroke="#67e8f9" stroke-width="2"/>
            <circle cx="331" cy="112" r="38" fill="url(#h4)" stroke="#a78bfa" stroke-width="2"/>
            <ellipse cx="331" cy="112" rx="38" ry="14" fill="none" stroke="#67e8f9" stroke-width="2"/>
            <ellipse cx="331" cy="112" rx="15" ry="38" fill="none" stroke="#67e8f9" stroke-width="2"/>
            <circle cx="331" cy="112" r="6" fill="#fff"/>
            <path d="M279 150L297 133L315 145L339 128L355 139L385 91" fill="none" stroke="#67e8f9" stroke-width="2"/>
            <path d="M89 268L103 204L137 180L190 180L222 214L232 270Z" fill="#3e347a" stroke="#a78bfa" stroke-width="2"/>
            <path d="M133 182L137 150L188 150L196 183" fill="#223f61" stroke="#67e8f9" stroke-width="2"/>
            <path d="M135 150L140 108Q165 81 189 108L194 150Z" fill="#c4b5fd" stroke="#67e8f9" stroke-width="2"/>
            <path d="M142 127Q165 112 191 127L190 145H144Z" fill="#09172e"/>
            <path d="M144 132H190" stroke="#67e8f9" stroke-width="4"/>
            <path d="M113 205L94 228L128 244M205 204L235 187L259 198" fill="none" stroke="#67e8f9" stroke-width="9" stroke-linecap="round"/>
            <path d="M250 180L267 191L254 202" fill="none" stroke="#a78bfa" stroke-width="4"/>
            <path d="M110 273H240" stroke="#67e8f9" stroke-width="4"/>
            <path d="M34 189H83M34 202H68M355 204H406M355 217H392" stroke="#a78bfa" stroke-width="3" opacity=".7"/>
            <circle cx="52" cy="83" r="4" fill="#67e8f9"/>
            <circle cx="72" cy="67" r="2" fill="#a78bfa"/>
            <circle cx="228" cy="73" r="3" fill="#67e8f9"/>
            <path d="M35 300H405" stroke="#67e8f9" opacity=".4"/>
        </svg>`
    }
];

const formulario = document.getElementById("testeAura");
const telaFormulario = document.getElementById("formulario");
const telaResultado = document.getElementById("resultado");
const campoNome = document.getElementById("nome");
const campoNascimento = document.getElementById("nascimento");
const mensagemEmpate = document.getElementById("mensagemEmpate");

// Define a data máxima permitida no campo de nascimento.
function obterDataLocal() {
    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

campoNascimento.max = obterDataLocal();

// Calcula a idade considerando se o aniversário já ocorreu.
function calcularIdade(dataNascimento) {
    const [ano, mes, dia] = dataNascimento.split("-").map(Number);
    const hoje = new Date();

    let idade = hoje.getFullYear() - ano;

    const aniversarioAindaNaoOcorreu =
        hoje.getMonth() < mes - 1 ||
        (
            hoje.getMonth() === mes - 1 &&
            hoje.getDate() < dia
        );

    if (aniversarioAindaNaoOcorreu) {
        idade--;
    }

    return idade;
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const nascimento = campoNascimento.value;
    const dataMaxima = obterDataLocal();

    if (!nome || !nascimento) {
        alert("Preencha seu nome e sua data de nascimento.");
        return;
    }

    if (nascimento > dataMaxima) {
        alert("A data de nascimento não pode ser futura.");
        return;
    }

    const [ano, mes, dia] = nascimento.split("-").map(Number);
    const dataValida = new Date(ano, mes - 1, dia);

    if (
        dataValida.getFullYear() !== ano ||
        dataValida.getMonth() !== mes - 1 ||
        dataValida.getDate() !== dia
    ) {
        alert("Informe uma data de nascimento válida.");
        return;
    }

    const idade = calcularIdade(nascimento);

    // Cada resposta soma um ponto ao perfil escolhido.
    const pontuacao = [0, 0, 0, 0];

    for (let i = 1; i <= 4; i++) {
        const resposta = formulario.querySelector(
            `input[name="p${i}"]:checked`
        );

        if (!resposta) {
            alert("Responda às quatro perguntas antes de continuar.");
            return;
        }

        pontuacao[Number(resposta.value) - 1]++;
    }

    const maiorPontuacao = Math.max(...pontuacao);

    // Busca no array todos os perfis que atingiram a maior pontuação.
    const perfisVencedores = perfis.filter(
        (perfil, indice) => pontuacao[indice] === maiorPontuacao
    );

    const houveEmpate = perfisVencedores.length > 1;
    const perfilEscolhido = perfisVencedores[0];

    // Preenche a tela com os dados do participante.
    document.getElementById("saudacao").textContent =
        `Missão analisada, ${nome}!`;

    document.getElementById("dadosPessoa").textContent =
        `Explorador(a): ${nome} • Idade: ${idade} anos`;

    document.getElementById("categoriaPerfil").textContent =
        `CATEGORIA: ${perfilEscolhido.categoria}`;

    document.getElementById("nomePerfil").textContent =
        perfilEscolhido.nome;

    document.getElementById("descricaoPerfil").textContent =
        perfilEscolhido.descricao;

    document.getElementById("recomendacaoPerfil").textContent =
        perfilEscolhido.recomendacao;

    // Insere o SVG do perfil diretamente no HTML.
    const imagemPerfil = document.getElementById("imagemPerfil");
    imagemPerfil.innerHTML = perfilEscolhido.imagem;

    if (houveEmpate) {
        const nomesEmpatados = perfisVencedores
            .map(perfil => perfil.nome)
            .join(", ");

        mensagemEmpate.textContent =
            `Perfil híbrido! Você empatou entre: ${nomesEmpatados}. ` +
            "A primeira especialidade é exibida acima, mas você pode combinar as habilidades dos perfis empatados.";

        mensagemEmpate.hidden = false;
    } else {
        mensagemEmpate.textContent = "";
        mensagemEmpate.hidden = true;
    }

    telaFormulario.hidden = true;
    telaResultado.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.getElementById("refazer").addEventListener("click", function() {
    // Guarda o nome e a data já informados.
    const nomeAnterior = campoNome.value;
    const nascimentoAnterior = campoNascimento.value;

    // Limpa as respostas das quatro perguntas.
    formulario.reset();

    // Mantém os dados pessoais anteriores.
    campoNome.value = nomeAnterior;
    campoNascimento.value = nascimentoAnterior;

    campoNascimento.max = obterDataLocal();

    // Volta para o formulário.
    telaResultado.hidden = true;
    telaFormulario.hidden = false;

    mensagemEmpate.textContent = "";
    mensagemEmpate.hidden = true;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const listaNomes = document.getElementById("nomesSalvos");

// Recupera os nomes salvos neste navegador
let nomesSalvos = JSON.parse(
    localStorage.getItem("nomesMissaoAura") || "[]"
);

// Mostra os nomes como sugestões
function atualizarSugestoes() {
    listaNomes.innerHTML = "";

    nomesSalvos.forEach(function(nome) {
        const opcao = document.createElement("option");
        opcao.value = nome;
        listaNomes.appendChild(opcao);
    });
}

// Salva o nome quando o formulário é enviado
document.getElementById("formulario").addEventListener("submit", function() {
    const nome = campoNome.value.trim();

    if (nome && !nomesSalvos.some(
        salvo => salvo.toLowerCase() === nome.toLowerCase()
    )) {
        nomesSalvos.push(nome);

        // Mantém apenas os 10 nomes mais recentes
        nomesSalvos = nomesSalvos.slice(-10);

        localStorage.setItem(
            "nomesMissaoAura",
            JSON.stringify(nomesSalvos)
        );

        atualizarSugestoes();
    }
});

atualizarSugestoes();

const listanomes = document.getElementById("nomesSalvos");

let nomessalvos = JSON.parse(
    localStorage.getItem("nomesMissaoAura") || "[]"
);

function atualizarSugestoes() {
    if (!listaNomes) return;

    listaNomes.innerHTML = "";

    nomesSalvos.forEach(function(nome) {
        const opcao = document.createElement("option");
        opcao.value = nome;
        listaNomes.appendChild(opcao);
    });
}

campoNome.addEventListener("change", function() {
    const nome = campoNome.value.trim();

    if (!nome) return;

    const jaExiste = nomesSalvos.some(function(nomeSalvo) {
        return nomeSalvo.toLowerCase() === nome.toLowerCase();
    });

    if (!jaExiste) {
        nomesSalvos.push(nome);
        nomesSalvos = nomesSalvos.slice(-10);

        localStorage.setItem(
            "nomesMissaoAura",
            JSON.stringify(nomesSalvos)
        );

        atualizarSugestoes();
    }
});

atualizarSugestoes();
