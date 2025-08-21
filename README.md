# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

<img width="1920" height="916" alt="image" src="https://github.com/user-attachments/assets/f55436b1-0ca5-4eee-8219-0269d518b8aa" />

### Links

- Live Site URL: https://jumedev-browser-extensions-manager.netlify.app

## My process

### Built with

- Semantic **HTML5** markup  
- **CSS custom properties**  
- **Flexbox** and **CSS Grid**  
- **Mobile-first workflow**  
- Vanilla **JavaScript (ES6+)**  

### What I learned

During this project I reinforced my skills in **DOM manipulation** and handling dynamic data from a `JSON` file.  
I also practiced creating a responsive layout with both **Flexbox** and **CSS Grid**.  

Here’s a small piece of code I’m proud of:

```js
function toggleExtensionStatus(id) {
  const extension = extensions.find(ext => ext.id === id);
  extension.active = !extension.active;
  renderExtensions();
}
```
### Continued development

In the future, I want to continue focusing on:

- Improving accessibility (ARIA roles, better semantic markup).

- Adding animations for smoother interactions.

- Expanding the UI to connect with a backend or browser APIs.

### Useful resources
- MDN Web Docs - Always a go-to resource for CSS and JS references.

- CSS Tricks - Great tips for responsive layouts.

### Author
- Website - Your Name

- Frontend Mentor - @yourusername

- Linkedin - @yourusername

### Acknowledgments
Thanks to the Frontend Mentor community for inspiration and feedback during the process of building this challenge.
