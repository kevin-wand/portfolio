export default function Brick(level, bricks, canvas, brick) {
  // set the width of bricks by the canvas window
  brick.width = canvas.width / 5 - 1

  // instantiate brick array with guard rails
  let brickDisplay = []
  if (!bricks) {
    return []
  }
  // number used should be less than or equal to # of bricks in column
  if (bricks.length >= 5 * level) {
    return
  }

  // create a level of bricks with the class properties 
  for (let i = 0; i < 5 * level; i++) {
    let newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    // use the loop to create rows of bricks
    brickDisplay.push(newBrick)

    // create gap between bricks
    brick.x += brick.width + 1
    
    // set the next row of bricks
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }
  }
  return brickDisplay
}

class OneBrick {
  constructor(x, y, w, h, c) {
    this.x = x - w
    this.y = y
    this.width = w
    this.height = h
    this.colors = c
    this.destroyed = false
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = this.destroyed ? "transparent" : "#000000"
    ctx.fill()
  }
}