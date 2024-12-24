
// script.js
const userNameElement = document.getElementById("userName");
const referralLinkElement = document.getElementById("referralLink");
const copyLinkButton = document.getElementById("copyLink");
const referralCountElement = document.getElementById("referralCount");
const referralListElement = document.getElementById("referralList");
const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("nameInput");
const referrerInput = document.getElementById("referrerInput");

// Mock database
let users = {};
let currentUser = document.getElementById("userName"); // Replace with actual logged-in user

// Initialize user details
function initialize() {
  userNameElement.textContent = currentUser;
  const referralLink = `${window.location.origin}?ref=${currentUser}`;
  referralLinkElement.value = referralLink;

  // Check for referrer
  const urlParams = new URLSearchParams(window.location.search);
  const referrer = urlParams.get("ref");
  if (referrer) {
    referrerInput.value = referrer;
  }

  // Load existing referrals
  if (!users[currentUser]) {
    users[currentUser] = { referrals: [] };
  }
  updateReferralDisplay();
}

// Copy referral link
copyLinkButton.addEventListener("click", () => {
  referralLinkElement.select();
  document.execCommand("copy");
  alert("Referral link copied!");
});

// Handle registration
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newName = nameInput.value.trim();
  const referrer = referrerInput.value.trim();

  if (newName === "") {
    alert("Name is required!");
    return;
  }

  // Save user and referral
  if (!users[newName]) {
    users[newName] = { referrals: [] };
  }
  if (referrer && users[referrer]) {
    users[referrer].referrals.push(newName);
  }

  alert(`Registration successful! Welcome, ${newName}`);
  nameInput.value = "";
  referrerInput.value = "";

  updateReferralDisplay();
});

// Update referral display
function updateReferralDisplay() {
  referralListElement.innerHTML = "";
  const referralCount = users[currentUser].referrals.length;
  referralCountElement.textContent = referralCount;

  users[currentUser].referrals.forEach((referral) => {
    const li = document.createElement("li");
    li.textContent = referral;
    referralListElement.appendChild(li);
  });
}

// Initialize the system
initialize();
