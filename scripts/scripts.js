document.addEventListener('DOMContentLoaded', function() {
    const mural = document.getElementById('mural');

    const projects = [
      { name: 'Adriana', href: './projetos/adriana/index.html' },
      { name: 'Clarice', href: './projetos/clarice/index.html'},
      { name: 'Edlaine', href: './projetos/edlaine/index.html'},
      { name: 'Giulia', href: './projetos/giulia/index.html'},
      { name: 'Vanessa - Instrutora', href: './projetos/vanessa/index.html' },
    ];
  
    projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('card');

      const link = document.createElement('a');
      link.classList.add('link');
      link.setAttribute('href', project.href)
      link.setAttribute('target', '_blank')
  
      const icon = document.createElement('i');
      icon.classList.add('fas', 'fa-paint-brush');
  
      const text = document.createElement('span');
      text.classList.add('card-text');
      text.textContent = project.name;
  
      card.appendChild(icon);
      card.appendChild(text);
      link.appendChild(card);
      mural.appendChild(link);
    });

  });
  