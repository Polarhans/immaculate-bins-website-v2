const t = document.getElementById('navToggle');
  const n = document.getElementById('navLinks');
  if(t){ t.addEventListener('click', () => n.classList.toggle('open')); }