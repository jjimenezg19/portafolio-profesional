import Header from "@/components/Header"
import Banner from "@/sections/Banner"
import Projects from "@/sections/Projects"
import Skills from "@/sections/Skills"
import Experience from "@/sections/Experience"
import Education from "@/sections/Education"
import Ideals from "@/sections/Ideals"
import Contact from "@/sections/Contact"
import Footer from "@/sections/Footer"
import Navigation from "@/components/Navigation.jsx"

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { content } from "@/utils/dictionary.jsx"
import { useStore } from "@/utils/store.js"
import { ToastContainer, Slide } from "react-toastify"

export default function App() {
  const { currentLanguage } = useStore()

  const { section } = useParams()

  useEffect(() => {
    document.getElementById(section || "about-me").scrollIntoView()
  }, [section])

  useEffect(() => {
    // Oberserver for timeline animation
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-visible")
          } else {
            entry.target.classList.remove("timeline-visible")
          }
        })
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    )

    const articles = document.querySelectorAll(".timeline-text")
    articles.forEach((el) => timelineObserver.observe(el))

    return () => {
      timelineObserver.disconnect()
      sectionsObserver.disconnect()
    }
  }, [])

  return (
    <section className="h-full flex">
      <Navigation className="fixed z-[2] shrink-0 grow-0" content={content[currentLanguage].navigation} />

      <section className="w-full h-full shrink grow flex flex-col items-center">
        <Header className="fixed z-[1]" content={content[currentLanguage].header} />

        <main id="main" className="w-full overflow-x-clip">
          <Banner id="about-me" className="main-section" content={content[currentLanguage].banner} />
          <Projects id="projects" className="main-section" content={content[currentLanguage].projects} />
          <Skills id="skills" className="main-section" content={content[currentLanguage].skills} />
          <Experience id="experience" className="main-section" content={content[currentLanguage].experience} />
          <Education id="education" className="main-section" content={content[currentLanguage].education} />
          <Ideals id="ideals" className="main-section" content={content[currentLanguage].ideals} />
          <Contact id="contact" className="main-section" content={content[currentLanguage].contact} />
        </main>

        <Footer content={content[currentLanguage].footer} />
      </section>
      <ToastContainer position="bottom-right" autoClose={4000} hideProgressBar={true} closeOnClick pauseOnHover transition={Slide} theme="none" />
    </section>
  )
}
