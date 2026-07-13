const ADDRESS = "Rua Professora Eroltides da Silva Fontes, 1500 - esquina com Rua Joaçaba, Itajaí - SC";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);
const MAPS_EMBED_URL = "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";
const WHATSAPP_NUMBER = "5547997191415";
const WIFI_NAME = "AIRBNB5";
const WIFI_PASS = "Apartamento.05";
const WIFI_NAME2 = "Airbnb06";
const WIFI_PASS2 = "Apartamento.06";

function placeGrid(items) {
  return `<div class="place-grid">` + items.map(it => `
    <div class="place-card">
      <img src="${it.img}" alt="${it.name}" loading="lazy">
      <span>${it.name}</span>
    </div>
  `).join("") + `</div>`;
}

const icons = {
  home: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3Z"/></svg>',
  key: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M14 2a6 6 0 0 0-5.65 8.03L2 16.36V20h3.64l1.2-1.2h2v-2h2v-2h1.36l.99-.99A6 6 0 1 0 14 2Zm1.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 20a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 12 20Zm-6.36-5.64a9 9 0 0 1 12.72 0l-1.77 1.77a6.5 6.5 0 0 0-9.18 0Zm-3.18-3.18a13.5 13.5 0 0 1 19.08 0l-1.77 1.77a11 11 0 0 0-15.54 0Z"/></svg>',
  rules: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M7 2h8l4 4v16H7Zm7 1.5V7h3.5ZM9 12h8v1.5H9Zm0 3.5h8V17H9ZM9 8.5h4V10H9Z"/></svg>',
  car: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M5 11 6.5 6.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h1a1 1 0 0 1 1 1v5h-2v2h-3v-2H8v2H5v-2H3v-5a1 1 0 0 1 1-1Zm2.1-.5h9.8L16 7H8ZM6.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>',
  tools: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="m21 7-4 4-2-2 4-4a5 5 0 0 0-6.8 6.8L4 20l3 3 8.2-8.2A5 5 0 0 0 21 7Z"/></svg>',
  play: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M8 5v14l11-7Z"/></svg>',
  info: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M11 10h2v7h-2Zm0-3h2v2h-2ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/></svg>',
  glass: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6 3h12l-1.5 9.5A4.5 4.5 0 0 1 13 16.4V20h3v2H8v-2h3v-3.6a4.5 4.5 0 0 1-3.5-3.9Z"/></svg>',
  food: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M8 2v8a2 2 0 0 1-2 2v10H4V12a2 2 0 0 1-2-2V2h1.5v6H5V2h1.5v6H8V2ZM17 2c-2.2 0-4 2.7-4 6s1.8 6 4 6v8h2V2Z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M7 4h14l-1.5 9H8.4L7 4Zm0 0L6.4 2H3v2h2l3.6 15h11v-2H10L9.4 15h9.4l2-9H7.2Zm.8 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1Z"/></svg>',
  church: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M13 1h-2v2H9v2h2v1.5L4 11v11h6v-6h4v6h6V11l-7-4.5V5h2V3h-2V1Zm-1 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg>'
};

