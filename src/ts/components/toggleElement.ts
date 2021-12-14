const overlayEl = document.createElement("div")
overlayEl.classList.add("gi-overlay")

const outsideClickListener = (
  element: Element,
  toggleClass: string = "active"
): void => {
  const bodyEl = document.querySelector("body")
  document.addEventListener("mouseup", (event) => {
    let isClickedOutside = element.contains(event.target as Node) ? false : true
    if (isClickedOutside) {
      element.classList.remove(toggleClass)
      toggleOverlay(true)
      if (bodyEl) {
        bodyEl.classList.remove("gi-overlay-open")
      }
    }
  })
}

const toggleOverlay = (shouldRemove: boolean = false): void => {
  const overlayTempEL = document.querySelector(".gi-overlay")
  if (!overlayTempEL && !shouldRemove) {
    document.querySelector("body").appendChild(overlayEl)
    overlayEl.classList.add("gi-overlay--active")
  } else if (overlayTempEL) {
    document.querySelector("body").removeChild(overlayEl)
    overlayEl.classList.remove("gi-overlay--active")
  }
}

const toggleClass = (
  item: Element,
  targetEL: Element,
  targetSelector: string
): void => {
  const bodyEl = document.querySelector("body")
  item.addEventListener("click", (event) => {
    if (targetEL) {
      targetEL.classList.toggle("active")
      toggleOverlay()
      if (bodyEl) {
        bodyEl.classList.toggle("overlay-open")
      }
    } else {
      console.error(`Target element for "${targetSelector}" Id not found!`)
    }
  })
}

document.querySelectorAll("[data-gi-toggle]").forEach((item) => {
  const target: string = item.getAttribute("data-gi-toggle")
  const targetEL: Element = document.querySelector(`#${target}`)
  outsideClickListener(targetEL)
  toggleClass(item, targetEL, target)
})

document.querySelectorAll("[data-gi-dismiss]").forEach((item) => {
  const target: string = item.getAttribute("data-gi-dismiss")
  const targetEL: Element = document.querySelector(`#${target}`)
  toggleClass(item, targetEL, target)
})
