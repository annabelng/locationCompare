/**
 * Edits a post on the page
 * @param {object} editBtn - An object that represents the HTML button element
 * that was clicked, which in this case is the edit button
 */
function updatePost(editBtn) {

    /*
     * TODO: Using the edit button that was passed in as a parameter, get access
     * to its parent element (The li element which represents the entire post)
     */

    //TODO: Get the post title and summary now that you have the post
    
    /*
     * TODO: If the post title is not editable, then make it editable.
     * Otherwise, if it is editable, then make it not editable.
     */ 

    /*
     * TODO: If the post summary is not editable, then make it editable.
     * Otherwise, if it is editable, then make it not editable.
     */

    /*
     * TODO: Apply the editable class to the title and summary elements
     * if they're editable. Otherwise, remove the editable class from the
     * elements if they're not editable.
     * DON'T DO UNTIL SPECIFIED IN THE WRITE-UP
     */

    /*
     * TODO: If the post title and summary aren't editable, then pass the post
     * id, the updated title, and the updated summary to the updatePostStorage
     * function.
     */
}

/**
 * Edits a post object in local storage
 * @param {string} postID - The post id that refers to the post to update
 * @param {string} newPostTitle - The updated post title
 * @param {string} newPostSummary - The updated post summary
 */
 function updatePostStorage(postID, newPostTitle, newPostSummary) {

    // TODO: Grab the posts array from local storage

    // TODO: Find the post to update in the array

    // TODO: Update the post with the new values

    // TODO: Update local storage with the new array (Since a post was updated)
}
