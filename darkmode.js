const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Add to Light Mode';
    } else {
        toggleButton.textContent = 'Remove to Dark Mode';
    }
});
