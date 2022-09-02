async function loginFormHandler (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
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

function signupRedirect (event) {
    fetch('/signup');
    document.location.replace('/signup');
}

document.querySelector('#sign-up-btn').addEventListener('click', signupRedirect);
document.querySelector('form').addEventListener('submit', loginFormHandler);