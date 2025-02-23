document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary DOM elements
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');

    // Debug log to check if elements are found
    console.log('Sign Up Form:', signUpForm);
    console.log('Sign In Form:', signInForm);

    // Toggle between sign-up and sign-in forms
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
    // Handle sign-in form submission
    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Sign in form submitted'); // Debug log

        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        console.log('Form values:', { email, password }); // Debug log

        if (email && password) {
            console.log('Redirecting to dashboard...'); // Debug log
            window.location.href = 'dashboard.html';
        } else {
            alert('Please fill in all fields');
        }
    });
    
    // Handle sign-up form submission
    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Sign up form submitted'); // Debug log

        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        console.log('Form values:', { name, email, password }); // Debug log

        if (name && email && password) {
            console.log('Redirecting to dashboard...'); // Debug log
            window.location.href = 'dashboard.html';
        } else {
            alert('Please fill in all fields');
        }
    });

});

// Check if script is loaded
console.log('Login script loaded');