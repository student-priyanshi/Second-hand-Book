document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Simple validation example
    if (email === 'user@example.com' && password === 'password123') {
        messageDiv.textContent = 'Sign in successful!';
        messageDiv.style.color = 'green';
        // Redirect or perform other actions upon successful sign-in
    } else {
        messageDiv.textContent = 'Invalid email or password.';
    }
});
