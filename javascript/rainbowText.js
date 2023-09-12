const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, li');
let hue = 0;
elements.forEach(el => {
  el.style.color = `hsl(${hue}, 100%, 50%)`;
  hue = (hue + 20) % 360;
});
