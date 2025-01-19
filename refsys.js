// script.js
const registerBtn = document.getElementById("registerBtn");
const inviteBtn = document.getElementById("inviteBtn");

const referralCodeDisplay = document.getElementById("referralCodeDisplay");
const referralCountDisplay = document.getElementById("referralCount");
const invitedList = document.getElementById("invitedList");

let userData = JSON.parse(localStorage.getItem("userData")) || {};

// Register a user and generate a referral code
registerBtn.addEventListener("click", () => {
  const userName = document.getElementById("userName").value.trim();

  if (userName === "") {
    alert("Please enter your name!");
    return;
  }

  if (userData.referralCode) {
    alert("You are already registered!");
    return;
  }

  const referralCode = `${userName.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  userData = {
    userName,
    referralCode,
    referrals: [],
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  updateReferralInfo();
  alert("Registration successful!");
});

// Invite a friend
inviteBtn.addEventListener("click", () => {
  const friendName = document.getElementById("friendName").value.trim();

  if (friendName === "") {
    alert("Please enter your friend's name!");
    return;
  }

  if (!userData.referralCode) {
    alert("Please register first!");
    return;
  }

  userData.referrals.push(friendName);
  localStorage.setItem("userData", JSON.stringify(userData));

  updateReferralInfo();
  alert(`${friendName} has been invited!`);
});

// Update referral info and invited list
function updateReferralInfo() {
  if (userData.referralCode) {
    referralCodeDisplay.textContent = `Your Referral Code: ${userData.referralCode}`;
    referralCountDisplay.textContent = userData.referrals.length;

    invitedList.innerHTML = "";
    userData.referrals.forEach((friend) => {
      const listItem = document.createElement("li");
      listItem.textContent = friend;
      invitedList.appendChild(listItem);
    });
  }
}

// Load data from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  if (userData.referralCode) {
    updateReferralInfo();
  }
});
