/* Mycoria deck — navigation only. No libraries. */
const deck = document.querySelector('.deck');
const slides = () => document.querySelectorAll('.slide');

function goTo(index) {
  const s = slides();
  if (index < 0 || index >= s.length) return;
  s[index].scrollIntoView({ behavior: 'smooth' });
}

function currentIndex() {
  return Math.round(deck.scrollTop / window.innerHeight);
}

document.addEventListener('keydown', (e) => {
  const ci = currentIndex();
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
    e.preventDefault();
    goTo(ci + 1);
  }
  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault();
    goTo(ci - 1);
  }
  if (e.key === 'Home') { e.preventDefault(); goTo(0); }
  if (e.key === 'End') { e.preventDefault(); goTo(slides().length - 1); }
});

const counter = document.querySelector('.slide-counter');
function updateCounter() {
  if (counter) counter.textContent = `${currentIndex() + 1} / ${slides().length}`;
}
deck.addEventListener('scroll', updateCounter, { passive: true });
window.addEventListener('resize', updateCounter);
updateCounter();
