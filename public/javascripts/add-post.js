async function addPostHandler (event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const entry = document.querySelector('#entry').value;

    const response = await fetch ('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            title,
            entry
        }),
        headers: {'Content-Type': 'application/json'}
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.getElementById('new-post-form').addEventListener('submit', addPostHandler);