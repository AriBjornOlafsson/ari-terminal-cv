function help() {
  sec('COMMANDS');
  Object.entries(DESCRIPTIONS).forEach(([cmd, desc]) => {
    append(`  ${g(cmd.padEnd(14))} ${gr(desc)}`);
  });
  nl();
  append(`  ${dim('─'.repeat(50))}`);
  append(`  ${gr('tip:')} ${dim('try')} ${g('neofetch')} ${dim('or')} ${g('sudo rm -rf /')}`);
}

function whoami() {
  nl();
  append(g('Ari Björn Ólafsson'));
  append(`Full-Stack Developer ${gr('·')} Platform & DevOps ${gr('·')} Reykjavik 🇮🇸`);
  nl();
  append(`I build backend systems, cloud infra, and whatever needs building.`);
  append(`Currently ${y('@ SÝN hf.')} — Iceland's largest media & telecom group.`);
  nl();
  append(`${gr('MBTI:')} ISTJ  ${gr('Uber:')} 4.86/5  ${gr('AirBnB:')} very positive`);
  nl();
}

function about() {
  whoami();
  append(gr('─'.repeat(54)));
  append(`Full-stack developer with a strong lean toward DevOps`);
  append(`and system architecture. Comfortable across the whole`);
  append(`stack — from database queries to CI/CD pipelines to`);
  append(`frontend React. Fan of clean infra and fast deploys.`);
  nl();
  append(`${g('Hackathon record:')} 2 wins, 1 finalist (3 for 3 podiums).`);
  append(`${g('Open source:')} ${b('github.com/AriBjornOlafsson')}`);
  nl();
}

function experience() {
  sec('EXPERIENCE');

  job(
    'Full-Stack Developer / DevOps',
    b('SÝN hf.'),
    gr('Jun 2025 — present'),
    [
      'Full-stack development across SÝN\'s media & telecom platform',
      'System architecture, DevOps, and infrastructure automation',
      'AWS cloud services, CI/CD pipeline management',
    ],
    'GitHub Actions · .NET · React · jQuery · AWS · Terraform · Vercel'
  );

  job(
    'Software Engineer / Client Service Specialist',
    b('CrewApp ehf.'),
    gr('Jan 2024 — Jun 2025'),
    [
      'Backend development for crew management SaaS platform',
      'Client-facing technical support and integration work',
      'Database architecture and optimisation',
    ],
    '.NET · SQL · Azure · TFS · Oracle'
  );

  job(
    'Senior Software Engineer',
    b('Tix EU ehf.'),
    gr('Mar 2023 — Feb 2024'),
    [
      'Senior engineering on Icelandic ticketing platform',
      'Full-stack development with MVC pattern',
      'AWS infrastructure and Node.js backend services',
    ],
    'MSSQL · .NET · MVC · jQuery · Node.js · AWS'
  );
}

function skills() {
  sec('SKILLS');

  append(y('  Languages'));
  append(`  ${['Python','C#','JavaScript','Java','SQL','Bash'].map(tag).join('')}`);
  nl();

  append(y('  Frameworks & Libraries'));
  append(`  ${['.NET','React','Django','Node.js','jQuery','MVC'].map(tag).join('')}`);
  nl();

  append(y('  Cloud & Infra'));
  append(`  ${['AWS','Azure','Google Cloud','Terraform','Kubernetes','Docker'].map(tag).join('')}`);
  nl();

  append(y('  Databases'));
  append(`  ${['SQL Server','PostgreSQL','Oracle','Redis','Elasticsearch'].map(tag).join('')}`);
  nl();

  append(y('  DevOps & Tools'));
  append(`  ${['CI/CD','GitHub Actions','AppVeyor','ECS','S3','IoT','SQS'].map(tag).join('')}`);
  nl();
}