const pages = {
  bemvindo: {
    title: "Bem-vindo",
    icon: "home",
    photo: "assets/bemvindo.jpg",
    html: `
      <div class="card">
        <p>Seja muito bem-vindo ao <strong>Predio Lunet</strong>! Ficamos felizes em receber voce no Apartamento <strong>Airbnb5</strong>.</p>
        <p>Este guia reune tudo o que voce precisa durante a estadia: acesso ao apartamento, wi-fi, regras da casa, dicas de passeios, restaurantes e muito mais. Basta navegar pelos icones no menu principal.</p>
        <p>Qualquer duvida, estamos a um clique de distancia no botao de contato. Boa estadia! 🌿</p>
      </div>
    `
  },
  checkin: {
    title: "Check-in",
    icon: "key",
    photo: "assets/checkin-hero-mobile.jpg",
    html: `
      <div class="card">
        <h3>Horarios</h3>
        <ul>
          <li><strong>Check-in:</strong> das 15h00 as 22h00</li>
          <li><strong>Check-out:</strong> ate as 11h00</li>
        </ul>
        <p class="note">Chegou fora desse horario? Avise pelo WhatsApp com antecedencia para combinarmos o acesso.</p>
      </div>
    `
  },
  localizacao: {
    title: "Localização",
    icon: "pin",
    html: `
      <div class="card">
        <h3>Endereço</h3>
        <p>${ADDRESS}</p>
        <a class="btn-link" href="${MAPS_URL}" target="_blank" rel="noopener">📍 Abrir no Google Maps</a>
      </div>
      <div class="card map-card">
        <iframe class="map-embed" src="${MAPS_EMBED_URL}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa da localização"></iframe>
      </div>
      <div class="card">
        <h3>Estacionamento</h3>
        <p>Ha estacionamento disponivel em frente ao predio.</p>
      </div>
    `
  },
  wifi: {
    title: "Wi-Fi",
    icon: "wifi",
    html: `
      <h3>Apartamento Airbnb5</h3>
      <div class="card wifi-box">
        <div class="info">
          <span class="label">Rede</span>
          <span class="value">${WIFI_NAME}</span>
        </div>
        <button class="copy-btn" data-copy="${WIFI_NAME}">Copiar</button>
      </div>
      <div class="card wifi-box">
        <div class="info">
          <span class="label">Senha</span>
          <span class="value">${WIFI_PASS}</span>
        </div>
        <button class="copy-btn" data-copy="${WIFI_PASS}">Copiar</button>
      </div>

      <h3>Apartamento Airbnb06</h3>
      <div class="card wifi-box">
        <div class="info">
          <span class="label">Rede</span>
          <span class="value">${WIFI_NAME2}</span>
        </div>
        <button class="copy-btn" data-copy="${WIFI_NAME2}">Copiar</button>
      </div>
      <div class="card wifi-box">
        <div class="info">
          <span class="label">Senha</span>
          <span class="value">${WIFI_PASS2}</span>
        </div>
        <button class="copy-btn" data-copy="${WIFI_PASS2}">Copiar</button>
      </div>
    `
  },
  regras: {
    title: "Regras",
    icon: "rules",
    html: `
      <div class="card">
        <h3>Regras da casa</h3>
        <ul>
          <li>Silencio das 22h as 8h — sem festas, baderna ou gritaria</li>
          <li>Proibido fumar ou usar substancias ilicitas no imovel</li>
          <li>Numero maximo de hospedes conforme reserva; visitantes so com autorizacao previa</li>
          <li>Criancas sempre sob supervisao dos responsaveis</li>
          <li>Cuide da casa: nao mova moveis e nao jogue objetos no vaso sanitario</li>
          <li>Alimentos e bebidas apenas fora dos quartos; lave a louca antes de sair</li>
          <li>Desligue luzes, ar-condicionado e eletronicos, feche portas e janelas ao sair</li>
          <li>Tire o lixo e nao deixe acumular dentro do apartamento</li>
          <li>Informe imediatamente qualquer dano, problema ou atraso no check-in/check-out</li>
          <li>Respeite vizinhos e areas comuns, e economize agua durante a estadia</li>
        </ul>
      </div>
    `
  },
  transportes: {
    title: "Transportes",
    icon: "car",
    html: `
      <div class="card">
        <h3>Estacionamento</h3>
        <p>Vaga disponivel em frente ao predio.</p>
      </div>
      <div class="card">
        <h3>Apps de transporte</h3>
        <p>Uber e 99 funcionam bem na regiao, e uma otima opcao para se deslocar sem preocupacao.</p>
      </div>
      <div class="card">
        <h3>A pe</h3>
        <p>O centro de Itajai e o bairro Sao Vicente ficam a poucos minutos a pe, com facil acesso a comercio e restaurantes.</p>
        <p class="note">Sugestao do anfitriao — sinta-se a vontade para pedir mais detalhes pelo contato.</p>
      </div>
    `
  },
  equipamento: {
    title: "Equipamento",
    icon: "tools",
    html: `
      <div class="card">
        <h3>O apartamento conta com</h3>
        <ul>
          <li>Air fryer</li>
          <li>Cafeteira</li>
          <li>Sanduicheira</li>
          <li>Chaleira eletrica</li>
          <li>Secador de cabelo</li>
          <li>Aquecedor</li>
          <li>Ar-condicionado</li>
          <li>TV</li>
          <li>Geladeira</li>
        </ul>
        <p class="note">Precisa de ajuda para usar algum equipamento? Fale com a gente pelo WhatsApp.</p>
      </div>
    `
  },
  atividades: {
    title: "Atividades",
    icon: "play",
    html: `
      <div class="card">
        <h3>O que fazer por perto</h3>
        ${placeGrid([
          {img:"assets/photos/praia-atalaia.jpg", name:"Praia da Atalaia"},
          {img:"assets/photos/bico-papagaio.jpg", name:"Bico do Papagaio"},
          {img:"assets/photos/marejada.jpg", name:"Marejada"},
          {img:"assets/photos/porto-itajai.jpg", name:"Porto de Itajaí"},
          {img:"assets/photos/igreja-matriz.jpg", name:"Igreja Matriz"},
          {img:"assets/photos/museu.jpg", name:"Museu"},
          {img:"assets/photos/estadio.jpg", name:"Estádio Marcílio Dias"}
        ])}
      </div>
    `
  },
  informacao: {
    title: "Informação",
    icon: "info",
    html: `
      <div class="card">
        <h3>Resumo rapido</h3>
        <ul>
          <li>Check-in: 15h - 22h | Check-out: ate 11h</li>
          <li>Wi-Fi: ${WIFI_NAME} / ${WIFI_PASS}</li>
          <li>Estacionamento em frente ao predio</li>
          <li>Duvidas ou emergencias: use o contato do host</li>
        </ul>
      </div>
    `
  },
  bares: {
    title: "Bares e Clubes",
    icon: "glass",
    html: `
      <div class="card">
        <h3>Vida noturna</h3>
        <p>Itajai e regiao contam com opcoes de bares e casas noturnas, especialmente na epoca da Marejada.</p>
        <p class="note">Sugestao do anfitriao — peca recomendacoes atualizadas pelo contato para o dia da sua visita.</p>
      </div>
    `
  },
  igreja: {
    title: "Igreja Evangélica",
    icon: "church",
    html: `
      <div class="card">
        <h3>Igrejas próximas</h3>
        ${placeGrid([
          {img:"assets/photos/igreja-mevam.jpg", name:"Igreja Mevam"},
          {img:"assets/photos/igreja-assembleia.jpg", name:"Igreja Assembleia de Deus"}
        ])}
      </div>
    `
  },
  restaurantes: {
    title: "Restaurantes",
    icon: "food",
    html: `
      <div class="card">
        <h3>Recomendados</h3>
        ${placeGrid([
          {img:"assets/photos/vovo-zena.jpg", name:"Restaurante e Pizzaria Vovó Zena"},
          {img:"assets/photos/dom-camilo.jpg", name:"Pizzaria Dom Camilo"},
          {img:"assets/photos/varandao.jpg", name:"Varandão"},
          {img:"assets/photos/mottas.jpg", name:"Pizzaria Mottas"},
          {img:"assets/photos/jumbo.jpg", name:"Hamburgueria Jumbo"},
          {img:"assets/photos/xburguinho.jpg", name:"XBurguinho"}
        ])}
        <p class="note">Ha tambem diversas outras opcoes no bairro Sao Vicente, bem pertinho.</p>
      </div>
    `
  },
  compras: {
    title: "Compras",
    icon: "cart",
    html: `
      <div class="card">
        <h3>Mercados e lojas</h3>
        ${placeGrid([
          {img:"assets/photos/uber.jpg", name:"Supermercado Uber"},
          {img:"assets/photos/cinthya.jpg", name:"Padaria Cinthya"},
          {img:"assets/photos/loja-lunet-fachada.jpg", name:"Loja Lunet"},
          {img:"assets/photos/mercado-copa.jpg", name:"Mercado Copa"},
          {img:"assets/photos/itajai-shopping.jpg", name:"Itajaí Shopping"},
          {img:"assets/photos/passeio-sao-vicente.jpg", name:"Passeio São Vicente"},
          {img:"assets/photos/compre-fort.jpg", name:"Mercado Compre Fort"}
        ])}
      </div>
    `
  },
  contato: {
    title: "Contato",
    icon: "phone",
    html: `
      <div class="card">
        <h3>Precisa de algo?</h3>
        <p>Fale diretamente com o anfitriao pelo WhatsApp, estamos por aqui para ajudar durante toda a sua estadia.</p>
        <a class="contact-btn" id="contact-whatsapp" target="_blank" rel="noopener">
          ${icons.phone} Chamar no WhatsApp
        </a>
      </div>
    `
  }
};

