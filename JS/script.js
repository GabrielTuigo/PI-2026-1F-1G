var regioes = [
  {
    id: "cabeca",
    nome: "Cabeça",
    gravidade: "alta",
    pontos: [{ top: 10, left: 50 }],
    lesoes: [
      "Concussão e outros traumas cranianos",
      "Cefaleia associada à hipertensão",
      "Alterações de humor e agressividade"
    ],
    relacao: "Estimulantes reduzem a percepção de risco e aumentam a exposição a impactos na cabeça. Esteroides anabolizantes alteram o equilíbrio hormonal e favorecem irritabilidade e agressividade, a chamada \"fúria dos esteroides\"."
  },
  {
    id: "ombros",
    nome: "Ombros",
    gravidade: "alta",
    pontos: [{ top: 24, left: 26 }, { top: 24, left: 74 }],
    lesoes: [
      "Tendinite do manguito rotador",
      "Luxação do ombro",
      "Ruptura do supraespinhoso"
    ],
    relacao: "Esteroides aceleram o ganho de força muscular em semanas, enquanto tendões e ligamentos precisam de meses para se adaptar. O manguito rotador é um dos primeiros a sobrecarregar."
  },
  {
    id: "cotovelos",
    nome: "Cotovelos",
    gravidade: "media",
    pontos: [{ top: 35, left: 25 }, { top: 35, left: 75 }],
    lesoes: [
      "Epicondilite lateral (cotovelo de tenista)",
      "Epicondilite medial (cotovelo de golfista)",
      "Tendinite do bíceps"
    ],
    relacao: "Analgésicos e anti-inflamatórios usados por conta própria mascaram a dor que normalmente interromperia o treino, permitindo que a sobrecarga no cotovelo continue e se agrave."
  },
  {
    id: "punhos-maos",
    nome: "Punhos e mãos",
    gravidade: "media",
    pontos: [{ top: 55, left: 20 }, { top: 55, left: 80 }],
    lesoes: [
      "Síndrome do túnel do carpo",
      "Tendinite dos flexores e extensores",
      "Fraturas por estresse"
    ],
    relacao: "O hormônio do crescimento provoca crescimento desproporcional de ossos e cartilagens (acromegalia), comprimindo o nervo mediano e favorecendo a síndrome do túnel do carpo."
  },
  {
    id: "torax",
    nome: "Tórax",
    gravidade: "alta",
    pontos: [{ top: 30, left: 50 }],
    lesoes: [
      "Ginecomastia (crescimento das mamas)",
      "Hipertrofia do ventrículo esquerdo",
      "Dor torácica e arritmias"
    ],
    relacao: "Esteroides anabolizantes alteram o equilíbrio entre testosterona e estrogênio, causando ginecomastia. EPO deixa o sangue mais viscoso, forçando o coração a trabalhar contra maior resistência."
  },
  {
    id: "abdomen",
    nome: "Abdômen",
    gravidade: "alta",
    pontos: [{ top: 43, left: 50 }],
    lesoes: [
      "Alterações e lesões hepáticas",
      "Hérnias por esforço",
      "Distensão da parede abdominal"
    ],
    relacao: "Esteroides anabolizantes orais passam pelo fígado e são hepatotóxicos, podendo causar desde alterações nas enzimas hepáticas até lesões mais graves do órgão."
  },
  {
    id: "quadril",
    nome: "Quadril",
    gravidade: "media",
    pontos: [{ top: 57, left: 50 }],
    lesoes: [
      "Tendinite do psoas",
      "Bursite trocantérica",
      "Impacto femoroacetabular"
    ],
    relacao: "Corticosteroides usados por conta própria enfraquecem o colágeno dos tendões e reduzem a densidade óssea da região, favorecendo lesões por sobrecarga no quadril."
  },
  {
    id: "coluna",
    nome: "Coluna",
    gravidade: "alta",
    pontos: [{ top: 38, left: 55 }],
    lesoes: [
      "Hérnia de disco",
      "Espondilólise",
      "Dor lombar crônica"
    ],
    relacao: "O ganho rápido de massa muscular não é acompanhado pelo fortalecimento da coluna na mesma velocidade. Analgésicos mascaram os sinais de alerta que indicariam sobrecarga na região."
  },
  {
    id: "joelhos",
    nome: "Joelhos",
    gravidade: "alta",
    pontos: [{ top: 68, left: 37 }, { top: 68, left: 63 }],
    lesoes: [
      "Lesão do ligamento cruzado anterior (LCA)",
      "Lesão de menisco",
      "Condromalácia patelar"
    ],
    relacao: "Um dos pontos mais afetados: cartilagem e ligamentos têm pouca vascularização e não acompanham o ritmo do ganho de força muscular induzido por esteroides."
  },
  {
    id: "tornozelos-pes",
    nome: "Tornozelos e pés",
    gravidade: "media",
    pontos: [{ top: 90, left: 37 }, { top: 90, left: 63 }],
    lesoes: [
      "Entorse de tornozelo",
      "Tendinite do calcâneo (Aquiles)",
      "Fascite plantar"
    ],
    relacao: "O aumento de carga e velocidade de treino sem adaptação do tendão de Aquiles eleva o risco de ruptura. Diuréticos causam desidratação, que reduz a proteção articular e muscular."
  }
];

