/** Lazy Load Module */
export function init() {
  const root = document.createElement("div")
  root.innerHTML = `<p>Hey I am a lazy-load module</p>`
  document.body.appendChild(root)
}