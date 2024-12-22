
// script.js
document.getElementById("generateBtn").addEventListener("click", () => {
  const userName = document.getElementById("userName").value.trim();
  const referralCodeDiv = document.getElementById("referralCode");
  const referralsList = document.getElementById("referralsList");

  if (userName === "") {
    alert("Please enter your name!");
    return;
  }

  // Generate a random referral code
  const referralCode = `${userName.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  // Display referral code
  referralCodeDiv.textContent = `Your Referral Code: ${referralCode}`;

  // Add to referral list
  const listItem = document.createElement("li");
  listItem.textContent = `${userName} - ${referralCode}`;
  referralsList.appendChild(listItem);

  // Clear input field
  document.getElementById("userName").value = "";
});
