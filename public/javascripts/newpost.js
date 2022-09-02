function newPostHandler(event) {
    document.location.replace('/newpost');
}

document.getElementById('add-post-btn').addEventListener('click', newPostHandler);