import './App.css'
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/ProjectContainer/Projects';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </>
  )
}

export default App;
