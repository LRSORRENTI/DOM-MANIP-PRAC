const elements = document.querySelectorAll('p, img, h1, h2, h3, h4, h5, h6, a, li');
elements.forEach(el => {
  el.style.transform = `rotate(${Math.random() * 360}deg)`;
});
