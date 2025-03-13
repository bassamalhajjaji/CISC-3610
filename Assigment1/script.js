// Get the canvas and context
const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

// Load background image
const background = new Image();
background.src = 'images/background.png';  // Ensure the image is in the 'images' folder
background.onload = function() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    // Load foreground images AFTER background is drawn
    loadForeground();
};

// Function to load foreground images
function loadForeground() {
    const foreground1 = new Image();
    foreground1.src = 'images/tree.png';  // Change filename as needed
    foreground1.onload = function() {
        ctx.drawImage(foreground1, 50, 250, 150, 200);  // Adjust position & size

        const foreground2 = new Image();
        foreground2.src = 'images/house.png';  // Change filename as needed
        foreground2.onload = function() {
            ctx.drawImage(foreground2, 500, 300, 200, 150);  // Adjust position & size

            // Add text after images are drawn
            drawText();
        };
    };
}

// Function to draw text on the canvas
function drawText() {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('My Canvas Scene', 280, 50);
    ctx.fillText('By: Your Name', 320, 90);
}
