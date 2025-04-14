document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  document.getElementById('year').textContent = new Date().getFullYear();
  