function education() {
  sec('EDUCATION');

  append(`${y('BSc Computer Science')}  ${b('Háskólinn í Reykjavík')}  ${gr('(partial)')}`);
  append(`  ${gr('▸')} Computer science fundamentals, algorithms, software engineering`);
  nl();

  append(`${y('Programming Diploma')}  ${b('NTV')}  ${gr('2017–2018')}  ${gr('— highest grade')}`);
  append(`  ${gr('▸')} Formal programming education and software development`);
  nl();

  append(`${y('Matriculation Diploma')}  ${b('Menntaskólinn við Hamrahlíð')}  ${gr('(MH)')}`);
  nl();
}

function projects() {
  sec('PROJECTS');

  const projs = [
    ['Terminal Verslun',    'ssh localhost -p 2222',        'Icelandic SSH shop — tribute to terminal.shop',  'Go · Charm · BubbleTea'],
    ['Steam Wishlist Rank', 'github.com/AriBjornOlafsson',  'Find your rank in a Steam game\'s wishlist',      'Python · Steam API'],
    ['Font Glyph Extractor','github.com/AriBjornOlafsson',  'Extract and export glyphs from font files',       'Python'],
    ['Stack Game',          'github.com/AriBjornOlafsson',  'Classic stacking block game',                    'JavaScript'],
    ['Team Hark Data Maps', '—',                            'Collaborative data visualisation maps',           'React · D3'],
  ];

  projs.forEach(([name, url, desc, tech]) => {
    append(`${g(name)}  ${dim(url)}`);
    append(`  ${gr('▸')} ${desc}  ${gr('[')}${tag(tech.split(' · ')[0])}${gr(']')}`);
    nl();
  });
}

function hackathons() {
  sec('HACKATHONS');

  append(`${g('🏅 4th')}  ${y('Gervigreindarkeppni Íslands 2026')}  ${gr('— Open Division')}`);
  append(`  ${gr('▸')} Iceland's national AI competition — 4th place in the open division`);
  nl();

  append(`${g('🥇 1st')}  ${y('Santander Hackathon 2018')}  ${gr('— Best Technical Solution')}`);
  append(`  ${gr('▸')} Won best technical solution award at the Santander hackathon`);
  nl();

  append(`${g('🏅 Finalist')}  ${y('Data Hack Iceland 2020')}`);
  append(`  ${gr('▸')} Finalist in Iceland's premier data science hackathon`);
  nl();

  append(`${g('🥈 2nd')}  ${y('TM Software / Digi.me Hackathon 2017')}`);
  append(`  ${gr('▸')} 2nd place at the TM Software and Digi.me hackathon`);
  nl();

  append(`${gr('Record:')} ${g('4 events')} · ${g('1 win')} · ${g('1 x 2nd')} · ${g('1 finalist')} · ${g('1 x 4th')}`);
  nl();
}

function contact() {
  sec('CONTACT');
  append(`  ${g('email')}    ${b('ari@dynamo.is')}`);
  append(`  ${g('phone')}    ${w('+354 778 1213')}`);
  append(`  ${g('location')} ${gr('Reykjavik, Iceland 🇮🇸')}`);
  append(`  ${g('github')}   ${b('github.com/AriBjornOlafsson')}`);
  nl();
  append(`  ${gr('Feel free to reach out about:')} fullstack, devops, or a good pylsa.`);
  nl();
}

function interests() {
  sec('INTERESTS');
  const items = [
    ['🧗', 'Bouldering',  'indoor & outdoor climbing'],
    ['✈️',  'Travel',      'always planning the next trip'],
    ['🎮', 'Gaming',      'PC, board games, Magic: The Gathering'],
    ['🥏', 'Disc Golf',   'any course, any weather'],
    ['🏸', 'Badminton',   'competitive and casual'],
    ['🥾', 'Hiking',      'Iceland has the best trails'],
  ];
  items.forEach(([emoji, name, desc]) => {
    append(`  ${emoji}  ${y(name.padEnd(20))} ${gr(desc)}`);
  });
  nl();
  append(`  ${gr('Current MtG format:')} Commander  ${gr('Bouldering grade:')} still working on it`);
  nl();
}

