
// Function to copy the referral link to clipboard
function copyReferralLink() {
    const referralLink = document.getElementById('referral-link');
    referralLink.select();
    referralLink.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Referral link copied to clipboard!');
}

// Example: Adding invited members dynamically
document.addEventListener('DOMContentLoaded', () => {
    const invitedMembersList = document.getElementById('invited-members-list');
    const invitedMembers = ['Alice', 'Bob', 'Charlie']; // Replace with dynamic data as needed
    invitedMembers.forEach(member => {
        const listItem = document.createElement('li');
        listItem.textContent = member;
        invitedMembersList.appendChild(listItem);
    });
});
