
import './App.css';
import Game from './components/Game';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../src/assets/Style.css'

function App() {
  return (
    <div className="App">
      <Game />
      <div className='profile'>
        <Bio />
        <Skills />
      </div>
      <div className='project-wrapper'>
      <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

/*
references:
https://24ways.org/2014/javascript-modules-the-es6-way/
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#using_the_default_export
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
https://www.youtube.com/watch?v=ftDxniRTpRQ&t
https://hacks.mozilla.org/2015/08/es6-in-depth-modules/


*/
