async function deletePostHandler(event) {
    const post_id = document.location.toString().split('/')[document.location.toString().split('/').length-1];

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'delete',
        headers: {'Content-Type' : 'application/json'}
    });

    if (response.ok) {
        fetch('/dashboard')
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }


}

document.querySelector('#delete-post-btn').addEventListener('click', deletePostHandler);