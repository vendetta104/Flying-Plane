let player = document.getElementById("player");
let container = document.getElementById("container");
let pumpkin = document.getElementById("pumpkin");
let orange = document.getElementById("orange");
let mousePosX;
let gravity = 0.3;
let speedY = 0;
let score = 0;
let scoreText = document.querySelector("h1");
let passStep = false;

container.addEventListener("click", flyUp);

function flyUp(event) {
    speedY = -10;
    mousePosX = event.clientX - container.offsetLeft;
}

function update() {
    updatePlayer();
    updateOrange();
     checkForItemCollect(orange);
    window.requestAnimationFrame(update);
}

function updatePlayer() {
    // move horizontally
    let diffX = mousePosX - player.offsetLeft - (player.offsetWidth / 2);
    let playerTargetX = player.offsetLeft + (diffX * 0.015);
    player.style.left = playerTargetX + "px";

    // move vertically
    speedY += gravity;
    let playerTargetY = player.offsetTop + speedY;
    if (playerTargetY > container.offsetHeight) {
        playerTargetY = container.offsetHeight;
    }
    player.style.top = playerTargetY + "px";

    // rotate
    if (speedY < -5) {
        // go up
        player.style.transform = "rotate(-25deg)";
    } else if (speedY > 5) {
        // fall down
        player.style.transform = "rotate(25deg)";
    } else {
        player.style.transform = "rotate(0deg)";
    }
}

function updateOrange() {
    let targetOrangeX = orange.offsetLeft - 5;
    if (targetOrangeX < -orange.offsetWidth) {
        targetOrangeX = container.offsetWidth;
        orange.style.top = (Math.random() * 400) + "px";
    }
    orange.style.left = targetOrangeX + "px";
}

function checkForItemCollect(item) {
    let diffX = (item.offsetLeft + (item.offsetWidth / 2)) - (player.offsetLeft + (player.offsetWidth / 2));

    let diffY = (item.offsetTop + (item.offsetHeight / 2)) - (player.offsetTop + (player.offsetHeight / 2));

    if (Math.abs(diffX) < 40 && Math.abs(diffY) < 40) {
        item.style.left = container.offsetWidth + "px";
        item.style.top = (Math.random() * 400) + "px";

        if (item == orange) {
            score++;
            if (score >= 3) {
                passStep = true;
            }
        }
        scoreText.innerHTML = "score: " + score;
    }
}

window.requestAnimationFrame(update);
window.onload = window.onresize = resizeGame;

function resizeGame() {
    let gameRatio = container.offsetWidth / container.offsetHeight;
    let windowRatio = window.innerWidth / window.innerHeight;

    container.style.position = "absolute";
    container.style.left = `${(window.innerWidth - container.offsetWidth) / 2}px`;
    container.style.top = `${(window.innerHeight - container.offsetHeight) / 2}px`;

    let newScale;
    if (gameRatio > windowRatio) {
        newScale = window.innerWidth / container.offsetWidth;
        if (newScale > 1) newScale = 1;
    } else {
        newScale = window.innerHeight / container.offsetHeight;
        if (newScale > 1) newScale = 1;
    }
    container.style.transform = `scale(${newScale})`;
}
