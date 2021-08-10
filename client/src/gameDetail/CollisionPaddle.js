export default function CollisionPaddle(ballSize, paddleSize) {
  if (
    ballSize.x < paddleSize.x + paddleSize.width &&
    ballSize.x > paddleSize.x &&
    paddleSize.y < paddleSize.y + paddleSize.height &&
    ballSize.y + ballSize.rad > paddleSize.y - paddleSize.height / 2
  ) {
    let collisionPoint = ballSize.x - (paddleSize.x + paddleSize.width / 2)

    collisionPoint = collisionPoint / (paddleSize.width / 2)
    
    let angle = (collisionPoint * Math.PI) / 3

    ballSize.dx = ballSize.speed * Math.sin(angle)
    ballSize.dy = -ballSize.speed * Math.cos(angle)
  }
}