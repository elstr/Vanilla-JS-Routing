
import Header from './components/Header'
import Footer from './components/Footer'
import Paginator from './components/Paginator'

export default function App(props = { pages: 1, activePage: 1 }) {
  const { pathname } = window.location
  const el = document.getElementById('root');
  el.className = 'container-fluid'
  return {
    render(component) {
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
      }
      el.appendChild(Header())
      el.appendChild(component)
      !pathname === '/item' && el.appendChild(Paginator(props))
      el.appendChild(Footer())
    }
  }
}
