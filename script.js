const container = document.getElementById('container');
const containerGrow = document.querySelector('.container.grow');
const text = document.getElementById('text');
const pointerContainer = document.querySelector('.pointer-container');
const audio = document.querySelector('#audio');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

container.addEventListener("click", function() {
    breathAnimation();
    pointerContainer.style.animation = 'rotate 7.5s linear forwards infinite';
    audio.play();
    container.style.pointerEvents = "none";

    setInterval(breathAnimation, totalTime);
});

function breathAnimation(e) {
    text.innerText = 'Breathe In...';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out...';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}