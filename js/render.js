const out = document.getElementById('output');

function nl(n = 1) {
  for (let i = 0; i < n; i++) append('');
}

function append(html, cls = 'line') {
  const d = document.createElement('div');
  d.className = cls;
  d.innerHTML = html;
  out.appendChild(d);
  out.scrollTop = out.scrollHeight;
}

// Colour helpers
function g(s)   { return `<span class="c-green">${s}</span>`; }
function b(s)   { return `<span class="c-blue">${s}</span>`; }
function y(s)   { return `<span class="c-yellow">${s}</span>`; }
function r(s)   { return `<span class="c-red">${s}</span>`; }
function gr(s)  { return `<span class="c-gray">${s}</span>`; }
function w(s)   { return `<span class="bold">${s}</span>`; }
function dim(s) { return `<span class="c-dim">${s}</span>`; }
function tag(s) { return `<span class="tag">${s}</span>`; }

function sec(title) {
  nl();
  append(`<span class="sec-header">── ${title} ${'─'.repeat(Math.max(0, 52 - title.length))}</span>`);
  nl();
}

function job(title, company, dates, bullets, tech) {
  append(
    `<div class="job-card">` +
    `<span class="job-title">${title}</span>  ` +
    `<span class="job-company">${company}</span>  ` +
    `<span class="job-date">${dates}</span>` +
    bullets.map(d => `<br><span class="job-bullet">  ▸</span> ${d}`).join('') +
    `<br><span class="job-tech">  tech: ${tech}</span>` +
    `</div>`
  );
  nl();
}
