import { Routes, Route } from 'react-router-dom'
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
import BlogList from './components/BlogSection/BlogList'
import BlogPost from './components/BlogSection/BlogPost'

function HomePage() {
  return (
    <>
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
    </>
  )
}

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </main>
  )
}

export default App
