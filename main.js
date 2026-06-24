/* ── DATA ── */
const CATEGORIES = [
  { id:'cad', name:'CAD & Design', icon:'📐', desc:'Parametric modeling and drafting software.' },
  { id:'aero-sw', name:'Aerospace Software', icon:'✈️', desc:'Specialized aircraft & flight analysis tools.' },
  { id:'programming', name:'Programming', icon:'⌨️', desc:'Languages used across analysis & simulation.' },
  { id:'cfd', name:'CFD & Simulation', icon:'🌀', desc:'Computational fluid dynamics & solvers.' },
  // { id:'aircraft-design', name:'Aircraft Design', icon:'🛫', desc:'Conceptual & preliminary design references.' },
  { id:'learning', name:'Best Courses & Certifications', icon:'🎓', desc:'Full courses from top universities.' },
];

const RESOURCES = [
  r('AutoCAD','cad','Industry-standard 2D/3D drafting and design software.','https://nustedupk0-my.sharepoint.com/personal/amoeed_ug25smme_student_nust_edu_pk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Famoeed%5Fug25smme%5Fstudent%5Fnust%5Fedu%5Fpk%2FDocuments%2Flaptops%2FUtilities%2FAutoCAD%202026&ga=1'),
  r('SolidWorks','cad','Parametric 3D CAD platform widely used in mechanical design.','https://nustedupk0-my.sharepoint.com/:f:/g/personal/ali_ug25smme_student_nust_edu_pk/IgDorxPePeLkS4yfFRRYRbysAUV6j90ESto2JjByQjzCZ64?e=6Hlqk6'),
  r('CATIA','cad','High-end CAD/CAM/CAE suite used across the aerospace industry.','https://nustedupk0-my.sharepoint.com/:f:/g/personal/ali_ug25smme_student_nust_edu_pk/IgCOy0cw5qL6QL2wyFFnVJKvAYKOlEwpDoLO_TEbkuRgB3o?e=c7Gea0'),
  r('Fusion 360','cad','Cloud-based CAD/CAM tool combining design and simulation.','https://dl.appstreaming.autodesk.com/production/installers/Fusion%20Client%20Downloader.exe'),
  r('XFLR5','aero-sw','Airfoil and wing analysis tool based on panel methods.','https://nustedupk0-my.sharepoint.com/:f:/g/personal/ali_ug25smme_student_nust_edu_pk/IgB6XYRdCduyR7BZjEgJ82ORAbkBeCOS8pI5UUJ1Y8pj--M?e=Ifvbqk'),
  r('OpenVSP','aero-sw','NASA\'s open-source parametric aircraft geometry tool.','http://openvsp.org'),
  r('AVL','aero-sw','Vortex-lattice method tool for aerodynamic & stability analysis.','https://web.mit.edu/drela/Public/web/avl/'),
  r('FlightGear','aero-sw','Open-source flight simulator for aircraft modeling.','https://www.flightgear.org'),
  r('OpenRocket','aero-sw','Open-source model rocket design and simulation tool.','https://openrocket.info'),
  r('SU2 CFD','aero-sw','Open-source suite for multiphysics simulation and design.','https://su2code.github.io'),
  r('Python','programming','General-purpose language widely used for engineering scripting.','https://www.python.org'),
  r('MATLAB','programming','Numerical computing environment used across engineering disciplines.','https://rutracker.org/forum/viewtopic.php?t=6355609'),
  r('VSCode','programming','A powerful, lightweight code editor for building web and cloud applications.','https://code.visualstudio.com/download?_exp_download=fb315fc982'),
  r('ANSYS Fluent','cfd','Commercial CFD solver for complex fluid flow problems.','https://rutracker.org/forum/viewtopic.php?t=6825672'),
  r('OpenFOAM','cfd','Open-source CFD toolbox for complex fluid simulations.','https://www.openfoam.com'),
  r('STAR-CCM+','cfd','Multiphysics CFD platform for engineering simulation.','https://www.plm.automation.siemens.com/global/en/products/simcenter/STAR-CCM.html'),
  r('COMSOL','cfd','Multiphysics simulation platform for coupled phenomena.','https://www.comsol.com'),
  r('Raymer Resources','aircraft-design','Reference material based on Raymer\'s aircraft design methodology.','#'),
  r('Roskam Resources','aircraft-design','Design references following Roskam\'s preliminary design series.','#'),
  r('OpenVSP Tutorials','aircraft-design','Step-by-step guides for parametric aircraft modeling.','http://openvsp.org/wiki/doku.php'),
  r('Aircraft Design Notes','aircraft-design','Compiled coursework notes on conceptual aircraft design.','#'),
  r('Gas Turbine Resources','propulsion','References on Brayton-cycle engines and turbomachinery.','#'),
  r('Rocket Propulsion Resources','propulsion','Materials covering rocket engine theory and design.','#'),
  r('NASA Propulsion Documents','propulsion','Technical documents on aircraft and rocket propulsion.','https://ntrs.nasa.gov'),
  r('Finite Element Analysis','structures','Foundational resources on FEA theory and application.','#'),
  r('NASTRAN','structures','Industry-standard solver for structural analysis.','https://www.nasa.gov/nastran/'),
  r('Abaqus','structures','Advanced FEA suite for complex structural simulation.','https://www.3ds.com/products/simulia/abaqus'),
  r('Structural Design Resources','structures','References on load paths, sizing, and margins of safety.','#'),
  r('Calculus','math','Core resources covering single and multivariable calculus.','#'),
  r('Linear Algebra','math','Matrix theory and vector spaces for engineering analysis.','#'),
  r('Differential Equations','math','ODE/PDE theory underlying dynamic engineering systems.','#'),
  r('Numerical Methods','math','Computational techniques for solving engineering problems.','#'),
  r('Classical Mechanics','physics','Newtonian and Lagrangian mechanics fundamentals.','#'),
  r('Fluid Mechanics','physics','Foundational fluid behavior theory for aerodynamics & CFD.','#'),
  r('Thermodynamics','physics','Energy, cycles, and heat transfer fundamentals.','#'),
  r('Electromagnetism','physics','Field theory relevant to avionics and sensors.','#'),
  r('Google Scholar','research','Search engine for scholarly literature across disciplines.','https://scholar.google.com'),
  r('NASA Technical Reports Server','research','NASA\'s archive of technical reports and publications.','https://ntrs.nasa.gov'),
  r('ResearchGate','research','Network for sharing and discovering academic research.','https://www.researchgate.net'),
  r('arXiv','research','Open-access repository of scientific preprints.','https://arxiv.org'),
  r('Coursera','learning','Online courses and specializations from top universities.','https://www.coursera.org'),
  r('Coding for Everyone: C and C++','learning','Learn programming fundamentals using C and C++, from basic concepts to problem-solving and software development.','https://www.coursera.org/programs/hec-dlsei-3-0-cohort-3-51r24/specializations/coding-for-everyone?source=search'),
  r('Internet of Things (IoT) Specialization','learning','Learn IoT architecture, embedded systems, sensors, networking, and connected device development.','https://www.coursera.org/programs/hec-dlsei-3-0-cohort-3-51r24/specializations/iot?source=search'),
  r('The Arduino Platform and C Programming','learning','Introduction to Arduino hardware, embedded programming, sensors, and microcontroller applications.','https://www.coursera.org/programs/hec-dlsei-3-0-cohort-3-51r24/learn/arduino-platform?source=search'),
  r('3D CAD Fundamental using SOLIDWORKS','learning','Master SOLIDWORKS for 3D modeling, assemblies, engineering drawings, and mechanical design workflows.','https://www.coursera.org/programs/hec-dlsei-3-0-cohort-3-51r24/specializations/practice-solidworks-3d-cad?source=search'),
  r('CATIA Mechanical Designer Professional Certificate','learning','Learn CATIA for mechanical design, part modeling, assemblies, surface design, and engineering workflows.','https://www.coursera.org/programs/hec-dlsei-3-0-cohort-3-51r24/specializations/catia-mechanical-designer?source=search'),
  r('Applied Computational Fluid Dynamics','learning','Introduction to CFD concepts, numerical methods, fluid flow analysis, and engineering simulations.','https://www.coursera.org/programs/hec-dlsei-3-0-cohort-3-51r24/learn/applied-computational-fluid-dynamics?source=search'),
  r('Scientific Computing with Python','learning','Learn Python programming, data structures, algorithms, scientific computing, and software development fundamentals.','https://www.freecodecamp.org/learn/python-v9/'),,
  r('Introduction to Flight (Anderson)','books','Foundational aerodynamics and flight mechanics textbook.','#'),
  r('Aircraft Design: A Conceptual Approach (Raymer)','books','The standard reference for conceptual aircraft design.','#'),
  r('Fundamentals of Aerodynamics (Anderson)','books','Core aerodynamics theory and methods textbook.','#'),
  r('Mechanics of Materials (Hibbeler)','books','Standard reference for structural mechanics fundamentals.','#'),
];

