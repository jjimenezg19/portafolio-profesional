import NavigationIndicator from "@/components/NavigationIndicator.jsx"
import GoToTopButton from "@/components/GoToTopButton"

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { debounce } from "@/utils/shortcuts.js"

export default function NavigationSVG({ className, content }) {
  className = className ?? ""

  const navigate = useNavigate()
  const { section } = useParams()

  const [navOpen, setNavOpen] = useState(window.matchMedia("(min-width: 768px)").matches)
  const [sectionsObserver, setSectionsObserver] = useState(null)

  useEffect(() => {
    // Oberserver for sections when get into view
    setSectionsObserver(
      new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (isIntersecting) {
              moveNavIndicator(target.id)
              navigate(`/${target.id}`)
            }
          })
        },
        { root: null, rootMargin: "0px", threshold: 0.2 }
      )
    )
  }, [])

  useEffect(() => {
    if (sectionsObserver) {
      setObserver()
    }
  }, [sectionsObserver])

  useEffect(() => {
    moveNavIndicator(section || "about-me")
  }, [section])

  const setObserver = () => {
    const sections = document.querySelectorAll(".main-section")
    sections.forEach((section) => sectionsObserver.observe(section))
  }

  const moveNavIndicator = (section) => {
    const target = document.getElementById(`${section || "about-me"}-option`)
    document.getElementById("navigation-indicator").style.top = `-${window.innerHeight - target.offsetTop - target.offsetHeight / 2}px`
  }

  const watchScroll = debounce(() => {
    setObserver()
    window.removeEventListener("scroll", watchScroll)
  }, 100)

  const handleOption = (section) => {
    sectionsObserver.disconnect()
    moveNavIndicator(section)
    navigate(`/${section}`)

    window.addEventListener("scroll", watchScroll)
  }

  const options = [
    { id: "about-me", icon: "fas fa-star", text: content.aboutMe },
    { id: "projects", icon: "fas fa-laptop-code", text: content.projects },
    { id: "skills", icon: "fas fa-code", text: content.skills },
    { id: "experience", icon: "fas fa-business-time", text: content.experience },
    { id: "education", icon: "fas fa-graduation-cap", text: content.education },
    { id: "ideals", icon: "fas fa-lightbulb", text: content.ideals },
    { id: "contact", icon: "fas fa-envelope", text: content.contact }
  ]

  return (
    <>
      <aside className={`w-15 md:w-20 h-full transition ${className} ${navOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div id="navigation-indicator" className="absolute w-full h-[200%] flex flex-col transition-all duration-300">
          <div className="bg-secondary200 w-full h-full"></div>
          <NavigationIndicator open={navOpen} />
          <div className="bg-secondary200 w-full h-full"></div>
        </div>
        <nav className="w-full h-full relative flex flex-col justify-center items-center">
          {options.map(({ id, icon, text }, index) => (
            <div onClick={() => handleOption(id)} id={`${id}-option`} key={index} className={`group size-15 md:size-20 flex flex-col gap-1 justify-center items-center text-ternary500 cursor-pointer transition-transform duration-300 ${id === (section || "about-me") ? `${!navOpen ? "-translate-x-full" : "translate-x-1/2"} !text-primary300 nav-option-active` : ""}`}>
              <i className={`text-lg md:text-2xl transition-transform duration-500 ${icon}`}></i>
              <span className={`text-[0.6rem] md:text-xs transition-all duration-200 font-semibold group-hover:h-4 group-hover:opacity-100 ${id === (section || "about-me") ? "h-4 opacity-100" : "md:opacity-0 md:h-0"}`}>{text}</span>
            </div>
          ))}
        </nav>
        <div onClick={() => setNavOpen(!navOpen)} className={`md:hidden size-6 absolute bg-secondary200 flex justify-center items-center rounded-r-lg ${navOpen ? "top-4 left-0 right-0 mx-auto" : "top-16 left-full"}`}>
          {navOpen ? <i className="fas fa-times text-ternary500 text-xl"></i> : <i className="fas fa-chevron-right text-ternary500 text-sm"></i>}
        </div>
      </aside>

      <GoToTopButton show={section !== "about-me"} onClick={() => handleOption("about-me")} />
    </>
  )
}
