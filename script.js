const text = document.querySelectorAll('.text');
const halfX = window.innerWidth / 2;
const halfY = window.innerHeight / 2;

text.forEach((el, i) => {
  TweenMax.to(el, 1, {
    z: 1 * (i + 8) });

});

document.addEventListener('mousemove', e => {
  text.forEach((el, i) => {
    TweenMax.to(el, 0.5, {
      x: (e.clientX - halfX) * (i + 1) * 0.01,
      y: (e.clientY - halfY) * (i + 1) * 0.01 });

  });
});