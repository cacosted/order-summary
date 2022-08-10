# Frontend Mentor - Order summary card solution

![Preview Design](https://user-images.githubusercontent.com/57645180/183957504-401757e8-9c89-40c7-b98e-100890cd257a.png)

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Installation](#installation)

## Overview

### The challenge
Users should be able to:

- See hover states for interactive elements

### Links

- Live Demo: [Demo](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript ES6+
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Vite](https://vitejs.dev/) - Bundle tool

### What I learned

This was a simple project where that helped me to learn how to use styled components and practice componetization with React. 

One cool thing about this package is that you can use a sass-like syntax to perform styling 

```js
// Here I applied a hover effect with the '&'
const Button = styled.button`
  color: white;

  &:hover {
    color: black;
  }
`
```

Another cool trick is that I use it a `styleConfig.js` file to store the variables of my "css"

```js
// Here I applied a hover effect with the '&'
const Button = styled.button`
  color: white;

  &:hover {
    color: black;
  }
`
```

### Useful resources

- [Styled Components docs](https://styled-components.com/docs) - The official documentation of styled components, this resource was very useful to understand this package.

- [Curso de React Avanzado](https://platzi.com/cursos/react-avanzado/) - This is a great course where [@midudev](https://www.twitch.tv/midudev) explains very well how to use styled components in a real project.

## Author

- Frontend Mentor - [@cacosted](https://www.frontendmentor.io/profile/cacosted)
- Twitter - [@cacosted](https://www.twitter.com/cacosted)

## Installation

To test this project by yourself first download the project, then you can use this commands:

Run local server
```
npm run dev
```

Build project
```
npm run build
```

Preview Build
```
npm run preview
```
