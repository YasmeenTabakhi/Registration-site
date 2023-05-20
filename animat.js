window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")

  loader.classList.add("loader--hidden")

  loader.addEventListener("transitionend", () => {
    // document.body.removeChild(loader)
    loader.remove()
  })
})

// FOR MOBILE NAVBAR
const btnNavEl = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector(".header")

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open")
})
