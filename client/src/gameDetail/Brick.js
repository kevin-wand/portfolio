export default function Brick(level, bricks, canvas, brick) {
  let column = 27

  brick.width = canvas.width / column - 1
  let brickDisplay = []
  if (!bricks) {
    return []
  }
  if (bricks.length >= column * 35) {
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

    // row 15
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
    brickDisplay.push(newBrick)
    brick.y += brick.height + 1

    // row 15
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
    brickDisplay.push(newBrick)
    brick.y += brick.height + 1

    // row 2
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
    brickDisplay.push(newBrick)
    brick.y += brick.height + 1

    // row 3
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 4
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 5
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 6
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 7
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 8
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 9
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 10
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 11
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 12
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 13
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 14
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 15
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
    brickDisplay.push(newBrick)
    brick.y += brick.height + 1

    // row 15
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
    brickDisplay.push(newBrick)
    brick.y += brick.height + 1

    // row 15
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
    brickDisplay.push(newBrick)
    brick.y += brick.height + 1

    // row 16
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 17
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 18
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 19
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 20
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 21
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 22
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 23
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 24
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 25
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 26
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 27
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
    brick.x += brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1 + brick.width + 1
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5
      brick.y += brick.height + 1
    }

    // row 15
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
    brickDisplay.push(newBrick)
    brick.y += brick.height + 1

    // row 15
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
    brickDisplay.push(newBrick)
    brick.y += brick.height + 1

    // row 28
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
    brickDisplay.push(newBrick)
    brick.y += brick.height + 1

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