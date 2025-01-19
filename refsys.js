document.addEventListener('DOMContentLoaded', () => {
  const signupBtn = document.getElementById('signup-btn');
  const joinBtn = document.getElementById('join-btn');
  const usernameInput = document.getElementById('username');
  const referralInput = document.getElementById('referral');
  const userSection = document.getElementById('user-section');
  const currentUser = document.getElementById('current-user');
  const referralCode = document.getElementById('referral-code');
  const invitedList = document.getElementById('invited-list');
  const invitedCount = document.getElementById('invited-count');

  const users = JSON.parse(localStorage.getItem('users')) || {};

  function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
  }

  function generateReferralCode(username) {
    return username + Math.random().toString(36).substring(2, 8);
  }

  function displayUser(username) {
    currentUser.textContent = username;
    referralCode.textContent = users[username].referralCode;

    invitedList.innerHTML = '';
    users[username].invited.forEach(friend => {
      const li = document.createElement('li');
      li.textContent = friend;
      invitedList.appendChild(li);
    });

    invitedCount.textContent = users[username].invited.length;
    userSection.classList.remove('hidden');
  }

  signupBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();

    if (!username || users[username]) {
      alert('Invalid or existing username!');
      return;
    }

    users[username] = {
      referralCode: generateReferralCode(username),
      invited: []
    };
    saveUsers();
    displayUser(username);
    usernameInput.value = '';
  });

  joinBtn.addEventListener('click', () => {
    const referral = referralInput.value.trim();
    const username = usernameInput.value.trim();

    if (!username || users[username]) {
      alert('Invalid or existing username!');
      return;
    }

    const inviter = Object.keys(users).find(
      key => users[key].referralCode === referral
    );

    if (!inviter) {
      alert('Invalid referral code!');
      return;
    }

    users[inviter].invited.push(username);
    users[username] = {
      referralCode: generateReferralCode(username),
      invited: []
    };
    saveUsers();
    displayUser(username);
    usernameInput.value = '';
    referralInput.value = '';
  });
});
