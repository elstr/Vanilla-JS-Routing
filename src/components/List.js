
import { createNode } from "../helpers/create-node"
import { cutString } from "../helpers/utils"
import Card from "./Card"
export default function List({ ads }) {
  let cards = []
  for (let i = 0; i < ads.length; i++) {
    const cutDescription = ads[i].description.length > 200
    const description = cutDescription ? cutString(ads[i].description, 200) : ads[i].description
    cards.push(Card({
      id: ads[i].id,
      title: ads[i].title,
      description
    }))
  }
  return (
      createNode('div', { class: 'row align-items-center' },
        createNode('ul', { class: 'col-12' }, ...cards),
      )
    )
}



