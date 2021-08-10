export default function CollisionWall(ballSize, canvas, player, paddleSize) {
  if (ballSize.y + ballSize.rad > canvas.height) {
    player.lives--;
    ballSize.x = paddleSize.x;
    ballSize.y = paddleSize.y - 30;
    ballSize.dx = 6 * (Math.random() * 2 - 1);
    ballSize.dy = -6;
  }
  if (ballSize.y - ballSize.rad < 0) {
    ballSize.dy *= -1;
  }

  if (ballSize.x - ballSize.rad <= 0 || ballSize.x + ballSize.rad >= canvas.width) {
    ballSize.dx *= -1
  }
}