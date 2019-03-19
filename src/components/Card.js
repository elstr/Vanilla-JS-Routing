import { createNode } from "../helpers/create-node"
export default function Card(props) {
    return (
        createNode('li', { class: ' col-sm-12 col-md-3 card' },
            createNode('div', { class: 'card-body' },
                createNode('h3', {class: 'card-title'}, `${props.title}`),
                createNode('p', { class: 'card-text' }, `${props.description}`),
                createNode('a', { href: `item?${props.id}`, 'data-item': {props}, class: "btn btn-primary btn-see-more" }, `See more`)
            )
        )
    )
}

