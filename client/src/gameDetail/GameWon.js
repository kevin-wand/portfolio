import BallReset from "./BallReset"

export default function GameWon(bricks, player, ballSize, paddleSize) {
  let total = 0
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].destroyed === true) {
      total++
    }
  }

  if (total === bricks.length) {
    alert("No bricks left! Congratulations! The game will reset once. Please refresh to play again or press OK to continue navigating the site")
    player.lives = 5
    bricks.length = 0
    BallReset(ballSize, paddleSize)
    player.score = 0

  }
}