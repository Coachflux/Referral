// script.js

// Initialize local storage
const usersKey = "registeredUsers";
const users = JSON.parse(localStorage.getItem(usersKey)) || [];

// Update users list UI
const updateUsersListUI = () => {
  const usersList = document.getElementById("usersList");
  usersList.innerHTML = "";
  users.forEach(user => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${user.name}</strong> (Referral Count: ${user.referralCount})
      <ul>
        ${user.invitedUsers.map(invitee => `<li>${invitee}</li>`).join("")}
      </ul>
    `;
    usersList.appendChild(listItem);
  });
};

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", event => {
  event.preventDefault();

  const userName = document.getElementById("userName").value.trim();
  const referralCode = document.getElementById("referralCode").value.trim();

  if (!userName) {
    alert("Name is required!");
    return;
  }

  let referredByUser = null;

  // Check if referral code is valid
  if (referralCode) {
    referredByUser = users.find(user => user.name.toLowerCase() === referralCode.toLowerCase());
    if (!referredByUser) {
      alert("Invalid referral code!");
      return;
    }
  }

  // Create new user
  const newUser = {
    name: userName,
    referralCount: 0,
  };

  // Update the referring user's data
  if (referredByUser) {
    referredByUser.referralCount += 1;
  }

  // Add new user to the list
  users.push(newUser);

  // Save to local storage
  localStorage.setItem(usersKey, JSON.stringify(users));

  // Update UI
  updateUsersListUI();

  // Clear form
  document.getElementById("registrationForm").reset();
});

// Initialize UI with stored users
updateUsersListUI();
