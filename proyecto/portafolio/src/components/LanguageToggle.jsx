import { useEffect, useState } from "react"
import { useStore } from "@/utils/store.js"

export default function LanguageToggle() {
  const { setCurrentLanguage } = useStore()

  const languagesList = {
    ES: { lang: "ES", flag: "Costa Rica", img: "costa_rica" },
    EN: { lang: "EN", flag: "United States of America", img: "usa" }
  }

  const [language, setLanguage] = useState(languagesList[localStorage.getItem("h-language") || "EN"])

  useEffect(() => {
    setCurrentLanguage(language.lang)
    setTitle(language.lang)
  }, [])

  const handleValue = () => {
    const lang = language.lang === "ES" ? "EN" : "ES"

    setLanguage(languagesList[lang])
    setCurrentLanguage(lang)
    localStorage.setItem("h-language", lang)
    setTitle(lang)

    document.getElementById("language-toggle-img").classList.add("scaled-explosion")
    setTimeout(() => {
      document.getElementById("language-toggle-img").classList.remove("scaled-explosion")
    }, 700)
  }

  const setTitle = (lang) => {
    document.title = `Harold Córdoba | ${lang === "ES" ? "Portafolio profesional" : "Professional portfolio"}`
  }

  return (
    <div onClick={handleValue} className="h-6 md:h-7 overflow-hidden flex gap-1 cursor-pointer select-none">
      <div className={`flex flex-col text-base md:text-lg font-bold transition-transform duration-300 ${language.lang === "ES" ? "-translate-y-6 md:-translate-y-7" : ""}`}>
        <div className="h-6 md:h-7 w-6">EN</div>
        <div className="h-6 md:h-7 w-6">ES</div>
      </div>
      <img id="language-toggle-img" src={`/flags/${language.img}.svg`} alt={`${language.flag} flag`} className="w-6 md:w-7 h-auto rounded-sm" />
    </div>
  )
}
