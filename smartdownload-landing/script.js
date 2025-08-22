// Piccoli miglioramenti
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Link allo store: aggiorna quando pubblichi
document.getElementById('storeLink').addEventListener('click', (e) => {
  const href = e.currentTarget.getAttribute('href');
  if (!href || href === '#') {
    e.preventDefault();
    alert('Lo store sarà disponibile al lancio. Iscriviti alla waitlist!');
  }
});
