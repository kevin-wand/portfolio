import React from 'react'
import '../assets/Style.css'

export default function Projects() {
  const projects = [
    {
      name: "The Big Top",
      link: "https://the-big-top.netlify.app",
      image: "https://the-big-top.netlify.app",
      description: "Based on the ticketmaster api you can pull the "
    },
    {
      name: "RE Dev Model",
      link: "https://redevmodel.netlify.app",
      image: "https://redevmodel.netlify.app",
      description: "Ticketmaster"
    },
    {
      name: "Akea Comics",
      link: "https://akea-comics-app.netlify.app",
      image: "https://akea-comics-app.netlify.app",
      description: "Ticketmaster"
    },
    {
      name: "Test Your Inner Nerd",
      link: "https://nerd-score.netlify.app",
      image: "https://nerd-score.netlify.app",
      description: "Ticketmaster"
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
