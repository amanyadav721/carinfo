// Add this within your script.js file
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeToggle = document.querySelector("#theme-toggle");

    // Check the user's preference or set the default theme
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
    } else {
        body.classList.add("day-mode"); // Default theme
    }

    // Toggle the theme when the button is clicked
    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("day-mode")) {
            body.classList.remove("day-mode");
            body.classList.add("night-mode");
            localStorage.setItem("theme", "night-mode");
        } else {
            body.classList.remove("night-mode");
            body.classList.add("day-mode");
            localStorage.setItem("theme", "day-mode");
        }
    });
});
function toggleMute() {
    var video = document.getElementById("myVideo");
    var muteButton = document.getElementById("muteButton");
    
    if (video.muted) {
        video.muted = false;
        muteButton.innerHTML = '<span class="icon-mute">🔇</span>';
    } else {
        video.muted = true;
        muteButton.innerHTML = '<span class="icon-unmute">🔊</span>';
    }
}
