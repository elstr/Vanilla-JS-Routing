# You might not need a library/framework 😎

## What's this all about?
To get my hands back on vanilla js I've set myself a challenge 💪
- Read a JSON file & reduce it
- Render items and manipulate the DOM with an API that abstracts this 🤓
- Routing time! `/item?xxx` 

## Star features 🤩
### Beautiful API for DOM manipulation
`createNode` is in charge of creating all dom nodes easly. <br/>
Just send the type of node you want (`div`, `span`, `p`, `h1`, ...), some custom atts, and children if needed. 

```
 createNode('footer', { class: "footer" },
    createNode('a', { href: 'http://www.github.com/elstr' }, "Made with 💚 by Eleonora Lester"),
 )
```

### Routing
Checkout what's up with `window.location.search` and render the `Item` component by sending some props to it. <br/>
Yup, like the react way but in a more vanilla way ✨



## How to get up & running 

1) `npm i`
2) `npm run start`
3) `localhost:5000`
