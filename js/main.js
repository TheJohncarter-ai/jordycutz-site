/* =====================================================================
   JORDY CUTZ — main.js
   Edit the DATA block to update services, photos, and reviews.
   Spanish copy for static HTML lives in js/i18n.js; data below carries
   its own `es` fields.
   ===================================================================== */

const BOOKSY_ID = 1071238;
const HOUSE_CALL_PRICE = 200; // flat price for a house call, any services, travel included
const BOOKSY_URL = 'https://booksy.com/en-us/1071238_j-barber-1_barber-shop_22531_annapolis';

/* ---------- DATA ---------- */
// Prices and durations mirror the Booksy menu. Keep them in sync when Jordy changes them.
const SERVICES = [
  { id: 'fade',    cat: 'cuts',   price: 40, mins: 40, tag: 'Most booked', name: 'Fade',              sub: 'Low · Mid · High',     desc: 'Clean, modern, seamless — short to long with no lines.',
    es: { tag: 'El más pedido', name: 'Fade', sub: 'Low · Mid · High', desc: 'Limpio, moderno, sin marcas — de corto a largo sin líneas.' } },
  { id: 'taper',   cat: 'cuts',   price: 40, mins: 35, name: 'Taper',             sub: 'Low · Mid · High',     desc: 'Tight around the edges, weight kept up top.',
    es: { name: 'Taper', sub: 'Low · Mid · High', desc: 'Ajustado en los bordes, con volumen arriba.' } },
  { id: 'hb',      cat: 'beard',  price: 50, mins: 45, tag: 'Signature', name: 'Haircut & Beard',   sub: 'Hot towel steam',      desc: 'Fade + beard alignment, steam, hot towel massage, razor finish.',
    es: { tag: 'De la casa', name: 'Corte y Barba', sub: 'Vapor y toalla caliente', desc: 'Fade + alineación de barba, vapor, masaje con toalla caliente, acabado a navaja.' } },
  { id: 'regular', cat: 'cuts',   price: 30, mins: 25, name: 'Regular Haircut',   sub: '#1 or #2 all around',  desc: 'Even, sharp, done right.',
    es: { name: 'Corte Regular', sub: '#1 o #2 parejo', desc: 'Parejo, limpio, bien hecho.' } },
  { id: 'beardm',  cat: 'beard',  price: 25, mins: 25, name: 'Beard Maintenance', sub: 'Profiled + hot towel', desc: 'Shape, profile and a hot towel massage.',
    es: { name: 'Mantenimiento de Barba', sub: 'Perfilado + toalla caliente', desc: 'Forma, perfilado y masaje con toalla caliente.' } },
  { id: 'beardt',  cat: 'beard',  price: 10, mins: 15, name: 'Beard Trim',        sub: 'Quick clean',          desc: 'Length down, edges tidy.',
    es: { name: 'Recorte de Barba', sub: 'Rápido y limpio', desc: 'Baja el largo, bordes limpios.' } },
  { id: 'shave',   cat: 'beard',  price: 30, mins: 20, name: 'Shave',             sub: 'Razor or shaver',      desc: 'Close, clean, no irritation.',
    es: { name: 'Afeitado', sub: 'Navaja o máquina', desc: 'Al ras, limpio, sin irritación.' } },
  { id: 'lineup',  cat: 'cuts',   price: 25, mins: 30, name: 'Line Up',           sub: 'Around the head',      desc: 'Crisp edges, hairline to nape.',
    es: { name: 'Line Up', sub: 'Toda la cabeza', desc: 'Bordes definidos, de la frente a la nuca.' } },
  { id: 'design',  cat: 'design', price: 50, mins: 55, tag: 'Custom', name: 'Design + Fade',     sub: 'Any design',           desc: 'Lines, arrows, logos, lettering — bring the idea.',
    es: { tag: 'Personalizado', name: 'Diseño + Fade', sub: 'Cualquier diseño', desc: 'Líneas, flechas, logos, letras — trae la idea.' } },
  { id: 'kids',    cat: 'kids',   price: 30, mins: 30, name: 'Kids Haircut',      sub: 'Regular or fade',      desc: 'Patient, clean, and quick for the little ones.',
    es: { name: 'Corte para Niños', sub: 'Regular o fade', desc: 'Con paciencia, limpio y rápido para los pequeños.' } },
];

