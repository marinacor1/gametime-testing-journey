  // Use the DOM to find the canvas element on the page
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext('2d');




 // Use the DOM to find the canvas element on the page
  // Start a loop to animate the game

function animate() {
   requestAnimationFrame(animate);
 }

 animate();
  // within that loop, draw the game elements
