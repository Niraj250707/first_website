// This file contains the JavaScript for handling user interactions on the life-span.com website.

document.addEventListener('DOMContentLoaded', function() {
    let isSignUp = false;

    const authTitle = document.getElementById('authTitle');
    const formSubmitBtn = document.getElementById('formSubmitBtn');
    const toggleAuth = document.getElementById('toggleAuth');
    const extraFields = document.getElementById('extraFields');
    const authForm = document.getElementById('authForm');

    function showAuthPage(mode) {
        isSignUp = (mode === 'signUp');
        authTitle.textContent = isSignUp ? 'Sign Up' : 'Sign In';
        formSubmitBtn.textContent = isSignUp ? 'Sign Up' : 'Sign In';
        toggleAuth.textContent = isSignUp ? 'Already have an account? Sign In' : 'No account? Sign Up';
        
        extraFields.innerHTML = '';
        if (isSignUp) {
            extraFields.innerHTML = `
                <div class="form-group">
                    <label for="nameField">Full Name:</label>
                    <input type="text" id="nameField" required>
                </div>
                <div class="form-group">
                    <label for="healthOptionField">Interest:</label>
                    <select id="healthOptionField" required>
                        <option value="">Select</option>
                        <option value="human">Human Health</option>
                        <option value="animal">Animal Health</option>
                        <option value="vehicle">Vehicle Health</option>
                    </select>
                </div>
            `;
        }
        showPage('authPage');
    }

    function showPage(id) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    }

    function goBack() {
        showPage('landingPage');
    }

    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (isSignUp) {
            alert('Sign Up successful!\nWelcome to Life Span.com.');
            const selected = document.getElementById('healthOptionField').value;
            if (selected === 'human') showPage('humanPage');
            else if (selected === 'animal') showPage('animalPage');
            else if (selected === 'vehicle') showPage('vehiclePage');
            else showPage('landingPage');
        } else {
            alert('Sign In successful!');
            showPage('landingPage');
        }
    });

    document.querySelectorAll('.btn-group button').forEach(button => {
        button.addEventListener('click', function() {
            const option = this.getAttribute('data-option');
            showPage(option + 'Page');
        });
    });

    document.getElementById('backButton').addEventListener('click', goBack);
});function toggleAuth() {
  document.getElementById('signInForm').classList.toggle('active');
  document.getElementById('signUpForm').classList.toggle('active');
}

// Simple chatbot animation
const chatTexts = [
  "Hello! I'm Dr. Span, your health assistant. How can I help you today?",
  "Need help with human, animal or vehicle health?",
  "Ask me anything about our services!"
];
let chatIndex = 0;
setInterval(() => {
  chatIndex = (chatIndex + 1) % chatTexts.length;
  document.getElementById('chatText').textContent = chatTexts[chatIndex];
}, 3500);

// Service card click animation
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('selected');
    setTimeout(() => card.classList.remove('selected'), 600);
    alert(`You selected ${card.querySelector('span').textContent} services!`);
  });
});

// Hide service section until signed in/up
document.getElementById('serviceSection').style.display = 'none';

document.getElementById('signIn').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('authContainer').style.display = 'none';
  document.getElementById('serviceSection').style.display = 'block';
});

document.getElementById('signUp').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('authContainer').style.display = 'none';
  document.getElementById('serviceSection').style.display = 'block';
});