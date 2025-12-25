"use strict";

const documentActions = (e) => {
    const targetElement = e.target;
    if(targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('open-menu');
    }
};

document.addEventListener("click", documentActions)

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  // Процент от размера объекта 
  // При появлении которого срабатывает событие 
  // Где 0 это будет какое-то появление 
  // 1 это полное появление объекта в viewport
  threshold: 0.2,
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
    const currentElement = entry.target
    if (entry.isIntersecting) {
      currentElement.classList.add('--animate')
      //console.log('я тебя вижу')
    } else {
      currentElement.classList.remove('--animate')
      //console.log('я тебя не вижу')
    }
  })
}

const observer = new IntersectionObserver(callback, options)

const animElements = document.querySelectorAll('[class*="--anim"]')
animElements.forEach(animElement => {
  observer.observe(animElement)
})

