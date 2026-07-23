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
  church: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M13 1h-2v2H9v2h2v1.5L4 11v11h6v-6h4v6h6V11l-7-4.5V5h2V3h-2V1Zm-1 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg>',
  star: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z"/></svg>',
  bed: '<svg viewBox="0 0 24 24" width="20" height="20"><circle fill="currentColor" cx="6.5" cy="11" r="2"/><rect fill="currentColor" x="2" y="13.5" width="8.5" height="3.5" rx="1"/><rect fill="currentColor" x="10.5" y="10" width="11.5" height="7" rx="1.2"/><rect fill="currentColor" x="2" y="18.5" width="2" height="3"/><rect fill="currentColor" x="20" y="18.5" width="2" height="3"/></svg>',
  shower: '<svg viewBox="0 0 24 24" width="20" height="20"><rect fill="currentColor" x="10" y="1.5" width="4" height="6" rx="2"/><rect fill="currentColor" x="4" y="8" width="16" height="2.6" rx="1.3"/><circle fill="currentColor" cx="7" cy="14.5" r="1.1"/><circle fill="currentColor" cx="12" cy="14.5" r="1.1"/><circle fill="currentColor" cx="17" cy="14.5" r="1.1"/><circle fill="currentColor" cx="7" cy="19.5" r="1.1"/><circle fill="currentColor" cx="12" cy="19.5" r="1.1"/><circle fill="currentColor" cx="17" cy="19.5" r="1.1"/></svg>',
  pool: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2c-2 2.6-3.2 4.5-3.2 6.2a3.2 3.2 0 0 0 6.4 0C15.2 6.5 14 4.6 12 2Z"/><path fill="currentColor" d="M1.5 14.5c1.4 1.2 2.8 1.2 4.2 0 1.4-1.2 2.8-1.2 4.2 0 1.4 1.2 2.8 1.2 4.2 0 1.4-1.2 2.8-1.2 4.2 0 1.4 1.2 2.8 1.2 4.2 0v2.3c-1.4 1.2-2.8 1.2-4.2 0-1.4-1.2-2.8-1.2-4.2 0-1.4 1.2-2.8 1.2-4.2 0-1.4-1.2-2.8-1.2-4.2 0-1.4 1.2-2.8 1.2-4.2 0Zm0 5.5c1.4 1.2 2.8 1.2 4.2 0 1.4-1.2 2.8-1.2 4.2 0 1.4 1.2 2.8 1.2 4.2 0 1.4-1.2 2.8-1.2 4.2 0 1.4 1.2 2.8 1.2 4.2 0v2.3c-1.4 1.2-2.8 1.2-4.2 0-1.4-1.2-2.8-1.2-4.2 0-1.4 1.2-2.8 1.2-4.2 0-1.4-1.2-2.8-1.2-4.2 0-1.4 1.2-2.8 1.2-4.2 0Z"/></svg>',
  laundry: '<svg viewBox="0 0 24 24" width="20" height="20"><rect fill="currentColor" x="3" y="2" width="18" height="20" rx="2.5"/><path fill="currentColor" fill-rule="evenodd" d="M12 9.2a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8Zm0 2.2a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"/></svg>',
  gym: '<svg viewBox="0 0 24 24" width="20" height="20"><rect fill="currentColor" x="2" y="10" width="3" height="4" rx="1"/><rect fill="currentColor" x="19" y="10" width="3" height="4" rx="1"/><rect fill="currentColor" x="5" y="8" width="2.4" height="8" rx="1"/><rect fill="currentColor" x="16.6" y="8" width="2.4" height="8" rx="1"/><rect fill="currentColor" x="7.4" y="11" width="9.2" height="2" rx="1"/></svg>',
  pharmacy: '<svg viewBox="0 0 24 24" width="20" height="20"><rect fill="currentColor" x="9.5" y="2" width="5" height="20" rx="1.5"/><rect fill="currentColor" x="2" y="9.5" width="20" height="5" rx="1.5"/></svg>',
  bus: '<svg viewBox="0 0 24 24" width="20" height="20"><rect fill="currentColor" x="2" y="4" width="20" height="12" rx="2.5"/><circle fill="currentColor" cx="6.5" cy="18.5" r="2.3"/><circle fill="currentColor" cx="17.5" cy="18.5" r="2.3"/></svg>',
  beach: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z"/><rect fill="currentColor" x="11.2" y="11" width="1.6" height="10" rx=".8"/><path fill="currentColor" d="M9 21c0 1 1.3 1.5 3 1.5s3-.5 3-1.5Z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" fill-rule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"/><rect fill="currentColor" x="11.2" y="6" width="1.6" height="6.5" rx=".8"/><rect fill="currentColor" x="12" y="11.2" width="5" height="1.6" rx=".8"/></svg>',
  heart: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 21s-7.5-4.6-10-9.3C.5 8.5 2 5 5.5 5c2 0 3.4 1.1 4.2 2.4C10.5 6.1 11.9 5 13.9 5 17.4 5 18.9 8.5 17.5 11.7 15 16.4 12 21 12 21Z"/></svg>'
};

