let fontSize = 10;
const animateSize = () => {
  const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, li');
  elements.forEach(el => {
    el.style.fontSize = `${fontSize}px`;
  });
  fontSize = (fontSize < 100) ? fontSize + 1 : 10;
  requestAnimationFrame(animateSize);
};
animateSize();