function r(name, cat, desc, url){ return { name, cat, desc, url }; }

const FEATURED_NAMES = ['NASA Technical Reports Server','MIT OpenCourseWare','OpenVSP','XFLR5','Raymer Resources','OpenFOAM'];

const SENIOR_FOLDERS = [
  { name:'Senior\'s Drive for 1st Semester', desc:'Capstone project files & final design reports.', url:'#' },
  { name:'Senior\'s Drive for 2nd Semester', desc:'Structures coursework, FEA models, and homework sets.', url:'#' },
  { name:'Senior\'s Drive for 3rd Semester', desc:'Propulsion lab reports and turbine cycle analyses.', url:'https://drive.google.com/drive/folders/1sDHCr1ed38PvZPFx7n1e7n6T5FP--e-z' },
  { name:'Senior\'s Drive for 4th Semester', desc:'CFD case files and simulation setup templates.', url:'#' },
];

const LINKS_DIRECTORY = {
  'Aerospace': [['NASA','https://www.nasa.gov'],['ESA','https://www.esa.int'],['FAA','https://www.faa.gov'],['EASA','https://www.easa.europa.eu'],['AIAA','https://www.aiaa.org'],['NACA Reports Archive','https://ntrs.nasa.gov']],
  'Learning': [['MIT OCW','https://ocw.mit.edu'],['Stanford Engineering','https://engineering.stanford.edu'],['Harvard Engineering','https://seas.harvard.edu']],
  'Research': [['Google Scholar','https://scholar.google.com'],['arXiv','https://arxiv.org'],['ResearchGate','https://www.researchgate.net']],
  'Design': [['GrabCAD','https://grabcad.com'],['Thingiverse','https://www.thingiverse.com'],['Engineering Toolbox','https://www.engineeringtoolbox.com']],
  'Programming': [['Python Docs','https://docs.python.org'],['MATLAB Docs','https://www.mathworks.com/help/matlab/'],['NumPy','https://numpy.org'],['SciPy','https://scipy.org'],['Matplotlib','https://matplotlib.org']],
  'Simulation': [['OpenFOAM','https://www.openfoam.com'],['SU2','https://su2code.github.io'],['SimScale','https://www.simscale.com']],
  'Data Sources': [['NASA Data Portal','https://data.nasa.gov'],['NOAA Data','https://www.noaa.gov/data'],['ESA Data','https://www.esa.int/Applications/Observing_the_Earth']],
  'Aviation': [['SkyVector','https://skyvector.com'],['FlightRadar24','https://www.flightradar24.com'],['Airfoil Tools','http://airfoiltools.com']],
  'Career': [['Aerospace Internships','#'],['Aerospace Job Boards','#'],['Graduate Opportunities','#']],
};