const ICON_KEYS = Object.keys(icons);

function placeGrid(items) {
  return `<div class="place-grid">` + (items || []).map((it, i) => `
    <div class="place-card">
      <img src="${it.img}" alt="${it.name}" loading="lazy">
      <span>${it.name}</span>
    </div>
  `).join("") + `</div>`;
}

function renderBlocks(blocks) {
  return (blocks || []).map(b => {
    if (b.type === "text") {
      if (b.muted) return `<div class="card"><p class="note">${b.text || ""}</p></div>`;
      return `<div class="card">${b.heading ? `<h3>${b.heading}</h3>` : ""}<p>${b.text || ""}</p></div>`;
    }
    if (b.type === "list") {
      return `<div class="card">${b.heading ? `<h3>${b.heading}</h3>` : ""}<ul>${(b.items || []).map(i => `<li>${i}</li>`).join("")}</ul></div>`;
    }
    if (b.type === "gallery") {
      return `<div class="card">${b.heading ? `<h3>${b.heading}</h3>` : ""}${placeGrid(b.items)}</div>`;
    }
    return "";
  }).join("");
}

function mapsUrlFor(address) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
}
function mapsEmbedFor(address) {
  return "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed";
}

function renderWifi() {
  return SITE_CONTENT.property.wifiNetworks.map(w => `
    <h3>${w.label}</h3>
    <div class="card wifi-box">
      <div class="info"><span class="label">Rede</span><span class="value">${w.network}</span></div>
      <button class="copy-btn" data-copy="${w.network}">Copiar</button>
    </div>
    <div class="card wifi-box">
      <div class="info"><span class="label">Senha</span><span class="value">${w.password}</span></div>
      <button class="copy-btn" data-copy="${w.password}">Copiar</button>
    </div>
  `).join("");
}

function renderLocalizacao() {
  const address = SITE_CONTENT.property.address;
  const extra = SITE_CONTENT.pages.localizacao.blocks[0] || {};
  return `
    <div class="card">
      <h3>Endereço</h3>
      <p>${address}</p>
      <a class="btn-link" href="${mapsUrlFor(address)}" target="_blank" rel="noopener">📍 Abrir no Google Maps</a>
    </div>
    <div class="card map-card">
      <iframe class="map-embed" src="${mapsEmbedFor(address)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa da localização"></iframe>
    </div>
    <div class="card">
      <h3>${extra.heading || ""}</h3>
      <p>${extra.text || ""}</p>
    </div>
  `;
}

function renderContato() {
  const b = SITE_CONTENT.pages.contato.blocks[0] || {};
  return `
    <div class="card">
      <h3>${b.heading || ""}</h3>
      <p>${b.text || ""}</p>
      <a class="contact-btn" id="contact-whatsapp" href="https://wa.me/${SITE_CONTENT.property.whatsapp}" target="_blank" rel="noopener">
        ${icons.phone} Chamar no WhatsApp
      </a>
    </div>
  `;
}

const grid = document.getElementById("menu-grid");
const whatsappLink = document.getElementById("whatsapp-link");
const viewHome = document.getElementById("view-home");
const viewPage = document.getElementById("view-page");
const viewEditor = document.getElementById("view-editor");
const pageTitle = document.getElementById("page-title");
const pageContent = document.getElementById("page-content");

