const REPLACE_ME = 'REPLACE ME';

/**
 * Creates a post and adds it to the page
 */
function add() {

    // TODO: Collect values from form and store them in an object literal to 
    // represent a post
    let post = {
        title: REPLACE_ME,
        summary: REPLACE_ME,
        id: REPLACE_ME
    };

    // TODO: Clear the form entries

    
    // TODO: Create HTML for the post by passing in post object created earlier
    // as a parameter to the createPostHTML function

    // TODO: Add the HTML for the post into the output tag in index.html

    /**
     * TODO: Save the post to local storage by passing in the post object as 
     * a parameter to the save function
     * DON'T DO UNTIL SPECIFIED IN THE WRITE-UP
     */
}

/**
 * Saves a post object to local storage
 * @param {object} post - The post contents to save
 */
function save(post) {

    // TODO: Grab the posts array from local storage

    // TODO: Do a null check. If the posts array is null, then set to empty 
    // array and else set to current array

    // TODO: Add the passed in post parameter to the array

    // TODO: Update local storage with the new array
}

/**
 * This is the template HTML for a blog post, and all that needs to be done
 * is filling in the id, title, and summary for a post.
 * @param {object} post - The post to translate into HTML
 * @returns {string} HTML representing the post passed in
 */
function createPostHTML(post) {

    let postOut = 
        `<article id="${REPLACE_ME}">
            <h2>${REPLACE_ME}</h2>
            <p>${REPLACE_ME}</p>
            <br>
            <button onclick="editPostArticle(this)"><i class="fas fa-edit"></i> Edit</button>
            <button onclick="deletePostArticle(this)"><i class="fas fa-trash"></i> Delete</button>
        </article>`;

    return postOut;
}

export { add, createPostHTML };