/* ── BOOKMARKS ── */
const BOOKMARK_KEY = 'aerohub_bookmarks_v1';
const THEME_KEY = 'aerohub_theme_v1';
function getBookmarks(){ try { return JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || []; } catch { return []; } }
function setBookmarks(arr){ localStorage.setItem(BOOKMARK_KEY, JSON.stringify(arr)); }
function isBookmarked(name){ return getBookmarks().includes(name); }
function toggleBookmark(name){
  let bms = getBookmarks();
  if (bms.includes(name)){ bms = bms.filter(n=>n!==name); showToast('Removed from bookmarks'); }
  else { bms.push(name); showToast('Bookmarked'); }
  setBookmarks(bms);
  renderBookmarks();
  updateStats();
  document.querySelectorAll(`[data-bookmark-name]`).forEach(btn => {
    if (btn.dataset.bookmarkName === name){
      const active = isBookmarked(name);
      btn.dataset.active = active;
      btn.setAttribute('aria-pressed', active);
      btn.textContent = active ? '★' : '☆';
      btn.style.color = active ? '#5EE6D0' : '';
    }
  });
}

/* ── RENDER HELPERS ── */
function resRow(res){
  const active = isBookmarked(res.name);
  const href = res.url && res.url !== '#' ? `href="${res.url}" target="_blank" rel="noopener noreferrer"` : 'href="#"';
  return `<li class="res-row">
    <span class="res-bullet" aria-hidden="true"></span>
    <span class="flex-1 min-w-0">
      <a ${href} class="res-link">${res.name}</a>
      <span class="res-desc">— ${res.desc}</span>
    </span>
    <button class="bookmark-btn shrink-0 text-base leading-none px-1 transition-colors hover:text-accent font-mono"
      data-active="${active}" data-bookmark-name="${escA(res.name)}"
      aria-label="Bookmark ${escA(res.name)}" aria-pressed="${active}"
      style="color:${active?'#5EE6D0':'#8B97A6'}">${active?'★':'☆'}</button>
  </li>`;
}

