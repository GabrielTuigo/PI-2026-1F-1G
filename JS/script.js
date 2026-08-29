var regioes = [
  {
    id: "cabeca",
    nome: "Cabeça",
    gravidade: "alta",
    pontos: [{ top: 7.5, left: 54.5 }],
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
    pontos: [{ top: 20, left: 38 }, { top: 19.5, left: 69 }],
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
    pontos: [{ top: 40.5, left: 30 }, { top: 39.5, left: 76 }],
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
    pontos: [{ top: 53.5, left: 29.5 }, { top: 52, left: 78 }],
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
    pontos: [{ top: 25, left: 54 }],
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
    pontos: [{ top: 35.5, left: 53 }],
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
    pontos: [{ top: 44, left: 52 }],
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
    pontos: [{ top: 42, left: 64 }],
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
    pontos: [{ top: 80, left: 45 }, { top: 78.5, left: 63 }],
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
    pontos: [{ top: 93.5, left: 42.5 }, { top: 92, left: 65 }],
    lesoes: [
      "Entorse de tornozelo",
      "Tendinite do calcâneo (Aquiles)",
      "Fascite plantar"
    ],
    relacao: "O aumento de carga e velocidade de treino sem adaptação do tendão de Aquiles eleva o risco de ruptura. Diuréticos causam desidratação, que reduz a proteção articular e muscular."
  }
];

var badgeLabel = { alta: "Gravidade alta", media: "Gravidade média", baixa: "Gravidade baixa" };

var figureWrap = document.getElementById('figureWrap');
var regionList = document.getElementById('regionList');
var infoEmpty = document.getElementById('infoEmpty');
var infoContent = document.getElementById('infoContent');
var infoTitle = document.getElementById('infoTitle');
var infoBadge = document.getElementById('infoBadge');
var infoLesoes = document.getElementById('infoLesoes');
var infoRelacao = document.getElementById('infoRelacao');

regioes.forEach(function (regiao) {
  regiao.pontos.forEach(function (ponto) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'hotspot';
    dot.style.top = ponto.top + '%';
    dot.style.left = ponto.left + '%';
    dot.dataset.region = regiao.id;
    dot.setAttribute('aria-label', 'Ver lesões: ' + regiao.nome);
    dot.addEventListener('click', function () { selecionar(regiao.id); });
    figureWrap.appendChild(dot);
  });

  var item = document.createElement('button');
  item.type = 'button';
  item.className = 'region-btn';
  item.dataset.region = regiao.id;
  item.innerHTML = '<span class="dot"></span>' + regiao.nome;
  item.addEventListener('click', function () { selecionar(regiao.id); });
  regionList.appendChild(item);
});

function selecionar(id) {
  var regiao = regioes.filter(function (r) { return r.id === id; })[0];
  if (!regiao) return;

  document.querySelectorAll('.hotspot').forEach(function (el) {
    el.classList.toggle('active', el.dataset.region === id);
  });
  document.querySelectorAll('.region-btn').forEach(function (el) {
    el.classList.toggle('active', el.dataset.region === id);
  });

  infoEmpty.classList.add('is-hidden');
  infoContent.classList.remove('is-hidden');
  infoTitle.textContent = regiao.nome;
  infoBadge.className = 'badge badge-' + regiao.gravidade;
  infoBadge.innerHTML = '<span class="dot"></span>' + badgeLabel[regiao.gravidade];
  infoLesoes.innerHTML = regiao.lesoes.map(function (l) { return '<li>' + l + '</li>'; }).join('');
  infoRelacao.textContent = regiao.relacao;
}
