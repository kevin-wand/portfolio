import React from 'react'
import '../assets/Style.css'

export default function Projects() {
  const projects = [
    {
      name: "The Big Top",
      link: "https://the-big-top.netlify.app",
      image: "https://the-big-top.netlify.app",
      description: "Front-end website using Ticketmaster’s API to find events based on city & state search; uses asynchronous chaining to query multiple category types."
    },
    {
      name: "RE Dev Model",
      link: "https://redevmodel.netlify.app",
      image: "https://redevmodel.netlify.app",
      description: "Full-stack web app that calculates multi-year cashflow proforma analysis and provides return on investment metrics. Previous results can be stored and edited"
    },
    {
      name: "Akea Comics",
      link: "https://akea-comics-app.netlify.app",
      image: "https://akea-comics-app.netlify.app",
      description: "A full-stack web application built in a team environment using Git to manage and share code. The application was designed with a theme of popular comic brands facing off and built to mimic an online store where users can buy & sell comics with other visitors."
    },
    {
      name: "Test Your Inner Nerd",
      link: "https://nerd-score.netlify.app",
      image: "https://nerd-score.netlify.app",
      description: "A full-stack web application with user authentication. Users can play interactive trivia quizzes on pop culture categories, with sign-up/login to view full CRUD functionality via adding new/editing questions."
    }
  ]

  return (
    <div className='project-container'>
      {projects.map((project, index) => (
        <div className='project-card' key={index}>
          <img src={project.image} alt={project.name} />
          <div>{project.link}</div>
          <div>{project.name}</div>
          <div>{project.description}</div>
        </div>
      ))}
    </div>
  )
}
