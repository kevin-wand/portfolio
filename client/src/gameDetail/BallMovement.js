export default function BallMovement(ctx, ballSize) {
  let data = new Ball(ballSize.x, ballSize.y, ballSize.rad)
  data.draw(ctx)
  ballSize.x += ballSize.dx
  ballSize.y += ballSize.dy
}

class Ball {
  constructor(x, y, rad) {
    this.x = x
    this.y = y
    this.rad = rad
  }
  draw(ctx) {
    // draw ball and creates motion with "fill"
    ctx.beginPath();
    // ball drawn at position x,y, with a circle size of radius, and a start and ending point of 'angles'
    ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
    // ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    // create motion
    ctx.fill();
    // if ball shape is not closed, close it, otherwise does nothing
    ctx.closePath();
    // "moves" the ball across the screen
    
  }
}