var rotuloSelo = { alta: "Gravidade alta", media: "Gravidade média", baixa: "Gravidade baixa" };

var figuraCorpo = document.getElementById('figuraCorpo');
var listaRegioes = document.getElementById('listaRegioes');
var infoVazio = document.getElementById('infoVazio');
var infoConteudo = document.getElementById('infoConteudo');
var infoTitulo = document.getElementById('infoTitulo');
var infoSelo = document.getElementById('infoSelo');
var infoLesoes = document.getElementById('infoLesoes');
var infoRelacao = document.getElementById('infoRelacao');

regioes.forEach(function (regiao) {
  regiao.pontos.forEach(function (ponto) {
    var ponto_el = document.createElement('button');
    ponto_el.type = 'button';
    ponto_el.className = 'ponto-interativo';
    ponto_el.style.top = ponto.top + '%';
    ponto_el.style.left = ponto.left + '%';
    ponto_el.dataset.regiao = regiao.id;
    ponto_el.setAttribute('aria-label', 'Ver lesões: ' + regiao.nome);
    ponto_el.addEventListener('click', function () { selecionar(regiao.id); });
    figuraCorpo.appendChild(ponto_el);
  });

  var item = document.createElement('button');
  item.type = 'button';
  item.className = 'regiao-botao';
  item.dataset.regiao = regiao.id;
  item.innerHTML = '<span class="ponto"></span>' + regiao.nome;
  item.addEventListener('click', function () { selecionar(regiao.id); });
  listaRegioes.appendChild(item);
});

function selecionar(id) {
  var regiao = regioes.filter(function (r) { return r.id === id; })[0];
  if (!regiao) return;

  document.querySelectorAll('.ponto-interativo').forEach(function (el) {
    el.classList.toggle('ativo', el.dataset.regiao === id);
  });
  document.querySelectorAll('.regiao-botao').forEach(function (el) {
    el.classList.toggle('ativo', el.dataset.regiao === id);
  });

  infoVazio.classList.add('oculto');
  infoConteudo.classList.remove('oculto');
  infoTitulo.textContent = regiao.nome;
  infoSelo.className = 'selo selo-' + regiao.gravidade;
  infoSelo.innerHTML = '<span class="selo-cartao"></span>' + rotuloSelo[regiao.gravidade];
  infoLesoes.innerHTML = regiao.lesoes.map(function (l) { return '<li>' + l + '</li>'; }).join('');
  infoRelacao.textContent = regiao.relacao;
}
