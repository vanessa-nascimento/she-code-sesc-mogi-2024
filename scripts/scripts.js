document.addEventListener('DOMContentLoaded', function() {
    const mural = document.getElementById('mural');
    const projects = [
      { name: 'Vanessa' },
      { name: 'Teste' },
    ];
  
    projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const icon = document.createElement('i');
      icon.classList.add('fas', 'fa-paint-brush');
  
      const text = document.createElement('span');
      text.classList.add('card-text');
      text.textContent = project.name;
  
      card.appendChild(icon);
      card.appendChild(text);
      mural.appendChild(card);
    });
  });
  