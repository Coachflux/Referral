
// Initialize local storage data
const users = JSON.parse(localStorage.getItem("users")) || [];

// Load existing users on page load
document.addEventListener("DOMContentLoaded", () => {
  renderUsers();
});

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = document.getElementById("userName").value.trim();
  const referralCode = document.getElementById("referralCode").value.trim();

  if (userName === "") {
    alert("Name is required!");
    return;
  }

  // Check if the user already exists
  if (users.find((user) => user.name.toLowerCase() === userName.toLowerCase())) {
    alert("User already registered!");
    return;
  }

  // Create new user object
  const newUser = {
    name: userName,
    referralCode: generateReferralCode(userName),
    referredBy: referralCode || null,
    referrals: [],
  };

  // Add the user to the referred user's list (if referral code is valid)
  if (referralCode) {
    const referredUser = users.find((user) => user.referralCode === referralCode);
    if (referredUser) {
      referredUser.referrals.push(userName);
    } else {
      alert("Invalid referral code!");
      return;
    }
  }

  // Add new user to the list and save to local storage
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Reset form and re-render users
  document.getElementById("userName").value = "";
  document.getElementById("referralCode").value = "";
  renderUsers();
});

// Render users and their referral data
function renderUsers() {
  const usersList = document.getElementById("usersList");
  usersList.innerHTML = "";

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${user.name}</strong> (Code: ${user.referralCode})
      <div class="referral-count">
        Referrals: ${user.referrals.length}
        ${user.referrals.length > 0 ? ` - Invited: ${user.referrals.join(", ")}` : ""}
      </div>
    `;
    usersList.appendChild(listItem);
  });
}

// Generate a unique referral code based on the user's name
function generateReferralCode(name) {
  return `${name.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
}
