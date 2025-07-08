import { nextTick } from 'vue'

// Nuxt 3: questo file viene auto-usato dal router
export default async function scrollBehavior (
  to: { hash?: string },
  from: unknown,
  saved: { left: number; top: number } | null
) {
  // comportamento standard se c’è lo “storico”
  if (saved) return saved

  /* ——— ancora (#hash) ——— */
  if (to.hash) {
    // aspetta che il DOM sia pronto
    await nextTick()

    const el = document.querySelector(to.hash) as HTMLElement | null
    if (el) {
      // se usi navbar fissa ↑ imposta un offset
      const offset = 80                    // altezza Navbar
      return {
        el,
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      }
    }
  }

  /* ——— default ——— */
  return { left: 0, top: 0 }
}