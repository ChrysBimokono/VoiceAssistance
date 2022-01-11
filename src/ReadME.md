# Frontend Mentor - Sunnyside agency landing page solution

This is a project to work on building an application using the React.js Framework. We built a Shopping Cart powered by Invoice AI.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Add menu Item with voice
-Order the menu by Categories
-Select menu with voice

### Screenshot
I added some Screenshots.

![](./images/screen1.jpeg)
![](./images/screen2.jpeg)


### Links

- Live Site URL: [Add live site URL here](https://chrysbim.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- React.Js Framework


### What I learned
I have learned How to implement react components with Alan App AI in order to display food menu on our page.

To see how you can add code snippets, see below:

```js
intent(`Add $(ITEM ${ menuItmeSlotList}) to the cart `,
       'Add $(UNAVAILABLE_ITEM* .*) to the cart',
       p => {
    if(p.UNAVAILABLE_ITEM) {
        p.play(`That item is unavailable`);
    } else {
          const itemName= p.ITEM.value;
         const itemToGoInCart= menuItems.find((menuItem) => {
                 return menuItem.name.toLowerCase() ===itemName.toLowerCase();
    })
      p.play({command: 'addToCart', data: itemToGoInCart})                                         
      p.play(`Adding ${p.ITEM.value} to the cart`); 
    }
                                                  
});
```

```css
.App{

 background-color: hsl(var(--clr-light));
 font-family: var(--ff-sans-cond);
 text-align: center;
}
.menu{
    border: 1px solid grey;
}

.button{
    margin-left: 2rem;
    text-transform: uppercase;

}
```

```js
 return (
    <div className="App">
    {menuItems.map((menuItem) =>{
    return  <li key={menuItem.name}> 
    {menuItem.name}- ${menuItem.price} - {menuItem.category}
    <button onClick={()=>addToCart(menuItem)}>add to cart</button>
    </li>
    })} 

    <h2>Cart</h2>
    {cart.map((cartItem)=>{
    return <li key={cartItem.name}> 
            {cartItem.name}- ${cartItem.price} - {cartItem.category}
          </li>
    })}
    </div>
  );
}
```


### Continued development

These are the areas where i will have to focus on in the future projects.
- How to better use props
-How to better use components 


## Author

- Website - [Chrys Bimokono](https://www.chrysbim.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@Enockbim](https://twitter.com/home)

