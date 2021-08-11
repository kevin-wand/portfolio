export default function Paddle(ctx, canvas, paddleSize) {
  class PaddleObj {
    constructor(x) {
      this.x = x
      this.y = canvas.height - 30
      this.width = paddleSize.width
      this.height = paddleSize.height
      this.colors = paddleSize.color
    }
    move() {
      ctx.beginPath()
      ctx.rect(this.x, this.y, this.width, this.height)
      ctx.fillStyle = "#000000"
      ctx.fill()
    }
  }

  let paddle = new PaddleObj(paddleSize.x)
  paddle.move()
  if (paddleSize.x <= 0) {
    paddleSize.x = 0
  } else if (paddleSize.x + paddleSize.width >= canvas.width) {
    paddleSize.x = canvas.width - paddleSize.width
  }
}