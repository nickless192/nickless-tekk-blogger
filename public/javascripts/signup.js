async function signupFormHandler (event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type' : 'application/json'}
        });
    
        if (response.ok) {
            fetch('/');
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

}

document.querySelector('form').addEventListener('submit', signupFormHandler);