const GALLERY = [
  { src: 'fade-moody',    cap: 'Skin fade',          type: 'Fade',      es: { cap: 'Skin fade',           type: 'Fade' } },
  { src: 'design-cross',  cap: 'Cross design',       type: 'Design',    es: { cap: 'Diseño de cruz',      type: 'Diseño' } },
  { src: 'beard-lineup',  cap: 'Beard & line up',    type: 'Beard',     es: { cap: 'Barba y line up',     type: 'Barba' } },
  { src: 'fade-curls',    cap: 'Fade, curls up top', type: 'Fade',      es: { cap: 'Fade con rizos',      type: 'Fade' } },
  { src: 'hot-towel',     cap: 'Hot towel steam',    type: 'Ritual',    es: { cap: 'Vapor y toalla caliente', type: 'Ritual' } },
  { src: 'design-side',   cap: 'Side design',        type: 'Design',    es: { cap: 'Diseño lateral',      type: 'Diseño' } },
  { src: 'braids-lineup', cap: 'Braids, edged',      type: 'Line up',   es: { cap: 'Trenzas perfiladas',  type: 'Line up' } },
  { src: 'fringe-fade',   cap: 'Fringe fade',        type: 'Fade',      es: { cap: 'Fade con flequillo',  type: 'Fade' } },
  { src: 'kid-design',    cap: 'Kids design',        type: 'Kids',      es: { cap: 'Diseño para niños',   type: 'Niños' } },
  { src: 'slick-taper',   cap: 'Slick back taper',   type: 'Taper',     es: { cap: 'Taper peinado atrás', type: 'Taper' } },
  { src: 'design-w',      cap: 'Freehand design',    type: 'Design',    es: { cap: 'Diseño a mano alzada', type: 'Diseño' } },
  { src: 'fade-beard',    cap: 'Fade & beard',       type: 'Signature', es: { cap: 'Fade y barba',        type: 'De la casa' } },
  { src: 'side-part',     cap: 'Hard part taper',    type: 'Taper',     es: { cap: 'Taper con raya',      type: 'Taper' } },
  { src: 'beard-sculpt',  cap: 'Beard sculpt',       type: 'Beard',     es: { cap: 'Barba esculpida',     type: 'Barba' } },
  { src: 'gold-chair',    cap: 'Clean shave',        type: 'Shave',     es: { cap: 'Afeitado al ras',     type: 'Afeitado' } },
  { src: 'jordy-at-work', cap: 'Jordy, detailing',   type: 'Studio',    es: { cap: 'Jordy, detallando',   type: 'Estudio' } },
];

// Verbatim from Booksy (kept in the language they were written in).
const REVIEWS = [
  { name: 'Kendrick', text: 'Hands down the best barber in town!' },
  { name: 'Peach',    text: 'J. Barber 1 is most knowledgeable, courteous, patient, and professional in his craft. He never misses!' },
  { name: 'Jonathan', text: 'He had some really good suggestions and gave me a phenomenal haircut and beard trim in time for my trip!' },
  { name: 'Ahmad',    text: 'Very consistent and detail oriented. 💯🔥' },
  { name: 'Peach',    text: 'Jordy is always professional, and well mannered. His craft speaks for itself!' },
  { name: 'Eric',     text: 'Amazing service and friendly atmosphere.' },
  { name: 'Joshua',   text: 'Always a great job done! Thank you Jordy!' },
  { name: 'Hinesh',   text: 'Really great time — efficient and easy.' },
  { name: 'Omari',    text: 'Good job.' },
];

/* ---------- helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const I = window.JC_I18N;
const T = key => I.t(key);
const L = (obj, field) => (I.lang === 'es' && obj.es && obj.es[field] != null) ? obj.es[field] : obj[field];

/* ---------- preloader ---------- */
(() => {
  const pre = $('#preloader');
  const done = () => { pre.classList.add('is-done'); document.body.classList.remove('is-locked'); };
  document.body.classList.add('is-locked');
  const minWait = reduceMotion ? 0 : 1400;
  const start = performance.now();
  window.addEventListener('load', () => {
    const wait = Math.max(0, minWait - (performance.now() - start));
    setTimeout(done, wait);
  });
  setTimeout(done, 3500); // hard cap
})();

/* ---------- cursor ---------- */
(() => {
  if (!finePointer) return;
  const cur = $('#cursor'), ring = $('.cursor__ring', cur);
  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
  document.addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; cur.classList.remove('is-hidden'); });
  document.addEventListener('mouseleave', () => cur.classList.add('is-hidden'));
  const loop = () => {
    rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
    cur.querySelector('.cursor__dot').style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('[data-cursor], a, button, summary');
    cur.className = 'cursor';
    if (!t) return;
    const kind = t.dataset.cursor || 'link';
    cur.classList.add(`is-${kind}`);
    ring.dataset.label = kind === 'book' ? T('js.cursorBook') : kind === 'drag' ? T('js.cursorDrag') : '';
  });
})();

