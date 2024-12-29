// Array of Unique Fortunes
const fortunes = [
    "A thrilling time is in your immediate future.",
    "Your ability for accomplishment will follow with success.",
    "Now is the time to try something new.",
    "A fresh start will put you on your way.",
    "Your hard work will soon pay off.",
    "A new perspective will come with the new year.",
    "Adventure can be real happiness.",
    "Your high-minded principles spell success.",
    "A friend asks only for your time, not your money.",
    "Your life will be happy and peaceful."
];

// To Keep Track of Used Fortunes
let usedFortunes = [];

// Selecting DOM Elements
const fortuneCookie = document.getElementById('fortuneCookie');
const fortuneMessage = document.getElementById('fortuneMessage');
const cookieImage = document.getElementById('cookieImage');

// URLs for Closed and Opened Fortune Cookie Images
const closedCookieURL = '../assets/images/fortune-cookie.png'; // Closed Fortune Cookie Image
const openedCookieURL = '../assets/images/fortune-cookie-open.png'; // Opened Fortune Cookie Image

// Function to Get a Unique Fortune
function getUniqueFortune() {
    if (usedFortunes.length === fortunes.length) {
        // Reset if All Fortunes Have Been Used
        usedFortunes = [];
    }

    let fortune;
    do {
        fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    } while (usedFortunes.includes(fortune));

    usedFortunes.push(fortune);
    return fortune;
}

// Function to Handle Cookie Click
function handleCookieClick() {
    // Change to Opened Cookie Image
    cookieImage.src = openedCookieURL;

    // Get a Unique Fortune
    const fortune = getUniqueFortune();

    // Display the Fortune After a Short Delay to Simulate Opening
    setTimeout(() => {
        fortuneMessage.textContent = fortune;
        fortuneMessage.classList.add('show');
    }, 500); // 0.5 seconds delay

    // Reset the Cookie Image and Hide Fortune After Some Time
    setTimeout(() => {
        cookieImage.src = closedCookieURL;
        fortuneMessage.classList.remove('show');
    }, 4000); // Total of 4 seconds
}

// Adding Event Listener for Click
fortuneCookie.addEventListener('click', handleCookieClick);

// Adding Event Listener for Keyboard (Enter and Space Keys)
fortuneCookie.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        handleCookieClick();
    }
});

// Console Log to Confirm Script is Running
console.log("JavaScript is connected and running.");
