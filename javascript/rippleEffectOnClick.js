document.body.addEventListener('click', (e) => {
    const circle = document.createElement('div');
    circle.style.width = '100px';
    circle.style.height = '100px';
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.left = `${e.pageX - 50}px`;
    circle.style.top = `${e.pageY - 50}px`;
    circle.style.border = '1px solid black';
    circle.style.animation = 'rippleEffect 1s ease-out';
    document.body.appendChild(circle);
  
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes rippleEffect {
        0% {
          width: 10px;
          height: 10px;
          opacity: 1;
        }
        100% {
          width: 200px;
          height: 200px;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  
    circle.addEventListener('animationend', () => {
      circle.remove();
    });
  });
  