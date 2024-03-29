
import './App.css';
import Game from './components/Game';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import '../src/assets/Style.css'

function App() {
  return (
    <div className="App">
      <Game />
      <div className='profile'>
        <Bio />
      </div>
      <div className='skills-grid'>
        <Skills />
      </div>
      <div className='project-wrapper'>
      <Projects />
      </div>
      
      <Footer />
    </div>
  );
}

/* removed <Contact /> from above <Footer /> for current upload */

export default App;

