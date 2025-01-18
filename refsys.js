
document.getElementById('registerBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const friendReferralCode = document.getElementById('friendReferralCode').value.trim();
    if (username) {
        const referralCode = generateReferralCode(username);
        localStorage.setItem('referralCode', referralCode);
        localStorage.setItem('invitedFriends', JSON.stringify([]));
        if (friendReferralCode) {
            let referredBy = JSON.parse(localStorage.getItem('referredBy')) || {};
            referredBy[username] = friendReferralCode;
            localStorage.setItem('referredBy', JSON.stringify(referredBy));
        }
        displayReferralInfo(referralCode);
    } else {
        alert('Please enter a username.');
    }
});

function generateReferralCode(username) {
    return btoa(username + Date.now()).slice(0, 10);
}

function displayReferralInfo(referralCode) {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('referral').style.display = 'block';
    document.getElementById('invitedFriends').style.display = 'block';
    document.getElementById('referralCode').textContent = referralCode;
    updateFriendsList();
}

function updateFriendsList() {
    const friendsList = JSON.parse(localStorage.getItem('invitedFriends')) || [];
    const friendsListElement = document.getElementById('friendsList');
    friendsListElement.innerHTML = '';
    friendsList.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendsListElement.appendChild(li);
    });
}

// On page load, check if user is already registered
window.onload = function() {
    const referralCode = localStorage.getItem('referralCode');
    if (referralCode) {
        displayReferralInfo(referralCode);
    }
};
