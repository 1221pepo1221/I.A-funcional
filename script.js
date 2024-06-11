const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaAlternativa = document.querySelector(".caixa-alternativas");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas= [
    {
    enunciado: "qual e a importancia do multicuturismo na sociedade canadense?";
    alternativas:[ "Promove a coexistência harmoniosa de diferentes culturas e é oficialmente reconhecido pelo governo ", "È uma prática recente e ainda não amplamente aceita na sociedade canadense"
    ]
    },
    {
    enunciado: "quais as duas linguas oficiais do canada?";
    alternativas:[ "ingles e espanhol", "ingles e frances"
    ]
    },
    {
    enunciado: "o que e o fesfival de calgary stampede?";
    alternativas:[ "Um festival de cinema realizado anualmente em Toronto.", "Um gfestival anual em Calgary que celebra a herança ocidental do Canadá com rodeios e exposições."
    ]
    },
    {
    enunciado: "a cultura indigena influencia a indentidade do canada?";
    alternativas:[ "sim.", "não."
    ]
    },
    {
    enunciado: "o que e comemorado no dia do canada";
    alternativas:[ "A data da confederação do país em 1867, celebrada com paradas, fogos de artifício e eventos comunitários.", "O fim do inverno, marcado por festividades ao ar livre e esportes de inverno."
    ]
    }
];