/* ---------- nav ---------- */
(() => {
  const nav = $('#nav'), fab = $('#fab');
  let last = 0;
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    nav.classList.toggle('is-hidden', y > last && y > 400 && !$('#mobileMenu').classList.contains('is-open'));
    fab.classList.toggle('is-visible', y > innerHeight * 0.7);
    last = y;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // active link
  const links = $$('.nav__links a');
  const secs = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  secs.forEach(s => io.observe(s));

  // burger
  const burger = $('#burger'), menu = $('#mobileMenu');
  const toggle = (open) => {
    const isOpen = open ?? !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', isOpen);
    burger.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('is-locked', isOpen);
  };
  burger.addEventListener('click', () => toggle());
  $$('a', menu).forEach(a => a.addEventListener('click', () => toggle(false)));
})();

/* ---------- reveal on scroll ---------- */
(() => {
  const els = $$('.reveal');
  if (reduceMotion) { els.forEach(e => e.classList.add('is-in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) { en.target.style.transitionDelay = `${(i % 4) * 90}ms`; en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(e => io.observe(e));
})();

/* ---------- hero parallax + count-up ---------- */
(() => {
  if (!reduceMotion && finePointer) {
    const layers = $$('[data-parallax]');
    addEventListener('mousemove', e => {
      const dx = (e.clientX / innerWidth - 0.5), dy = (e.clientY / innerHeight - 0.5);
      layers.forEach(l => { const k = parseFloat(l.dataset.parallax) * 100; l.style.transform = `translate(${dx * k}px, ${dy * k}px)`; });
    }, { passive: true });
  }
  const counters = $$('[data-count]');
  const run = el => {
    const target = parseFloat(el.dataset.count), dec = parseInt(el.dataset.decimals || 0, 10);
    const dur = 1600, t0 = performance.now();
    const step = t => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(en => en.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }));
  counters.forEach(c => io.observe(c));
})();

/* ---------- magnetic buttons ---------- */
(() => {
  if (!finePointer || reduceMotion) return;
  $$('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
})();

/* ---------- tilt cards ---------- */
(() => {
  if (!finePointer || reduceMotion) return;
  $$('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${px * 100}%`); card.style.setProperty('--my', `${py * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 7}deg) rotateY(${(px - 0.5) * 9}deg) translateZ(0)`;
      card.style.transition = 'transform 0.1s';
    });
    card.addEventListener('mouseleave', () => { card.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1)'; card.style.transform = ''; });
  });
})();

/* ---------- services + ticket ---------- */
(() => {
  const list = $('#services');
  const selected = new Set();
  let filter = 'all';
  const lines = $('#ticketLines'), tTime = $('#ticketTime'), tTotal = $('#ticketTotal'), houseCall = $('#houseCall'), houseNote = $('#houseNote'), book = $('#ticketBook');
  $('#ticketNo').textContent = String(Math.floor(1000 + Math.random() * 9000));

  const renderList = () => {
    list.innerHTML = SERVICES.map(s => `
      <li class="service${selected.has(s.id) ? ' is-selected' : ''}${filter === 'all' || s.cat === filter ? '' : ' is-hidden'}" data-id="${s.id}" data-cat="${s.cat}" role="button" tabindex="0" aria-pressed="${selected.has(s.id)}">
        <span class="service__check"><svg viewBox="0 0 24 24"><path d="M5 12l5 5L19 7"/></svg></span>
        <div>
          <div class="service__name">${L(s, 'name')}${s.tag ? `<span class="service__tag">${L(s, 'tag')}</span>` : ''}</div>
          <div class="service__desc">${L(s, 'sub')} — ${L(s, 'desc')}</div>
        </div>
        <div class="service__meta"><div class="service__price">$${s.price}</div><div class="service__time">${s.mins} ${T('js.min')}</div></div>
      </li>`).join('') + `
      <li class="service service--house${houseCall.checked ? ' is-selected' : ''}" data-cat="all" data-house="1" role="button" tabindex="0" aria-pressed="${houseCall.checked}">
        <span class="service__check"><svg viewBox="0 0 24 24"><path d="M5 12l5 5L19 7"/></svg></span>
        <div>
          <div class="service__name">${T('js.houseName')}<span class="service__tag">${T('js.houseTag')}</span></div>
          <div class="service__desc">${T('js.houseDesc')}</div>
        </div>
        <div class="service__meta"><div class="service__price">$${HOUSE_CALL_PRICE}</div><div class="service__time">${T('js.houseTime')}</div></div>
      </li>`;
  };

  const money = n => `$${n}`;
  const renderTicket = () => {
    const items = SERVICES.filter(s => selected.has(s.id));
    const house = houseCall.checked;
    if (!items.length && !house) {
      lines.innerHTML = `<p class="ticket__empty">${I.lang === 'es' ? window.I18N_ES['ticket.empty'] : 'Nothing yet. Tap a service to begin.'}</p>`;
    } else {
      lines.innerHTML = house ? `<div class="ticket__line ticket__line--house"><span>${T('js.houseLine')}</span><small></small><span>${money(HOUSE_CALL_PRICE)}</span></div>` : '';
      lines.innerHTML += items.map(s => house
        ? `<div class="ticket__line ticket__line--info"><span>↳ ${L(s, 'name')}</span><small>${s.mins}m</small><span>${T('js.included')}</span></div>`
        : `<div class="ticket__line"><span>${L(s, 'name')}</span><small>${s.mins}m</small><span>${money(s.price)}</span></div>`).join('');
      if (house && items.length) lines.innerHTML += `<p class="ticket__hint">${T('js.houseHint')}</p>`;
    }
    const mins = items.reduce((a, s) => a + s.mins, 0), total = house ? HOUSE_CALL_PRICE : items.reduce((a, s) => a + s.price, 0);
    const h = Math.floor(mins / 60), m = mins % 60;
    tTime.textContent = mins ? (h ? `${h}h ${m ? m + 'm' : ''}`.trim() : `${m} ${T('js.min')}`) : `0 ${T('js.min')}`;
    tTotal.textContent = money(total);
    houseNote.textContent = houseCall.checked ? T('js.houseNoteHome') : T('js.houseNoteStudio');
    try { localStorage.setItem('jc_session', JSON.stringify({ ids: [...selected], house: houseCall.checked })); } catch (_) {}
  };

  const toggleRow = row => {
    if (row.dataset.house) { houseCall.checked = !houseCall.checked; houseCall.dispatchEvent(new Event('change')); return; }
    const id = row.dataset.id; if (!id) return;
    selected.has(id) ? selected.delete(id) : selected.add(id);
    row.classList.toggle('is-selected', selected.has(id));
    row.setAttribute('aria-pressed', selected.has(id));
    renderTicket();
  };
  list.addEventListener('click', e => { const row = e.target.closest('.service'); if (row) toggleRow(row); });
  list.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { const row = e.target.closest('.service'); if (row) { e.preventDefault(); toggleRow(row); } } });
  houseCall.addEventListener('change', () => { const r = $('.service--house'); if (r) { r.classList.toggle('is-selected', houseCall.checked); r.setAttribute('aria-pressed', houseCall.checked); } renderTicket(); });
  $('#ticketClear').addEventListener('click', () => { selected.clear(); houseCall.checked = false; renderList(); renderTicket(); });

  // restore
  try {
    const saved = JSON.parse(localStorage.getItem('jc_session') || 'null');
    if (saved) { saved.ids.forEach(id => selected.add(id)); houseCall.checked = !!saved.house; }
  } catch (_) {}

  // filters
  $$('.chip').forEach(chip => chip.addEventListener('click', () => {
    $$('.chip').forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-selected', 'false'); });
    chip.classList.add('is-active'); chip.setAttribute('aria-selected', 'true');
    filter = chip.dataset.filter;
    $$('.service').forEach(r => r.classList.toggle('is-hidden', !(filter === 'all' || r.dataset.cat === filter || r.dataset.cat === 'all')));
  }));

  renderList(); renderTicket();
  I.onChange(() => { renderList(); renderTicket(); });
})();

