import React from 'react'
import '../assets/Style.css'
import css from '../assets/icons/css3-original-wordmark.svg'
import express from '../assets/icons/express-original-wordmark.svg'
import git from '../assets/icons/git-original-wordmark.svg'
import github from '../assets/icons/github-original.svg'
import html from '../assets/icons/html5-original-wordmark.svg'
import javascript from '../assets/icons/javascript-original.svg'
import mongodb from '../assets/icons/mongodb-original-wordmark.svg'
import nodejs from '../assets/icons/nodejs-original.svg'
import postgresql from '../assets/icons/postgresql-original-wordmark.svg'
import rails from '../assets/icons/rails-original-wordmark.svg'
import react from '../assets/icons/react-original-wordmark.svg'
import ruby from '../assets/icons/ruby-plain-wordmark.svg'


export default function Skills() {
  return (
    <div className='skills-container'>
      <img className='skills-card' src={css} alt="CSS3" />
      <img className='skills-card' src={express} alt="express" />
      <img className='skills-card' src={git} alt="git" />
      <img className='skills-card' src={github} alt="github" />
      <img className='skills-card' src={html} alt="html" />
      <img className='skills-card' src={javascript} alt="javascript" />
      <img className='skills-card' src={mongodb} alt="mongodb" />
      <img className='skills-card' src={nodejs} alt="nodejs" />
      <img className='skills-card' src={postgresql} alt="postgresql" />
      <img className='skills-card' src={rails} alt="rails" />
      <img className='skills-card' src={react} alt="react" />
      <img className='skills-card' src={ruby} alt="ruby" />
    </div>
  )
}
