const background = new Image();
background.src = 'images/background.png';  // Ensure this matches exactly
background.onload = function() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    loadForeground();  // Load foreground images after background
};

function loadForeground() {
    const tree = new Image();
    tree.src = 'images/tree.png';  // Ensure correct path
    tree.onload = function() {
        ctx.drawImage(tree, 50, 250, 150, 200);

        const house = new Image();
        house.src = 'images/house.png';  // Ensure correct path
        house.onload = function() {
            ctx.drawImage(house, 500, 300, 200, 150);

            drawText();
        };
    };
}

function drawText() {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('My Canvas Scene', 280, 50);
    ctx.fillText('By: Your Name', 320, 90);
}
