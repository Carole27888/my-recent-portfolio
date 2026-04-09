
import NavbarMain from './components/Navbar/NavbarMain'
import HeroMain from './components/HeroSection/HeroMain'
import HeroGradient from './components/HeroSection/HeroGradient'
import SubHeroSection from './components/HeroSection/SubHeroSection'
import AboutMeMain from './components/AboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/SkillsSection/SkillsMain'
import SubSkills from './components/SkillsSection/SubSkills'
import EducationMain from './components/EducationSection/EducationMain'
import ExperienceMain from './components/ExperienceSection/ExperienceMain'
import ProjectsMain from './components/ProjectsSection/ProjectsMain'
import ContactMeMain from './components/ContactMeSection/ContactMeMain'
import FooterMain from './components/FooterSection/FooterMain'



function App() {
  

  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <EducationMain />
      <ExperienceMain />
      <ProjectsMain />
      <HelperSection />
      <ContactMeMain />
      <FooterMain />
    </main>
      
    
  )
}

export default App
