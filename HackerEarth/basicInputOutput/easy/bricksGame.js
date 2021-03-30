let bricksGame = (bricks) => {
  let i = 1;
  let lastBrick = "";
  while (bricks > 0) {
    bricks += -i;
    lastBrick = "Patlu";

    if (bricks > 0) {
      bricks += -(i * 2);
      lastBrick = "Motu";
    }
    i++;
  }
  console.log(lastBrick);
};

bricksGame(3694);
