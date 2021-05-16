import { createPost } from './createPost.js';
import { readPost } from './readPost.js';

function init() {

    // TODO: Select ok button and add an event listener to it using the add
    // function that's imported above
    
    readPost();
}

document.addEventListener('DOMContentLoaded', init);