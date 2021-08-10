export default function PlayerStats(ctx, player, canvas) {
  ctx.font = "20px Arial"
  ctx.fillStyle = "#FFFFFF"
  ctx.fillText(`Name: ${player.name}`, 30, 30)

  // display "lives"
  ctx.font = "20px Arial"
  ctx.fillStyle = "red"
  ctx.fillText(`Lives: `,canvas.width / 2 - 60, 30)
  let gap = 0
  for (let i = 0; i < player.lives; i++) {
    ctx.fillText("<3", canvas.width / 2 + gap, 30)
    gap += 30
  }

  // display "score"
  ctx.font = "20px Arial"
  ctx.fillStyle = "#FFFFFF"
  ctx.fillText(`Score: ${player.score}`, canvas.width - 120, 30)
}