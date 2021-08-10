import React from 'react'
import '../assets/Style.css'

export default function Projects() {
  const projects = [
    {
      name: "The Big Top",
      image: "http://www.jpg",
      description: "Ticketmaster"
    },
    {
      name: "RE Dev Model",
      image: "http://www.jpg",
      description: "Ticketmaster"
    },
    {
      name: "Akea Comics",
      image: "http://www.jpg",
      description: "Ticketmaster"
    },
    {
      name: "Test Your Inner Nerd",
      image: "http://www.jpg",
      description: "Ticketmaster"
    }
  ]

  return (
    <div className='project-container'>
      {projects.map((project, index) => (
        <div className='project-card' key={index}>
          <img src={project.image} alt={project.name} />
          <div>{project.name}</div>
          <div>{project.description}</div>
        </div>
      ))}
    </div>
  )
}
