export default function Brick(level, bricks, canvas, brick) {
  let column = 27

  brick.width = canvas.width / column - 1
  let brickDisplay = []
  if (!bricks) {
    return []
  }
  if (bricks.length >= column * 29) {
    return
  }

  for (let i = 0; i < level; i++) {
    // row 1
    let newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1

    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1

    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 2
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 3
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 4
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 5
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 6
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 7
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 8
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 9
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 10
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 11
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 12
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 13
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 14
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 15
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 16
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 17
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 18
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 19
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 20
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 21
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 22
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 23
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 24
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 25
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 26
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 27
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 28
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
      + brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 29
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1

    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1

    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    newBrick = new OneBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors
    )
    brickDisplay.push(newBrick)
    brick.x += brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }
  }

  console.log(brickDisplay)
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