
import './App.css';
import Canvas from './components/Canvas';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../src/assets/Style.css'

function App() {
  return (
    <div className="App">
      <Canvas />
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