function neofetch() {
  nl();
  const logo = [
    `         ${g('▄████▄')}`,
    `        ${g('████████')}`,
    `       ${g('██')}${b('██████')}${g('██')}`,
    `      ${g('████████████')}`,
    `     ${g('██')}${y('████████')}${g('██')}`,
    `    ${g('████████████████')}`,
    `   ${g('██')}${r('████')}${g('████')}${r('████')}${g('██')}`,
    `  ${g('████████████████████')}`,
  ];
  const info = [
    `${g('ari')}${dim('@')}${b('bjorn')}`,
    `${dim('─'.repeat(16))}`,
    `${g('OS:')}         Terminal CV v1.0`,
    `${g('Host:')}       Reykjavik, Iceland 🇮🇸`,
    `${g('Role:')}       Full-Stack Developer & DevOps`,
    `${g('Company:')}    SÝN hf.`,
    `${g('Languages:')}  Python, C#, JavaScript, Java`,
    `${g('Cloud:')}      AWS, Azure, GCP`,
    `${g('Shell:')}      zsh (and this)`,
    `${g('Uptime:')}     ${Math.floor((Date.now() - new Date('1989-12-13')) / (365.25*24*3600*1000))} years`,
    `${g('Hackathons:')} 1 win · 1 x 2nd · 1 finalist`,
    `${g('Uber:')}       ⭐ 4.86 / 5`,
    ``,
    `${['#ff5555','#ffcc00','#00ff99','#5ea3f0','#cc88ff','#ff88cc'].map(c => `<span style="background:${c};color:${c}">███</span>`).join('')}`,
  ];

  const neo = document.createElement('div');
  neo.className = 'neofetch-grid';

  const logoCol = document.createElement('div');
  logoCol.className = 'neofetch-logo';
  logo.forEach(line => {
    const row = document.createElement('div');
    row.innerHTML = line;
    logoCol.appendChild(row);
  });

  const infoCol = document.createElement('div');
  infoCol.className = 'neofetch-info';
  info.forEach(line => {
    const row = document.createElement('div');
    row.innerHTML = line || '&nbsp;';
    infoCol.appendChild(row);
  });

  neo.appendChild(logoCol);
  neo.appendChild(infoCol);
  out.appendChild(neo);
  out.scrollTop = out.scrollHeight;
  nl();
}

function clear() {
  out.innerHTML = '';
}

const DIR_ICONS = {
  whoami:     '👤',
  about:      '📄',
  experience: '💼',
  skills:     '⚙️',
  education:  '🎓',
  projects:   '🛠',
  hackathons: '🏆',
  contact:    '📬',
  interests:  '🎯',
  neofetch:   '🖥',
  cv:         '📋',
  clear:      '🗑',
  help:       '❓',
  ls:         '📁',
};

// Active ls grid state
let lsCursor = -1;
let lsGrid   = null;

function ls() {
  nl();
  const items = Object.entries(DESCRIPTIONS);

  const wrapper = document.createElement('div');
  wrapper.className = 'ls-grid';
  wrapper.id = 'ls-grid-active';

  items.forEach(([cmd, desc], i) => {
    const item = document.createElement('div');
    item.className = 'ls-item';
    item.dataset.cmd = cmd;
    item.dataset.idx = i;
    item.innerHTML =
      `<span class="ls-icon">${DIR_ICONS[cmd] || '📁'}</span>` +
      `<span class="ls-name">${cmd}/</span>` +
      `<span class="ls-desc">${desc}</span>`;
    item.addEventListener('click', () => runCmd(cmd));
    item.addEventListener('mouseenter', () => setLsCursor(i));
    wrapper.appendChild(item);
  });

  out.appendChild(wrapper);
  out.scrollTop = out.scrollHeight;
  nl();

  lsGrid   = wrapper;
  lsCursor = 0;
  setLsCursor(0);
  input.focus();
}

