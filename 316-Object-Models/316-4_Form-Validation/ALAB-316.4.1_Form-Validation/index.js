document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration');
    registrationForm.addEventListener('submit', function (event) {
        // Reset error display
        document.getElementById('errorDisplay').style.display = 'none';

        // Validate Username
        const usernameInput = registrationForm.elements['username'];
        if (usernameInput.value.trim() === '') {
            showError('Username cannot be blank.', usernameInput);
            event.preventDefault();
            return;
        }

        if (usernameInput.value.length < 4) {
            showError('Username must be at least four characters long.', usernameInput);
            event.preventDefault();
            return;
        }

        // Validate Email
        const emailInput = registrationForm.elements['email'];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showError('Invalid email address.', emailInput);
            event.preventDefault();
            return;
        }

        if (emailInput.value.toLowerCase().includes('example.com')) {
            showError('Email from "example.com" domain is not allowed.', emailInput);
            event.preventDefault();
            return;
        }

        // Validate Password
        const passwordInput = registrationForm.elements['password'];
        const password = passwordInput.value;

        if (password.length < 12) {
            showError('Password must be at least 12 characters long.', passwordInput);
            event.preventDefault();
            return;
        }

        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            showError('Password must have at least one uppercase letter, one lowercase letter, one number, and one special character.', passwordInput);
            event.preventDefault();
            return;
        }

        if (/password/i.test(password)) {
            showError('Password cannot contain the word "password" (case-insensitive).', passwordInput);
            event.preventDefault();
            return;
        }

        if (password.toLowerCase().includes(usernameInput.value.toLowerCase())) {
            showError('Password cannot contain the username.', passwordInput);
            event.preventDefault();
            return;
        }

        // Validate Terms and Conditions
        const termsCheckbox = registrationForm.elements['terms'];
        if (!termsCheckbox.checked) {
            showError('You must accept the Terms of Use.', termsCheckbox);
            event.preventDefault();
            return;
        }

        // Process and store all input data using localStorage
        const userData = {
            username: usernameInput.value.toLowerCase(), // Convert to lowercase
            email: emailInput.value.toLowerCase(), // Convert to lowercase
            password: passwordInput.value,
        };

        // Check if localStorage already has user data
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username is already taken
        if (existingUsers.some(user => user.username === userData.username)) {
            showError('That username is already taken.', usernameInput);
            event.preventDefault();
            return;
        }

        // Store the new user data
        existingUsers.push(userData);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Clear form fields and show success message (to be implemented)
        registrationForm.reset();
        showSuccessMessage('Registration successful!');
        event.preventDefault(); // Prevent form submission
    });
});

// Function to show error messages
function showError(message, inputElement) {
    const errorDisplay = document.getElementById('errorDisplay');
    errorDisplay.innerHTML = message;
    errorDisplay.style.display = 'block';
    inputElement.focus();
}

// Function to show success messages
function showSuccessMessage(message) {
    const successDisplay = document.getElementById('successDisplay');
    successDisplay.innerHTML = message;
    successDisplay.style.display = 'block';
}
