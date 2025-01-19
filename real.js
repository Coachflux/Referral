
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



// On page load, check if user is already registered
window.onload = function() {
    const referralCode = localStorage.getItem('referralCode');
      const invitedMembersList = localStorage.getItem('invitedMembersList');
};
