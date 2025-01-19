let referralCode = "";
let referrals = [];



document.getElementById('registerBtn').addEventListener('click', function() {
    const userName = document.getElementById('userName').value.trim();
    const friendReferralCode = document.getElementById('friendReferralCode').value.trim();
    if (userName) {
        const referralCode = generateReferralCode(`${userName.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`);
        localStorage.setItem('referralCode', referralCode);
        localStorage.setItem('invitedFriends', JSON.stringify([]));
        if (friendReferralCode) {
            let referredBy = JSON.parse(localStorage.getItem('referredBy')) || {};
            referredBy[username] = friendReferralCode;
            localStorage.setItem('referredBy', JSON.stringify(referredBy));
        }
        displayReferralInfo(referralCode);
      displayReferralInfo(invitedMembersList);
    } else {
        alert('Please enter a username.');
    }
});

  function generateReferralCode(`${userName.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`) {
    return btoa(`${userName.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}` + Date.now()).slice(0, 10);
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


function displayReferralInfo(referralCode) {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('referral').style.display = 'block';
    document.getElementById('invitedMembersList').style.display = 'block';
    document.getElementById("referralCodeDisplay").textContent = `Your Referral Code: ${referralCode}`;
  document.getElementById("referralSection").classList.remove("hidden");
    updatefriendsList();
}
  

function updateFriendsList()
  const friendsList = JSON.parse(localStorage.getItem('invitedMembersList')) || [];
    const friendsListElement = document.getElementById('friendsList');
    friendsListElement.innerHTML = '';
    friendsList.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.textContent = friend;
        friendsListElement.appendChild(li);
    });  

  

  // Update referral count
  document.getElementById("referralCount").textContent = referrals.length;

  // Clear input fields
  document.getElementById("friendName").value = "";
  document.getElementById("friendReferralCode").value = "";
});

// On page load, check if user is already registered
window.onload = function() {
    const referralCode = localStorage.getItem('referralCode');
    if (referralCode) {
        displayReferralInfo(referralCode);}
      const invitedMembersList = localStorage.getItem('invitedMembersList');
    if (invitedMembersList) {
        displayReferralInfo(invitedMembersList);
    }
};
