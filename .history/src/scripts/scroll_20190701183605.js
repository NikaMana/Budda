console.log('this is scroll module');
function scrollToSel(sel){
  document.querySelector(sel).scrollIntoView({
    behavior: 'smooth'
  })
}

document.querySelector('.hero__scroll').addEventListener('click', () => {
  scrollToSel('.about')
})

let anchors = ['hero', 'about', 'skills', 'works', 'comments', 'contacts']
for (let anchor of anchors) {
  for (let sel of document.querySelectorAll("a[href='"+anchor+"']")) {
    sel.addEventListener('click', (e) => {
      e.preventDefault()
      scrollToSel('.'+anchor)
    })
  }
}