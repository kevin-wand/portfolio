import React from 'react'
import '../assets/Style.css'
import { useState } from 'react';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default function Bio() {
  return (
    <div className='bio'>
      <div>Enjoying my visit at a cat café</div>
      <img src="https://i.imgur.com/fXNaJEO.jpg" alt="Cat Cafe in China" />
      {/* <img src="https://i.imgur.com/jRt5O71.jpg" alt="profile pic" /> */}
      <div>I’m a software developer with experience in finance & commercial real estate.</div>
      <h2>
        <ReadMore>
          Combining a background in investment/data analysis with my insatiable curiosity, \n
          I developed a strong desire to be part of the technology industry and found a passion for programming. \n
          Thoughtful, team oriented, always striving for 1% better and eager to \n
          continuously improve my coding & debugging skills.
        </ReadMore>
      </h2>
    </div>
  );
};

    // small blurb
    // more about me info
    // blurb...show more

    // click event on button



