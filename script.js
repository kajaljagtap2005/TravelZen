// --- Authentication (Login/Signup) Logic ---

// 1. Toggle between Login and Sign Up UI
function toggleAuth(type) {
    if (type === 'signup') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('signup-section').style.display = 'block';
        document.getElementById('auth-title').innerText = 'Create an Account';
        document.getElementById('auth-subtitle').innerText = 'Join TravelZen for exclusive travel deals.';
    } else {
        document.getElementById('signup-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
        document.getElementById('auth-title').innerText = 'Welcome Back';
        document.getElementById('auth-subtitle').innerText = 'Please enter your details to sign in.';
    }
}

// 2. Handle Login Submission
function processLogin(event) {
    event.preventDefault(); // Stop page refresh
    localStorage.setItem("isLoggedIn", "true"); // Save login state
    alert("Login Successful! Welcome back to TravelZen.");
    window.location.href = "index.html"; // Redirect to Home
}

// 3. Handle Sign Up Submission
function processSignUp(event) {
    event.preventDefault(); // Stop page refresh
    localStorage.setItem("isLoggedIn", "true"); // Save login state
    alert("Account Created Successfully! Welcome to TravelZen.");
    window.location.href = "index.html"; // Redirect to Home
}

// 4. Handle Social Login (Google)
function processSocialAuth(provider) {
    localStorage.setItem("isLoggedIn", "true");
    alert(`${provider} Login Successful!`);
    window.location.href = "index.html"; 
}






// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// --- script.js ---

// --- 1. Login & Logout Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const authBtn = document.getElementById("auth-btn");
    if (localStorage.getItem("isLoggedIn") === "true") {
        if (authBtn) {
            authBtn.innerHTML = 'Logout <i class="fas fa-sign-out-alt" style="margin-left: 5px;"></i>';
            authBtn.href = "#";
            authBtn.onclick = function(e) {
                e.preventDefault();
                localStorage.removeItem("isLoggedIn");
                alert("You have been logged out.");
                window.location.href = "index.html";
            };
        }
    }
});

function processLogin(event) {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    alert("Login Successful! Welcome back to TravelZen.");
    window.location.href = "index.html"; 
}

// --- 2. Booking Modal Logic ---
function openBookingModal(destinationName, durationDays) {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('active'); // This makes it visible
        document.getElementById('book-dest').value = destinationName;
        document.getElementById('book-days').value = durationDays;
    } else {
        console.error("Booking modal not found in HTML!");
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.remove('active');
}

// --- 3. Success Modal Logic ---
function confirmBooking(event) {
    event.preventDefault(); // Stop page refresh
    
    // Get the values
    const name = document.getElementById('book-name').value;
    const dest = document.getElementById('book-dest').value;
    const date = document.getElementById('book-date').value;
    
    // Format the message
    const customMessage = `Thank you, <strong>${name}</strong>!<br>Your luxurious trip to <strong>${dest}</strong> starting on <strong>${date}</strong> has been successfully booked.<br><br>We will email the full itinerary to you shortly.`;
    
    // Inject message
    document.getElementById('successMessage').innerHTML = customMessage;
    
    // Close booking form
    closeBookingModal();
    
    // Open success modal after a tiny delay
    setTimeout(() => {
        document.getElementById('successModal').classList.add('active');
    }, 300);
    
    // Reset the form
    event.target.reset();
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.classList.remove('active');
}