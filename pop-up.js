
document.addEventListener('DOMContentLoaded', () => {
    const popupWrapper = document.getElementById('popup-wrapper');
    const closeButton = document.getElementById('close-button');
    const claimButton = document.getElementById('claim-button');

    // Show the pop-up after 4.5 seconds
    setTimeout(() => {
        popupWrapper.classList.remove('hidden');
    }, 4500);

    // Close the pop-up when the close button is clicked
    closeButton.addEventListener('click', () => {
        popupWrapper.classList.add('hidden');
    });

    // Add functionality to the claim button as needed
    claimButton.addEventListener('click', () => {
        // Implement claim action here
        alert('Claim button clicked!');
    });
});
