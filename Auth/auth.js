document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            const user = { name, email, password };
            localStorage.setItem('user', JSON.stringify(user));
            alert('Account created successfully. Please log in.');
            window.location.href = '../Sinup Page/index.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.email === email && user.password === password) {
                localStorage.setItem('loggedIn', 'true');
                alert('Login successful.');
                window.location.href = '../Todo App/index.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }

    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = '../index.html';
    }
});
