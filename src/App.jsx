import './App.css';
import Navbar from './components/Navbar.jsx';
import Section from './components/Section.jsx';
import About from './components/Home/About.jsx';
import QualificationSection from './components/Experience/QualificationSection.jsx';
import SkillsSection from './components/Experience/Skills/SkillsSection.jsx';
import ProjectsSection  from './components/Projects/ProjectsSection.jsx';
import Contact from './components/Home/Contact.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Section sectionName ={"about"}> <About/></Section>

      <Section sectionName ={"skills"} 
      title={"Skills"} 
      subtitle ={"Some tools I've been working with recently"}> 
      <SkillsSection/>
      </Section>

      <Section sectionName ={"qualification"} 
      title={"Qualification"} 
      subtitle ={"My journey"}> 
      <QualificationSection/>
      </Section>

      <Section sectionName ={"portfolio"} 
      title={"Portfolio"} 
      subtitle ={"Here are a few projects"}> 
      <ProjectsSection/>
      </Section>

      <Section sectionName ={"contact"} 
      title={"Contact"} 
      subtitle ={"Get in touch"}> 
      <Contact/>
      </Section>

    </div>
  );
}

export default App;
