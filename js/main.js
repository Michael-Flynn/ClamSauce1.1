(function() {
  "use strict";

  $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })     
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  let homeCarouselIndicators = select("#home-carousel-indicators")
  let homeCarouselItems = select('#homeCarousel .carousel-item', true)

  homeCarouselItems.forEach((item, index) => {
    (index === 0) ?
    homeCarouselIndicators.innerHTML += "<li data-target='#homeCarousel' data-slide-to='" + index + "' class='active'></li>":
      homeCarouselIndicators.innerHTML += "<li data-target='#homeCarousel' data-slide-to='" + index + "'></li>"
  });
 
})()

let removeCartItem = document.getElementsByClassName('btn-danger')
for (let i = 0; i < removeCartItem.length; i++) {
  let button = removeCartItem[i]
  button.addEventListener('click', function(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
  })
}
