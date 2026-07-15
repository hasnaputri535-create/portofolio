// Interaksi ringan untuk portofolio editorial-bento.
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

const loader = $('.page-loader');
let loading = 0;
const loadingTimer = setInterval(() => { loading += 10; loader.querySelector('b').textContent = `${loading}%`; if (loading >= 100) { clearInterval(loadingTimer); setTimeout(() => loader.classList.add('done'), 180); } }, 55);

$('#year').textContent = new Date().getFullYear();
const topbar = $('.topbar'), bar = $('.progress');
addEventListener('scroll', () => { topbar.classList.toggle('scrolled', scrollY > 10); bar.style.width = `${scrollY / (document.documentElement.scrollHeight - innerHeight) * 100}%`; }, { passive: true });

const menuButton = $('.menu-button'), nav = $('.topbar nav');
menuButton.onclick = () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', open); };
$$('.topbar nav a').forEach(link => link.onclick = () => nav.classList.remove('open'));

const theme = $('.theme-button');
if (localStorage.getItem('portfolio-theme') === 'dark') document.body.classList.add('dark');
function themeIcon() { theme.innerHTML = document.body.classList.contains('dark') ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>'; }
themeIcon(); theme.onclick = () => { document.body.classList.toggle('dark'); localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); themeIcon(); };

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; entry.target.classList.add('show'); $$('[data-count]', entry.target).forEach(count => { const total = +count.dataset.count; let value = 0; const tick = setInterval(() => { value++; count.textContent = value >= total ? `${total}+` : value; if (value >= total) clearInterval(tick); }, 65); }); $$('.skill-progress span', entry.target).forEach(bar => bar.style.width = bar.dataset.width); observer.unobserve(entry.target); }), { threshold: .15 });
$$('.reveal').forEach(element => observer.observe(element));

const words = ['Frontend Development', 'Creative Coding', 'UI Exploration'];
const target = $('#typing'); let word = 0, character = words[0].length, deleting = false;
setInterval(() => { target.textContent = words[word].slice(0, character); if (!deleting && character === words[word].length) deleting = true; else if (deleting && character === 0) { deleting = false; word = (word + 1) % words.length; } character += deleting ? -1 : 1; }, 110);

// Tombol proyek menggunakan tautan placeholder yang bisa diganti dengan URL asli.
$$('.project-info > div:first-child').forEach(info => { const actions = document.createElement('div'); actions.className = 'project-actions'; actions.innerHTML = '<a href="#">Demo</a><a href="#">GitHub</a><a href="#">Detail</a>'; info.append(actions); });

// Validasi form kontak sebelum nantinya dihubungkan ke layanan email/backend.
$('#contactForm').addEventListener('submit', event => { event.preventDefault(); const form = event.currentTarget, message = $('.form-message'); if (!form.checkValidity()) { message.textContent = 'Mohon lengkapi data dengan benar.'; form.reportValidity(); return; } message.textContent = 'Terima kasih! Pesan Anda siap dikirim.'; form.reset(); });
