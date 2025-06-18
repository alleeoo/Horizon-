document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    if (pass !== confirmPass) {
        alert("Passwords do not match.");
        return;
    }

    // Simulate sending data
    alert(`Account created for ${name}`);
    this.reset();
});
// Validation Logic Added: Ensured password confirmation check before submission.

// Non-blocking UX: Prevented full-page reload using e.preventDefault().

// User Feedback: Alerts user with success or error messages.