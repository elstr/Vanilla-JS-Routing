import {createNode} from "../helpers/create-node"
export default function Footer(){
    return (
        createNode('footer', { class: "footer" },
            createNode('a', { href: 'http://www.github.com/elstr' }, "Made with 💚 by Eleonora Lester"),
        )
    )
}
