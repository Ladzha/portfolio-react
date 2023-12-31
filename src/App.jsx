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
      subtitle ={"Some tools I've been working with recently"}> <SkillList/>
      </Section>
      {/* <About/>
      <EducationSection/>
      <WorkSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <Contact/> */}
    </div>
  );
}

export default App;