function buildMenu() {
  grid.innerHTML = "";
  SITE_CONTENT.menuOrder.forEach(key => {
    const p = SITE_CONTENT.pages[key];
    if (!p) return;
    const btn = document.createElement("button");
    btn.className = "menu-item";
    btn.innerHTML = `<div class="icon-wrap">${icons[p.icon] || icons.star}</div><span>${p.title}</span>`;
    btn.addEventListener("click", () => openPage(key));
    grid.appendChild(btn);
  });
}

function photoCarouselHtml(photos, alt) {
  if (!photos || !photos.length) return "";
  if (photos.length === 1) {
    return `<div class="page-photo"><img src="${photos[0]}" alt="${alt}"></div>`;
  }
  return `
    <div class="page-photo-carousel" id="photo-carousel">
      ${photos.map(src => `<div class="page-photo-slide"><img src="${src}" alt="${alt}"></div>`).join("")}
    </div>
    <div class="photo-dots">${photos.map((_, i) => `<button class="photo-dot" data-dot="${i}"></button>`).join("")}</div>
  `;
}

function setupCarousel() {
  const carousel = document.getElementById("photo-carousel");
  if (!carousel) return;
  const dots = pageContent.querySelectorAll(".photo-dot");
  const slides = carousel.querySelectorAll(".page-photo-slide");
  if (!dots.length) return;
  const setActive = i => dots.forEach((d, di) => d.classList.toggle("active", di === i));
  setActive(0);
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      slides[i].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    });
  });
  let ticking = false;
  carousel.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      setActive(Math.round(carousel.scrollLeft / carousel.clientWidth));
      ticking = false;
    });
  });
}

function openPage(key) {
  const p = SITE_CONTENT.pages[key];
  if (!p) return;
  pageTitle.textContent = p.title;
  const photoHtml = photoCarouselHtml(p.photos, p.title);

  let bodyHtml;
  if (p.special === "wifi") bodyHtml = renderWifi();
  else if (p.special === "localizacao") bodyHtml = renderLocalizacao();
  else if (p.special === "contato") bodyHtml = renderContato();
  else bodyHtml = renderBlocks(p.blocks);

  pageContent.innerHTML = photoHtml + bodyHtml;

  pageContent.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(btn.dataset.copy).then(() => {
        btn.textContent = "Copiado!";
        btn.classList.add("copied");
        setTimeout(() => { btn.textContent = "Copiar"; btn.classList.remove("copied"); }, 1500);
      });
    });
  });

  pageContent.querySelectorAll("img").forEach(img => {
    img.classList.add("zoomable");
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  setupCarousel();

  showView(viewPage);
  window.scrollTo(0, 0);
}

function showView(view) {
  [viewHome, viewPage, viewEditor].forEach(v => { v.dataset.active = "false"; });
  view.dataset.active = "true";
}

document.getElementById("back-btn").addEventListener("click", () => showView(viewHome));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.dataset.active = "true";
}
function closeLightbox() {
  lightbox.dataset.active = "false";
  lightboxImg.src = "";
}
document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

function init() {
  buildMenu();
  whatsappLink.href = `https://wa.me/${SITE_CONTENT.property.whatsapp}`;
}
init();

/* ---------------- Painel Editar ---------------- */

const editGate = document.getElementById("edit-gate");
const editPasswordInput = document.getElementById("edit-password-input");
const editorContent = document.getElementById("editor-content");

document.getElementById("edit-fab").addEventListener("click", () => {
  editPasswordInput.value = "";
  editGate.dataset.active = "true";
  setTimeout(() => editPasswordInput.focus(), 50);
});
document.getElementById("edit-gate-cancel").addEventListener("click", () => {
  editGate.dataset.active = "false";
});
document.getElementById("edit-password-submit").addEventListener("click", trySubmitPassword);
editPasswordInput.addEventListener("keydown", e => { if (e.key === "Enter") trySubmitPassword(); });

function trySubmitPassword() {
  if (editPasswordInput.value === SITE_CONTENT.property.editPassword) {
    editGate.dataset.active = "false";
    renderEditor();
    showView(viewEditor);
  } else {
    editPasswordInput.value = "";
    editPasswordInput.placeholder = "Senha incorreta, tente de novo";
  }
}

