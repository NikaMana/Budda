const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

  Array.from(layers).forEach(layer => {
    
  }
}

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(wScroll);
})