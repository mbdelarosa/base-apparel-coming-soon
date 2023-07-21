# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./design/screenshot-desktop.png)

### Links

- Solution URL: [GitHub](https://github.com/mbdelarosa/base-apparel-coming-soon)
- Live Site URL: [Base Apparel Coming Soon](https://mbdelarosa.github.io/base-apparel-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
- Mobile-first workflow
- BEM naming convention

### What I learned

Learnings from this challenge:
- How to use the `layout-gradient()` function to make the gradients
- How to use `position: absolute` to layout the input field with the submit button and custom error message and icon
- Input fields should have a companion label
- How to properly use the ARIA attributes on the form
  - Use of `aria-invalid` with true/false value to determine whether the error icon and message should be displayed
  - Use of `aria-live: polite` for the error message
  - Use of `aria-describedby` to link the input field to the error message
- How to properly display the error message
  - The error element linked must always be present in the DOM, but the content within should be empty so that certain screen readers wouldn't read out the error message all the time. The error message can then be added using javascript once the form is submitted and an invalid input was entered

I also made use of `clamp()` here to set the `font-size` so I was able to read up on that finally, though I do think I still need more practice :sweat_smile:

### Continued development

Interested to learn more about ARIA for future challenges that includes forms and other interactive elements, as well as making the design more responsive with grid and `clamp()`

### Useful resources

- ["HTML Inputs and Labels: A Love Story"](https://css-tricks.com/html-inputs-and-labels-a-love-story/) by Amber Wilson on CSS-Tricks - Very insightful article on why inputs should have a companion label
- Youtube videos from Kevin Powell:
  - ["Position absolute and responsive layouts"](https://youtu.be/H04P5YXVssE) - This tutorial helped me understand how `position: absolute` works and was able to use it in this challenge to layout the customized input field
  - ["min(), max(), and clamp() are CSS magic!"](https://youtu.be/U9VF-4euyRo) - On how to use `clamp()` to make the font-size responsive based on the width
- This [regular expression from RegExr](https://regexr.com/3e48o) for the email address validation

## Author

- Frontend Mentor - [@mbdelarosa](https://www.frontendmentor.io/profile/mbdelarosa)

## Acknowledgments

Many thanks to Grace Snow for the code review and insights on accessibility :raised_hands: