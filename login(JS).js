const loginForm = document.getElementById('login-form');
const messageContainer = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if credentials exist in the file
    fetch('users.txt')
        .then(response => response.text())
        .then(data => {
            const credentials = data.split('\n');
            const matchingCredential = credentials.find(credential => {
                const [storedUsername, storedPassword] = credential.split(':');
                return storedUsername === username && storedPassword === password;
            });

            if (matchingCredential) {
                messageContainer.textContent = 'Login successful!';
                // Redirect to a protected page or perform other actions
            } else {
                messageContainer.textContent = 'Invalid username or password.';
            }
        })
        .catch(error => {
            console.error('Error reading file:', error);
            messageContainer.textContent = 'An error occurred.';
        });
});
