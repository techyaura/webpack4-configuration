/**'
 * When Hot Module Replacement is enabled, 
 * module.hot is set to true for development and false for production, 
 * so these are stripped out of the bundle.
 */
if (module.hot) {
    module.hot.accept()
}

/** Import Scss file */
import './app.scss'

/** Default Content */
const root = document.createElement("div")
root.innerHTML = `<div class="webpack-demo">
                    <pre>Hello Webpack Config.</pre>
                `
document.body.appendChild(root);

/** Lazy Module button */
const button = document.createElement("button")
button.textContent = 'Load Lzy Module'
document.body.appendChild(button)
button.onclick = () => {
    import(/* webpackChunkName: "lzyMdodule" */ "./lazy-loading-module/lazy-module").then(lazyModule => {
        lazyModule.init()
    })
}