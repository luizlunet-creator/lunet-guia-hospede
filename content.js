// Todo o conteudo editavel do site vive aqui.
// O painel "Editar" le e modifica este objeto, e pode exportar uma copia atualizada deste arquivo.
const SITE_CONTENT = {
  property: {
    name: "Predio Lunet",
    unit: "Apartamento Airbnb5",
    address: "Rua Professora Eroltides da Silva Fontes, 1500 - esquina com Rua Joaçaba, Itajaí - SC",
    whatsapp: "5547997191415",
    editPassword: "lunet2026",
    wifiNetworks: [
      { label: "Apartamento Airbnb5", network: "AIRBNB5", password: "Apartamento.05" },
      { label: "Apartamento Airbnb06", network: "Airbnb06", password: "Apartamento.06" }
    ]
  },

  menuOrder: ["bemvindo","checkin","localizacao","wifi","regras","transportes","equipamento","atividades","informacao","bares","igreja","restaurantes","compras","contato"],

  pages: {
    bemvindo: {
      title: "Bem-vindo",
      icon: "home",
      photos: ["assets/bemvindo.jpg"],
      blocks: [
        { type: "text", text: "Seja muito bem-vindo ao <strong>Predio Lunet</strong>! Ficamos felizes em receber voce no Apartamento <strong>Airbnb5</strong>." },
        { type: "text", text: "Este guia reune tudo o que voce precisa durante a estadia: acesso ao apartamento, wi-fi, regras da casa, dicas de passeios, restaurantes e muito mais. Basta navegar pelos icones no menu principal." },
        { type: "text", text: "Qualquer duvida, estamos a um clique de distancia no botao de contato. Boa estadia! 🌿" }
      ]
    },
    checkin: {
      title: "Check-in",
      icon: "key",
      photos: ["assets/checkin-hero-mobile.jpg"],
      blocks: [
        { type: "list", heading: "Horarios", items: ["<strong>Check-in:</strong> das 15h00 as 22h00", "<strong>Check-out:</strong> ate as 11h00"] },
        { type: "text", muted: true, text: "Chegou fora desse horario? Avise pelo WhatsApp com antecedencia para combinarmos o acesso." }
      ]
    },
    localizacao: {
      title: "Localização",
      icon: "pin",
      special: "localizacao",
      blocks: [
        { type: "text", heading: "Estacionamento", text: "Ha estacionamento disponivel em frente ao predio." }
      ]
    },
    wifi: {
      title: "Wi-Fi",
      icon: "wifi",
      special: "wifi",
      blocks: []
    },
    regras: {
      title: "Regras",
      icon: "rules",
      blocks: [
        { type: "list", heading: "Regras da casa", items: [
          "Silencio das 22h as 8h — sem festas, baderna ou gritaria",
          "Proibido fumar ou usar substancias ilicitas no imovel",
          "Numero maximo de hospedes conforme reserva; visitantes so com autorizacao previa",
          "Criancas sempre sob supervisao dos responsaveis",
          "Cuide da casa: nao mova moveis e nao jogue objetos no vaso sanitario",
          "Alimentos e bebidas apenas fora dos quartos; lave a louca antes de sair",
          "Desligue luzes, ar-condicionado e eletronicos, feche portas e janelas ao sair",
          "Tire o lixo e nao deixe acumular dentro do apartamento",
          "Informe imediatamente qualquer dano, problema ou atraso no check-in/check-out",
          "Respeite vizinhos e areas comuns, e economize agua durante a estadia"
        ]}
      ]
    },
    transportes: {
      title: "Transportes",
      icon: "car",
      blocks: [
        { type: "text", heading: "Estacionamento", text: "Vaga disponivel em frente ao predio." },
        { type: "gallery", items: [
          { img: "assets/photos/estacionamento.jpg", name: "Estacionamento" }
        ]},
        { type: "text", heading: "Apps de transporte", text: "Uber e 99 funcionam bem na regiao, e uma otima opcao para se deslocar sem preocupacao." },
        { type: "text", heading: "A pé", text: "O centro de Itajai e o bairro Sao Vicente ficam a poucos minutos a pe, com facil acesso a comercio e restaurantes." },
        { type: "text", muted: true, text: "Sugestao do anfitriao — sinta-se a vontade para pedir mais detalhes pelo contato." }
      ]
    },
    equipamento: {
      title: "Equipamento",
      icon: "tools",
      blocks: [
        { type: "list", heading: "O apartamento conta com", items: ["Air fryer","Cafeteira","Sanduicheira","Chaleira eletrica","Secador de cabelo","Aquecedor","Ar-condicionado","TV","Geladeira"] },
        { type: "text", muted: true, text: "Precisa de ajuda para usar algum equipamento? Fale com a gente pelo WhatsApp." }
      ]
    },
    atividades: {
      title: "Atividades",
      icon: "play",
      blocks: [
        { type: "gallery", heading: "O que fazer por perto", items: [
          { img: "assets/photos/praia-atalaia.jpg", name: "Praia da Atalaia" },
          { img: "assets/photos/bico-papagaio.jpg", name: "Bico do Papagaio" },
          { img: "assets/photos/marejada.jpg", name: "Marejada" },
          { img: "assets/photos/porto-itajai.jpg", name: "Porto de Itajaí" },
          { img: "assets/photos/igreja-matriz.jpg", name: "Igreja Matriz" },
          { img: "assets/photos/museu.jpg", name: "Museu" },
          { img: "assets/photos/estadio.jpg", name: "Estádio Marcílio Dias" }
        ]}
      ]
    },
    informacao: {
      title: "Informação",
      icon: "info",
      blocks: [
        { type: "list", heading: "Resumo rapido", items: [
          "Check-in: 15h - 22h | Check-out: ate 11h",
          "Wi-Fi: veja a aba Wi-Fi para as redes do predio",
          "Estacionamento em frente ao predio",
          "Duvidas ou emergencias: use o contato do host"
        ]}
      ]
    },
    bares: {
      title: "Bares e Clubes",
      icon: "glass",
      blocks: [
        { type: "text", heading: "Vida noturna", text: "Itajai e regiao contam com opcoes de bares e casas noturnas, especialmente na epoca da Marejada." },
        { type: "text", muted: true, text: "Sugestao do anfitriao — peca recomendacoes atualizadas pelo contato para o dia da sua visita." }
      ]
    },
    igreja: {
      title: "Igreja Evangélica",
      icon: "church",
      blocks: [
        { type: "gallery", heading: "Igrejas próximas", items: [
          { img: "assets/photos/igreja-mevam.jpg", name: "Igreja Mevam" },
          { img: "assets/photos/igreja-assembleia.jpg", name: "Igreja Assembleia de Deus" }
        ]}
      ]
    },
    restaurantes: {
      title: "Restaurantes",
      icon: "food",
      blocks: [
        { type: "gallery", heading: "Recomendados", items: [
          { img: "assets/photos/vovo-zena.jpg", name: "Restaurante e Pizzaria Vovó Zena" },
          { img: "assets/photos/dom-camilo.jpg", name: "Pizzaria Dom Camilo" },
          { img: "assets/photos/varandao.jpg", name: "Varandão" },
          { img: "assets/photos/mottas.jpg", name: "Pizzaria Mottas" },
          { img: "assets/photos/jumbo.jpg", name: "Hamburgueria Jumbo" },
          { img: "assets/photos/xburguinho.jpg", name: "XBurguinho" }
        ]},
        { type: "text", muted: true, text: "Ha tambem diversas outras opcoes no bairro Sao Vicente, bem pertinho." }
      ]
    },
    compras: {
      title: "Compras",
      icon: "cart",
      blocks: [
        { type: "gallery", heading: "Mercados e lojas", items: [
          { img: "assets/photos/uber.jpg", name: "Supermercado Uber" },
          { img: "assets/photos/cinthya.jpg", name: "Padaria Cinthya" },
          { img: "assets/photos/loja-lunet-fachada.jpg", name: "Loja Lunet" },
          { img: "assets/photos/mercado-copa.jpg", name: "Mercado Copa" },
          { img: "assets/photos/itajai-shopping.jpg", name: "Itajaí Shopping" },
          { img: "assets/photos/passeio-sao-vicente.jpg", name: "Passeio São Vicente" },
          { img: "assets/photos/compre-fort.jpg", name: "Mercado Compre Fort" }
        ]}
      ]
    },
    contato: {
      title: "Contato",
      icon: "phone",
      special: "contato",
      blocks: [
        { type: "text", heading: "Precisa de algo?", text: "Fale diretamente com o anfitriao pelo WhatsApp, estamos por aqui para ajudar durante toda a sua estadia." }
      ]
    }
  }
};