document.getElementById("editor-close-btn").addEventListener("click", () => {
  buildMenu();
  showView(viewHome);
});

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function iconOptions(selected) {
  return ICON_KEYS.map(k => `<option value="${k}" ${k === selected ? "selected" : ""}>${k}</option>`).join("");
}

function renderEditor() {
  const keys = SITE_CONTENT.menuOrder;
  const specialKeys = ["wifi", "localizacao", "contato"];

  let html = `
    <div class="card">
      <p>Edite as abas e fotos do guia. Quando terminar, clique em <strong>baixar arquivo atualizado</strong> e substitua o <code>content.js</code> do site (ou peca pra Claude publicar de novo).</p>
      <button class="btn-link" id="export-btn">⬇ Baixar content.js atualizado</button>
    </div>
    <div class="card">
      <h3>Adicionar nova aba</h3>
      <input class="edit-input" id="new-tab-title" placeholder="Nome da aba (ex: Academia)">
      <select class="edit-input" id="new-tab-icon">${iconOptions("star")}</select>
      <button class="btn-link" id="add-tab-btn">+ Adicionar aba</button>
    </div>
  `;

  keys.forEach(key => {
    const p = SITE_CONTENT.pages[key];
    if (!p) return;
    const isSpecial = specialKeys.includes(key);
    html += `
      <div class="card edit-tab-card">
        <div class="edit-tab-row">
          <div class="icon-wrap">${icons[p.icon] || icons.star}</div>
          <strong>${p.title}</strong>
          ${isSpecial ? '<span class="note">(aba especial)</span>' : ""}
        </div>
        <label>Titulo</label>
        <input class="edit-input" data-field="title" data-key="${key}" value="${p.title}">
        <label>Icone</label>
        <select class="edit-input" data-field="icon" data-key="${key}">${iconOptions(p.icon)}</select>
        <label>Fotos de topo (opcional, pode adicionar varias)</label>
        <div id="topphotos-${key}"></div>
        <div class="edit-blocks" id="blocks-${key}"></div>
        ${!isSpecial ? `
          <div class="edit-add-block-row">
            <button class="mini-btn" data-add-block="text" data-key="${key}">+ Texto</button>
            <button class="mini-btn" data-add-block="list" data-key="${key}">+ Lista</button>
            <button class="mini-btn" data-add-block="gallery" data-key="${key}">+ Galeria</button>
          </div>
        ` : ""}
        <div class="edit-tab-actions">
          <button class="mini-btn" data-save-key="${key}">Salvar aba</button>
          ${!isSpecial ? `<button class="mini-btn danger" data-delete-key="${key}">Excluir aba</button>` : ""}
        </div>
      </div>
    `;
  });

  editorContent.innerHTML = html;
  keys.forEach(key => {
    const p = SITE_CONTENT.pages[key];
    if (!p) return;
    renderTopPhotos(key);
    if (!specialKeys.includes(key)) renderBlockEditors(key);
  });
  wireEditorEvents();
}

function renderTopPhotos(key) {
  const container = document.getElementById(`topphotos-${key}`);
  if (!container) return;
  const photos = SITE_CONTENT.pages[key].photos || [];
  container.innerHTML = `
    <div class="edit-gallery-list">
      ${photos.map((src, pi) => `
        <div class="edit-gallery-item">
          <img class="edit-thumb-sm" src="${src}" alt="">
          <label class="mini-btn replace-btn">Trocar
            <input type="file" accept="image/*" class="hidden-file-input" data-replace-top-photo data-key="${key}" data-pindex="${pi}">
          </label>
          <button class="mini-btn danger" data-remove-top-photo data-key="${key}" data-pindex="${pi}">x</button>
        </div>
      `).join("")}
    </div>
    <input type="file" accept="image/*" class="edit-input" data-add-top-photo data-key="${key}">
  `;
}

