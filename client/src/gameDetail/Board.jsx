import React from 'react'
import { useEffect, useRef } from 'react'
import BallMovement from './BallMovement'
import CollisionWall from './CollisionWall'
import Brick from './Brick'
import Paddle from './Paddle'
import CollisionBrick from './CollisionBrick'
import CollisionPaddle from './CollisionPaddle'
import PlayerStats from './PlayerStats'
import BallReset from './BallReset'

let bricks = []

// x,y set initial drop in of ball, dx / dy changes framerate of ball, rad changes size of ball
let ballSize = {
  x: 20,
  y: 500,
  dx: 6,
  dy: 6,
  rad: 10,
  speed: 8,
}
// initial gap and how far to push bricks down
let brickSize = {
  x: 0.5,
  y: 100,
  height: 10,
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
  width: 160,
  x: 100
}

export default function Board() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")

      // create the collision dimension for the paddle
      // set up inside the useEffect to access canvas property
      paddleSize.y = canvas.height - 30

      // runs function Brick
      // sets the layers of bricks, using the canvas dimensions, with the brick size and height
      // let brickSet = Brick(29, bricks, canvas, brickSize, brickSize.y = 100)
      let brickSet = Brick(1, bricks, canvas, brickSize, brickSize.y = 80)

      // guardrail for the bricks
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
      for (let j = 0; j < bricks.length; j++) {
        brickCollision = CollisionBrick(ballSize, bricks[j])
        if (brickCollision.hit && !bricks[j].destroyed) {
          if (brickCollision.axis === "X") {
            ballSize.dx *= -1
            bricks[j].destroyed = true
          } else if (brickCollision.axis === "Y") {
            ballSize.dy *= -1
            bricks[j].destroyed = true
          }
          player.score += 10
        }
      }
      Paddle(ctx, canvas, paddleSize)
      CollisionPaddle(ballSize, paddleSize)

      // logic to end game
      let total = 0
      for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].destroyed === true) {
          total++
        }
      }
      if (total === bricks.length) {
        alert("Congratulations! Please refresh the page if you'd like to play again, or press OK to continue navigating the site.")
        bricks.length = 0
        ballSize.x = 20
        ballSize.y = 60
        ballSize.dx = 0
        ballSize.dy = 0
        total++
      }
      if (player.lives === 0) {
        alert("No lives remaining! Please refresh the page if you'd like to play again, or press OK to continue navigating the site.")
        player.lives = 1
        player.score = 0
        BallReset(ballSize, paddleSize)
        bricks.length = 0
        ballSize.x = 20
        ballSize.y = 500
        ballSize.dx = 0
        ballSize.dy = 0
      }

      requestAnimationFrame(render)
    }
    render()
  }, [])

  return (
    <canvas
      className="canvas"
      ref={canvasRef}
      height={window.innerHeight - 200}
      width={window.innerWidth - 20}
      onMouseMove={(event) => (paddleSize.x = event.clientX - paddleSize.width / 2 - 8)
      }
    />
  )
}
