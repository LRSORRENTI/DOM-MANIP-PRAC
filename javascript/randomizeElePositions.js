const elements = document.querySelectorAll('p, img, h1, h2, h3, h4, h5, h6, a, li');
elements.forEach(el => {
  el.style.position = 'relative';
  el.style.left = `${Math.random() * 100 - 50}px`;
  el.style.top = `${Math.random() * 100 - 50}px`;
});
