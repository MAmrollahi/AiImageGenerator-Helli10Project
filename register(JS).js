const registerForm = document.getElementById('register-form');
const messageContainer = document.getElementById('message');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic input validation (you can add more robust checks)
    if (username.trim() === '' || password.trim() === '') {
        messageContainer.textContent = 'Please fill in all fields.';
        return;
    }

    // Write data to text file
    const data = `${username}:${password}\n`;
    fetch('users.txt')
        .then(response => response.text())
        .then(existingData => {
            // Check for duplicate username
            if (existingData.includes(`${username}:`)) {
                messageContainer.textContent = 'Username already exists.';
                return;
            }

            // Append new data to file
            return fetch('users.txt', {
                method: 'PUT',
                headers: { 'Content-Type': 'text/plain' },
                body: existingData + data
            });
        })
        .then(() => {
            messageContainer.textContent = 'Registration successful!';
            registerForm.reset(); // Clear form fields
        })
        .catch(error => {
            console.error('Error writing to file:', error);
            messageContainer.textContent = 'Registration failed.';
        });
});
