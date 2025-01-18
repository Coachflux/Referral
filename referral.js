
// script.js
let referralCode = "";
let referrals = [];

document.getElementById("registerBtn").addEventListener("click", () => {
  const userName = document.getElementById("userName").value.trim();

  if (userName === "") {
    alert("Please enter your name!");
    return;
  }

  // Generate referral code
  referralCode = `${userName.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  
  // Display referral section
  document.getElementById("referralCodeDisplay").textContent = `Your Referral Code: ${referralCode}`;
  document.getElementById("referralSection").classList.remove("hidden");

  // Clear input field
  document.getElementById("userName").value = "";
});

document.getElementById("inviteBtn").addEventListener("click", () => {
  const friendName = document.getElementById("friendName").value.trim();
  const friendReferralCode = document.getElementById("friendReferralCode").value.trim();

  if (friendName === "") {
    alert("Please enter your friend's name!");
    return;
  }

  if (friendReferralCode !== referralCode) {
    alert("Invalid referral code!");
    return;
  }

  // Add friend to the referrals list
  referrals.push(friendName);
  const invitedMembersList = document.getElementById("invitedMembersList");
  const listItem = document.createElement("li");
  listItem.textContent = friendName;
  invitedMembersList.appendChild(listItem);

  // Update referral count
  document.getElementById("referralCount").textContent = referrals.length;

  // Clear input fields
  document.getElementById("friendName").value = "";
  document.getElementById("friendReferralCode").value = "";
});





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

  
