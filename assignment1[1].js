// menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
    const open = menuBtn.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) nav.style.display = 'flex';
    else nav.style.display = '';
});

// smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href.length > 1) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
            // close mobile menu
            if (menuBtn.classList.contains('open')) {
                menuBtn.click();
            }
        }
    })
});

// testimonials simple slider
const track = document.getElementById('tTrack');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let idx = 0;
const cards = track ? track.children.length : 0;

if (track) {
    next.addEventListener('click', () => {
        idx = (idx + 1) % cards;
        track.style.transform = `translateX(-${idx * 100}%)`;
        track.style.transition = 'transform .45s ease';
    });
    prev.addEventListener('click', () => {
        idx = (idx - 1 + cards) % cards;
        track.style.transform = `translateX(-${idx * 100}%)`;
        track.style.transition = 'transform .45s ease';
    });
}

// appointment form (demo)
const form = document.getElementById('appointmentForm');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(form);
        // simple validation already by required attributes
        alert('Thanks! Your appointment request has been received.\n(Submission simulated for demo.)');
        form.reset();
    });
}