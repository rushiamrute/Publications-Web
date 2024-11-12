document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to handle logic

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example login credentials for validation (you can replace this with actual API/database calls)
    const validUsername = 'admin';
    const validPassword = 'password123';

    // Check if the entered username and password match the valid ones
    if (username === validUsername && password === validPassword) {
        // If credentials are correct, redirect the user (can be changed as needed)
        window.location.href = 'index.html';  // Redirect to home or dashboard after login
    } else {
        // If credentials are incorrect, show the error message
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.classList.remove('d-none');  // Show the error message
    }
});


document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (password !== confirmPassword) {
        errorMessage.classList.remove('d-none'); // Show error message
    } else {
        errorMessage.classList.add('d-none'); // Hide error message
        // Submit form data (this could be done via AJAX or form submission)
        // For now, we just log the user details
        console.log("User Signed Up:", {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: password,
        });
    }
});
