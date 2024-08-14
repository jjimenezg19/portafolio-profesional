import { useEffect, useState } from "react"
import { useStore } from "@/utils/store.js"

export default function AboutMe({ text }) {
  const { currentLanguage } = useStore()

  const [displayedText, setDisplayedText] = useState("")
  const [animationExecuted, setAnimationExecuted] = useState(false)

  useEffect(() => {}, [])

  useEffect(() => {
    let interval = null

    let observer = null

    if (!animationExecuted) {
      observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            setAnimationExecuted(true)

            observer.disconnect()

            let index = -1

            interval = setInterval(() => {
              index++

              setDisplayedText((prev) => {
                return prev.replace("|", "") + text[index] + "|"
              })

              if (index === text.length - 1) {
                clearInterval(interval)
                setDisplayedText((prev) => {
                  return (
                    <span>
                      {prev.replace("|", "")}
                      <span className="blink_cursor">|</span>
                    </span>
                  )
                })
              }
            }, 50)
          }
        },
        { root: null, rootMargin: "0px", threshold: 1 }
      )

      observer.observe(document.getElementById("text-aboute-me"))
    } else {
      setDisplayedText(
        <span>
          {text}
          <span className="blink_cursor">|</span>
        </span>
      )
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }

      clearInterval(interval)
    }
  }, [currentLanguage])

  return (
    <div id="text-aboute-me" className="h-100 min-h-100 my-10 md:my-20 md:px-8 mx-auto text-lg sm:text-2xl lg:text-3xl flex justify-center text-center w-full max-w-[58rem] relative">
      {displayedText}
    </div>
  )
}
