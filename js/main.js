/* =====================================================================
   JORDY CUTZ — main.js
   Edit the DATA block to update services, photos, and reviews.
   ===================================================================== */

const BOOKSY_ID = 1071238;
const BOOKSY_URL = 'https://booksy.com/en-us/1071238_j-barber-1_barber-shop_22531_annapolis';

/* ---------- DATA ---------- */
// Prices and durations mirror the Booksy menu. Keep them in sync when Jordy changes them.
const SERVICES = [
  { id: 'fade',    cat: 'cuts',   name: 'Fade',                     sub: 'Low · Mid · High',        price: 40, mins: 40, tag: 'Most booked', desc: 'Clean, modern, seamless — short to long with no lines.' },
  { id: 'taper',   cat: 'cuts',   name: 'Taper',                    sub: 'Low · Mid · High',        price: 40, mins: 35, desc: 'Tight around the edges, weight kept up top.' },
  { id: 'hb',      cat: 'beard',  name: 'Haircut & Beard',          sub: 'Hot towel steam',         price: 50, mins: 45, tag: 'Signature', desc: 'Fade + beard alignment, steam, hot towel massage, razor finish.' },
  { id: 'regular', cat: 'cuts',   name: 'Regular Haircut',          sub: '#1 or #2 all around',     price: 30, mins: 25, desc: 'Even, sharp, done right.' },
  { id: 'beardm',  cat: 'beard',  name: 'Beard Maintenance',        sub: 'Profiled + hot towel',    price: 25, mins: 25, desc: 'Shape, profile and a hot towel massage.' },
  { id: 'beardt',  cat: 'beard',  name: 'Beard Trim',               sub: 'Quick clean',             price: 10, mins: 15, desc: 'Length down, edges tidy.' },
  { id: 'shave',   cat: 'beard',  name: 'Shave',                    sub: 'Razor or shaver',         price: 30, mins: 20, desc: 'Close, clean, no irritation.' },
  { id: 'lineup',  cat: 'cuts',   name: 'Line Up',                  sub: 'Around the head',         price: 25, mins: 30, desc: 'Crisp edges, hairline to nape.' },
  { id: 'design',  cat: 'design', name: 'Design + Fade',            sub: 'Any design',              price: 50, mins: 55, tag: 'Custom', desc: 'Lines, arrows, logos, lettering — bring the idea.' },
  { id: 'kids',    cat: 'kids',   name: 'Kids Haircut',             sub: 'Regular or fade',         price: 30, mins: 30, desc: 'Patient, clean, and quick for the little ones.' },
];

const GALLERY = [
  { src: 'fade-moody',    cap: 'Skin fade',         type: 'Fade' },
  { src: 'design-cross',  cap: 'Cross design',      type: 'Design' },
  { src: 'beard-lineup',  cap: 'Beard & line up',   type: 'Beard' },
  { src: 'fade-curls',    cap: 'Fade, curls up top', type: 'Fade' },
  { src: 'hot-towel',     cap: 'Hot towel steam',   type: 'Ritual' },
  { src: 'design-side',   cap: 'Side design',       type: 'Design' },
  { src: 'braids-lineup', cap: 'Braids, edged',     type: 'Line up' },
  { src: 'fringe-fade',   cap: 'Fringe fade',       type: 'Fade' },
  { src: 'kid-design',    cap: 'Kids design',       type: 'Kids' },
  { src: 'slick-taper',   cap: 'Slick back taper',  type: 'Taper' },
  { src: 'design-w',      cap: 'Freehand design',   type: 'Design' },
  { src: 'fade-beard',    cap: 'Fade & beard',      type: 'Signature' },
  { src: 'side-part',     cap: 'Hard part taper',   type: 'Taper' },
  { src: 'beard-sculpt',  cap: 'Beard sculpt',      type: 'Beard' },
  { src: 'gold-chair',    cap: 'Clean shave',       type: 'Shave' },
  { src: 'jordy-at-work', cap: 'Jordy, detailing',  type: 'Studio' },
];

