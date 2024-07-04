const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Os desafios demográficos enfrentados pelo mundo contemporâneo são profundamente influenciados pela interação complexa entre taxa de natalidade e crescimento populacional. Enquanto algumas regiões experimentam um boom populacional explosivo, outras enfrentam um declínio preocupante na taxa de natalidade. Essas disparidades demográficas não apenas moldam o perfil etário de uma sociedade, mas também têm repercussões significativas em diversos aspectos socioeconômicos e ambientais.",
        alternativas: [
            {
                texto: "Como as taxas de natalidade impactam de maneira distinta os desafios demográficos e socioeconômicos entre economias desenvolvidas e em desenvolvimento?",
                afirmacao: "Em resumo, o desafio do equilíbrio entre taxa de natalidade e crescimento populacional é uma questão complexa e crucial para o futuro global. "
            },
        ]
    },
    {
        enunciado: "Economias desenvolvidas enfrentam o desafio do envelhecimento populacional devido à baixa taxa de natalidade, pressionando sistemas de saúde e previdência social. Em contraste, em países em desenvolvimento, altas taxas de natalidade exacerbam a pressão sobre infraestruturas, educação e recursos naturais, comprometendo a sustentabilidade ambiental.",
        alternativas: [
            {
                texto: "Como a disparidade na taxa de natalidade contribui para movimentos populacionais, segurança alimentar e desafios ambientais globais?",
                afirmacao: "Para enfrentá-lo eficazmente, é imperativo que adotemos uma abordagem colaborativa e holística, "
            },

        ]
    },
    {
        enunciado: "Em um contexto global, a disparidade na taxa de natalidade não apenas cria desafios internos para os países, mas também tem implicações para questões globais como migração, segurança alimentar e mudança climática. Movimentos populacionais significativos podem surgir como resultado de desequilíbrios demográficos, enquanto o consumo de recursos naturais por uma população crescente pode acelerar os desafios ambientais já existentes. Para enfrentar esses desafios demográficos complexos, políticas públicas adaptativas são essenciais. Isso pode incluir desde incentivos para aumentar a taxa de natalidade em países com baixas taxas até estratégias de planejamento familiar e educação sexual em áreas com altas taxas de natalidade. Além disso, investimentos em infraestrutura, educação e desenvolvimento sustentável são fundamentais para garantir que as sociedades possam prosperar enquanto enfrentam os desafios de um mundo em mudança demográfica.",
        alternativas: [
            {
                texto: "Como podemos colaborar globalmente para enfrentar o desafio crítico do equilíbrio entre taxa de natalidade e crescimento populacional, adotando uma abordagem holística que promova soluções sustentáveis e equitativas para o futuro?",
                afirmacao: "reconhecendo a diversidade das dinâmicas populacionais ao redor do mundo. Somente através de políticas públicas adaptativas, investimentos em educação, infraestrutura e desenvolvimento sustentável,"
            },

        ]
    },
    {
        enunciado: "O equilíbrio delicado entre taxa de natalidade e crescimento populacional continua a ser um dos desafios demográficos mais prementes de nosso tempo. Como sociedade global, enfrentar esses desafios requer uma abordagem holística e colaborativa que reconheça a complexidade das dinâmicas populacionais e busque soluções sustentáveis e equitativas para o futuro.",
        alternativas: [
            {
                texto: "Entendi!",
                afirmacao: "podemos aspirar a um futuro onde todas as sociedades possam prosperar de maneira equitativa e sustentável, respeitando os limites dos recursos naturais do nosso planeta."
            },

        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Conclusão";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();