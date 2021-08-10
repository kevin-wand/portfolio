export default function BallReset(ballSize, paddleSize) {
  ballSize.x = paddleSize.x * 2
  ballSize.y = paddleSize.y - 80
  ballSize.dx = 5 * (Math.random() * 2 - 1)
  ballSize.dy = -5
}