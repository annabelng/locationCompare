import { readPosts } from './readPosts.js';
import { createPost } from './createPost.js';

/**
 * Driver code: initilaizes the interactables on this page
 */

function init() {

    // TODO: First, select the form button. Then, add an event listener to it
    // that calls the createPost function when the button is clicked.
    let button = document.querySelector('input[class='button']')
    button.addEventListener(button)
    console.log(123)

    createPost();
}

document.addEventListener('DOMContentLoaded', init);
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