// Verbatim from Booksy.
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
  const labels = { book: 'BOOK', drag: 'DRAG', link: '' };
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('[data-cursor], a, button, summary');
    cur.className = 'cursor';
    if (!t) return;
    const kind = t.dataset.cursor || 'link';
    cur.classList.add(`is-${kind}`);
    ring.dataset.label = labels[kind] || '';
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
  const house = { id: 'house', name: 'Private House Call', desc: 'Any service above, delivered to your home, office or event. Travel included. Group and event rates available.' };
  list.innerHTML = SERVICES.map(s => `
    <li class="service" data-id="${s.id}" data-cat="${s.cat}" role="button" tabindex="0" aria-pressed="false">
      <span class="service__check"><svg viewBox="0 0 24 24"><path d="M5 12l5 5L19 7"/></svg></span>
      <div>
        <div class="service__name">${s.name}${s.tag ? `<span class="service__tag">${s.tag}</span>` : ''}</div>
        <div class="service__desc">${s.sub} — ${s.desc}</div>
      </div>
      <div class="service__meta"><div class="service__price">$${s.price}</div><div class="service__time">${s.mins} min</div></div>
    </li>`).join('') + `
    <li class="service service--house" data-cat="all">
      <div>
        <div class="service__name">${house.name}<span class="service__tag">Mobile</span></div>
        <div class="service__desc">${house.desc}</div>
      </div>
      <div class="service__meta"><div class="service__price">Quoted per visit</div><div class="service__time">Book + add address</div></div>
    </li>`;

  const selected = new Set();
  const lines = $('#ticketLines'), tTime = $('#ticketTime'), tTotal = $('#ticketTotal'), houseCall = $('#houseCall'), houseNote = $('#houseNote'), book = $('#ticketBook');
  $('#ticketNo').textContent = String(Math.floor(1000 + Math.random() * 9000));

  const money = n => `$${n}`;
  const render = () => {
    const items = SERVICES.filter(s => selected.has(s.id));
    if (!items.length) {
      lines.innerHTML = '<p class="ticket__empty">Nothing yet. Tap a service to begin.</p>';
    } else {
      lines.innerHTML = items.map(s => `<div class="ticket__line"><span>${s.name}</span><small>${s.mins}m</small><span>${money(s.price)}</span></div>`).join('');
      if (houseCall.checked) lines.innerHTML += `<div class="ticket__line"><span>House call · travel</span><small></small><span>quoted</span></div>`;
    }
    const mins = items.reduce((a, s) => a + s.mins, 0), total = items.reduce((a, s) => a + s.price, 0);
    const h = Math.floor(mins / 60), m = mins % 60;
    tTime.textContent = mins ? (h ? `${h}h ${m ? m + 'm' : ''}`.trim() : `${m} min`) : '0 min';
    tTotal.textContent = houseCall.checked && items.length ? `${money(total)}+` : money(total);
    houseNote.textContent = houseCall.checked ? 'We come to you · travel quoted' : 'At the studio · 1407 Forest Dr.';
    // deep link note for Booksy — services get chosen on Booksy itself
    book.href = BOOKSY_URL;
    localStorage.setItem('jc_session', JSON.stringify({ ids: [...selected], house: houseCall.checked }));
  };

  const toggleRow = row => {
    const id = row.dataset.id; if (!id) return;
    selected.has(id) ? selected.delete(id) : selected.add(id);
    row.classList.toggle('is-selected', selected.has(id));
    row.setAttribute('aria-pressed', selected.has(id));
    render();
  };
  list.addEventListener('click', e => { const row = e.target.closest('.service'); if (row) toggleRow(row); });
  list.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { const row = e.target.closest('.service'); if (row) { e.preventDefault(); toggleRow(row); } } });
  houseCall.addEventListener('change', render);
  $('#ticketClear').addEventListener('click', () => { selected.clear(); $$('.service').forEach(r => { r.classList.remove('is-selected'); r.setAttribute('aria-pressed', 'false'); }); houseCall.checked = false; render(); });

  // restore
  try {
    const saved = JSON.parse(localStorage.getItem('jc_session') || 'null');
    if (saved) { saved.ids.forEach(id => { selected.add(id); const r = $(`.service[data-id="${id}"]`); if (r) { r.classList.add('is-selected'); r.setAttribute('aria-pressed', 'true'); } }); houseCall.checked = !!saved.house; }
  } catch (_) {}
  render();

  // filters
  $$('.chip').forEach(chip => chip.addEventListener('click', () => {
    $$('.chip').forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-selected', 'false'); });
    chip.classList.add('is-active'); chip.setAttribute('aria-selected', 'true');
    const f = chip.dataset.filter;
    $$('.service').forEach(r => r.classList.toggle('is-hidden', !(f === 'all' || r.dataset.cat === f || r.dataset.cat === 'all')));
  }));
})();

