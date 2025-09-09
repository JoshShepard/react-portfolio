import './App.css'
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/ProjectContainer/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App;
