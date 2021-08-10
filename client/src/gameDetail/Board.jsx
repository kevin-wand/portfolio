import React from 'react'
import { useEffect, useRef } from 'react'
// import data from './data'
import BallMovement from './BallMovement'
import CollisionWall from './CollisionWall'
import Brick from './Brick'
import Paddle from './Paddle'
import CollisionBrick from './CollisionBrick'
import CollisionPaddle from './CollisionPaddle'
import PlayerStats from './PlayerStats'

// let { ballSize } = data

let bricks = []

// x,y set initial drop in of ball, dx / dy changes framerate of ball, rad changes size of ball
let ballSize = {
  x: 20,
  y: 200,
  dx: 5,
  dy: 5,
  rad: 10,
  speed: 10,
}
// initial gap and how far to push bricks down
let brickSize = {
  x: 0.5,
  y: 50,
  height: 20,
  density: 2,
}
let player = {
  name: "Kevin",
  lives: 5,
  score: 0
}
// height, width sets size of paddle, x starts the initial location of paddle
let paddleSize = {
  height: 20,
  width: 100,
  x: 100
}

export default function Board() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")

      paddleSize.y = canvas.height - 30

      let brickSet = Brick(4, bricks, canvas, brickSize)

      if (brickSet && brickSet.length > 0) {
        bricks = brickSet
      }

      // erases pixels in area
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      PlayerStats(ctx, player, canvas)
      bricks.map((brick) => {
        return brick.draw(ctx)
      })

      BallMovement(ctx, ballSize)

      CollisionWall(ballSize, canvas, player, paddleSize)

      let brickCollision

      for (let i = 0; i < bricks.length; i++) {
        brickCollision = CollisionBrick(ballSize, bricks[i])

        if (brickCollision.hit && !bricks[i].destroyed) {
          if (brickCollision.axis === "X") {
            ballSize.dx *= -1
            bricks[i].destroyed = true
          } else if (brickCollision.axis === "Y") {
            ballSize.dy *= -1
            bricks[i].destroyed = true
          }
          player.score += 10
        }
      }

      Paddle(ctx, canvas, paddleSize)

      CollisionPaddle(ballSize, paddleSize)

      requestAnimationFrame(render)
    }
    render()
  }, [])

  return (
    <canvas
      className="canvas"
      ref={canvasRef}
      height="500px"
      width={window.innerWidth - 20}
      onMouseMove={(event) => (paddleSize.x = event.clientX - paddleSize.width / 2 - 8)
      }
    />
  )
}
