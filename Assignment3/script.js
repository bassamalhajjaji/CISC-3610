// Get canvas and context
const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

// Sound effects
const sounds = [
    new Audio('sounds/sound1.mp3'),
    new Audio('sounds/sound2.mp3'),
    new Audio('sounds/sound3.mp3')
];

// Load images
const backgrounds = {
    bg1: 'images/bg1.jpg',
    bg2: 'images/bg2.jpg',
    bg3: 'images/bg3.jpg'
};

const items = {
    item1: 'images/item1.png',
    item2: 'images/item2.png',
    item3: 'images/item3.png'
};

let selectedBg = 'bg1';
let xPos = 350;

// Event listeners for interactivity
document.querySelectorAll('input[name="background"]').forEach(radio => {
    radio.addEventListener('change', () => {
        selectedBg = radio.value;
        drawScene();
    });
});

document.getElementById('slider').addEventListener('input', (e) => {
    xPos = e.target.value;
    drawScene();
});

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', drawScene);
});

// Play sound function
function playSound(index) {
    sounds[index - 1].play();
}

// Draw the scene
function drawScene() {
    // Draw background
    const bgImage = new Image();
    bgImage.src = backgrounds[selectedBg];
    bgImage.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

        // Draw items based on checkboxes
        for (let item in items) {
            if (document.getElementById(item).checked) {
                const img = new Image();
                img.src = items[item];
                img.onload = () => {
                    let yPos = (item === 'item1') ? 250 : (item === 'item2') ? 300 : 350;
                    ctx.drawImage(img, xPos, yPos, 100, 100);
                };
            }
        }
    };
}

// Initial draw
drawScene();