import Carousel from "@/components/Carousel"

import { useStore } from "@/utils/store.js"
import { useEffect } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Projects({ id, className, content }) {
  className = className ?? ""

  const { currentTheme } = useStore()

  useEffect(() => {
    const projects = document.querySelector(".projects")

    const gap = window.matchMedia("(min-width: 768px)").matches ? 80 : 0

    const getScrollAmount = () => {
      return -(projects.scrollWidth - window.innerWidth + gap)
    }

    const scrollInstance = ScrollTrigger.create({
      trigger: ".projectsWrapper",
      start: "0%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: gsap.to(projects, {
        x: getScrollAmount,
        duration: 1,
        ease: "none"
      }),
      scrub: 1,
      invalidateOnRefresh: true
    })

    return () => {
      scrollInstance.kill()
    }
  }, [])

  return (
    <section id={id} className={`projectsWrapper h-screen md:pl-20 ${className}`}>
      <div className="projects w-full h-full flex xsAndDown:gap-24 mdAndDown:pt-16">
        {content.map(({ gallery, title, subtitle, description, technologies, links }, i) => (
          <div key={`project-${i}`} className="shrink-0 w-full h-full flex flex-col lg:flex-row justify-center items-center gap-4 px-4">
            <div className="shrink-0 w-75 xs:w-100 sm:w-110 lg:w-130 h-50 xs:h-67 sm:h-74 lg:h-87 flex justify-center relative">
              <Carousel className="w-54 xs:w-73 sm:w-80 lg:w-94 h-37 xs:h-48 sm:h-53 lg:h-62 mt-2 sm:mt-[0.625rem]" items={gallery} index={i} />
              <img className="w-full absolute pointer-events-none" src={`laptop-${currentTheme}.svg`} alt="laptop" />
            </div>
            <div className="w-full max-w-120 overflow-y-auto mdAndDown:text-center">
              <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
              <h2 className="text-lg lg:text-xl text-neutral300 italic">{subtitle}</h2>
              <p className="textbase lg:text-lg text-neutral400 mt-2 md:mt-4">{description}</p>
              <div className="flex flex-wrap justify-center lg:justify-end gap-2 mt-4 pb-2 lg:pb-0">
                {technologies.map(({ name, logo }, j) => (
                  <div key={`project-${i}-tec-${j}`} className="shrink-0 flex gap-2 border-2 border-primary400 rounded-3xl px-2 py-1 cursor-default">
                    <img className="w-4 h-auto" src={`teclogos/${logo}.svg`} alt={`${logo} svg`} />
                    <span className="capitalize text-sm text-neutral300 font-bold">{name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-end gap-2 mt-4">
                {links.map(({ icon, url, text }, k) => (
                  <a key={`project-${i}-link-${k}`} href={url} target="_blank" className="hover:text-primary300 text-base lg:text-lg">
                    <i className={icon}></i>
                    <span className="ml-2">{text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