function setLsCursor(idx) {
  if (!lsGrid) return;
  const items = lsGrid.querySelectorAll('.ls-item');
  if (!items.length) return;
  lsCursor = (idx + items.length) % items.length;
  items.forEach((el, i) => el.classList.toggle('ls-focused', i === lsCursor));
  items[lsCursor].scrollIntoView({ block: 'nearest' });
}

function lsHandleKey(e) {
  if (!lsGrid) return false;
  const items = lsGrid.querySelectorAll('.ls-item');
  const cols = Math.round(lsGrid.offsetWidth / (items[0]?.offsetWidth || 200)) || 1;

  if (e.key === 'ArrowRight') { e.preventDefault(); setLsCursor(lsCursor + 1); return true; }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); setLsCursor(lsCursor - 1); return true; }
  if (e.key === 'ArrowDown')  { e.preventDefault(); setLsCursor(lsCursor + cols); return true; }
  if (e.key === 'ArrowUp')    { e.preventDefault(); setLsCursor(lsCursor - cols); return true; }
  if (e.key === 'Enter' && input.value === '') {
    e.preventDefault();
    const cmd = items[lsCursor]?.dataset.cmd;
    if (cmd) { lsGrid = null; lsCursor = -1; runCmd(cmd); }
    return true;
  }
  if (e.key === 'Escape') { lsGrid = null; lsCursor = -1; return true; }
  return false;
}

function sudo(args) {
  const cmd = args || 'make me a sandwich';
  if (cmd.includes('rm -rf') || cmd.includes('rm -r')) {
    append(r('nice try.'));
    return;
  }
  append(r(`sudo: permission denied — ari is not in the sudoers file.`));
  append(gr(`This incident will be reported.`));
}

function ssh(args) {
  if ((args || '').includes('terminal.shop')) {
    append(g('connecting to terminal.shop...'));
    setTimeout(() => append(gr('  Pseudo-terminal will not be allocated because stdin is not a terminal.')), 400);
    setTimeout(() => append(r('  (works better from a real terminal though)')), 800);
  } else {
    append(r(`ssh: connect to host ${args || 'unknown'}: Connection refused`));
  }
}

function uname() {
  append(`AriOS 1.0.0 bjorn arm64 ${new Date().getFullYear()}`);
}

function cmdDate() {
  append(new Date().toString());
}

function cmdCat(args) {
  if (!args) { append(r('cat: missing operand')); return; }
  if (args.match(/cv|resume|curricul/i)) {
    about(); experience(); skills(); education(); projects(); hackathons(); contact();
  } else {
    append(r(`cat: ${args}: No such file or directory`));
  }
}

function cmdExit() {
  append(gr('There is no escape. You are the CV now.'));
}

function easteregg() {
  append(g('You found the easter egg! 🥚'));
  nl();
  append(`Fun facts about Ari:`);
  append(`  ${gr('▸')} ${y('ISTJ')} — the "Logistician". Reliable, organised, occasionally pedantic.`);
  append(`  ${gr('▸')} Uber rating ${g('4.86/5')} — those 0.14 points are a mystery.`);
  append(`  ${gr('▸')} Built a terminal shop ${dim('(see: terminal-verslun)')} for fun.`);
  append(`  ${gr('▸')} Won ${g('Santander hackathon 2018')} with best technical solution.`);
  append(`  ${gr('▸')} Plays Commander. Has way too many lands.`);
  nl();
}

const COMMANDS = {
  help, whoami, about, experience, skills, education,
  projects, hackathons, contact, interests, clear,
  ls, neofetch, sudo, ssh, uname,
  date:   cmdDate,
  easter: easteregg,
  cat:    cmdCat,
  exit:   cmdExit,
  cv: () => { experience(); nl(); skills(); nl(); education(); },
};