/* ---------- gallery ---------- */
(() => {
  const track = $('#galleryTrack'), gal = $('#gallery'), bar = $('#galBar');
  const renderGallery = () => {
    track.innerHTML = GALLERY.map((g, i) => `
      <figure class="gitem" data-i="${i}" tabindex="0" role="button" aria-label="${T('js.openPhoto')}: ${L(g, 'cap')}">
        <img src="assets/img/work/${g.src}-sm.jpg" alt="${L(g, 'cap')} ${T('js.by')}" loading="lazy" decoding="async" draggable="false">
        <figcaption class="gitem__cap"><span>${L(g, 'cap')}</span><span>${L(g, 'type')}</span></figcaption>
      </figure>`).join('');
  };
  renderGallery();

  // lightbox
  const lb = $('#lightbox'), img = $('#lbImg'), cap = $('#lbCap');
  let cur = 0;
  const show = i => { cur = (i + GALLERY.length) % GALLERY.length; const g = GALLERY[cur]; img.src = `assets/img/work/${g.src}.jpg`; img.alt = `${L(g, 'cap')} ${T('js.by')}`; cap.textContent = `${L(g, 'cap')} — ${L(g, 'type')} · ${cur + 1}/${GALLERY.length}`; };
  const open = i => { show(i); lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); document.body.classList.add('is-locked'); };
  const close = () => { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); document.body.classList.remove('is-locked'); };

  // drag to scroll (mouse); native scroll on touch
  let down = false, startX = 0, startL = 0, moved = false, downItem = null;
  gal.addEventListener('pointerdown', e => { down = true; moved = false; startX = e.clientX; startL = gal.scrollLeft; downItem = e.target.closest('.gitem'); if (e.pointerType === 'mouse') gal.setPointerCapture(e.pointerId); });
  gal.addEventListener('pointermove', e => { if (!down || e.pointerType !== 'mouse') return; const dx = e.clientX - startX; if (Math.abs(dx) > 4) { moved = true; gal.classList.add('is-dragging'); } gal.scrollLeft = startL - dx; });
  const up = e => { if (!down) return; down = false; setTimeout(() => gal.classList.remove('is-dragging'), 50); if (!moved && downItem && e.type === 'pointerup') open(+downItem.dataset.i); downItem = null; };
  gal.addEventListener('pointerup', up); gal.addEventListener('pointercancel', up);
  gal.addEventListener('wheel', e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); gal.scrollLeft += e.deltaY; } }, { passive: false });
  track.addEventListener('keydown', e => { if (e.key === 'Enter') { const f = e.target.closest('.gitem'); if (f) open(+f.dataset.i); } });
  const step = () => gal.clientWidth * 0.7;
  $('#galPrev').addEventListener('click', () => gal.scrollBy({ left: -step(), behavior: 'smooth' }));
  $('#galNext').addEventListener('click', () => gal.scrollBy({ left: step(), behavior: 'smooth' }));
  const prog = () => {
    const max = gal.scrollWidth - gal.clientWidth;
    const w = Math.max(8, (gal.clientWidth / gal.scrollWidth) * 100);
    bar.style.width = `${w}%`; bar.style.left = `${(gal.scrollLeft / max) * (100 - w)}%`;
  };
  gal.addEventListener('scroll', prog, { passive: true }); addEventListener('resize', prog); prog();

  $('#lbClose').addEventListener('click', close);
  $('#lbPrev').addEventListener('click', () => show(cur - 1));
  $('#lbNext').addEventListener('click', () => show(cur + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  addEventListener('keydown', e => { if (!lb.classList.contains('is-open')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
  let tx = 0; lb.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); });

  I.onChange(() => { renderGallery(); if (lb.classList.contains('is-open')) show(cur); });
})();

