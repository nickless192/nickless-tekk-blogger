async function editPostHandler (event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const entry = document.querySelector('#entry').value;
    const post_id = document.location.toString().trim('/')[document.location.toString().trim('/').length-1];

    const response = await fetch (`/api/posts/${post_id}`, {
        method: 'put',
        body: JSON.stringify({
            title,
            entry
        }),
        headers: {'Content-Type': 'application/json'}
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.getElementById('edit-post-form').addEventListener('submit', editPostHandler);