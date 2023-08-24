window.onscroll = function() {
    // Récupère la position de défilement verticale de la page
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Si la position de défilement est supérieure à 4 pixels, ajoute une classe "scrolled" à la navbar
    if (scrollTop > 4) {
      document.querySelector(".navbar").classList.add("scrolled");
    } else {
      // Sinon, retire la classe "scrolled" de la navbar
      document.querySelector(".navbar").classList.remove("scrolled");
    }
  };
  // script.js
  const valuesContainer = document.querySelector('.values-carousel');
  const values = document.querySelectorAll('.value');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsContainer = document.querySelector('.dots');
  
  let currentIndex = 0;
  let interval;
  
  function showValue(index) {
      values.forEach((value, i) => {
          value.style.transform = `translateX(${100 * (i - index)}%)`;
          value.classList.remove('active');
      });
      values[index].classList.add('active');
      updateDots(index);
  }
  
  function nextValue() {
      currentIndex = (currentIndex + 1) % values.length;
      showValue(currentIndex);
  }
  
  function prevValue() {
      currentIndex = (currentIndex - 1 + values.length) % values.length;
      showValue(currentIndex);
  }
  
  function createDots() {
      for (let i = 0; i < values.length; i++) {
          const dot = document.createElement('div');
          dot.classList.add('dot');
          dot.addEventListener('click', () => {
              currentIndex = i;
              showValue(currentIndex);
          });
          dotsContainer.appendChild(dot);
      }
      updateDots(currentIndex);
  }
  
  function updateDots(index) {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
      });
  }
  
  nextBtn.addEventListener('click', nextValue);
  prevBtn.addEventListener('click', prevValue);
  
  createDots();
  showValue(currentIndex);
  
  interval = setInterval(nextValue, 5000); // Change de valeur toutes les 5 secondes
  
  valuesContainer.addEventListener('mouseenter', () => {
      clearInterval(interval);
  });
  
  valuesContainer.addEventListener('mouseleave', () => {
      interval = setInterval(nextValue, 5000);
  });
  // scripts.js
  const icons = document.querySelectorAll('.icon img');
  
  icons.forEach(icon => {
      icon.addEventListener('click', () => {
          icons.forEach(i => i.classList.remove('active'));
          icon.classList.add('active');
      });
  });



  function showAnimation(serviceName) {
      // Votre fonction d'animation ici
  }


    // Ajoutez d'autres services de la même manière -->


  function showAnimation(serviceName) {
    // Obtenez l'élément du service
    var serviceElement = document.querySelector('.' + serviceName);

    // Ajoutez la classe d'animation 'animate__bounceIn' pour l'animation
    serviceElement.classList.add('animate__animated', 'animate__bounceIn');

    // Supprimez la classe d'animation après l'achèvement de l'animation
    serviceElement.addEventListener('animationend', function() {
        serviceElement.classList.remove('animate__animated', 'animate__bounceIn');
    });
}
const icon = document.getElementById('icon');
const menuItems = document.getElementById('menuItems');

icon.addEventListener('click', () => {
  menuItems.classList.toggle('active');
})
;
