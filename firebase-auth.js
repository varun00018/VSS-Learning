document.addEventListener('DOMContentLoaded', function() {
  // Get all necessary DOM elements
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');
  const signUpForm = document.getElementById('signupForm');
  const signInForm = document.getElementById('signinForm');
  const forgotPasswordLink = document.getElementById('forgotPassword');
  
  // Error message elements
  const signupError = document.getElementById('signupError');
  const signinError = document.getElementById('signinError');
  
  // Social login buttons
  const googleSignIn = document.getElementById('googleSignIn');
  const googleSignUp = document.getElementById('googleSignUp');

  // Check URL parameters to determine initial view
  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get('action');
  
  // If action is signup, show signup form initially
  if (action === 'signup') {
      container.classList.add('active');
  }

  // Toggle between sign-up and sign-in forms
  registerBtn.addEventListener('click', () => {
      container.classList.add('active');
  });

  loginBtn.addEventListener('click', () => {
      container.classList.remove('active');
  });

  // Authentication state observer
  auth.onAuthStateChanged(user => {
      if (user) {
          // User is signed in
          console.log('User is signed in:', user.uid);
          // Redirect to dashboard if already logged in
          window.location.href = 'dashboard.html';
      } else {
          // User is signed out
          console.log('No user is signed in');
      }
  });

  // Handle sign-up form submission
  signUpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      signupError.textContent = ''; // Clear previous error
      
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      
      console.log('Creating account for:', { name, email });
      
      // Create user with Firebase Auth
      auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // User created successfully
              const user = userCredential.user;
              console.log('User created:', user.uid);
              
              // Add user data to Firestore
              return db.collection('users').doc(user.uid).set({
                  name: name,
                  email: email,
                  createdAt: firebase.firestore.FieldValue.serverTimestamp()
              });
          })
          .then(() => {
              console.log('User profile created in Firestore');
              // Redirect to dashboard after successful signup
              window.location.href = 'dashboard.html';
          })
          .catch((error) => {
              console.error('Error during signup:', error);
              signupError.textContent = error.message;
          });
  });
  
  // Handle sign-in form submission
  signInForm.addEventListener('submit', function(e) {
      e.preventDefault();
      signinError.textContent = ''; // Clear previous error
      
      const email = document.getElementById('signinEmail').value;
      const password = document.getElementById('signinPassword').value;
      
      console.log('Attempting to sign in:', { email });
      
      // Sign in with Firebase Auth
      auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // User signed in successfully
              const user = userCredential.user;
              console.log('User signed in:', user.uid);
              // Redirect to dashboard after successful login
              window.location.href = 'dashboard.html';
          })
          .catch((error) => {
              console.error('Error during signin:', error);
              signinError.textContent = error.message;
          });
  });
  
  // Forgot password functionality
  forgotPasswordLink.addEventListener('click', function(e) {
      e.preventDefault();
      signinError.textContent = ''; // Clear previous error
      
      const email = document.getElementById('signinEmail').value;
      
      if (!email) {
          signinError.textContent = 'Please enter your email address';
          return;
      }
      
      // Send password reset email
      auth.sendPasswordResetEmail(email)
          .then(() => {
              alert('Password reset email sent! Check your inbox.');
          })
          .catch((error) => {
              console.error('Error sending reset email:', error);
              signinError.textContent = error.message;
          });
  });
  
  // Google Sign In/Up
  const handleGoogleAuth = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
          .then((result) => {
              const user = result.user;
              console.log('Google sign in successful:', user.uid);
              
              // Check if this is a new user
              const isNewUser = result.additionalUserInfo.isNewUser;
              
              if (isNewUser) {
                  // Add user data to Firestore for new users
                  return db.collection('users').doc(user.uid).set({
                      name: user.displayName,
                      email: user.email,
                      createdAt: firebase.firestore.FieldValue.serverTimestamp()
                  });
              }
          })
          .then(() => {
              // Redirect to dashboard
              window.location.href = 'dashboard.html';
          })
          .catch((error) => {
              console.error('Error during Google auth:', error);
              alert(error.message);
          });
  };
  
  googleSignIn.addEventListener('click', handleGoogleAuth);
  googleSignUp.addEventListener('click', handleGoogleAuth);
});