function renderBlockEditors(key) {
  const container = document.getElementById(`blocks-${key}`);
  if (!container) return;
  const blocks = SITE_CONTENT.pages[key].blocks;
  container.innerHTML = blocks.map((b, i) => {
    if (b.type === "text") {
      return `
        <div class="edit-block">
          <label>Texto ${b.muted ? "(nota discreta)" : ""}</label>
          <input class="edit-input" data-block-field="heading" data-key="${key}" data-index="${i}" placeholder="Titulo (opcional)" value="${b.heading || ""}">
          <textarea class="edit-input" data-block-field="text" data-key="${key}" data-index="${i}" rows="3">${b.text || ""}</textarea>
          <button class="mini-btn danger" data-remove-block data-key="${key}" data-index="${i}">Remover bloco</button>
        </div>
      `;
    }
    if (b.type === "list") {
      return `
        <div class="edit-block">
          <label>Lista</label>
          <input class="edit-input" data-block-field="heading" data-key="${key}" data-index="${i}" placeholder="Titulo (opcional)" value="${b.heading || ""}">
          <textarea class="edit-input" data-block-field="items" data-key="${key}" data-index="${i}" rows="4" placeholder="Um item por linha">${(b.items || []).join("\n")}</textarea>
          <button class="mini-btn danger" data-remove-block data-key="${key}" data-index="${i}">Remover bloco</button>
        </div>
      `;
    }
    if (b.type === "gallery") {
      return `
        <div class="edit-block">
          <label>Galeria de fotos</label>
          <input class="edit-input" data-block-field="heading" data-key="${key}" data-index="${i}" placeholder="Titulo (opcional)" value="${b.heading || ""}">
          <div class="edit-gallery-list">
            ${(b.items || []).map((it, gi) => `
              <div class="edit-gallery-item">
                <img class="edit-thumb-sm" src="${it.img}" alt="">
                <input class="edit-input" data-gallery-name data-key="${key}" data-index="${i}" data-gindex="${gi}" value="${it.name}">
                <label class="mini-btn replace-btn">Trocar
                  <input type="file" accept="image/*" class="hidden-file-input" data-replace-photo data-key="${key}" data-index="${i}" data-gindex="${gi}">
                </label>
                <button class="mini-btn danger" data-remove-photo data-key="${key}" data-index="${i}" data-gindex="${gi}">x</button>
              </div>
            `).join("")}
          </div>
          <label>Adicionar foto</label>
          <input type="file" accept="image/*" class="edit-input" data-add-photo data-key="${key}" data-index="${i}">
          <button class="mini-btn danger" data-remove-block data-key="${key}" data-index="${i}">Remover bloco</button>
        </div>
      `;
    }
    return "";
  }).join("");
}

