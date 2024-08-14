import { useEffect, useState } from "react"
import gsap from "gsap"

export default function Carousel({ className, items, index }) {
  className = className ?? ""

  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(items.length - 1)
  const [next, setNext] = useState(1)

  useEffect(() => {
    gsap.set(`#project-${index}-img-${current}`, { translateY: 0, translateX: "0" })
    gsap.set(`#project-${index}-img-${prev}`, { translateY: 0, translateX: "-100%" })
    gsap.set(`#project-${index}-img-${next}`, { translateY: 0, translateX: "100%" })
  }, [])

  const onNext = () => {
    gsap.to(`#project-${index}-img-${current}`, { translateX: "-100%", duration: 0.3 })

    const newCurrent = current + 1 <= items.length - 1 ? current + 1 : 0
    setNewValues(newCurrent, "next")
  }

  const onPrev = () => {
    gsap.to(`#project-${index}-img-${current}`, { translateX: "100%", duration: 0.3 })

    const newCurrent = current - 1 >= 0 ? current - 1 : items.length - 1
    setNewValues(newCurrent, "prev")
  }

  const setNewValues = (current, direction) => {
    setCurrent(current)

    const newPrev = current - 1 < 0 ? items.length - 1 : current - 1
    const newNext = current + 1 > items.length - 1 ? 0 : current + 1

    setPrev(newPrev)
    setNext(newNext)

    if (direction === "next") {
      gsap.to(`#project-${index}-img-${next}`, { translateY: "0", translateX: "0", duration: 0.3 })
      gsap.set(`#project-${index}-img-${newNext}`, { translateY: "0", translateX: "100%" })
      gsap.set(`#project-${index}-img-${prev}`, { translateY: "100%", translateX: "0" })
    } else {
      gsap.to(`#project-${index}-img-${prev}`, { translateY: "0", translateX: "0", duration: 0.3 })
      gsap.set(`#project-${index}-img-${newPrev}`, { translateY: "0", translateX: "-100%" })
      gsap.set(`#project-${index}-img-${next}`, { translateY: "100%", translateX: "0" })
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full relative overflow-hidden">
        {items.map((item, imgIdx) => (
          <img id={`project-${index}-img-${imgIdx}`} key={`project-${index}-img-${imgIdx}`} src={`/projects/${item}.webp`} alt={`${item} image`} className="absolute w-full h-full translate-y-full" />
        ))}
      </div>

      {items.length > 1 && (
        <div onClick={onNext} className="cursor-pointer absolute -right-4 z-10 top-0 bottom-0 my-auto size-8 text-lg bg-primary300 hover:bg-primary200 text-ternary500 rounded-full flex justify-center items-center">
          <i className="fas fa-chevron-right"></i>
        </div>
      )}

      {items.length > 1 && (
        <div onClick={onPrev} className="cursor-pointer absolute -left-4 z-10 top-0 bottom-0 my-auto size-8 text-lg bg-primary300 hover:bg-primary200 text-ternary500 rounded-full flex justify-center items-center">
          <i className="fas fa-chevron-left"></i>
        </div>
      )}
    </div>
  )
}
