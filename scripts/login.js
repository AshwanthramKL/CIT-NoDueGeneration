// targeting the required elements
const loginForm = document.querySelector('form');
const loginButton = document.querySelector('.login-btn');

// Add event listener to login button
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(window.login);

  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;

  // Validate username and password
  if (username === 'admin' && password === 'admin') {
    // Redirect to homepage if login successful
    window.location.href = './index.html';
    window.login = 1;
  } else {
    // Show error message if login unsuccessful
    alert('Incorrect username or password.');
    // const errorMessage = document.createElement('p');
    // errorMessage.classList.add('error-message');
    // errorMessage.textContent = 'Incorrect username or password.';
    // loginForm.appendChild
  }
}
);

