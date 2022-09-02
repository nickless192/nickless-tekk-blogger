async function newCommentHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value;
    const post_id = document.location.toString().split('/')[document.location.toString().split('/').length-1];

    const response = await fetch('/api/comments/', {
        method: 'post',
        body: JSON.stringify({
            comment_text,
            post_id
        }),
        headers: {'Content-Type' : 'application/json'}
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.comment-form').addEventListener('submit', newCommentHandler);