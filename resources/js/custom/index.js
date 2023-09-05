/**
 * Easy event listener function
 */
const onEvent = (type, el, listener, all = false) => {
        if (all) {
            document.querySelectorAll(el, all).forEach(e => e.addEventListener(type, listener))
        } else {
            document.querySelector(el, all).addEventListener(type, listener)
        } 
}
/**
 * Easy selector helper function
 */
const selectEvent = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
}
 /**
   * Easy on scroll event listener 
   */
 const onscrollEvent = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
export { onEvent, selectEvent,onscrollEvent };