/* ---------- reviews marquee ---------- */
(() => {
  const card = r => `<article class="rcard"><div class="stars">★★★★★</div><p>“${r.text}”</p><footer><i>${r.name[0]}</i>${r.name} · Booksy</footer></article>`;
  const a = REVIEWS.filter((_, i) => i % 2 === 0), b = REVIEWS.filter((_, i) => i % 2 === 1);
  $('#reviewsRowA').innerHTML = [...a, ...a, ...a].map(card).join('');
  $('#reviewsRowB').innerHTML = [...b, ...b, ...b].map(card).join('');
})();

/* ---------- Booksy widget ---------- */
(() => {
  const btn = $('#loadWidget'), body = $('#booksyWidget');
  let loaded = false;
  const load = () => {
    loaded = true;
    body.innerHTML = `<iframe title="Book with Jordy Cutz on Booksy" src="https://booksy.com/widget-2021/index.html?id=${BOOKSY_ID}&lang=${I.lang}&country=us&mode=iframe" loading="lazy" allow="payment"></iframe>`;
  };
  btn.addEventListener('click', load);
  // auto-load when the booking section is near the viewport (desktop only, to save mobile data)
  if (innerWidth > 980) {
    const io = new IntersectionObserver(en => { if (en[0].isIntersecting) { load(); io.disconnect(); } }, { rootMargin: '400px' });
    io.observe(body);
  }
  I.onChange(() => { if (loaded) load(); });
})();

/* ---------- misc ---------- */
$('#year').textContent = new Date().getFullYear();
