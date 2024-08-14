import "@/assets/styles/theme-toggle.css"
import { useEffect, useState } from "react"
import { useStore } from "@/utils/store.js"

export default function ThemeToggle() {
  const { setCurrentTheme } = useStore()

  const [darkMode, setDarkMode] = useState(!localStorage.getItem("h-dark-theme") || JSON.parse(localStorage.getItem("h-dark-theme")))

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkTheme")
      setCurrentTheme("dark")
    }
  }, [])

  const handleValue = ({ target }) => {
    setDarkMode(target.checked)
    setCurrentTheme(target.checked ? "dark" : "light")
    localStorage.setItem("h-dark-theme", target.checked)
    document.body.classList.toggle("darkTheme")
  }

  return (
    <label className="theme-toggle-wrap cursor-pointer">
      <input onChange={handleValue} type="checkbox" checked={darkMode} />
      <div className="theme-toggle-thumb">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
      </div>
    </label>
  )
}
