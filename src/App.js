
import './App.css';
import { AppWrapper } from './style';
import Bio from './components/bio/Bio';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';


function App() {
  return (
    <AppWrapper >
      <Navbar/>
      <Bio/>
      <Skills/>
      <Projects/>
      <Contact/>
    </AppWrapper>
  );
}

export default App;