const menuOrder = ["bemvindo","checkin","localizacao","wifi","regras","transportes","equipamento","atividades","informacao","bares","igreja","restaurantes","compras","contato"];

const grid = document.getElementById("menu-grid");
menuOrder.forEach(key => {
  const p = pages[key];
  const btn = document.createElement("button");
  btn.className = "menu-item";
  btn.innerHTML = `<div class="icon-wrap">${icons[p.icon]}</div><span>${p.title}</span>`;
  btn.addEventListener("click", () => openPage(key));
  grid.appendChild(btn);
});

document.getElementById("whatsapp-link").href = `https://wa.me/${WHATSAPP_NUMBER}`;

const viewHome = document.getElementById("view-home");
const viewPage = document.getElementById("view-page");
const pageTitle = document.getElementById("page-title");
const pageContent = document.getElementById("page-content");

function openPage(key) {
  const p = pages[key];
  pageTitle.textContent = p.title;
  const photoHtml = p.photo
    ? `<div class="page-photo"><img src="${p.photo}" alt="${p.title}"></div>`
    : "";
  pageContent.innerHTML = photoHtml + p.html;

  const wa = document.getElementById("contact-whatsapp");
  if (wa) wa.href = `https://wa.me/${WHATSAPP_NUMBER}`;

  pageContent.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(btn.dataset.copy).then(() => {
        btn.textContent = "Copiado!";
        btn.classList.add("copied");
        setTimeout(() => { btn.textContent = "Copiar"; btn.classList.remove("copied"); }, 1500);
      });
    });
  });

  viewHome.dataset.active = "false";
  viewPage.dataset.active = "true";
  window.scrollTo(0, 0);
}

document.getElementById("back-btn").addEventListener("click", () => {
  viewPage.dataset.active = "false";
  viewHome.dataset.active = "true";
});
