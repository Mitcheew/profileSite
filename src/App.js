import React from 'react';
import Skills from "./components/skills"
import NameTopBar from "./components/nameTopBar"
import HeaderImage from "./components/headerImage"
import ProjectsCarousel from "./components/projectsCarousel"
import Contact from "./components/contact"
import Links from "./components/links"

export default function App() {
  return (
    <div className="App">
      <NameTopBar />
      <HeaderImage />
      <Skills />
      <ProjectsCarousel />
      <Contact />
      <Links />
    </div>
  )
}