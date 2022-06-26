import RouterHandler from './router.js'
import setActiveLink from './utils/activeLink.js'
import './store.js'

window.onhashchange = () => {
  setActiveLink()
}

class App {
  constructor () {
    new RouterHandler()
  }
}

new App()
