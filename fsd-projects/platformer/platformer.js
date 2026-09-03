$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(225, 195, 255)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    for (let i = 100; i < canvas.width; i += 100) {
      createPlatform(i, canvas.height, -1, -canvas.height);
    }
    for (let i = 100; i < canvas.height; i += 100) {
      createPlatform(canvas.width, i, -canvas.width, -1);
    }
    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 620, 20, 290);
    createFakePlatform(350, 650, 200, 50, "#00000036");
    createPlatform(100, 400, 200, 20, "#f8070727", 100, 400, 2, 300, 400, 2);
    createBadPlatform(100, 618, 20, 10, "red")
    createFakePlatform(0, 620, 285, 10);
    //Loop for creating staircase
     for(var i = 500; i >=0; i-=5){
      createPlatform(0, i + 500, i, 10);
     }
    // TODO 3 - Create Collectables
    createCollectable('star' ,700, 200, 0.5, 0.9999)
    createCollectable("star", 300, 200, 0.5, 0.9999);
    // TODO 4 - Create Cannons
    createCannon("top", 700, 1000);
    createCannon('top', 700, 1100)
    createCannon("top", 700, 1200, 20, 20, 200, 700, 5);
    createCannon("right", 100, 700, 100, 100, 0, 200, 2);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
