// Last updated: 23/06/2025

document.addEventListener('mousemove', (e) => {
  if (!followMouse) return;

  const dx = e.clientX - window.innerWidth / 2;
  const dy = e.clientY - window.innerHeight / 2;
  const mx = -dx * 0.025;
  const my = -dy * 0.025;

  const translate = `translate(calc(-50% + ${mx}px), calc(-50% + ${my}px))`;
  document.getElementById('m').style.transform = translate;
});

const m = document.getElementById('m');

m.addEventListener('mouseenter', () => {
  followMouse = false;
});

m.addEventListener('mousemove', (e) => {
  const rect = m.getBoundingClientRect();
  const x = e.clientX - (rect.left + rect.width / 2);
  const y = e.clientY - (rect.top + rect.height / 2);
  const rotateX = (-14 * y) / rect.height;
  const rotateY = (14 * x) / rect.width;

  m.style.transform = `translate(-50%, -50%) perspective(500px) scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

m.addEventListener('mouseleave', () => {
  followMouse = true;
  m.style.transform = 'translate(-50%, -50%)'; 
});