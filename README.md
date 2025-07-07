# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

This challenge was to build out an IP Address Tracker app and match it to the design portfolio as much as possible. The IP Address locations will be using IP Geolocation API by IPify and generating the map with LeafletJS. 

I began by setting up the basics of the program with installing Vite, ReactJS, and other aspects of the program.


### Continued development

1. You cannot put a button inside of an <input> tag because it is self-closing. You can achieve the visual effect of a button inside a search input field using HTML and CSS positioning. Wrap both the button and input into the parent <div>. Se the container's position to relative and set the button's position to absolute which removes it from the normal document flow.
2. I was having a syntax error within my App.jsx file which was unexpected. I was receiving the error of "unexpected token error". I realized while coding I had added an extra import statement at the top of my file without any additional information therefore the program was unable to determine the next steps.
3. Creating the small grey line between the IP Address sections. I began by creating a border line positioning to the right of the text div box, but it was giving me an additional line. By creating a separate div for the line it allowed more control and flexibility. 
4. Axios installment  - Helps with making HTPP request in React application

### Useful resources



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

