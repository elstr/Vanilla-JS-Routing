import { createNode } from "../helpers/create-node"

export default function Item(props) {
    return (
        createNode('div', { class: 'row' },
            props
                ? createNode('div', { class: 'col-sm-12 offset-md-3 col-md-6 card' },
                    createNode('div', { class: 'card-body' },
                        createNode('h2', { class: 'card-title' }, `${props.title.toUpperCase()}`),
                        createNode('small', { class: 'text-city' }, `City: ${props.city_label}`),
                        createNode('p', { class: 'card-text' }, `${props.description}`),
                        createNode('small', { class: 'text-created' }, `Created: ${props.created}`),
                    )
                )
                : createNode('div', { class: 'error-container' },
                    createNode('h2', { class: 'title' }, `Sorry that item doesn't exist :( `),
                )
        )
    )
}
