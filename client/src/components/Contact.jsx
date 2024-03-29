import '../assets/Style.css'
import { useState } from 'react'

export default function Contact() {
  const [isName, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='contact-wrapper'>
      <form
        className='contact-container'
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            isName='Name'
            onChange={(e) => setName(e.target)}
          />
        </label>
        <label>
          Email:
          <input
            isName='Email'
            onChange={(e) => setName(e.target)}
          />
        </label>
        <label>
          Comment:
          <textarea
            isName='Comment'
            onChange={(e) => setName(e.target)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
