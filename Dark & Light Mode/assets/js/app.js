// Dark/Light Mode Toggle
const changeModeBtn = document.querySelector('.changeModeBtn button');
const body = document.body;

// Set initial state to light mode
body.classList.add('light-mode');

// Toggle theme on button click
changeModeBtn.addEventListener('click', function() {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});