document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.getElementById('galeria');

    const fotos = [
        { src: './images/1.jpeg' },
        { src: './images/2.jpeg' },
        { src: './images/3.jpeg' },
        { src: './images/4.jpeg' },
        { src: './images/5.jpeg' },
        { src: './images/6.jpeg' },
        { src: './images/7.jpeg' },
        { src: './images/8.jpeg' },
        { src: './images/9.jpeg' },
        { src: './images/10.jpeg' },
        { src: './images/11.jpeg' },
      ];

      fotos.forEach(foto => {
        const cardImg = document.createElement('div');
        cardImg.classList.add('card');
  
        const image = document.createElement('img');
        image.classList.add('image');
        image.setAttribute('src', foto.src)
        image.setAttribute('width', '350')
  
        cardImg.appendChild(image);
        galeria.appendChild(cardImg);
      });

});