/* ---------- gallery ---------- */
(() => {
  const track = $('#galleryTrack'), gal = $('#gallery'), bar = $('#galBar');
  track.innerHTML = GALLERY.map((g, i) => `
    <figure class="gitem" data-i="${i}" tabindex="0" role="button" aria-label="Open photo: ${g.cap}">
      <img src="assets/img/work/${g.src}-sm.jpg" alt="${g.cap} by Jordy Cutz" loading="lazy" decoding="async" draggable="false">
      <figcaption class="gitem__cap"><span>${g.cap}</span><span>${g.type}</span></figcaption>
    </figure>`).join('');

  const openItem = i => open(i);
  // drag to scroll
  let down = false, startX = 0, startL = 0, moved = false, downItem = null;
  gal.addEventListener('pointerdown', e => { down = true; moved = false; startX = e.clientX; startL = gal.scrollLeft; downItem = e.target.closest('.gitem'); if (e.pointerType === 'mouse') gal.setPointerCapture(e.pointerId); });
  gal.addEventListener('pointermove', e => { if (!down || e.pointerType !== 'mouse') return; const dx = e.clientX - startX; if (Math.abs(dx) > 4) { moved = true; gal.classList.add('is-dragging'); } gal.scrollLeft = startL - dx; });
  const up = e => { if (!down) return; down = false; setTimeout(() => gal.classList.remove('is-dragging'), 50); if (!moved && downItem && e.type === 'pointerup') openItem(+downItem.dataset.i); downItem = null; };
  gal.addEventListener('pointerup', up); gal.addEventListener('pointercancel', up);
  gal.addEventListener('wheel', e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); gal.scrollLeft += e.deltaY; } }, { passive: false });
  const step = () => gal.clientWidth * 0.7;
  $('#galPrev').addEventListener('click', () => gal.scrollBy({ left: -step(), behavior: 'smooth' }));
  $('#galNext').addEventListener('click', () => gal.scrollBy({ left: step(), behavior: 'smooth' }));
  const prog = () => {
    const max = gal.scrollWidth - gal.clientWidth;
    const w = Math.max(8, (gal.clientWidth / gal.scrollWidth) * 100);
    bar.style.width = `${w}%`; bar.style.left = `${(gal.scrollLeft / max) * (100 - w)}%`;
  };
  gal.addEventListener('scroll', prog, { passive: true }); addEventListener('resize', prog); prog();

  // lightbox
  const lb = $('#lightbox'), img = $('#lbImg'), cap = $('#lbCap');
  let cur = 0;
  const show = i => { cur = (i + GALLERY.length) % GALLERY.length; const g = GALLERY[cur]; img.src = `assets/img/work/${g.src}.jpg`; img.alt = `${g.cap} by Jordy Cutz`; cap.textContent = `${g.cap} — ${g.type} · ${cur + 1}/${GALLERY.length}`; };
  const open = i => { show(i); lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); document.body.classList.add('is-locked'); };
  const close = () => { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); document.body.classList.remove('is-locked'); };
  track.addEventListener('keydown', e => { if (e.key === 'Enter') { const f = e.target.closest('.gitem'); if (f) open(+f.dataset.i); } });
  $('#lbClose').addEventListener('click', close);
  $('#lbPrev').addEventListener('click', () => show(cur - 1));
  $('#lbNext').addEventListener('click', () => show(cur + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  addEventListener('keydown', e => { if (!lb.classList.contains('is-open')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
  let tx = 0; lb.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); });
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
  const load = () => {
    body.innerHTML = `<iframe title="Book with Jordy Cutz on Booksy" src="https://booksy.com/widget-2021/index.html?id=${BOOKSY_ID}&lang=en&country=us&mode=iframe" loading="lazy" allow="payment"></iframe>`;
  };
  btn.addEventListener('click', load);
  // auto-load when the booking section is near the viewport (desktop only, to save mobile data)
  if (innerWidth > 980) {
    const io = new IntersectionObserver(en => { if (en[0].isIntersecting) { load(); io.disconnect(); } }, { rootMargin: '400px' });
    io.observe(body);
  }
})();

/* ---------- misc ---------- */
$('#year').textContent = new Date().getFullYear();
