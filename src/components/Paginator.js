import { createNode } from "../helpers/create-node"
export default function Paginator(props) {
    let pages = []
    for (var i = 1; i <= props.pages; i++) {
        pages.push(createNode('button',
            {
                style: "margin-right: 10px",
                class: `btn-paginator ${i == props.currentPage ? 'btn-secondary' : ''}`,
                id: `page-${i}`,
                value: i,
                onClick: e => props.handlePageChange(e)
            }, `${i}`))
    }
    return createNode('div', { class: 'paginator' }, ...pages)
}

