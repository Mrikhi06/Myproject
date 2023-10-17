// Create an audio element for the beep sound
// const beepSound = new Audio('beep.mp3'); // Replace 'beep.mp3' with the correct path to your audio file

// Function to play a beep sound
// function playBeep() {
//     // Play the beep sound
//     beepSound.play();
// }

// Function to show the alert box with a beep sound
// function showAlert() {
//     // Play the beep sound
//     playBeep();

//     // Show the alert box
//     alert("Warning: Taking over control");
// }

// // Show the alert box after 10 seconds
// setTimeout(showAlert, 12000);

// Re-show the alert box after 7 seconds
// setInterval(function () {
// showAlert();
//  }, 9000);





const popup = document.getElementById('popup');
const beepSound = new Audio('beep.mp3'); // Replace 'beep.mp3' with the correct path to your audio file

// Function to play a beep sound
function playBeep() {
    beepSound.play();
}

// Function to show the pop-up and play the beep sound
function showPopup() {
    playBeep(); // Play the beep sound
    popup.style.display = 'block';
}

// Show the pop-up after 10 seconds
setTimeout(showPopup, 10000);





// const popup = document.getElementById('popup');
// const beepSound = new Audio('beep.mp3'); // Replace 'beep.mp3' with the correct path to your audio file

// // Function to play a beep sound
// function playBeep() {
//     beepSound.play();
// }

// // Function to show the pop-up and play the beep sound
// function showPopup() {
//     playBeep(); // Play the beep sound
//     popup.style.display = 'block';
    
//     // Generate a random delay for the next pop-up (between 0 to 15 seconds)
//     const randomDelay = Math.floor(Math.random() * 10000); // 15,000 milliseconds = 15 seconds
//     setTimeout(showPopup, randomDelay);
// }

// // Show the initial pop-up after 2 seconds
// setTimeout(showPopup, 2000);
