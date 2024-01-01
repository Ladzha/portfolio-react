import './App.css';
import Navbar from './components/Navbar.jsx';
import Section from './components/Section.jsx';
import About from './components/Home/About.jsx';
import EducationSection from './components/Experience/Education/EducationSection.jsx';
import WorkSection from './components/Experience/Work/WorkSection.jsx';
import SkillsSection from './components/Experience/Skills/SkillsSection.jsx';
import ProjectsSection  from './components/Projects/ProjectsSection.jsx';
import Contact from './components/Home/Contact.jsx'
import SkillList from './components/Experience/Skills/SkillList.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section sectionName ={"about"}> <About/>
      </Section>
      <Section sectionName ={"skills"} 
      title={"Skills"} 
      subtitle ={"Some tools I've been working with recently"}> <SkillsSection/>
      </Section>
      <Section sectionName ={"education"} 
      title={"Education"} 
      subtitle ={"Some tools I've been working with recently"}> <EducationSection/>
      </Section>
      <Section sectionName ={"work"} 
      title={"Work"} 
      subtitle ={"My journey"}> <WorkSection/>
      </Section>
      <Section sectionName ={"portfolio"} 
      title={"Portfolio"} 
      subtitle ={"Here are a few projects"}> <ProjectsSection/>
      </Section>
      <Section sectionName ={"contact"} 
      title={"Contact"} 
      subtitle ={"Some tools I've been working with recently"}> <Contact/>
      </Section>
    </div>
  );
}

export default App;
