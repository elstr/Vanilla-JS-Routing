import { createNode } from '../helpers/create-node'

export default function Header() {
    const { pathname } = window.location
    return (
        createNode('div', { class: 'row' },
            createNode('div', { class: 'col-12' },
                pathname === '/item' ?
                    createNode('div', { class: 'offset-2 col-6' },
                        createNode('div', { class: 'btn btn-primary btn-back' },
                            createNode('a', { href: `list` }, `Back`)
                        )
                    ) : createNode('div', { class: 'logo' })
            )
        )
    )
}