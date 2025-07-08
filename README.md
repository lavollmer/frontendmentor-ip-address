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

The frontend is built in React(Vite) and the backend is an express server in the /server folder. Communication is via REST API and Axios.

The frontend was built by starting with the design ideas.

The backend was built after determining I needed a backend folder instead of running everything in the frontend.  I started by importing the dependencies such as express, cors and dotenv. Express was the main web framework, cors is the middleware to allow the frontend to talk to the backend, and dotenv is to load environment variables. After, I began by intializing the server using an Express application instance and set the PORT to 5000. I set up the middleware functions before running my route handlers to allow different origin requests. Finally, I built the endpoint routes with a basic route and API key route to begin with. The end of the index.js file includes starting the server on the defined port.


### Continued development

1. You cannot put a button inside of an <input> tag because it is self-closing. You can achieve the visual effect of a button inside a search input field using HTML and CSS positioning. Wrap both the button and input into the parent <div>. Se the container's position to relative and set the button's position to absolute which removes it from the normal document flow.
2. I was having a syntax error within my App.jsx file which was unexpected. I was receiving the error of "unexpected token error". I realized while coding I had added an extra import statement at the top of my file without any additional information therefore the program was unable to determine the next steps.
3. Creating the small grey line between the IP Address sections. I began by creating a border line positioning to the right of the text div box, but it was giving me an additional line. By creating a separate div for the line it allowed more control and flexibility. 
4. Axios installment  - Helps with making HTPP request in React application
5. .env file to protect the API geolocation key
6. I cleaned up my React component by capitalizing the component name. This is because JSX treats lowercase tags like HTML elements while capitilized as custom components. The code may behave differently than expected.
7. I was debugging my searchbar and found that Fetch API is different than Axios in terms of code. Axios doesn't have .ok or .json() because it automatically parses JSON and throws errors for specific codes.
8. I built the API key to search the current user's IP when I wanted it to update when the searchTerm changed. I have to update the searchTerm in the request so it would actually change based on the dependency array.
9. I created a button for the search bar; however, it did not have any behavior assigned to it. The button is expected to trigger the search, but needed a handleClick. I added a onClick event to trigger and event.
10. useEffect hooks cannot be called inside any nested functions or conditionals. They must be called at the top level of a functional component.
11. When I was working on restructuring my code, I was able to successfully connect the server and frontend. I realized during it that I had set loading to true which constantly made the page white with the word Loading on it. I intialized loading as true but never fetched the data when the component first loadded. I fixed it by only setting loading to true when a search starts otherwise it is set to false.

### Useful resources



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

