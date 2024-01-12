import './App.css';
import Section from './components/Section.jsx';
import Header from './components/Home/Header/Header.jsx';
import About from './components/Home/About/About.jsx';
import QualificationSection from './components/Experience/QualificationSection.jsx';
import SkillsSection from './components/Experience/Skills/SkillsSection.jsx';
import ProjectsSection  from './components/Projects/ProjectsSection.jsx';
import Contact from './components/Home/Contact/Contact.jsx'
import Footer from './components/Home/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header/>

      <Section sectionName ={"about"}> <About/></Section>

      <Section sectionName ={"skills"} 
      title={"Skill Set"} 
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

      <a href="#home" class="scrollup" id="scroll-up">
        <i class="uil uil-arrow-up scrollup-icon"></i>
      </a>


      <Footer/>

    </div>
  );
}

export default App;
