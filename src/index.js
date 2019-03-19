import App from './app';
import List from './components/List';
import Item from './components/Item';
import './styles/app.css';
import DATA from "./data.json"

const pages = DATA.length
let currentPage = 1
let reRender = false


const ads = DATA.reduce((acc, val) => {
    acc = acc.concat(val.ads)
    return acc
},[])


function handlePageChange({ path }) {
    const page = path[0].value
    if (currentPage !== page) reRender = true
    currentPage = page
    reRender && init()
    reRender = false
}


function init() {
    const app = App({ pages, handlePageChange, currentPage });
    let component
    if (window.location.search) {
        const search = window.location.search.split('?')[1]
        const selectedItem = ads.find(f => f.id === search)
        component = Item(selectedItem)
    } else {
        component = List(DATA[currentPage - 1])
    }
    app.render(component);
}

init()

