document.addEventListener('DOMContentLoaded', () => {
    // Automatically show the pop-up after a delay
    setTimeout(() => {
        document.getElementById('popup').classList.add('show');
    }, 1000); // Adjust the delay as needed
});

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    // Wait for the transition to complete before hiding completely
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Match this duration with the CSS transition time
}
