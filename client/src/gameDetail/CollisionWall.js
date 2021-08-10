export default function CollisionWall(ballSize, canvas, player, paddleSize) {
  // collision with the "floor"
  if (ballSize.y + ballSize.rad > canvas.height) {
    player.lives--;
    ballSize.x = paddleSize.x;
    ballSize.y = paddleSize.y - 30;
    ballSize.dx = 5 * (Math.random() * 2 - 1);
    ballSize.dy = -5;
  }
  // collision with the "ceiling"
  if (ballSize.y - ballSize.rad < 0) {
    ballSize.dy *= -1;
  }

  // collision with side walls
  if (ballSize.x - ballSize.rad < 0 || ballSize.x + ballSize.rad > canvas.width) {
    ballSize.dx *= -1
  }
}