function wireEditorEvents() {
  document.getElementById("add-tab-btn").addEventListener("click", () => {
    const title = document.getElementById("new-tab-title").value.trim();
    const icon = document.getElementById("new-tab-icon").value;
    if (!title) return;
    const key = "tab_" + Date.now();
    SITE_CONTENT.pages[key] = { title, icon, blocks: [] };
    SITE_CONTENT.menuOrder.push(key);
    renderEditor();
  });

  document.getElementById("export-btn").addEventListener("click", exportContent);

  editorContent.querySelectorAll("[data-save-key]").forEach(btn => {
    btn.addEventListener("click", () => saveTab(btn.dataset.saveKey));
  });
  editorContent.querySelectorAll("[data-delete-key]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.deleteKey;
      if (!confirm(`Excluir a aba "${SITE_CONTENT.pages[key].title}"?`)) return;
      delete SITE_CONTENT.pages[key];
      SITE_CONTENT.menuOrder = SITE_CONTENT.menuOrder.filter(k => k !== key);
      renderEditor();
    });
  });
  editorContent.querySelectorAll("[data-add-block]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const type = btn.dataset.addBlock;
      const blank = type === "gallery" ? { type, items: [] } : type === "list" ? { type, items: [] } : { type, text: "" };
      SITE_CONTENT.pages[key].blocks.push(blank);
      renderBlockEditors(key);
      wireEditorEvents();
    });
  });
  editorContent.querySelectorAll("[data-remove-block]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const index = Number(btn.dataset.index);
      SITE_CONTENT.pages[key].blocks.splice(index, 1);
      renderBlockEditors(key);
      wireEditorEvents();
    });
  });
  editorContent.querySelectorAll("[data-remove-photo]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const index = Number(btn.dataset.index);
      const gindex = Number(btn.dataset.gindex);
      SITE_CONTENT.pages[key].blocks[index].items.splice(gindex, 1);
      renderBlockEditors(key);
      wireEditorEvents();
    });
  });
  editorContent.querySelectorAll("[data-add-photo]").forEach(input => {
    input.addEventListener("change", async () => {
      const file = input.files[0];
      if (!file) return;
      const dataUrl = await fileToDataUrl(file);
      const key = input.dataset.key;
      const index = Number(input.dataset.index);
      SITE_CONTENT.pages[key].blocks[index].items.push({ img: dataUrl, name: file.name.replace(/\.[a-z]+$/i, "") });
      renderBlockEditors(key);
      wireEditorEvents();
    });
  });
  editorContent.querySelectorAll("[data-replace-photo]").forEach(input => {
    input.addEventListener("change", async () => {
      const file = input.files[0];
      if (!file) return;
      const dataUrl = await fileToDataUrl(file);
      const key = input.dataset.key;
      const index = Number(input.dataset.index);
      const gindex = Number(input.dataset.gindex);
      SITE_CONTENT.pages[key].blocks[index].items[gindex].img = dataUrl;
      renderBlockEditors(key);
      wireEditorEvents();
    });
  });
  editorContent.querySelectorAll("[data-add-top-photo]").forEach(input => {
    input.addEventListener("change", async () => {
      const file = input.files[0];
      if (!file) return;
      const dataUrl = await fileToDataUrl(file);
      const key = input.dataset.key;
      const p = SITE_CONTENT.pages[key];
      p.photos = p.photos || [];
      p.photos.push(dataUrl);
      renderTopPhotos(key);
      wireEditorEvents();
    });
  });
  editorContent.querySelectorAll("[data-replace-top-photo]").forEach(input => {
    input.addEventListener("change", async () => {
      const file = input.files[0];
      if (!file) return;
      const dataUrl = await fileToDataUrl(file);
      const key = input.dataset.key;
      const pindex = Number(input.dataset.pindex);
      SITE_CONTENT.pages[key].photos[pindex] = dataUrl;
      renderTopPhotos(key);
      wireEditorEvents();
    });
  });
  editorContent.querySelectorAll("[data-remove-top-photo]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const pindex = Number(btn.dataset.pindex);
      SITE_CONTENT.pages[key].photos.splice(pindex, 1);
      renderTopPhotos(key);
      wireEditorEvents();
    });
  });
}

function saveTab(key) {
  const p = SITE_CONTENT.pages[key];
  const titleInput = editorContent.querySelector(`[data-field="title"][data-key="${key}"]`);
  const iconInput = editorContent.querySelector(`[data-field="icon"][data-key="${key}"]`);
  if (titleInput) p.title = titleInput.value.trim() || p.title;
  if (iconInput) p.icon = iconInput.value;

  editorContent.querySelectorAll(`[data-block-field][data-key="${key}"]`).forEach(el => {
    const index = Number(el.dataset.index);
    const field = el.dataset.blockField;
    const block = p.blocks[index];
    if (!block) return;
    if (field === "items") block.items = el.value.split("\n").map(s => s.trim()).filter(Boolean);
    else block[field] = el.value;
  });
  editorContent.querySelectorAll(`[data-gallery-name][data-key="${key}"]`).forEach(el => {
    const index = Number(el.dataset.index);
    const gindex = Number(el.dataset.gindex);
    const block = p.blocks[index];
    if (block && block.items && block.items[gindex]) block.items[gindex].name = el.value;
  });

  alert(`Aba "${p.title}" salva na memoria. Lembre de baixar o content.js atualizado no final.`);
  buildMenu();
  renderEditor();
}

function exportContent() {
  const text = "// Todo o conteudo editavel do site vive aqui.\nconst SITE_CONTENT = " + JSON.stringify(SITE_CONTENT, null, 2) + ";\n";
  const blob = new Blob([text], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "content.js";
  a.click();
  URL.revokeObjectURL(url);
}
