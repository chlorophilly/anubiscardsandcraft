/*
  Anubis motion layer. Runs only when <html> has the "motion" class (set in <head> unless the
  visitor prefers reduced motion). Pure progressive enhancement: delete this file and motion.css
  and the site still works.
*/
(() => {
  const html = document.documentElement;
  if (!html.classList.contains('motion')) return;
  window.__anubisMotion = true;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const fine = matchMedia('(pointer: fine)').matches;
  const small = matchMedia('(max-width: 760px)').matches;

  const hero = $('.hero'), stage = $('#stage'), inner = $('#stage-inner');
  const cards = $$('.stage .card');

  /* ======================================================================
     1. Hero intro: halo blooms, cards are dealt from the centre, Nubi lands
     ====================================================================== */
  const intro = () => {
    hero.classList.add('play');
    const order = [2, 1, 3, 0, 4]; // centre card first, then outwards
    const anims = cards.map((card, i) => {
      const rot = parseFloat(getComputedStyle(card).getPropertyValue('--rot')) || 0;
      const k = order.indexOf(i);
      return card.animate([
        { opacity: 0, transform: 'rotate(0deg) translateY(120px) scale(.55)' },
        { opacity: 1, offset: .35 },
        { opacity: 1, transform: `rotate(${rot}deg) translateY(0) scale(1)` }
      ], { duration: 1000, delay: 250 + k * 90, easing: 'cubic-bezier(.2, .9, .25, 1.2)', fill: 'both' });
    });
    Promise.all(anims.map(a => a.finished)).then(() => {
      hero.classList.add('dealt');
      anims.forEach(a => a.cancel());
    }).catch(() => hero.classList.add('dealt'));
  };
  const fontsReady = document.fonts ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 700))]) : Promise.resolve();
  let started = false;
  const start = () => { if (!started) { started = true; intro(); } };
  fontsReady.then(() => requestAnimationFrame(start));
  setTimeout(start, 1500); // never leave the hero empty if fonts or rAF stall

  /* ======================================================================
     2. Rotating game name in the English headline
     ====================================================================== */
  const rot = $('#rot');
  if (rot) {
    const words = [
      ['TCG', 'var(--gold)'], ['Lorcana', 'var(--lorcana)'], ['Magic', 'var(--mtg)'],
      ['Pokémon', 'var(--pokemon)'], ['One Piece', 'var(--onepiece)'], ['Riftbound', 'var(--riftbound)']
    ];
    rot.querySelector('.rot-word').remove();
    const els = words.map(([w, c], i) => {
      const s = document.createElement('span');
      s.className = 'rot-word' + (i === 0 ? ' on' : '');
      s.setAttribute('aria-hidden', 'true');
      s.textContent = w; s.style.color = c;
      rot.appendChild(s);
      return s;
    });
    // Keep the longest name on one line: shrink the slot if the column is narrower than the word.
    const fit = () => {
      rot.style.fontSize = '';
      const widest = Math.max(...els.map(e => e.scrollWidth));
      const avail = rot.closest('h1').clientWidth;
      if (widest > avail && avail > 0) rot.style.fontSize = (avail / widest).toFixed(3) + 'em';
    };
    let cur = 0, timer = null;
    const swap = () => {
      if (document.hidden || html.dataset.lang !== 'en' || heroOff) return;
      const prev = els[cur]; cur = (cur + 1) % els.length; const next = els[cur];
      prev.animate([{ opacity: 1, transform: 'none', filter: 'blur(0)' }, { opacity: 0, transform: 'translateY(-55%) rotateX(60deg)', filter: 'blur(6px)' }],
        { duration: 450, easing: 'cubic-bezier(.6, 0, .8, .3)' }).finished.then(() => prev.classList.remove('on'));
      next.classList.add('on');
      next.animate([{ opacity: 0, transform: 'translateY(55%) rotateX(-60deg)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }],
        { duration: 650, delay: 180, easing: 'cubic-bezier(.2, .9, .3, 1.2)', fill: 'backwards' });
    };
    fontsReady.then(() => { fit(); setTimeout(() => { timer = setInterval(swap, 2400); }, 2600); });
    addEventListener('resize', fit, { passive: true });
  }

  /* ======================================================================
     3. Pointer: stage tilt, holo light on the hero cards, game-card tilt, magnetic buttons
     ====================================================================== */
  if (fine) {
    let tx = 0, ty = 0, cx = 0, cy = 0, tiltRaf = 0;
    const tiltLoop = () => {
      cx = lerp(cx, tx, .12); cy = lerp(cy, ty, .12);
      inner.style.transform = `rotateY(${cx * 16}deg) rotateX(${-cy * 12}deg)`;
      tiltRaf = (Math.abs(cx - tx) > .001 || Math.abs(cy - ty) > .001) ? requestAnimationFrame(tiltLoop) : 0;
    };
    addEventListener('pointermove', (e) => {
      if (heroOff) return;
      const r = stage.getBoundingClientRect();
      tx = clamp((e.clientX - (r.left + r.width / 2)) / innerWidth, -.5, .5);
      ty = clamp((e.clientY - (r.top + r.height / 2)) / innerHeight, -.5, .5);
      if (!tiltRaf) tiltRaf = requestAnimationFrame(tiltLoop);
      // light source for the foil: brighter the closer the pointer is to the fan
      const near = 1 - clamp(Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)) / (r.width * .9), 0, 1);
      stage.style.setProperty('--holo', (.15 + near * .85).toFixed(2));
      for (const c of cards) {
        const cr = c.getBoundingClientRect();
        c.style.setProperty('--hx', ((e.clientX - cr.left) / cr.width * 100).toFixed(1) + '%');
        c.style.setProperty('--hy', ((e.clientY - cr.top) / cr.height * 100).toFixed(1) + '%');
      }
    }, { passive: true });

    $$('.games > .game').forEach(g => {
      g.addEventListener('pointermove', (e) => {
        const r = g.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        g.classList.add('tilting');
        g.style.setProperty('--rx', ((px - .5) * 12).toFixed(2) + 'deg');
        g.style.setProperty('--ry', ((.5 - py) * 10).toFixed(2) + 'deg');
        g.style.setProperty('--hx', (px * 100).toFixed(1) + '%');
        g.style.setProperty('--hy', (py * 100).toFixed(1) + '%');
      });
      g.addEventListener('pointerleave', () => {
        g.classList.remove('tilting');
        ['--rx', '--ry'].forEach(p => g.style.removeProperty(p));
      });
    });

    $$('.btn').forEach(b => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.translate = `${((e.clientX - r.left) / r.width - .5) * 12}px ${((e.clientY - r.top) / r.height - .5) * 10}px`;
      });
      b.addEventListener('pointerleave', () => { b.style.translate = ''; });
    });
  }

  /* ======================================================================
     4. Scroll engine: progress bar, header tuck, hero parallax, ticker speed, gallery drift
     ====================================================================== */
  const bar = $('.bar'), prog = $('.progress'), nav = $('#nav');
  const tickerEl = $('.ticker'), track = $('#ticker');
  const tickerAnim = () => track && track.getAnimations ? track.getAnimations()[0] : null;
  const gallery = $$('.gallery > figure:not(.g-nubi)');
  let lastY = scrollY, vel = 0, rate = 1, skew = 0, scrollRaf = 0, heroOff = false;

  const frame = () => {
    const y = scrollY, vh = innerHeight;
    const dy = y - lastY; lastY = y;
    vel = lerp(vel, dy, .25);

    const max = document.documentElement.scrollHeight - vh;
    prog.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);

    if (!nav.classList.contains('open') && !bar.contains(document.activeElement)) {
      if (y > 480 && dy > 4) bar.classList.add('tuck');
      else if (dy < -4 || y < 120) bar.classList.remove('tuck');
    }

    const hh = hero.offsetHeight || 1;
    hero.style.setProperty('--hp', clamp(y / hh, 0, 1).toFixed(3));

    // ticker: speeds up with scroll, runs backwards when scrolling up, leans into the motion
    const a = tickerAnim();
    const targetRate = 1 + clamp(Math.abs(vel) / 6, 0, 6) * Math.sign(vel || 1);
    rate = lerp(rate, Math.abs(vel) < .3 ? 1 : targetRate, .12);
    if (a) a.playbackRate = rate;
    skew = lerp(skew, clamp(-vel * .5, -14, 14), .15);
    tickerEl.style.setProperty('--skew', skew.toFixed(2) + 'deg');

    for (const f of gallery) {
      const r = f.getBoundingClientRect();
      if (r.bottom < -50 || r.top > vh + 50) continue;
      const pp = clamp((r.top + r.height / 2) / vh, 0, 1); // 1 entering at the bottom, 0 leaving at the top
      f.querySelector('img').style.setProperty('--py', (-14 * (1 - pp)).toFixed(2) + '%');
    }

    const settling = Math.abs(vel) > .05 || Math.abs(rate - 1) > .01 || Math.abs(skew) > .05;
    scrollRaf = settling ? requestAnimationFrame(frame) : 0;
  };
  const kick = () => { if (!scrollRaf) scrollRaf = requestAnimationFrame(frame); };
  addEventListener('scroll', kick, { passive: true });
  addEventListener('resize', kick, { passive: true });
  kick();

  /* ======================================================================
     5. Hero gold dust (canvas, paused off-screen and in background tabs)
     ====================================================================== */
  const cvs = $('#dust');
  if (cvs && cvs.getContext) {
    const ctx = cvs.getContext('2d');
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let W = 0, H = 0, motes = [], px = .5, py = .5, raf = 0;
    const size = () => {
      const r = hero.getBoundingClientRect();
      W = r.width; H = r.height;
      cvs.width = W * dpr; cvs.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(clamp(W * H / (small ? 16000 : 11000), 24, 90));
      motes = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H, z: .3 + Math.random() * .7,
        r: .6 + Math.random() * 1.8, s: .12 + Math.random() * .35, p: Math.random() * 6.28, hue: Math.random()
      }));
    };
    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      for (const m of motes) {
        m.y -= m.s * m.z; m.x += Math.sin(t / 1800 + m.p) * .15 * m.z;
        if (m.y < -10) { m.y = H + 10; m.x = Math.random() * W; }
        const ox = (px - .5) * 30 * m.z, oy = (py - .5) * 20 * m.z;
        const a = (.25 + .55 * (.5 + .5 * Math.sin(t / 700 + m.p * 3))) * m.z;
        ctx.fillStyle = m.hue > .7 ? `rgba(253, 224, 174, ${a})` : `rgba(245, 166, 35, ${a})`;
        ctx.beginPath(); ctx.arc(m.x + ox, m.y + oy, m.r * m.z, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    const run = () => { if (!raf && !heroOff && !document.hidden) raf = requestAnimationFrame(draw); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };
    size(); run();
    addEventListener('resize', () => { size(); }, { passive: true });
    if (fine) addEventListener('pointermove', (e) => { px = e.clientX / innerWidth; py = e.clientY / innerHeight; }, { passive: true });
    new IntersectionObserver(([e]) => { heroOff = !e.isIntersecting; heroOff ? stop() : run(); }).observe(hero);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : run());
  }

  /* ======================================================================
     6. Staggered groups: give each child its index (and a dealt-card tilt for games)
     ====================================================================== */
  const deal = [-7, 5, -4, 6, -5];
  [['.games', true], ['.gallery', false], ['.comm', false]].forEach(([sel, tilt]) => {
    const g = $(sel); if (!g) return;
    g.classList.add('stagger');
    [...g.children].forEach((c, i) => {
      c.style.setProperty('--i', i);
      if (tilt) c.style.setProperty('--deal', deal[i % deal.length] + 'deg');
    });
  });

  /* ======================================================================
     7. Big events: wrap the feature image in a flippable card, flip it on first sight.
        The list re-renders on language/filter changes, so re-decorate every time.
     ====================================================================== */
  const majors = $('#majors');
  let majorsSeen = false;
  const decorateMajors = () => {
    const f = majors.querySelector('.major-feature');
    if (f && !f.querySelector('.flipper')) {
      const mImg = f.querySelector('.m-img');
      if (mImg) {
        const img = mImg.querySelector('img');
        mImg.innerHTML = '';
        mImg.insertAdjacentHTML('beforeend',
          '<div class="flipper"><div class="flip-face flip-front"></div><div class="flip-face flip-back"><svg><use href="#mark"/></svg></div></div>');
        mImg.querySelector('.flip-front').appendChild(img);
      }
      if (majorsSeen) f.classList.add('flipped', 'instant');
    }
    if (majorsSeen) majors.classList.add('lit', 'instant');
  };
  if (majors) {
    decorateMajors();
    new MutationObserver(decorateMajors).observe(majors, { childList: true });
    const mo = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      majorsSeen = true; mo.disconnect();
      majors.classList.add('lit');
      const f = majors.querySelector('.major-feature'); if (f) f.classList.add('flipped');
    }, { threshold: .25 });
    mo.observe(majors);
  }

  /* ======================================================================
     8. Calendar: days slide in the direction you navigate
     ====================================================================== */
  const cal = $('#cal');
  if (cal) {
    let dir = 0;
    $('#cal-prev')?.addEventListener('click', () => { dir = -1; }, true);
    $('#cal-next')?.addEventListener('click', () => { dir = 1; }, true);
    new MutationObserver(() => {
      const r = cal.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) { dir = 0; return; }
      const month = !!cal.querySelector('.month');
      const items = $$(month ? '.cell, .agenda > *' : '.day', cal);
      items.forEach((el, i) => {
        const from = dir ? `translateX(${dir * 36}px)` : 'translateY(14px)';
        el.animate([{ opacity: 0, transform: from }, { opacity: 1, transform: 'none' }],
          { duration: 480, delay: i * (month ? 10 : 45), easing: 'cubic-bezier(.2, .8, .2, 1)', fill: 'backwards' });
      });
      dir = 0;
    }).observe(cal, { childList: true });
  }

  /* ======================================================================
     9. Map: draw the walking route, drop the pin, then Nubi walks from BTS Asok to the shop
     ====================================================================== */
  const map = $('.map');
  if (map) {
    const svg = map.querySelector('svg');
    const routes = $$('.route', svg);
    const main = routes[0];
    let walker = null, walking = false, mapOn = false;
    const NS = 'http://www.w3.org/2000/svg';

    const makeWalker = () => {
      const g = document.createElementNS(NS, 'g');
      g.setAttribute('class', 'walker');
      g.setAttribute('opacity', '0');
      const disc = document.createElementNS(NS, 'circle');
      const R = small ? 34 : 26; // the map scales down a lot on phones, so Nubi gets bigger there
      disc.setAttribute('r', R); disc.setAttribute('fill', '#F5A623');
      disc.setAttribute('stroke', '#0F0F0F'); disc.setAttribute('stroke-width', '3');
      const im = document.createElementNS(NS, 'image');
      im.setAttribute('href', 'img/nubi/nubi-stroll.png');
      im.setAttribute('x', -R * .86); im.setAttribute('y', -R * .95);
      im.setAttribute('width', R * 1.72); im.setAttribute('height', R * 1.72); // square source, square box: aspect ratio kept
      g.append(disc, im);
      svg.querySelector('.pin').before(g);
      return g;
    };

    const walk = () => {
      if (walking || !mapOn || document.hidden) return;
      walking = true;
      const len = main.getTotalLength();
      const dur = 6500; let t0 = 0;
      walker.setAttribute('opacity', '1');
      const step = (t) => {
        if (!t0) t0 = t;
        const k = clamp((t - t0) / dur, 0, 1);
        const e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; // ease in-out
        const p = main.getPointAtLength(e * len);
        const hop = Math.abs(Math.sin(k * Math.PI * 22)) * 4; // little steps
        walker.setAttribute('transform', `translate(${p.x.toFixed(1)} ${(p.y - (small ? 38 : 30) - hop).toFixed(1)})`);
        if (k < 1 && mapOn) return requestAnimationFrame(step);
        walker.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 400, fill: 'forwards' }).finished.then(() => {
          walker.getAnimations().forEach(a => a.cancel());
          walker.setAttribute('opacity', '0');
          walking = false;
          setTimeout(walk, 1600);
        });
      };
      requestAnimationFrame(step);
    };

    const draw = () => {
      map.classList.add('drawn');
      routes.forEach((r, i) => {
        const len = r.getTotalLength();
        Object.assign(r.style, { strokeDasharray: `${len} ${len}`, strokeDashoffset: len, animation: 'none' });
        r.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
          { duration: i ? 700 : 1400, delay: i ? 900 : 0, easing: 'cubic-bezier(.6, 0, .3, 1)', fill: 'both' })
          .finished.then(a => { a.cancel(); r.style.strokeDasharray = r.style.strokeDashoffset = r.style.animation = ''; });
      });
      walker = makeWalker();
      setTimeout(walk, 2300);
    };

    let drawn = false;
    new IntersectionObserver(([e]) => {
      mapOn = e.isIntersecting;
      if (mapOn && !drawn) { drawn = true; draw(); }
      else if (mapOn && walker) walk();
    }, { threshold: .35 }).observe(map);
  }

  /* ======================================================================
     10. Animated Nubi. Each clip is an H.264 MP4 with colour on the left half and the alpha
         matte on the right half (Safari cannot show transparent WebM, and Chrome cannot show
         transparent HEVC, so one packed MP4 + WebGL works everywhere). Poster PNG until ready.
     ====================================================================== */
  const VS = 'attribute vec2 p; varying vec2 uv; void main() { uv = vec2((p.x + 1.0) * 0.5, (1.0 - p.y) * 0.5); gl_Position = vec4(p, 0.0, 1.0); }';
  const FS = `precision mediump float; varying vec2 uv; uniform sampler2D t; uniform vec2 k;
    void main() {
      vec3 c = texture2D(t, vec2(k.x + uv.x * k.y, uv.y)).rgb;            // colour half (premultiplied on black)
      float a = texture2D(t, vec2(0.5 + k.x + uv.x * k.y, uv.y)).r;       // alpha half
      a = clamp((a - 0.03) / 0.94, 0.0, 1.0);                              // trim codec noise
      gl_FragColor = vec4(min(c, vec3(a)), a);
    }`;
  const nubiPlayer = (el) => {
    const w = +el.dataset.w, h = +el.dataset.h;
    const cv = document.createElement('canvas');
    cv.width = w * 2 <= 1400 ? w * 2 : w; cv.height = cv.width === w ? h : h * 2;  // draw at 2x for crisp edges
    const gl = cv.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false });
    if (!gl) return;
    const sh = (type, src) => { const o = gl.createShader(type); gl.shaderSource(o, src); gl.compileShader(o); return o; };
    const prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
    [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach(p => gl.texParameteri(gl.TEXTURE_2D, p, gl.CLAMP_TO_EDGE));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    const texW = w * 2; // keep samples half a texel away from the seam between the two halves
    gl.uniform2f(gl.getUniformLocation(prog, 'k'), 0.5 / texW, 0.5 - 1 / texW);
    gl.viewport(0, 0, cv.width, cv.height);

    const v = document.createElement('video');
    v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'auto';
    v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('aria-hidden', 'true');
    v.src = el.dataset.src;
    el.append(v, cv);

    let raf = 0, on = false;
    const draw = () => {
      if (v.readyState >= 2) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, v);
        gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        if (!el.classList.contains('live')) el.classList.add('live');
      }
    };
    const loop = () => { draw(); if (on) raf = v.requestVideoFrameCallback ? v.requestVideoFrameCallback(loop) : requestAnimationFrame(loop); };
    const start = () => { if (on || document.hidden) return; on = true; v.play().then(loop).catch(() => { on = false; }); };
    const stop = () => { on = false; v.pause(); if (!v.requestVideoFrameCallback) cancelAnimationFrame(raf); };
    new IntersectionObserver(([e]) => e.isIntersecting ? start() : stop(), { rootMargin: '120px' }).observe(el);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : (el.getBoundingClientRect().top < innerHeight && start()));
  };
  // build players lazily, a little before each one scrolls into view (the hero one right away)
  const lazy = new IntersectionObserver((es) => es.forEach(e => {
    if (!e.isIntersecting) return; lazy.unobserve(e.target); nubiPlayer(e.target);
  }), { rootMargin: '400px' });
  $$('.nubi-anim[data-src]').forEach(el => lazy.observe(el));

  /* ======================================================================
     11. Footer: the Anubis logo sting plays once when you reach the bottom (tap to replay)
     ====================================================================== */
  const sting = $('#sting');
  if (sting) {
    const box = sting.parentElement;
    const so = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; so.disconnect();
      sting.preload = 'auto';
      sting.play().then(() => box.classList.add('sting-on')).catch(() => box.classList.add('sting-fail'));
    }, { threshold: .6 });
    so.observe(box);
    sting.addEventListener('error', () => box.classList.add('sting-fail'));
    sting.addEventListener('click', () => { sting.currentTime = 0; sting.play().catch(() => {}); });
  }

  /* ======================================================================
     12. Language switch: a quick fade so the swap reads as intentional
     ====================================================================== */
  $$('[data-set-lang]').forEach(b => b.addEventListener('click', () => {
    $('main').animate([{ opacity: .2, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }],
      { duration: 420, easing: 'cubic-bezier(.2, .8, .2, 1)' });
    if (rot) requestAnimationFrame(() => dispatchEvent(new Event('resize')));
  }));
})();