function escA(s){ return String(s).replace(/"/g,'&quot;'); }
function catLabel(id){ const c = CATEGORIES.find(c=>c.id===id); return c?c.name:id; }

/* ── RENDER SECTIONS ── */
function renderAllCategories(){
  const el = document.getElementById('category-detail');
  el.innerHTML = CATEGORIES.map(cat => {
    const items = RESOURCES.filter(r => r.cat === cat.id);
    return `<div class="cat-section">
      <h3 class="text-sm font-semibold text-ink mb-3 flex items-center gap-2">
        <span aria-hidden="true">${cat.icon}</span> ${cat.name}
        <span class="font-mono text-mute text-xs font-normal">(${items.length})</span>
      </h3>
      <ul class="space-y-0">${items.map(resRow).join('')}</ul>
    </div>`;
  }).join('');
}

function renderFeatured(){
  const items = RESOURCES.filter(r=>FEATURED_NAMES.includes(r.name));
  document.getElementById('featured-list').innerHTML = items.map(resRow).join('');
}

function renderSenior(){
  document.getElementById('senior-list').innerHTML = SENIOR_FOLDERS.map(f=>`
    <li class="res-row">
      <span class="res-bullet" style="background:#3B82F6" aria-hidden="true"></span>
      <span class="flex-1">
        <a href="${f.url}" class="res-link">📁 ${f.name}</a>
        <span class="res-desc">— ${f.desc}</span>
      </span>
    </li>`).join('');
}

function renderLinksDirectory(){
  document.getElementById('links-directory').innerHTML = Object.entries(LINKS_DIRECTORY).map(([group, items])=>`
    <div>
      <h3 class="font-mono text-xs uppercase tracking-wide text-mute mb-3">${group}</h3>
      <ul class="space-y-0">
        ${items.map(([label,url])=>`
          <li class="res-row">
            <span class="res-bullet" aria-hidden="true"></span>
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="res-link">${label}</a>
          </li>`).join('')}
      </ul>
    </div>`).join('');
}

function renderBookmarks(){
  const bms = getBookmarks();
  const list = document.getElementById('bookmarks-list');
  const empty = document.getElementById('bookmarks-empty');
  const items = RESOURCES.filter(r=>bms.includes(r.name));
  if(items.length===0){ list.innerHTML=''; empty.classList.remove('hidden'); }
  else { empty.classList.add('hidden'); list.innerHTML=items.map(resRow).join(''); }
}

function renderFilterChips(){
  const chips = CATEGORIES.map(c=>`<button class="tag-chip px-3 py-1.5 rounded-full border border-line text-xs font-mono text-mute hover:text-ink transition-colors" data-filter-cat="${c.id}">${c.name}</button>`).join('');
  document.getElementById('filter-chips').innerHTML=`<button class="tag-chip active px-3 py-1.5 rounded-full border border-line text-xs font-mono" data-filter-cat="all">All</button>${chips}`;
}

function updateStats(){
  document.getElementById('stat-total').textContent=RESOURCES.length;
  document.getElementById('stat-categories').textContent=CATEGORIES.length;
  document.getElementById('stat-bookmarks').textContent=getBookmarks().length;
}

/* ── SEARCH / FILTER ── */
let activeCategoryFilter='all';
function runSearch(){
  const q=document.getElementById('search-input').value.trim().toLowerCase();
  const section=document.getElementById('search-results-section');
  const list=document.getElementById('search-results-list');
  const noR=document.getElementById('no-results');
  const countEl=document.getElementById('search-results-count');
  if(q===''&&activeCategoryFilter==='all'){ section.classList.add('hidden'); countEl.textContent=''; return; }
  let results=RESOURCES.filter(r=>{
    const mq=q===''||r.name.toLowerCase().includes(q)||r.desc.toLowerCase().includes(q)||catLabel(r.cat).toLowerCase().includes(q);
    const mc=activeCategoryFilter==='all'||r.cat===activeCategoryFilter;
    return mq&&mc;
  });
  section.classList.remove('hidden');
  countEl.textContent=`${results.length} result${results.length===1?'':'s'}`;
  if(results.length===0){ list.innerHTML=''; noR.classList.remove('hidden'); }
  else { noR.classList.add('hidden'); list.innerHTML=results.map(resRow).join(''); }
}

/* ── TOAST ── */
let toastTimer;
function showToast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.remove('hidden'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.add('hidden'),2000); }

/* ── THEME ── */
function applyTheme(theme){
  document.documentElement.classList.toggle('dark',theme==='dark');
  document.getElementById('icon-moon').classList.toggle('hidden',theme!=='dark');
  document.getElementById('icon-sun').classList.toggle('hidden',theme==='dark');
  document.body.classList.toggle('bg-base',theme==='dark');
  document.body.classList.toggle('bg-slate-50',theme!=='dark');
  document.body.classList.toggle('text-slate-900',theme!=='dark');
}

/* ── EVENTS ── */
document.addEventListener('click', e=>{
  const bmBtn=e.target.closest('.bookmark-btn');
  if(bmBtn){ toggleBookmark(bmBtn.dataset.bookmarkName); return; }
  const chip=e.target.closest('.tag-chip');
  if(chip){ document.querySelectorAll('.tag-chip').forEach(c=>c.classList.remove('active')); chip.classList.add('active'); activeCategoryFilter=chip.dataset.filterCat; runSearch(); return; }
});
document.getElementById('search-input').addEventListener('input', runSearch);
document.getElementById('theme-toggle').addEventListener('click',()=>{
  const cur=document.documentElement.classList.contains('dark')?'dark':'light';
  const next=cur==='dark'?'light':'dark';
  applyTheme(next); localStorage.setItem(THEME_KEY,next);
});
document.getElementById('mobile-menu-btn').addEventListener('click',()=>{
  const menu=document.getElementById('mobile-menu');
  const btn=document.getElementById('mobile-menu-btn');
  const isHidden=menu.classList.contains('hidden');
  menu.classList.toggle('hidden');
  btn.setAttribute('aria-expanded',String(isHidden));
});
document.querySelectorAll('#mobile-menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobile-menu').classList.add('hidden')));
window.addEventListener('scroll',()=>{ document.getElementById('scroll-top').classList.toggle('hidden',window.scrollY<500); });
document.getElementById('scroll-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ── INIT ── */
document.getElementById('year').textContent=new Date().getFullYear();
renderAllCategories();
renderFeatured();
renderSenior();
renderLinksDirectory();
renderBookmarks();
renderFilterChips();
updateStats();
applyTheme(localStorage.getItem(THEME_KEY)||'dark');