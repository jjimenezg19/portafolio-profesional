import { useEffect } from "react"
import gsap from "gsap"
import Dragrabble from "gsap/Draggable"

gsap.registerPlugin(Dragrabble)

export default function AccordionCards() {
  const technologies = [
    { text: "JavaScript", img: "javascript" },
    { text: "Typescript", img: "typescript" },
    { text: "HTML", img: "html" },
    { text: "CSS", img: "css" },
    { text: "Tailwind", img: "tailwind" },
    { text: "NodeJs", img: "nodejs" },
    { text: "Vite", img: "vitejs" },
    { text: "React", img: "react" },
    { text: "Vue", img: "vue" },
    { text: "Green Sock Animation Platform", img: "gsap" },
    { text: "Figma", img: "figma" },
    { text: "Python", img: "python" },
    { text: "FastAPI", img: "fastapi" },
    { text: "Docker", img: "docker" },
    { text: "Kubernetes", img: "kubernets" },
    { text: "Git", img: "git" },
    { text: "PHP", img: "php" },
    { text: "Laravel", img: "laravel" },
    { text: "Java", img: "java" },
    { text: "MySQL", img: "mysql" },
    { text: "MariaDB", img: "mariadb" }
  ]

  useEffect(() => {
    const random = (min, max) => {
      const delta = max - min
      return (direction = 1) => (min + delta * Math.random()) * direction
    }

    const rotate = (target, direction) => {
      gsap.to(target, {
        duration: randomTime2(),
        rotation: randomAngle(direction),
        onComplete: rotate,
        onCompleteParams: [target, direction * -1]
      })
    }

    const moveX = (target, direction) => {
      gsap.to(target, {
        duration: randomTime(),
        x: randomX(direction),
        onComplete: moveX,
        onCompleteParams: [target, direction * -1]
      })
    }

    const moveY = (target, direction) => {
      gsap.to(target, {
        duration: randomTime(),
        y: randomY(direction),
        onComplete: moveY,
        onCompleteParams: [target, direction * -1]
      })
    }

    const randomX = random(1, 16)
    const randomY = random(1, 16)
    const randomTime = random(2, 6)
    const randomTime2 = random(2, 6)
    const randomAngle = random(-10, 10)

    const teclogos = gsap.utils.toArray(".teclogo")
    teclogos.forEach((teclogo) => {
      moveX(teclogo, 1)
      moveY(teclogo, -1)
      rotate(teclogo, 1)
    })

    Dragrabble.create("#accordion-cards", {
      type: "x",
      bounds: "#accordion-cards-wrapper"
    })
  }, [])

  return (
    <div id="accordion-cards-wrapper" className="w-full">
      <div id="accordion-cards" className="w-max accordion-cards min-h-80 md:min-h-120 flex gap-4 md:gap-8 items-center px-4 md:px-8">
        {technologies.map(({ text, img }, index) => (
          <div key={index} className="shrink-0 even:-translate-y-10 even:md:-translate-y-15 odd:translate-y-10 odd:md:translate-y-15">
            <article id={`card-${index}`} className="hover:!rotate-0 group teclogo flex flex-col justify-center items-center bg-ternary500 border-2 border-ternary100 hover:border-primary300 rounded-lg p-4 transition duration-300">
              <div className="size-26 sm:size-34 md:size-40 lg:size-46 shrink-0 bg-center bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: `url(/teclogos/${img}.svg)` }} alt={`${text} logo`} />
              <span className="overflow-hidden text-base md:text-xl font-bold md:h-0 group-hover:md:h-7 transition-all text-center">{text}</span>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}
