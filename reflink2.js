document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const userReferralInfo = document.getElementById('userReferralInfo');
    const referralLinkInput = document.getElementById('referralLink');
    const userReferralCodeSpan = document.getElementById('userReferralCode');
    const copyButton = document.getElementById('copyButton');
    const invitedMembersDiv = document.getElementById('invitedMembers');
    const membersList = document.getElementById('membersList');

    // Simulated database
    const database = {
        users: [],
        invitedMembers: {}
    };

    // Handle registration form submission
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();

::contentReference[oaicite:0]{index=0}
 
