const botImage = document.getElementById("botImage");
const welcomeButton = document.getElementById("welcomeButton");

if (botImage) {
    botImage.addEventListener("click", function() {
        if (botImage.src.includes("Sniperbot_blu.png")) {
            botImage.src = "images/Soldierbot_blu.png";
        } else {
            botImage.src = "images/Sniperbot_blu.png";
        }
    });
}

if (welcomeButton) {
    welcomeButton.addEventListener("click", function() {
        alert("Welcome to my website!");
    });
}