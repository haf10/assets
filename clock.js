function updateClock(){
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}

function openWebsite(){
    window.location.href = "main.html";
}

// Run the clock loop
updateClock();
setInterval(updateClock, 1000);

// AR Target Listeners to toggle the UI overlay
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const arTarget = document.getElementById("ar-target");

    // Show button when QR code is found
    arTarget.addEventListener("targetFound", () => {
        overlay.style.display = "block";
    });

    // Hide button if camera loses track of the QR code
    arTarget.addEventListener("targetLost", () => {
        overlay.style.display = "none";
    });
});