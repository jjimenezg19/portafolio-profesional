import Tooltip from "@/components/Tooltip.jsx"
import ThemeToggle from "@/components/ThemeToggle.jsx"
import LanguageToggle from "@/components/LanguageToggle.jsx"

import { useStore } from "@/utils/store"

export default function Header({ className, content }) {
  const { currentTheme, currentLanguage } = useStore()

  return (
    <header id="header" className={`w-full flex justify-center h-12 md:h-14 ${className}`}>
      <div className="w-full max-w-[100rem] md:ml-20 flex justify-between items-center px-4 md:px-10">
        <img className="h-8 md:h-10 w-auto" src={`/logos/imagotipo-${currentTheme}.svg`} alt="Harold's logo" />

        <div className="flex items-center gap-3 md:gap-4">
          <Tooltip content={content.cvButton}>
            <a className="size-6 md:size-7 text-sm md:text-base flex items-center justify-center border md:border-2 border-neutral100 rounded-md md:rounded-lg hover:bg-neutral100 hover:text-ternary500 transition cursor-pointer" href={`/cv/${currentLanguage}.pdf`} download={`Harold Córdoba - Curriculum Vitae - ${currentLanguage}`}>
              <i className="fas fa-file-download"></i>
            </a>
          </Tooltip>

          <LanguageToggle />

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
